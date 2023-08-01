<template>
  <div class="container">
    <HeaderPage :title="title"/>
    <div class="search">
      <input @keyup.enter="addComment"
          class="input"
             v-model="comment"
             type="text"
             placeholder="Write your review..."/>
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
import HeaderPage from "@/components/HeaderPage.vue";

export default {
  components: {HeaderPage},
  data() {
    return {
      comment: '',
      title: 'Reviews',
      commentList: [
        {
          id: 1,
          content: 'Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote.',
          name: 'Alyce Lambo',
          dateCmt: '25/06/2020',
          evaluate: '5.0',
          avt: '/imgs/avt-cmt.png'
        },
        {
          id: 2,
          content: 'Been a life saver for keeping our sanity during the pandemic, although they could improve some of their ui and how they handle specials as it often is unclear how to use them or everything is sold out so fast it feels a bit bait and switch. Still I\'d be stir crazy and losing track of days without so...',
          name: 'Gonela Solom',
          dateCmt: '22/06/2020',
          evaluate: '4.5',
          avt: '/imgs/avt-comment.png'
        },
        {
          id: 3,
          content: 'Got an intro offer of 50% off first order that did not work..... I have scaled the app to find a contact us button but only a spend with us button available. ',
          name: 'Brian C',
          dateCmt: '21/06/2020',
          evaluate: '2.5',
          avt: '/imgs/avtt-amt.png'
        },
      ]
    }
  },
  methods:{
    nextPage(){
      window.history.go(-1)
    },
    addComment(){
      const comment = {
        content: this.comment,
        name: 'Huyen Thanh',
        dateCmt: '21/06/2022',
        evaluate: '3.0',
        avt: '/imgs/avt-cmt.png'
      }
      this.commentList.push(comment)
      this.comment='';
    }

  }

}
</script>
<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  padding: 37px 26px;
  box-shadow: 18px 18px 36px 0px rgba(211, 209, 216, 0.25);
  .arrow{
    padding: 12px 17px;
    border-radius: 10px;
    box-shadow: 0px 20px 30px 0px rgba(211, 209, 216, 0.25);

  }
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