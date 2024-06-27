import userTemplate from "/Template/userTemplate.js";
import { navigateTo } from "../../../Router/router.js";

class UserNoticePage extends userTemplate {
  constructor(params) {
    super(params);
    this.setTitle("유저공지사항");
  }

  async getHtml() {
    return `
      <div>
      <h1>유저공지사항</h1>
      <p>This is the content of my page.</p>
      <button id="viewDetail">View Detail</button>
      </div>
    `;
  }

  async afterRender() {
    super.afterRender();
    document.getElementById("viewDetail").addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo("/user/notices/detail"); // 하위 페이지로 이동
    });
  }
}

export default UserNoticePage;
