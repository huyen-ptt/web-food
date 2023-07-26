<template>
  <div class="container">
    <svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78" fill="none">
      <g filter="url(#filter0_d_814_6728)">
        <path d="M41 10H27C20.3726 10 15 15.3726 15 22V36C15 42.6274 20.3726 48 27 48H41C47.6274 48 53 42.6274 53 36V22C53 15.3726 47.6274 10 41 10Z" fill="white"/>
      </g>
      <path d="M37 24L32 28.6839L37 33.6839" stroke="#111719" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
        <filter id="filter0_d_814_6728" x="0" y="0" width="78" height="78" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="5" dy="10"/>
          <feGaussianBlur stdDeviation="10"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.827451 0 0 0 0 0.819608 0 0 0 0 0.847059 0 0 0 0.3 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_814_6728"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_814_6728" result="shape"/>
        </filter>
      </defs>
    </svg>
    <div>
      <div>Vefification Code</div>
      <div>Please type the verification code sent to prelookstudio@gmail.com</div>
      <input type="text" id="verification-input" maxlength="6" autocomplete="off">
    </div>
  </div>
</template>