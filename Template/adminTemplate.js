import { loadAdminSideBar } from "./../src/Components/sidebar/adminSidebar.js";

export default class {
  constructor(params) {
    this.params = params;
  }

  setTitle(title) {
    document.title = title;
  }

  async getHtml() {
    return "";
  }

  async afterRender() {
    loadAdminSideBar();
  }
}
