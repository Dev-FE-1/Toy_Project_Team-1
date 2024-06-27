import { SUBMIT_LOGIN_FORM } from "./Pages/login/login.js";
import { router } from "./Router/router.js";
import styles from "./Pages/login/login.module.css";
import "./Styles/global.css";

async function app() {
  if (location.pathname === "/") {
    document.querySelector("#app").innerHTML = `
    <form class="${styles.loginContainer}">
   <input
     type="text"
     id="username"
     name="username"
     placeholder="아이디를 입력해주세요."
     autocomplete="username"
   />
   <input
     type="password"
     id="password"
     name="password"
     placeholder="비밀번호를 입력해주세요."
   />
   <button
    type="submit"
   >
     로그인
   </button>
 </form>
 
`;
    SUBMIT_LOGIN_FORM();
  } else {
    router();
  }
}

document.addEventListener("DOMContentLoaded", app);
