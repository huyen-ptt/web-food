<template>
  <div class="container">
    <div class="title">
      <svg @click="nextPage" xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78" fill="none">
        <g filter="url(#filter0_d_814_4430)">
          <path
              d="M41 10H27C20.3726 10 15 15.3726 15 22V36C15 42.6274 20.3726 48 27 48H41C47.6274 48 53 42.6274 53 36V22C53 15.3726 47.6274 10 41 10Z"
              fill="white"/>
        </g>
        <path d="M37 24L32 28.6839L36.8161 33.5" stroke="#111719" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round"/>
        <defs>
          <filter id="filter0_d_814_4430" x="0" y="0" width="78" height="78" filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                           result="hardAlpha"/>
            <feOffset dx="5" dy="10"/>
            <feGaussianBlur stdDeviation="10"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.827451 0 0 0 0 0.819608 0 0 0 0 0.847059 0 0 0 0.3 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_814_4430"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_814_4430" result="shape"/>
          </filter>
        </defs>
      </svg>
      <div class="title-big">Add new address</div>
      <div></div>
    </div>
    <div>
      <div class="input-login">
        <label class="title" for="name">Full name</label>
        <input id="name" class="input" type="text" placeholder="Full name...">
      </div>
      <div class="input-login">
        <label class="title" for="phone">Phone Number</label>
        <input id="phone" class="input" type="number" placeholder="Phone Number...">
      </div>
      <div class="input-login">
        <label class="title" for="password">State</label>
        <input id="password" class="input" type="text" placeholder="State...">
        <svg class="fa-eye" xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
          <path d="M1 11L6 6.31607L0.999999 1.31607" stroke="#111719" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="input-login">
        <label class="title" for="password">City</label>
        <input id="password" class="input" type="text" placeholder="Select City">
        <svg class="fa-eye" xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
          <path d="M1 11L6 6.31607L0.999999 1.31607" stroke="#111719" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="input-login">
        <label class="title" for="phone">Street (Include house number)r</label>
        <input id="phone" class="input" type="text" placeholder="Street">
      </div>
    </div>
    <router-link to="/homescreen">
      <div class="btn-save-wrapper">
        <button class="btn-save">Save</button>
      </div>
    </router-link>

  </div>
</template>
<script>
export default {
  data() {
    return {
      commentList: [
        {
          id: 1,
          content: 'Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote.',
          name: 'Alyce Lambo',
          dateCmt: '25/06/2020',
          evaluate: '5.0',
          avt: '/src/assets/imgs/avt-cmt.png'
        },
        {
          id: 2,
          content: 'Been a life saver for keeping our sanity during the pandemic, although they could improve some of their ui and how they handle specials as it often is unclear how to use them or everything is sold out so fast it feels a bit bait and switch. Still I\'d be stir crazy and losing track of days without so...',
          name: 'Gonela Solom',
          dateCmt: '22/06/2020',
          evaluate: '4.5',
          avt: '/src/assets/imgs/avt-comment.png'
        },
        {
          id: 3,
          content: 'Got an intro offer of 50% off first order that did not work..... I have scaled the app to find a contact us button but only a spend with us button available. ',
          name: 'Brian C',
          dateCmt: '21/06/2020',
          evaluate: '2.5',
          avt: '/src/assets/imgs/avtt-amt.png'
        },
      ]
    }
  },
  methods:{
    nextPage(){
      window.history.go(-1)
    }

  }

}
</script>
<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  padding: 37px 26px;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 44px;

    .title-big {
      color: #111719;
      text-align: center;
      font-size: 18px;
      font-weight: 400;
    }
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
      top: 59px;
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

  .btn-save-wrapper {
    padding: 0 65px;

    .btn-save {
      border-radius: 28px;
      background: var(--primary-color, #FE724C);
      box-shadow: 0px 20px 30px 0px rgba(254, 114, 76, 0.25);
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
}
</style>