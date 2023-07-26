<template>
  <div class="container-sign-up">
    <div class="title">
      <button class="btn-skip">Skip</button>
      <div class="welcom">
        Welcome to
       <span class="avtive">FoodHub</span>
      </div>
      <div class="title-two">Your favourite foods delivered fast at your door.</div>
    </div>
    <div class="footer">
      <div class="sign-in">
        <div class="thanh-ngang"></div>
        <div class="instruct"> sign in with</div>
        <div class="thanh-ngang"></div>
      </div>
      <div class="btn">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
            <rect width="28.62" height="28.62" rx="14.31" fill="#1877F2"/>
            <path d="M19.4036 18.868L20.0816 14.4622H15.8401V11.6041C15.8401 10.3974 16.4314 9.22241 18.3311 9.22241H20.2607V5.47072C19.1284 5.28838 17.9842 5.18883 16.8374 5.17285C13.3427 5.17285 11.0607 7.28337 11.0607 11.103V14.4615H7.17725V18.868H11.0607V29.5197C12.6442 29.7658 14.2565 29.7658 15.8401 29.5197V18.868H19.4036Z" fill="white"/>
          </svg>
          <div>FACEBOOK</div>
        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
            <path d="M14.309 5.53317C16.3592 5.50162 18.3419 6.26543 19.8411 7.66429L23.8791 3.71573C21.2884 1.28818 17.859 -0.0429552 14.309 0.00105765C11.6565 0.000444746 9.05615 0.737713 6.79872 2.13041C4.54129 3.52311 2.71579 5.51633 1.52637 7.88717L6.1532 11.4794C6.71894 9.75917 7.8104 8.25993 9.27366 7.19309C10.7369 6.12626 12.4981 5.54566 14.309 5.53317Z" fill="#EA4335"/>
            <path d="M28.0451 14.6276C28.062 13.644 27.9603 12.6619 27.7424 11.7026H14.3091V17.0132H22.1952C22.0456 17.9443 21.7092 18.8355 21.2063 19.6332C20.7034 20.431 20.0444 21.1187 19.2689 21.6552L23.7842 25.1525C25.1915 23.7939 26.2981 22.1552 27.0328 20.3423C27.7674 18.5294 28.1137 16.5826 28.0492 14.6276H28.0451Z" fill="#4285F4"/>
            <path d="M6.16958 17.1392C5.85674 16.2284 5.69547 15.2723 5.69218 14.3092C5.69788 13.3477 5.85338 12.3929 6.15307 11.4792L1.52624 7.88696C0.522718 9.87932 0 12.0791 0 14.3099C0 16.5407 0.522718 18.7405 1.52624 20.7328L6.16958 17.1392Z" fill="#FBBC05"/>
            <path d="M14.3091 28.6177C17.7944 28.7163 21.185 27.4761 23.7842 25.1521L19.2688 21.6548C17.8048 22.6363 16.0709 23.1365 14.3091 23.0856C12.4998 23.0749 10.7398 22.4947 9.27886 21.4274C7.81789 20.36 6.7301 18.8598 6.1698 17.1394L1.54297 20.733C2.72919 23.1028 4.5517 25.0955 6.8064 26.4881C9.06111 27.8807 11.659 28.6181 14.3091 28.6177Z" fill="#34A853"/>
          </svg>
          <div>GOOGLE</div>
        </button>
      </div>
      <button class="btn-start">Start with email or phone</button>
      <div class="footer-bottom">
        <div class="already">Already have an account? </div>
        <router-link class="next-page" to="/register">Sign In</router-link>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container-sign-up{
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/imgs/img-welcom.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 26px 28px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .title{
    position: relative;
    .btn-skip{
      display: flex;
     position: absolute;
      right: 0;
      border-radius: 27px;
      background: #FFF;
      box-shadow: 17px 17px 35px 0 rgba(211, 209, 216, 0.25);
      color: #FE724C;
      font-size: 14px;
      font-weight: 400;
      padding: 11px 14px;
      border: 0;

      &:hover{
        cursor: pointer;
        background: #EEEDED;
      }
    }
    .welcom{
      font-size: 53px;
      font-weight: 700;
      color: var(--ffffff, #111719);
      margin-bottom: 19px;
      margin-top: 100px;
    }
    .avtive{
      font-weight: 700;
      color: #FE724C;
      font-size: 45px;
    }
    .title-two{
      color: #30384F;
      font-size: 18px;
      font-weight: 400;
    }
  }
  .footer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .sign-in{
      display: flex;
      align-items: center;
      gap:17px;
      margin-bottom: 18px;
      .thanh-ngang{
        width: 89px;
        height: 1px;
        background: rgba(255, 255, 255, 0.50);

      }
      .instruct{
        color: #FFF;
        font-size: 16px;
        font-weight: 500;
      }
    }
    .btn{
      display: flex;
      align-items: center;
      gap:55px;
      margin-bottom: 23px;
      button{
        border-radius: 27px;
        background: #FFF;
        box-shadow: 17px 17px 35px 0px rgba(211, 209, 216, 0.25);
        display: flex;
        gap:9px;
        align-items: center;
        padding: 13px 12px;
        border: 0;
        div{
          color: #000;
          font-size: 13px;
          font-weight: 400;
        }
      }
    }
    .btn-start{
      border-radius: 30px;
      border: 1px solid #FFF;
      background: rgba(255, 255, 255, 0.21);
      padding: 19px 60px;
      color: #FEFEFE;
      font-size: 17px;
      font-weight: 500;
      margin-bottom: 25px;
    }
    .footer-bottom{
      display: flex;
      align-items: center;
      gap:5px;
      .already{
        color: #FFF;
        font-size: 16px;
        font-weight: 400;
      }
      .next-page{
        color: #FFF;
        font-size: 16px;
        font-weight: 500;
        //text-decoration: ;
      }
    }
  }
}

</style>