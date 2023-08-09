import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  function handleSignUp(e) {
    console.log("회원가입 클릭");
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      name: name,
      content: content,
    };
    fetch("/members/signup", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((json) => {
        if (true) {
          // 회원 가입시
          // window.location.href = "/";
        }
      });
  }
  function handleSignIn(e) {
    console.log("로그인 클릭");
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    fetch("/members/signin", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())

      .then((json) => {
        if (true) {
          // 성공하면
          // window.location.href = "/board.html";
        }
      });
  }

  return (
    <div class="form signup">
      <div class="form-header">
        <div class="show-signup">Sign Up</div>
        <div class="show-signin">Sign In</div>
      </div>
      <div class="arrow"></div>
      <form class="form-elements">
        <div class="form-element">
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div class="form-element">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div class="form-element">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <div class="form-element">
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div class="form-element">
          <input
            type="text"
            name="content"
            placeholder="content"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <div class="form-element">
          <button id="signup-submit-btn" onClick={handleSignUp}>
            Sign Up
          </button>
          <button id="signin-submit-btn" onClick={handleSignIn}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

window.onload = function () {
  function resetClass(element, classname) {
    element.classList.remove(classname);
  }
  document
    .getElementsByClassName("show-signup")[0]
    .addEventListener("click", function () {
      let form = document.getElementsByClassName("form")[0];
      resetClass(form, "signin");
      form.classList.add("signup");
      document.getElementById("signup-submit-btn").style.display = "block";
      document.getElementById("signin-submit-btn").style.display = "none";
    });
  document
    .getElementsByClassName("show-signin")[0]
    .addEventListener("click", function () {
      let form = document.getElementsByClassName("form")[0];
      resetClass(form, "signup");
      form.classList.add("signin");
      document.getElementById("signup-submit-btn").style.display = "none";
      document.getElementById("signin-submit-btn").style.display = "block";
    });
};

export default LoginForm;
