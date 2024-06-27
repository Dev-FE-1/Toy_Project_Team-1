export function loadAdminSideBar() {
  //사이드바 생성
  function createSidebar() {
    const ul = document.createElement("ul");
    const logoutButton = document.createElement("button");
    logoutButton.classList.add("logoutButton");
    logoutButton.innerText = "로그아웃";

    const menus = [
      { title: "대시보드", icon: "", url: "/admin/dashboard" },
      { title: "전자결재 관리", icon: "", url: "/admin/approval" },
      { title: "직원 관리", icon: "", url: "/admin/employee" },
      { title: "마일리지 관리", icon: "", url: "/admin/mileage" },
      { title: "공지사항 관리", icon: "", url: "/admin/notices" },
    ];

    menus.forEach((menu) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      const span = document.createElement("span");
      a.href = menu.url;
      a.classList.add("sidabarlink");
      a.setAttribute("data-link", menu.url); // 링크에 data-link 속성 추가
      span.innerHTML = menu.title;
      a.appendChild(span);
      li.appendChild(a);
      ul.appendChild(li);
    });

    return ul;
  }

  //사이드바를 app요소의 첫번째 자식으로 삽입
  const parent = document.querySelector("#app");
  const sidebar = createSidebar();
  parent.insertBefore(sidebar, parent.firstChild);

  // 클릭 이벤트 리스너 설정
  window.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
}
