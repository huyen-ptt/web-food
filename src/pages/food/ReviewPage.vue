<template>
  <div class="container">
    <div class="title">
      <svg  @click="nextPage"  xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78" fill="none">
        <g filter="url(#filter0_d_814_3978)">
          <path
              d="M41 10H27C20.3726 10 15 15.3726 15 22V36C15 42.6274 20.3726 48 27 48H41C47.6274 48 53 42.6274 53 36V22C53 15.3726 47.6274 10 41 10Z"
              fill="white"/>
        </g>
        <path d="M37 24L32 28.6839L36.8161 33.5" stroke="#111719" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round"/>
        <defs>
          <filter id="filter0_d_814_3978" x="0" y="0" width="78" height="78" filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                           result="hardAlpha"/>
            <feOffset dx="5" dy="10"/>
            <feGaussianBlur stdDeviation="10"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.827451 0 0 0 0 0.819608 0 0 0 0 0.847059 0 0 0 0.3 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_814_3978"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_814_3978" result="shape"/>
          </filter>
        </defs>
      </svg>
      <div class="title-big">Add new address</div>
      <div></div>
    </div>
    <div class="search">
      <input class="input" type="text" placeholder="Write your review..."/>
      <img class="avt" src="@/assets/imgs/avt.png"/>
    </div>
    <div class="wrapper-cmt">
      <div v-for="cmt in commentList"
           :key="cmt.id"
           class="item-cmt">
        <div class="header-cmt">
          <div class="information">
            <div class="bao-img">
              <img class="img" :src="cmt.avt"/>
              <div class="evaluate">
                <div>{{ cmt.evaluate }}</div>
              </div>
            </div>
            <div>
              <div class="name">{{ cmt.name }}</div>
              <div class="date">{{ cmt.dateCmt }}</div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="12" viewBox="0 0 4 12" fill="none">
            <circle cx="2" cy="2" r="2" fill="#C4C4C4"/>
            <circle cx="2" cy="10" r="2" fill="#C4C4C4"/>
          </svg>
        </div>
        <div class="content">{{ cmt.content }}</div>
      </div>
    </div>
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

  .search {
    position: relative;
    padding-bottom: 35px;

    .input {
      padding: 19px 143px 19px 60px;
      width: 100%;
      border-radius: 10px;
      border: 1px solid #EEE;
      background: #FFF;
      box-shadow: 15px 20px 45px 0px rgba(233, 233, 233, 0.25);
      color: #111719;
      font-size: 14px;
      font-weight: 400;
    }

    .avt {
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 999px;
      top: 13px;
      left: 18px;
    }
  }

  .wrapper-cmt {
    .item-cmt {
      padding-bottom: 40px;
      .header-cmt {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 16px;

        .information {
          display: flex;
          align-items: center;
          gap: 18px;

          .bao-img {
            position: relative;

            .img {
              width: 48px;
              height: 48px;
              border-radius: 999px;
            }

            .evaluate {
              position: absolute;
              right: -3px;
              bottom: 3px;
              color: #FFF;
              font-size: 8px;
              font-weight: 600;
              background: #FFC529;
              padding: 3px;
              width: 18px;
              border-radius: 999px;
              display: flex;
              height: 18px;
              justify-content: center;
              align-items: center;
              filter: drop-shadow(0px 6px 13px rgba(255, 197, 41, 0.50));
            }
          }

          .name {
            color: #000;
            font-size: 15px;
            font-weight: 400;
            padding-bottom: 5px;
          }

          .date {
            color: #B3B3B3;
            font-size: 13px;
            font-weight: 400;
          }
        }
      }
      .content{
        color: #7F7D92;
        font-size: 15px;
        font-weight: 400;
      }
    }
  }
}
</style>