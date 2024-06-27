import adminTemplate from "/Template/adminTemplate.js";
import { navigateTo } from "../../../Router/router.js";

class AdminMileagePage extends adminTemplate {
  constructor(params) {
    super(params);
    this.setTitle("어드민마일리지");
  }

  async getHtml() {
    return `
       <div>
      <h1>어드민마일리지</h1>
      <p>This is the content of my page.</p>
            <button id="historyDetail">historyDetail</button>
      </div>
    `;
  }
  async afterRender() {
    super.afterRender();
    document.getElementById("historyDetail").addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo("/admin/mileage/history"); // 하위 페이지로 이동
    });
  }
}

export default AdminMileagePage;
