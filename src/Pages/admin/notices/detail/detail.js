import adminTemplate from "/Template/adminTemplate.js";

class AdminNoticeDetailPage extends adminTemplate {
  constructor(params) {
    super(params);
    this.setTitle("어드민공지상세");
  }

  async getHtml() {
    return `
      <div>
      <h1>어드민공지상세</h1>
      <p>This is the content of my page.</p>
      </div>
    `;
  }

  async afterRender() {
    super.afterRender();
  }
}

export default AdminNoticeDetailPage;
