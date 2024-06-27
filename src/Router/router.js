// import UserDashboardPage from "../Pages/user/dashboard/dashboard.js";
import UserDashboardPage from "../Pages/user/dashboard/dashboard.js";
import UserApprovalPage from "../Pages/user/approval/approval.js";
import UserMileagePage from "../Pages/user/mileage/mileage.js";
import UserNoticePage from "../Pages/user/notices/notices.js";
import UserMyPage from "../Pages/user/mypage/mypage.js";
import UserNoticeDetailPage from "../Pages/user/notices/detail/detail.js";

import AdminDashboardPage from "../Pages/admin/dashboard/dashboard.js";
import AdminEmployeePage from "../Pages/admin/employee/employee.js";
import AdminApprovalPage from "../Pages/admin/approval/approval.js";
import AdminMileagePage from "../Pages/admin/mileage/mileage.js";
import AdminNoticesPage from "../Pages/admin/notices/notices.js";
import AdminMileageHistoryPage from "../Pages/admin/mileage/history/history.js";
import AdminNoticeDetailPage from "../Pages/admin/notices/detail/detail.js";

export const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

export const router = async () => {
  const routes = [
    { path: "/user/dashboard", view: UserDashboardPage },
    { path: "/user/approval", view: UserApprovalPage },
    { path: "/user/mileage", view: UserMileagePage },
    { path: "/user/notices", view: UserNoticePage },
    { path: "/user/mypage", view: UserMyPage },
    { path: "/user/notices/detail", view: UserNoticeDetailPage },

    { path: "/admin/dashboard", view: AdminDashboardPage },
    { path: "/admin/employee", view: AdminEmployeePage },
    { path: "/admin/approval", view: AdminApprovalPage },
    { path: "/admin/mileage", view: AdminMileagePage },
    { path: "/admin/mileage/history", view: AdminMileageHistoryPage },
    { path: "/admin/notices", view: AdminNoticesPage },
    { path: "/admin/notices/detail", view: AdminNoticeDetailPage },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = new match.route.view();
  document.querySelector("#app").innerHTML = await view.getHtml();

  if (view.afterRender) {
    await view.afterRender();
  }

  document.addEventListener("DOMContentLoaded", () => {
    router();

    document.body.addEventListener("click", (e) => {
      if (e.target.matches("[data-link]") || e.target.closest("[data-link]")) {
        e.preventDefault();
        const link = e.target.closest("[data-link]");
        navigateTo(link.href);
      }
    });
  });

  window.addEventListener("popstate", router);
};
