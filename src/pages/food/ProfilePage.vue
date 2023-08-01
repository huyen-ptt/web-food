<template>
  <div class="profile">
    <div @click="nextPage" class="next">
      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
        <path d="M6 1L1 5.68393L6 10.6839" stroke="#111719" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="photo-representative">
      <div class="circle">
        <input type="file" id="input" style="display: none">
        <img class="avt" :src="img"/>
        <svg class="cam" xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
          <g filter="url(#filter0_d_814_5155)">
            <circle cx="28.5" cy="25.5" r="13.5" fill="white"/>
          </g>
          <path
              d="M28.4996 28.1501C29.4109 28.1501 30.1496 27.4113 30.1496 26.5001C30.1496 25.5888 29.4109 24.8501 28.4996 24.8501C27.5883 24.8501 26.8496 25.5888 26.8496 26.5001C26.8496 27.4113 27.5883 28.1501 28.4996 28.1501Z"
              fill="#B3B3B3"/>
          <path
              d="M32.8999 22.1H31.1564L30.4744 21.3575C30.3719 21.245 30.2471 21.155 30.1079 21.0935C29.9687 21.0319 29.8181 21.0001 29.6659 21H27.334C27.026 21 26.729 21.132 26.52 21.3575L25.8435 22.1H24.1C23.495 22.1 23 22.595 23 23.2V29.7999C23 30.4049 23.495 30.8999 24.1 30.8999H32.8999C33.5049 30.8999 33.9999 30.4049 33.9999 29.7999V23.2C33.9999 22.595 33.5049 22.1 32.8999 22.1ZM28.4999 29.2499C26.982 29.2499 25.75 28.0179 25.75 26.4999C25.75 24.982 26.982 23.75 28.4999 23.75C30.0179 23.75 31.2499 24.982 31.2499 26.4999C31.2499 28.0179 30.0179 29.2499 28.4999 29.2499Z"
              fill="#B3B3B3"/>
          <defs>
            <filter id="filter0_d_814_5155" x="0" y="0" width="57" height="57" filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                             result="hardAlpha"/>
              <feOffset dy="3"/>
              <feGaussianBlur stdDeviation="7.5"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0.4 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_814_5155"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_814_5155" result="shape"/>
            </filter>
          </defs>
        </svg>
      </div>
      <div class="name">Eljad Eendaz</div>
      <router-link to="/address" class="update-profile">Edit Profile</router-link>
    </div>
    <div class="bao-input">
      <div class="input-login">
        <label class="title" for="email">Full name</label>
        <input v-model="name"
               id="email"
               class="input"
               type="text"
               placeholder="Full name...">
      </div>
      <div class="input-login">
        <label class="title" for="password">E-mail</label>
        <input id="password"
               v-model="email"
               class="input"
               type="email" placeholder="E-mail...">
      </div>
      <div class="input-login">
        <label class="title" for="phone">Phone Number</label>
        <input v-model="phone"
               id="phone"
               class="input"
               type="number"
               placeholder="Phone Number...">
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      email: 'phamthanhhuyen19124@gmail.com',
      phone: '0981156216',
      name: 'Thanh Huyen',
      img: '/imgs/avt.png'
    }
  },

  methods: {
    nextPage() {
      window.history.go(-1)
    }

  }

}
</script>
<style lang="scss" scoped>
.profile {
  padding: 37px 26px;
  box-shadow: 18px 18px 36px 0px rgba(211, 209, 216, 0.25);
  width: 100%;
  height: 100vh;
  background-image: url("@/assets/imgs/profile.png");
  background-size: cover;
  background-repeat: no-repeat;

  .next {
    margin-bottom: 50px;
    width: 40px;
    padding: 11px 16px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 20px 30px 0px rgba(211, 209, 216, 0.25);
  }

  .photo-representative {
    padding-bottom: 49px;

    .circle {
      max-width: 100px;
      max-height: 100px;
      position: relative;
      padding-bottom: 13px;
      margin: 0 auto;
      background: #FFFFFF;
      border-radius: 999px;
      margin-bottom: 15px;

      .avt {
        width: 100px;
        height: 100px;
        border-radius: 999px;
        padding: 9px;
        border: white;
      }

      .cam {
        position: absolute;
        bottom: -23px;
        right: -2px;
      }
    }

    .name {
      color: #000;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      padding-bottom: 10px;
    }

    .update-profile {
      color: #9796A1;
      text-align: center;
      font-size: 14px;
      font-weight: 400;
      display: flex;
      justify-content: center;
    }
  }

  .bao-input {
    margin-bottom: 147px;

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
        color:#111719;
        font-size: 17px;
        font-weight: 400;
      }

    }
  }


}
</style>