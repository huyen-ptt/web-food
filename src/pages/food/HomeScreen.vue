<template>
  <div class="home-screen">
    <div :class="getClass()">
      <div>
        <div class="information">
          <div style="display: flex ; justify-content: space-between;">
            <router-link to="/profile">
              <img class="avt" src="@/assets/imgs/avt.png"/>
            </router-link>
            <i @click="closeMenu" class="fa-solid fa-xmark"></i>
          </div>
          <div class="name-person">Farion Wick</div>
          <div class="email-person">farionwick@gmail.com</div>
        </div>
        <div class="wrapper-link">
          <router-link to="/homescreen" class="item-link" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
              <path opacity="0.4"
                    d="M15.5164 1.91675H7.48458C4.57125 1.91675 2.875 3.62258 2.875 6.5455V16.4451C2.875 19.4159 4.57125 21.0834 7.48458 21.0834H15.5164C18.4767 21.0834 20.125 19.4159 20.125 16.4451V6.5455C20.125 3.62258 18.4767 1.91675 15.5164 1.91675Z"
                    fill="#9796A1"/>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M7.74278 6.3728V6.38239C7.32974 6.38239 6.99528 6.7178 6.99528 7.12989C6.99528 7.54197 7.32974 7.87739 7.74278 7.87739H10.6072C11.0203 7.87739 11.3557 7.54197 11.3557 7.11934C11.3557 6.70822 11.0203 6.3728 10.6072 6.3728H7.74278ZM15.2561 12.2091H7.74278C7.32974 12.2091 6.99528 11.8737 6.99528 11.4616C6.99528 11.0495 7.32974 10.7131 7.74278 10.7131H15.2561C15.6682 10.7131 16.0036 11.0495 16.0036 11.4616C16.0036 11.8737 15.6682 12.2091 15.2561 12.2091ZM15.2563 16.5886H7.74293C7.45543 16.6269 7.17751 16.4832 7.02418 16.2436C6.87085 15.9944 6.87085 15.6782 7.02418 15.4386C7.17751 15.1894 7.45543 15.0552 7.74293 15.084H15.2563C15.6386 15.1223 15.9271 15.4482 15.9271 15.8411C15.9271 16.2235 15.6386 16.5502 15.2563 16.5886Z"
                    fill="#9796A1"/>
            </svg>
            <router-link to="/ordercoming" class="link">My Orders</router-link>
          </router-link>
          <div class="item-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
              <path opacity="0.4"
                    d="M11.5001 12.5649C14.4773 12.5649 16.8908 10.1812 16.8908 7.24082C16.8908 4.30042 14.4773 1.91675 11.5001 1.91675C8.52287 1.91675 6.10938 4.30042 6.10938 7.24082C6.10938 10.1812 8.52287 12.5649 11.5001 12.5649Z"
                    fill="#9796A1"/>
              <path
                  d="M20.1156 17.8975C20.1205 17.8218 20.1205 17.7458 20.1156 17.67C20.0943 17.3899 20.0148 17.1164 19.8817 16.8648C19.3577 15.8408 17.8885 15.377 16.6626 15.1144C15.788 14.9324 14.8994 14.8153 14.005 14.7644L13.0692 14.6943H12.6481H12.1241H10.8702H10.3461H9.92504L8.98926 14.7644C8.09491 14.8153 7.20627 14.9324 6.33166 15.1144C5.10579 15.342 3.63663 15.8146 3.11259 16.8648C2.97944 17.1164 2.89998 17.3899 2.87865 17.67C2.87378 17.7458 2.87378 17.8218 2.87865 17.8975C2.87416 17.9733 2.87416 18.0493 2.87865 18.1251C2.9041 18.4027 2.98672 18.6732 3.12195 18.9215C3.64598 19.9455 5.11515 20.4093 6.34102 20.6719C7.21726 20.8454 8.10522 20.9624 8.99862 21.022L9.9344 21.0832H10.159H10.3555H12.6575H12.854H13.0786L14.0144 21.022C14.9078 20.9624 15.7957 20.8454 16.672 20.6719C17.8979 20.4356 19.367 19.9717 19.8911 18.9215C20.02 18.6653 20.0992 18.3897 20.125 18.1076C20.1262 18.0375 20.1231 17.9673 20.1156 17.8975Z"
                  fill="#9796A1"/>
            </svg>
            <router-link to="/profile" class="link">My Profile</router-link>
          </div>
          <div class="item-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8.17598 2.81449C10.2698 1.59789 12.8434 1.61915 14.9176 2.87019C16.9714 4.14671 18.2196 6.42492 18.208 8.87563C18.1602 11.3103 16.8217 13.5988 15.1487 15.368C14.183 16.3937 13.1028 17.3007 11.93 18.0705C11.8092 18.1403 11.6769 18.187 11.5396 18.2084C11.4075 18.2028 11.2788 18.1637 11.1651 18.0948C9.37466 16.9382 7.80387 15.4619 6.52832 13.7368C5.46098 12.2968 4.8546 10.5571 4.79151 8.7539C4.79012 6.29848 6.08215 4.03109 8.17598 2.81449ZM9.38594 9.76999C9.73815 10.6383 10.5695 11.2047 11.4918 11.2047C12.0961 11.209 12.6769 10.967 13.1049 10.5325C13.5329 10.0981 13.7725 9.50727 13.7704 8.89178C13.7736 7.95228 13.2205 7.10346 12.3693 6.74165C11.5181 6.37984 10.5368 6.57641 9.88347 7.23958C9.23015 7.90274 9.03374 8.90169 9.38594 9.76999Z"
                    fill="#9796A1"/>
            </svg>
            <router-link to="/address" class="link">Delivery Address</router-link>
          </div>
          <div class="item-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M21.0798 8.02616H17.0215C15.133 8.02948 13.6031 9.52118 13.5997 11.3625C13.5971 13.2081 15.1287 14.7064 17.0215 14.7089H21.0832V15.0021C21.0832 18.2213 19.1316 20.125 15.8289 20.125H7.17158C3.8681 20.125 1.9165 18.2213 1.9165 15.0021V7.99045C1.9165 4.77118 3.8681 2.875 7.17158 2.875H15.8255C19.1282 2.875 21.0798 4.77118 21.0798 7.99045V8.02616ZM6.45852 8.01878H11.8635H11.8669H11.8737C12.2784 8.01712 12.6055 7.69569 12.6038 7.30034C12.6021 6.90582 12.2716 6.58689 11.8669 6.58855H6.45852C6.05644 6.59021 5.73019 6.90832 5.72848 7.30117C5.72678 7.69569 6.05389 8.01712 6.45852 8.01878Z"
                    fill="#9796A1"/>
              <path opacity="0.4"
                    d="M15.3693 11.7841C15.5698 12.6957 16.369 13.337 17.2814 13.3203H20.3959C20.7755 13.3203 21.0835 13.0059 21.0835 12.6173V10.1912C21.0827 9.80339 20.7755 9.48814 20.3959 9.4873H17.2081C16.1702 9.49064 15.3319 10.3522 15.3335 11.4138C15.3335 11.5381 15.3457 11.6623 15.3693 11.7841Z"
                    fill="#9796A1"/>
              <path
                  d="M17.2498 12.3625C17.7791 12.3625 18.2082 11.9334 18.2082 11.4041C18.2082 10.8749 17.7791 10.4458 17.2498 10.4458C16.7206 10.4458 16.2915 10.8749 16.2915 11.4041C16.2915 11.9334 16.7206 12.3625 17.2498 12.3625Z"
                  fill="#9796A1"/>
            </svg>
            <router-link to="cart" class="link">Payment Methods</router-link>
          </div>
          <div class="item-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
              <path opacity="0.4"
                    d="M21.0828 7.71725V15.2827C21.0873 16.5639 20.5816 17.7943 19.6772 18.7027C18.7727 19.611 17.5438 20.1227 16.2614 20.125H6.76344C5.47874 20.1272 4.24588 19.619 3.33665 18.7122C2.42743 17.8055 1.9165 16.5747 1.9165 15.2912V7.71725C1.9172 7.15363 2.01815 6.59462 2.21465 6.06629C2.90701 4.15175 4.72581 2.87574 6.76344 2.875H16.2358C18.2983 2.87385 20.1348 4.17898 20.8102 6.12586C20.9976 6.63524 21.09 7.17461 21.0828 7.71725Z"
                    fill="#9796A1"/>
              <path
                  d="M20.8104 6.13437L20.7167 6.21096C18.9534 7.58109 13.2461 12.168 13.2461 12.168C12.2537 12.9743 10.8312 12.9743 9.83876 12.168C9.83876 12.168 4.16554 7.5896 2.40225 6.21947L2.21484 6.0748C2.90436 4.1569 4.72381 2.87703 6.76364 2.875H16.236C18.3007 2.8751 20.1379 4.18413 20.8104 6.13437Z"
                  fill="#9796A1"/>
            </svg>
            <a class="link">Contact Us</a>
          </div>
          <div class="item-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
              <path opacity="0.4"
                    d="M19.6252 13.1441C18.7183 12.6191 18.4044 11.4868 18.9168 10.5886C19.085 10.2985 19.3296 10.0574 19.6252 9.89005C20.0747 9.63867 20.4029 9.22341 20.5374 8.73595C20.672 8.24848 20.6018 7.7289 20.3424 7.29191L19.704 6.17599C19.4459 5.73826 19.0195 5.41858 18.519 5.28753C18.0185 5.15647 17.4851 5.22482 17.0364 5.47747C16.5864 5.73053 16.0516 5.7991 15.5497 5.6681C15.0478 5.5371 14.6199 5.21727 14.3601 4.77896C14.1901 4.48812 14.0997 4.15957 14.0977 3.82489C14.1001 3.3196 13.8956 2.83424 13.5296 2.47614C13.1636 2.11805 12.6662 1.91674 12.1474 1.91675H10.8617C9.78312 1.91674 8.9074 2.76586 8.90259 3.81637C8.90625 4.49769 8.535 5.12875 7.92965 5.47019C7.32429 5.81163 6.57756 5.81116 5.97266 5.46896C5.51986 5.20602 4.97705 5.1328 4.46793 5.266C3.9588 5.3992 3.52672 5.72746 3.27013 6.17599L2.65791 7.24932C2.1228 8.16011 2.4432 9.32081 3.37508 9.84746C4.30903 10.3773 4.62603 11.5437 4.08351 12.4541C3.91758 12.7436 3.67231 12.9825 3.37508 13.1441C2.92566 13.3955 2.59744 13.8107 2.46288 14.2982C2.32833 14.7857 2.3985 15.3053 2.65791 15.7422L3.27013 16.8326C3.81409 17.7423 5.01164 18.051 5.94642 17.5226C6.88219 17.0064 8.07014 17.3175 8.61397 18.2211C8.78705 18.5107 8.87763 18.8401 8.87635 19.1752C8.87633 19.6842 9.08513 20.1722 9.45633 20.5305C9.82753 20.8889 10.3303 21.0879 10.853 21.0833H12.1386C13.2206 21.0833 14.0977 20.229 14.0977 19.1752C14.0907 18.667 14.2931 18.1772 14.6596 17.8154C15.0262 17.4536 15.5263 17.25 16.0481 17.25C16.3923 17.2479 16.7306 17.3362 17.0277 17.5056C17.9628 18.0268 19.1545 17.7147 19.6952 16.8071L20.3424 15.7167C20.8649 14.8123 20.5456 13.6669 19.6252 13.1441Z"
                    fill="#9796A1"/>
              <path
                  d="M11.4998 13.8962C12.823 13.8962 13.8957 12.8235 13.8957 11.5003C13.8957 10.1771 12.823 9.10449 11.4998 9.10449C10.1767 9.10449 9.104 10.1771 9.104 11.5003C9.104 12.8235 10.1767 13.8962 11.4998 13.8962Z"
                  fill="#9796A1"/>
            </svg>
            <a class="link">Settings</a>
          </div>
          <div class="item-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect width="19.1667" height="19.1667" rx="6.70833" fill="#9796A1"/>
              <rect x="4.7915" y="1.91675" width="10.5417" height="13.4167" fill="white"/>
              <rect x="4.7915" y="1.91675" width="10.5417" height="10.5417" fill="white"/>
              <path
                  d="M9.58333 0C4.29253 0 0 4.29253 0 9.58333C0 14.8741 4.29253 19.1667 9.58333 19.1667C14.8741 19.1667 19.1667 14.8741 19.1667 9.58333C19.1667 4.29253 14.8741 0 9.58333 0ZM9.28385 15.1736C9.08642 15.1736 8.89341 15.1151 8.72925 15.0054C8.56508 14.8957 8.43713 14.7398 8.36158 14.5574C8.28602 14.375 8.26625 14.1742 8.30477 13.9806C8.34329 13.787 8.43836 13.6091 8.57798 13.4695C8.71758 13.3299 8.89546 13.2348 9.0891 13.1963C9.28275 13.1577 9.48346 13.1775 9.66587 13.2531C9.84828 13.3286 10.0042 13.4566 10.1139 13.6207C10.2236 13.7849 10.2821 13.9779 10.2821 14.1753C10.2821 14.4401 10.1769 14.694 9.98973 14.8812C9.80252 15.0684 9.54861 15.1736 9.28385 15.1736ZM10.953 10.0825C10.1439 10.6255 10.0326 11.1232 10.0326 11.5799C10.0326 11.7652 9.95893 11.9429 9.82788 12.074C9.69684 12.205 9.5191 12.2786 9.33377 12.2786C9.14844 12.2786 8.9707 12.205 8.83965 12.074C8.7086 11.9429 8.63498 11.7652 8.63498 11.5799C8.63498 10.4863 9.13811 9.61677 10.1733 8.92148C11.1356 8.27561 11.6797 7.86632 11.6797 6.96638C11.6797 6.35445 11.3303 5.88976 10.6071 5.54586C10.4368 5.465 10.058 5.38613 9.59182 5.39162C9.00684 5.39911 8.55263 5.53887 8.20273 5.82038C7.54288 6.35145 7.48698 6.92945 7.48698 6.93793C7.48255 7.0297 7.4601 7.1197 7.42089 7.20278C7.38169 7.28587 7.3265 7.36042 7.25849 7.42218C7.19047 7.48394 7.11095 7.5317 7.02448 7.56273C6.93801 7.59376 6.84627 7.60745 6.7545 7.60303C6.66274 7.5986 6.57274 7.57615 6.48965 7.53694C6.40657 7.49774 6.33202 7.44255 6.27026 7.37453C6.2085 7.30652 6.16074 7.227 6.12971 7.14053C6.09868 7.05405 6.08499 6.96232 6.08941 6.87055C6.0949 6.74926 6.17925 5.65666 7.32576 4.73427C7.92023 4.2561 8.67641 4.00753 9.57185 3.99655C10.2058 3.98906 10.8012 4.09638 11.205 4.28704C12.4134 4.85855 13.0773 5.81139 13.0773 6.96638C13.0773 8.65495 11.9487 9.41313 10.953 10.0825Z"
                  fill="#9796A1"/>
            </svg>
            <a class="link">Helps & FAQs</a>
          </div>
        </div>
      </div>
      <router-link to="/register">
        <button class="btn-out">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
            <circle cx="13" cy="13" r="13" fill="white"/>
            <path
                d="M17.9711 7.28859L17.9711 7.28859L17.9692 7.28641C17.5677 6.83279 16.9043 6.75812 16.4358 7.09539L16.4353 7.09572C15.9373 7.45316 15.7683 8.11666 16.0469 8.66837L16.0482 8.6711C16.1101 8.79596 16.2102 8.92301 16.3297 9.04248L16.3315 9.04426C17.768 10.4982 18.3448 12.2735 17.8344 14.3294L17.8343 14.3295C17.3469 16.2894 16.0919 17.5916 14.2447 18.1773L14.2441 18.1775C12.4435 18.7457 10.7475 18.3827 9.29409 17.1611C8.04128 16.1106 7.39967 14.6968 7.37762 13.0317C7.35863 11.7029 7.80445 10.528 8.62356 9.5252C8.69482 9.43739 8.77449 9.36624 8.83187 9.31544C8.83689 9.31099 8.84175 9.30669 8.84646 9.30253C8.9028 9.25268 8.93786 9.22167 8.96819 9.1882L8.96817 9.18818L8.97117 9.18495C9.30094 8.82898 9.38927 8.42543 9.24532 7.95198C9.09967 7.48526 8.79153 7.22026 8.32775 7.12616C7.98915 7.05821 7.68292 7.14281 7.38112 7.38516L7.37991 7.38612C6.7777 7.8659 6.3551 8.51596 5.96112 9.25146C5.29911 10.4885 5.00066 11.824 5.04817 13.2448L5.04819 13.2453C5.10407 14.9779 5.65253 16.5167 6.6871 17.8675C7.66932 19.1469 8.89571 20.0439 10.3795 20.4968L10.3799 20.4969C12.9122 21.2721 15.2524 20.8673 17.3723 19.2076L17.3725 19.2075C18.7445 18.1347 19.6464 16.7092 20.0943 14.9676L20.0947 14.9658C20.263 14.3235 20.3362 13.6622 20.3392 12.9821C20.3077 10.8173 19.5665 8.97535 18.1078 7.44387L18.3975 7.168L18.1086 7.4447C18.0773 7.41197 18.026 7.35224 17.995 7.31625C17.9836 7.30291 17.9749 7.29283 17.9711 7.28859Z"
                fill="#FE724C" stroke="white" stroke-width="0.8"/>
            <path
                d="M11.1116 10.6562C11.1145 11.4965 11.7263 12.1933 12.5225 12.2727C13.348 12.3583 14.0856 11.8021 14.2495 10.9648C14.273 10.8457 14.2759 10.7234 14.2759 10.6012M11.1116 10.6562C11.1057 8.3949 11.1057 7.60026 11.1116 5.33897C11.1116 4.73698 11.3838 4.26944 11.8726 3.96386C12.382 3.643 12.9264 3.63078 13.4475 3.93024C13.9802 4.23583 14.2671 4.7217 14.27 5.36342M11.1116 10.6562L11.5116 10.6552C11.5116 10.6551 11.5116 10.6551 11.5116 10.6551C11.514 11.304 11.9834 11.8169 12.5622 11.8747L12.5637 11.8748C13.1759 11.9383 13.7314 11.5296 13.857 10.888L13.857 10.8877C13.8723 10.8099 13.8759 10.7215 13.8759 10.6022M11.1116 10.6562L11.5116 10.6548L13.8759 10.6022M14.27 5.36342C14.2719 6.08119 14.2714 6.50082 14.2708 7.00291C14.2704 7.28744 14.27 7.59846 14.27 8.00522V8.00527C14.27 9.11449 14.27 9.49195 14.2759 10.6012M14.27 5.36342L13.87 5.36524C13.87 5.36512 13.87 5.36499 13.87 5.36487M14.27 5.36342L13.87 5.36446C13.87 5.3646 13.87 5.36473 13.87 5.36487M14.2759 10.6012L13.8759 10.6033C13.8759 10.6029 13.8759 10.6026 13.8759 10.6022M14.2759 10.6012H13.8759C13.8759 10.6015 13.8759 10.6019 13.8759 10.6022M13.8759 10.6022C13.87 9.49278 13.87 9.11442 13.87 8.00522C13.87 7.59742 13.8704 7.28611 13.8708 7.00153C13.8714 6.50012 13.8719 6.08173 13.87 5.36487M13.8759 10.6022L11.5116 5.34001L11.5116 5.33897C11.5116 4.87793 11.7102 4.53715 12.0847 4.30304L12.0859 4.3023L12.0859 4.3023C12.4706 4.05995 12.8563 4.05183 13.2482 4.27704L13.2485 4.27722C13.6557 4.51081 13.8676 4.86408 13.87 5.36487"
                fill="#FE724C" stroke="white" stroke-width="0.8"/>
          </svg>
          <router-link to="login" class="log-out">Log Out</router-link>
        </button>
      </router-link>
    </div>
    <div class="item-home-screen">
      <div class="header">
        <div class="menu">
          <svg @click="isOpenMenu=!isOpenMenu" xmlns="http://www.w3.org/2000/svg" width="78" height="78"
               viewBox="0 0 78 78" fill="none">
            <g filter="url(#filter0_d_814_6495)">
              <path
                  d="M41 10H27C20.3726 10 15 15.3726 15 22V36C15 42.6274 20.3726 48 27 48H41C47.6274 48 53 42.6274 53 36V22C53 15.3726 47.6274 10 41 10Z"
                  fill="white"/>
            </g>
            <path d="M28 26H40" stroke="#111719" stroke-width="2" stroke-linecap="round"/>
            <path d="M28 32H36" stroke="#111719" stroke-width="2" stroke-linecap="round"/>
            <defs>
              <filter id="filter0_d_814_6495" x="0" y="0" width="78" height="78" filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                               result="hardAlpha"/>
                <feOffset dx="5" dy="10"/>
                <feGaussianBlur stdDeviation="10"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.827451 0 0 0 0 0.819608 0 0 0 0 0.847059 0 0 0 0.3 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_814_6495"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_814_6495" result="shape"/>
              </filter>
            </defs>
          </svg>
          <div class="address">
            <div class="delivery-address">
              <div>Deliver to</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
                <path d="M1 1L4.32007 4.32122L7.64 1" stroke="#989CA3" stroke-width="1.8"/>
              </svg>
            </div>
            <div class="address-me">4102 Pretty View Lane</div>
          </div>
          <div>
            <router-link to="profile">
              <img class="avt" src="@/assets/imgs/avt.png"/>
            </router-link>
          </div>
        </div>
        <div class="order">What would you like
          to order
        </div>
        <div class="search-food">
          <div class="search">
            <input type="text" class="input" placeholder="Find for food or restaurant...">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <svg class="avtive" xmlns="http://www.w3.org/2000/svg" width="106" height="111" viewBox="0 0 106 111"
               fill="none">
            <g filter="url(#filter0_d_814_6481)">
              <rect x="30" y="15" width="51" height="51" rx="14" fill="white"/>
            </g>
            <path d="M52.5288 47.1233L45.9998 47.1233" stroke="#FE724C" stroke-width="2" stroke-linecap="round"/>
            <path d="M64.2808 47.1233L52.5288 47.1233" stroke="#FE724C" stroke-opacity="0.25" stroke-width="2"
                  stroke-linecap="round"/>
            <path
                d="M55.3467 47C55.3467 45.3431 54.0035 44 52.3467 44C50.6898 44 49.3467 45.3431 49.3467 47C49.3467 48.6569 50.6898 50 52.3467 50C54.0035 50 55.3467 48.6569 55.3467 47Z"
                fill="#FE724C" stroke="#FE724C" stroke-width="1.5"/>
            <path d="M57.752 34.8767L64.281 34.8767" stroke="#FE724C" stroke-width="2" stroke-linecap="round"/>
            <path d="M46 34.8767L57.752 34.8767" stroke="#FE724C" stroke-opacity="0.25" stroke-width="2"
                  stroke-linecap="round"/>
            <path
                d="M54.9336 35C54.9336 36.6569 56.2767 38 57.9336 38C59.5904 38 60.9336 36.6569 60.9336 35C60.9336 33.3431 59.5904 32 57.9336 32C56.2767 32 54.9336 33.3431 54.9336 35Z"
                fill="#FE724C" stroke="#FE724C" stroke-width="1.5"/>
            <defs>
              <filter id="filter0_d_814_6481" x="0" y="0" width="111" height="111" filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                               result="hardAlpha"/>
                <feOffset dy="15"/>
                <feGaussianBlur stdDeviation="15"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.913725 0 0 0 0 0.929412 0 0 0 0 0.94902 0 0 0 0.5 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_814_6481"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_814_6481" result="shape"/>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <ProductFood/>
      <div class="restaurant-active">
        <div class="title-restaurant">
          <div class="title-big">
            Featured Restaurants
          </div>
          <div class="view-all">
            <div>View All</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 6 9" fill="none">
              <path d="M1 1L4.34 4.33987L1 7.67978" stroke="#FE724C" stroke-width="1.5"/>
            </svg>
          </div>
        </div>
        <FoodRestaurant/>
      </div>
      <div class="popular">
        <div class="title-big">Popular Items</div>
        <PopularCart/>
      </div>
    </div>
    <MenuHome/>

  </div>
</template>
<script>
import MenuHome from "@/components/home/MenuHome.vue";
import ProductFood from "@/components/home/ProductFood.vue";
import FoodRestaurant from "@/components/home/FoodRestaurant.vue";
import PopularCart from "@/components/home/PopularCart.vue";

export default {
  components: {
    PopularCart,
    FoodRestaurant,
    ProductFood,
    MenuHome
  },
  data() {
    return {
      isOpenMenu: false,

    }
  },
  methods: {
    closeMenu() {
      this.isOpenMenu = false;
    },
    getClass() {
      if (this.isOpenMenu) {
        return 'container-side-menu open-menu'
      } else {
        return 'container-side-menu close-menu'
      }
    },

  }
}
</script>
<style scoped lang="scss">
.home-screen {
  box-shadow: 18px 18px 36px 0px rgba(211, 209, 216, 0.25);
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 0 26px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  .log-out{
    color: #FFFFFF;
  }

  .menu-link-container {
    width: 100%;
    display: flex;
    justify-content: center;

    .menu-link {
      max-width: 768px;
    }
  }

  .container-side-menu {
    //display: none;
    display: flex;
    background-color: #fff;
    box-shadow: 18px 18px 36px 0px rgba(211, 209, 216, 0.25);
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    top: 0;
    transition: all .3s ease-in-out;
    max-width: 768px;
    z-index: 300;
    padding: 30px 24px;
    flex-direction: column;
    min-width: 250px;
    width: 40%;

    .information {
      margin-bottom: 47px;

      .avt {
        border-radius: 999px;
        margin-bottom: 20px;
      }

      .fa-xmark {
        font-size: 30px;
      }

      .name-person {
        color: #000;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 5px;
      }

      .email-person {
        color: #9EA1B1;
        font-size: 14px;
        font-weight: 400;
      }
    }

    .wrapper-link {
      .item-link {
        display: flex;
        align-items: center;
        gap: 14px;
        padding-bottom: 33px;

        .link {
          color: #000;
          font-size: 16px;
          font-weight: 400;
        }
      }
    }

    .btn-out {
      border-radius: 28px;
      background: #FE724C;
      box-shadow: 0px 10px 30px 0px rgba(254, 114, 76, 0.20);
      padding: 9px 18px;
      border: 0;
      display: flex;
      align-items: center;
      gap: 9px;
      color: #FFF;
      font-size: 16px;
      font-weight: 400;
    }

  }

  .open-menu {
    left: 0;
  }

  .close-menu {
    left: -100%;
  }

  .item-home-screen {
    background: #FFF;
    padding-top: 35px;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;

    .header {
      .menu {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 34px;

        .address {
          .delivery-address {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            padding-bottom: 4px;
            color: #8C9099;
            font-size: 14px;
            font-weight: 500;
          }

          .address-me {
            color: #FE724C;
            font-size: 15px;
            font-weight: 500;
          }
        }

        .avt {
          border-radius: 20px;
          width: 59px;
          height: 57px;
        }
      }

      .order {
        color: #323643;
        font-size: 30px;
        font-weight: 700;
        padding-bottom: 19px;
      }

      .search-food {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .avtive {
          margin-top: 20px;
        }

        .search {
          position: relative;
          width: 100%;

          .input {
            width: 100%;
            padding: 19px 32px 19px 44px;
            color: #9AA0B4;
            font-size: 14px;
            font-weight: 400;
            border-radius: 10px;
            border: 1px solid #EFEFEF;
            background: #FCFCFD;
          }

          .fa-magnifying-glass {
            position: absolute;
            top: 19px;
            left: 18px;
          }
        }
      }
    }

    .restaurant-active {
      .title-restaurant {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 15px;

        .title-big {
          color: #323643;
          font-size: 18px;
          font-weight: 600;
        }

        .view-all {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #F56844;
          font-size: 13px;
          font-weight: 400;
        }

      }
    }
    .popular {
      padding-bottom: 80px;

      .title-big {
        color: #323643;
        font-size: 18px;
        font-weight: 600;
        padding-bottom: 20px;
      }
    }
  }
}
</style>