import { router } from "../../Router/router.js";

export const SUBMIT_LOGIN_FORM = () => {
  const LOGIN_FORM = document.querySelector("._loginContainer_exwdl_1");

  LOGIN_FORM.addEventListener("submit", (event) => {
    event.preventDefault();
    validateLogin();
  });

  const validateLogin = () => {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    const userCredentials = {
      username: "user",
      password: "1234",
    };
    const adminCredentials = {
      username: "admin",
      password: "1234",
    };

    // Check credentials
    if (
      username === userCredentials.username &&
      password === userCredentials.password
    ) {
      window.history.pushState({}, "", "/user/dashboard");
      router();
    } else if (
      username === adminCredentials.username &&
      password === adminCredentials.password
    ) {
      window.history.pushState({}, "", "/admin/dashboard");
      router();
    } else {
      alert("잘못된 아이디 또는 비밀번호입니다.");
    }
  };
};
