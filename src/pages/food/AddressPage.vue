<template>
  <div class="container">
   <div>
     <HeaderPage :title="title"/>
     <div>
       <div class="input-login">
         <label class="title" for="name">Name</label>
         <input v-model="formProfile.fullName"
                id="name"
                class="input"
                type="text"
                placeholder="Full name...">
       </div>
       <div class="input-login">
         <label class="title"
                for="phone">Phone Number</label>
         <input v-model="formProfile.phoneNumber"
                id="phone"
                class="input"
                type="number"
                placeholder="Phone Number...">
       </div>
       <div class="input-login">
         <label class="title" for="password">E-mail</label>
         <input id="password"
                v-model="gmail"
                class="input"
                type="email" placeholder="E-mail...">
       </div>
     </div>
   </div>
    <router-link to="/profile" @click="updateProfileData">
      <div class="btn-save-wrapper">
        <button class="btn-save">Save</button>
      </div>
    </router-link>

  </div>
</template>
<script>
import HeaderPage from "@/components/HeaderPage.vue";
import {mapGetters} from 'vuex';

export default {
  components: {HeaderPage},

  created() {
    this.formProfile = { ...this.profileData }
  },

  data() {
    return {
      formProfile: {},
      fullName: 'Phạm Thị Thanh Huyền',
      phoneNumber: '0981156216',
      city: 'Hưng Yên ',
      gmail: 'phamthanhhuyen19124@gmail.com',
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
  methods: {
    prevPage() {
      window.history.go(-1)
    },

    updateProfileData() {
      const profileData = {
        fullName: this.formProfile.fullName,
        phoneNumber: this.formProfile.phoneNumber,
        gmail: this.gmail,
      }
      this.$store.commit('SET_PROFILE_DATA', profileData)
    },
  },
  computed:{
    ...mapGetters(['profileData'])
  }


}
</script>
<style scoped lang="scss">
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #FFFFFF;
  height: 100vh;
  padding: 37px 26px;
  box-shadow: 18px 18px 36px 0px rgba(211, 209, 216, 0.25);

  .arrow {
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