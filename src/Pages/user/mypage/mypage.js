import userTemplate from "/Template/userTemplate.js";

class UserMyPage extends userTemplate {
  constructor(params) {
    super(params);
    this.setTitle("유저마이페이지");
  }

  async getHtml() {
    return `
     <div>
      <h1>유저마이페이지</h1>
      <p>This is the content of my page.</p>
      </div>
    `;
  }
  async afterRender() {
    super.afterRender(); // 부모 클래스의 afterRender 호출

    // 필요한 경우에 따라 페이지별로 추가적인 작업을 수행할 수 있습니다.
    // 예를 들어, 특정 페이지에서만 특정 기능을 초기화할 때 사용합니다.
  }
}

export default UserMyPage;
