import adminTemplate from "/Template/adminTemplate.js";

class AdminMileageHistoryPage extends adminTemplate {
  constructor(params) {
    super(params);
    this.setTitle("마일리지기록");
  }

  async getHtml() {
    return `
      <div>
      <h1>마일리지기록</h1>
      <p>This is the content of my page.</p>
      </div>
    `;
  }

  async afterRender() {
    super.afterRender();
  }
}

export default AdminMileageHistoryPage;
