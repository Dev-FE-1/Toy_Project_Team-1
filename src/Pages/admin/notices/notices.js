import adminTemplate from "/Template/adminTemplate.js";
import { navigateTo } from "../../../Router/router.js";

class AdminNoticesPage extends adminTemplate {
  constructor(params) {
    super(params);
    this.setTitle("어드민공지");
  }

  async getHtml() {
    return `
       <div>
      <h1>어드민공지</h1>
      <p>This is the content of my page.</p>
      <button id="viewNoticeDetail">viewNoticeDetail</button>
      </div>
    `;
  }
  async afterRender() {
    super.afterRender();
    document
      .getElementById("viewNoticeDetail")
      .addEventListener("click", (e) => {
        e.preventDefault();
        navigateTo("/admin/notices/detail"); // 하위 페이지로 이동
      });
  }
}

export default AdminNoticesPage;
