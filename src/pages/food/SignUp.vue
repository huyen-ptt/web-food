<template>
  <div class="container-register">
    <img @click="nextPage" class="arrow" src="@/assets/imgs/arrow-left.png"/>
    <div class="login">Sign Up</div>
    <div>
      <div class="input-login">
        <label class="title" for="name">Full name</label>
        <input id="name" class="input" type="text" placeholder="Full name...">
      </div>
      <div class="input-login">
        <label class="title" for="email">Email</label>
        <input id="email" class="input" type="text" placeholder="Your email or phone">
      </div>
      <div class="input-login">
        <label class="title" for="password">Password</label>
        <input id="password" class="input" type="password" placeholder="Password">
        <i class="fa-regular fa-eye"></i>
      </div>
    </div>
    <!--    <div class="forgot-password">Forgot password?</div>-->
    <router-link to="/sidemenu">
      <div class="btn-login-wrapper">
        <button class="btn-login">SIGN UP</button>
      </div>
    </router-link>
    <div class="reminder">Already have an account?
      <router-link to="/register"><span class="return">Login</span></router-link>
    </div>
    <div class="sign-in">
      <div class="thanh-ngang"></div>
      <div class="instruct"> sign in with</div>
      <div class="thanh-ngang"></div>
    </div>
    <div class="btn">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
          <rect width="28.62" height="28.62" rx="14.31" fill="#1877F2"/>
          <path
              d="M19.4036 18.868L20.0816 14.4622H15.8401V11.6041C15.8401 10.3974 16.4314 9.22241 18.3311 9.22241H20.2607V5.47072C19.1284 5.28838 17.9842 5.18883 16.8374 5.17285C13.3427 5.17285 11.0607 7.28337 11.0607 11.103V14.4615H7.17725V18.868H11.0607V29.5197C12.6442 29.7658 14.2565 29.7658 15.8401 29.5197V18.868H19.4036Z"
              fill="white"/>
        </svg>
        <div>FACEBOOK</div>
      </button>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
          <path
              d="M14.309 5.53317C16.3592 5.50162 18.3419 6.26543 19.8411 7.66429L23.8791 3.71573C21.2884 1.28818 17.859 -0.0429552 14.309 0.00105765C11.6565 0.000444746 9.05615 0.737713 6.79872 2.13041C4.54129 3.52311 2.71579 5.51633 1.52637 7.88717L6.1532 11.4794C6.71894 9.75917 7.8104 8.25993 9.27366 7.19309C10.7369 6.12626 12.4981 5.54566 14.309 5.53317Z"
              fill="#EA4335"/>
          <path
              d="M28.0451 14.6276C28.062 13.644 27.9603 12.6619 27.7424 11.7026H14.3091V17.0132H22.1952C22.0456 17.9443 21.7092 18.8355 21.2063 19.6332C20.7034 20.431 20.0444 21.1187 19.2689 21.6552L23.7842 25.1525C25.1915 23.7939 26.2981 22.1552 27.0328 20.3423C27.7674 18.5294 28.1137 16.5826 28.0492 14.6276H28.0451Z"
              fill="#4285F4"/>
          <path
              d="M6.16958 17.1392C5.85674 16.2284 5.69547 15.2723 5.69218 14.3092C5.69788 13.3477 5.85338 12.3929 6.15307 11.4792L1.52624 7.88696C0.522718 9.87932 0 12.0791 0 14.3099C0 16.5407 0.522718 18.7405 1.52624 20.7328L6.16958 17.1392Z"
              fill="#FBBC05"/>
          <path
              d="M14.3091 28.6177C17.7944 28.7163 21.185 27.4761 23.7842 25.1521L19.2688 21.6548C17.8048 22.6363 16.0709 23.1365 14.3091 23.0856C12.4998 23.0749 10.7398 22.4947 9.27886 21.4274C7.81789 20.36 6.7301 18.8598 6.1698 17.1394L1.54297 20.733C2.72919 23.1028 4.5517 25.0955 6.8064 26.4881C9.06111 27.8807 11.659 28.6181 14.3091 28.6177Z"
              fill="#34A853"/>
        </svg>
        <div>GOOGLE</div>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    nextPage() {
      window.history.go(-1)
    }

  }

}
</script>
<style scoped lang="scss">
.container-register {
  width: 100%;
  background-image: url("@/assets/imgs/login.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 160px 27px 28px;

  .arrow {
    margin-bottom: 50px;
  }

  .login {
    color: #000;
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 31px;
  }

  .input-login {
    display: flex;
    flex-direction: column;
    margin-bottom: 29px;
    position: relative;

    .title {
      color: #9796A1;
      font-size: 16px;
      font-weight: 400;
      padding-bottom: 12px;
    }

    .fa-eye {
      position: absolute;
      top: 55px;
      right: 30px;
    }

    .input {
      border-radius: 10px;
      border: 1px solid #EEE;
      background: #FFF;
      box-shadow: 15px 20px 45px 0px rgba(233, 233, 233, 0.25);
      padding: 22px 98px 26px 20px;
      color: var(--c-4-c-4-c-4, #C4C4C4);
      font-size: 17px;
      font-weight: 400;
    }

  }

  .forgot-password {
    color: #FE724C;
    font-size: 14px;
    text-align: center;
    font-weight: 400;
    margin-bottom: 32px;
  }

  .btn-login-wrapper {
    padding: 0 65px;

    .btn-login {
      border-radius: 28px;
      background: var(--primary-color, #FE724C);
      box-shadow: 0px 10px 40px 0px rgba(122, 129, 190, 0.16);
      padding: 25px 75px;
      color: #FFF;
      font-size: 15px;
      font-weight: 600;
      border: 0;
      display: flex;
      width: 100%;
      justify-content: center;
    }
  }

  .reminder {
    padding-top: 32px;
    color: #5B5B5E;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 61px;
  }

  .btn {
    display: flex;
    align-items: center;
    gap: 55px;
    margin-bottom: 23px;
    justify-content: space-around;

    button {
      border-radius: 27px;
      background: #FFF;
      box-shadow: 17px 17px 35px 0px rgba(211, 209, 216, 0.25);
      display: flex;
      gap: 20px;
      align-items: center;
      padding: 13px 12px;
      border: 0;

      div {
        color: #000;
        font-size: 13px;
        font-weight: 400;
      }
    }
  }

  .sign-in {
    display: flex;
    align-items: center;
    gap: 17px;
    margin-bottom: 18px;
    justify-content: center;

    .thanh-ngang {
      width: 89px;
      height: 1px;
      background: rgba(179, 179, 179, 0.50);


    }

    .instruct {
      color: #5B5B5E;
      font-size: 16px;
      font-weight: 500;
    }
  }

  .return {
    color: #FE724C;
  }
}
</style>