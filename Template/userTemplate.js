import { loadUserSideBar } from "./../src/Components/sidebar/userSidebar.js";

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

  // async afterRender() {
  //   if (window.location.pathname !== "/") {
  //     loadUserSideBar();
  //   }
  // }

  async afterRender() {
    loadUserSideBar();
  }
}
