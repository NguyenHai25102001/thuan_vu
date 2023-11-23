/* eslint-disable prettier/prettier */

//login Screen
const lockIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<g opacity="0.64">
<path d="M17.9688 14.1406C18.4002 14.1406 18.75 13.7909 18.75 13.3594V10.4688C18.75 8.74562 17.3481 7.34375 15.625 7.34375H14.6861V4.58852C14.6861 2.0584 12.5832 0 9.99855 0C7.41387 0 5.31105 2.0584 5.31105 4.58852V7.34375H4.375C2.65188 7.34375 1.25 8.74562 1.25 10.4688V16.875C1.25 18.5981 2.65188 20 4.375 20H15.625C17.3481 20 18.75 18.5981 18.75 16.875C18.75 16.4435 18.4002 16.0938 17.9688 16.0938C17.5373 16.0938 17.1875 16.4435 17.1875 16.875C17.1875 17.7366 16.4866 18.4375 15.625 18.4375H4.375C3.51344 18.4375 2.8125 17.7366 2.8125 16.875V10.4688C2.8125 9.60719 3.51344 8.90625 4.375 8.90625H15.625C16.4866 8.90625 17.1875 9.60719 17.1875 10.4688V13.3594C17.1875 13.7909 17.5373 14.1406 17.9688 14.1406ZM13.1236 7.34375H6.87355V4.58852C6.87355 2.91996 8.27543 1.5625 9.99855 1.5625C11.7217 1.5625 13.1236 2.91996 13.1236 4.58852V7.34375Z" fill="url(#paint0_linear)"/>
<path d="M10 14.3359C10.4315 14.3359 10.7812 13.9862 10.7812 13.5547C10.7812 13.1232 10.4315 12.7734 10 12.7734C9.56853 12.7734 9.21875 13.1232 9.21875 13.5547C9.21875 13.9862 9.56853 14.3359 10 14.3359Z" fill="url(#paint1_linear)"/>
</g>
<defs>
<linearGradient id="paint0_linear" x1="10" y1="0" x2="10" y2="20" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="10" y1="12.7734" x2="10" y2="14.3359" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
</defs>
</svg>`;

const lockGrayIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<g opacity="0.64">
<path d="M17.9688 14.1406C18.4002 14.1406 18.75 13.7909 18.75 13.3594V10.4688C18.75 8.74562 17.3481 7.34375 15.625 7.34375H14.6861V4.58852C14.6861 2.0584 12.5832 0 9.99855 0C7.41387 0 5.31105 2.0584 5.31105 4.58852V7.34375H4.375C2.65188 7.34375 1.25 8.74562 1.25 10.4688V16.875C1.25 18.5981 2.65188 20 4.375 20H15.625C17.3481 20 18.75 18.5981 18.75 16.875C18.75 16.4435 18.4002 16.0938 17.9688 16.0938C17.5373 16.0938 17.1875 16.4435 17.1875 16.875C17.1875 17.7366 16.4866 18.4375 15.625 18.4375H4.375C3.51344 18.4375 2.8125 17.7366 2.8125 16.875V10.4688C2.8125 9.60719 3.51344 8.90625 4.375 8.90625H15.625C16.4866 8.90625 17.1875 9.60719 17.1875 10.4688V13.3594C17.1875 13.7909 17.5373 14.1406 17.9688 14.1406ZM13.1236 7.34375H6.87355V4.58852C6.87355 2.91996 8.27543 1.5625 9.99855 1.5625C11.7217 1.5625 13.1236 2.91996 13.1236 4.58852V7.34375Z" fill="url(#paint0_linear)"/>
<path d="M10 14.3359C10.4315 14.3359 10.7812 13.9862 10.7812 13.5547C10.7812 13.1232 10.4315 12.7734 10 12.7734C9.56853 12.7734 9.21875 13.1232 9.21875 13.5547C9.21875 13.9862 9.56853 14.3359 10 14.3359Z" fill="url(#paint1_linear)"/>
</g>
<defs>
<linearGradient id="paint0_linear" x1="10" y1="0" x2="10" y2="20" gradientUnits="userSpaceOnUse">
<stop stop-color="#828282"/>
<stop offset="1" stop-color="#828282"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="10" y1="12.7734" x2="10" y2="14.3359" gradientUnits="userSpaceOnUse">
<stop stop-color="#828282"/>
<stop offset="1" stop-color="#828282"/>
</linearGradient>
</defs>
</svg>`;

const keyIcon = `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" >
<g opacity="0.64" clip-path="url(#clip0)">
<path d="M14.2187 7.16633C14.909 7.16633 15.4687 6.60669 15.4687 5.91634C15.4687 5.22599 14.909 4.66634 14.2187 4.66634C13.5283 4.66634 12.9687 5.22599 12.9687 5.91634C12.9687 6.60669 13.5283 7.16633 14.2187 7.16633Z" fill="url(#paint0_linear)"/>
<path d="M19.7842 6.9276C19.367 5.86533 18.602 4.33265 17.3266 3.06328C16.0557 1.79828 14.5393 1.05516 13.4909 0.654459C12.34 0.214578 11.0321 0.491843 10.1591 1.36078L7.09122 4.41429C6.18181 5.3194 5.9197 6.71213 6.43896 7.8799C6.59997 8.24208 6.77509 8.59634 6.9622 8.9386L0.228827 15.6719C0.0823044 15.8185 0 16.0172 0 16.2244V19.6619C0 20.0934 0.349764 20.4431 0.781247 20.4431H4.21873C4.65022 20.4431 4.99998 20.0934 4.99998 19.6619V18.2556L6.40622 18.2556C6.83771 18.2556 7.18747 17.9058 7.18747 17.4743V16.0681H8.59372C9.0252 16.0681 9.37496 15.7184 9.37496 15.2869C9.37496 14.8554 9.0252 14.5057 8.59372 14.5057H6.40622C5.97474 14.5057 5.62498 14.8554 5.62498 15.2869V16.6931L4.21873 16.6931C3.78725 16.6931 3.43749 17.0429 3.43749 17.4744V18.8806H1.56249V16.548L8.4904 9.62012C8.74493 9.36559 8.79262 8.97017 8.60594 8.66243C8.3352 8.21618 8.08649 7.73931 7.86677 7.24506C7.60899 6.66533 7.74032 5.9728 8.19356 5.52167L11.2614 2.4682C11.6994 2.03231 12.3556 1.89328 12.9332 2.11398C13.8403 2.4607 15.1476 3.0989 16.2244 4.17069C17.3078 5.24897 17.9674 6.57564 18.3299 7.49869C18.5561 8.07478 18.4186 8.72927 17.9797 9.16614L14.8748 12.2565C14.4226 12.7065 13.7478 12.838 13.1554 12.5917C12.6669 12.3885 12.1937 12.1471 11.7492 11.8742C11.3815 11.6485 10.9004 11.7637 10.6747 12.1314C10.449 12.4991 10.5641 12.9802 10.9318 13.2059C11.4456 13.5212 11.9918 13.7999 12.5553 14.0343C13.7328 14.5241 15.0758 14.2609 15.977 13.364L19.0819 10.2736C19.9626 9.39712 20.2382 8.08372 19.7842 6.9276Z" fill="url(#paint1_linear)"/>
</g>
<defs>
<linearGradient id="paint0_linear" x1="14.2187" y1="4.66634" x2="14.2187" y2="7.16633" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="10" y1="0.448326" x2="10" y2="20.4431" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
<clipPath id="clip0">
<rect width="20" height="20" fill="#ffffff" transform="translate(0 0.44519)"/>
</clipPath>
</defs>
</svg>`;

const whiteRightArrow = `<svg width="15" height="8" viewBox="0 0 15 8" fill="none" >
<path d="M0 4H14M14 4L11.5 1M14 4L11.5 7" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>`;

const grayRightArrow = `<svg width="15" height="8" viewBox="0 0 15 8" fill="none" >
<path d="M0 4H14M14 4L11.5 1M14 4L11.5 7" stroke="#828282" stroke-width="2" stroke-linejoin="round"/>
</svg>`;

const boxIcon = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<rect x="1" y="1" width="18" height="18" rx="3" stroke="url(#paint0_linear)" stroke-width="2"/>
<defs>
<linearGradient id="paint0_linear" x1="10" y1="0" x2="10" y2="20" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
</defs>
</svg>`;

const checkBoxIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<rect x="1" y="1" width="18" height="18" rx="3" stroke="url(#paint0_linear)" stroke-width="2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5848 6.24987L8.32991 11.8514L6.41516 9.81037C6.0875 9.47304 5.56668 9.47786 5.24458 9.82121C4.92247 10.1646 4.91795 10.7197 5.23441 11.069L7.73954 13.7394C8.06562 14.0869 8.5942 14.0869 8.92029 13.7394L14.7656 7.50851C15.0821 7.15924 15.0775 6.60406 14.7554 6.26071C14.4333 5.91736 13.9125 5.91254 13.5848 6.24987Z" fill="url(#paint1_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="10" y1="0" x2="10" y2="20" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="10" y1="6" x2="10" y2="14" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
</defs>
</svg>`;

const backwhiteArrow = `<svg width="12" height="20" viewBox="0 0 12 20" fill="none" >
<path d="M10 18L2 10L10 2" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const backArrow = `<svg width="12" height="20" viewBox="0 0 12 20" fill="none" >
<path d="M10 18L2 10L10 2" stroke="url(#paint0_linear)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear" x1="1.99861" y1="17.9606" x2="12.0809" y2="16.5119" gradientUnits="userSpaceOnUse">
<stop stop-color="#2771E9"/>
<stop offset="0.302083" stop-color="#792EE7"/>
<stop offset="0.640221" stop-color="#A82ACC"/>
<stop offset="1" stop-color="#D5504B"/>
</linearGradient>
</defs>
</svg>
`;

const rightArrowLesson = `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" >
<path d="M1 1L7 7L1 13" stroke="url(#paint0_linear)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear" x1="4" y1="13" x2="4" y2="1" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
</defs>
</svg>`;

const downArrowHeader = `<svg width="10" height="6" viewBox="0 0 10 6" fill="none" >
<path d="M9 1L5 5L1 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const downGreenIcon = `<svg width="14" height="8" viewBox="0 0 14 8" fill="none" >
<path d="M13 1L7 7L1 1" stroke="url(#paint0_linear)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear" x1="1" y1="4" x2="13" y2="4" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
</defs>
</svg>`;

const whitecheck = `<svg width="12" height="10" viewBox="0 0 12 10" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3018 0.312336L3.9959 7.31428L1.69819 4.76296C1.30501 4.3413 0.68002 4.34733 0.293495 4.77652C-0.0930309 5.20571 -0.0984618 5.89968 0.281288 6.33626L3.28744 9.67423C3.67875 10.1086 4.31305 10.1086 4.70435 9.67423L11.7187 1.88563C12.0985 1.44905 12.093 0.755079 11.7065 0.32589C11.32 -0.103299 10.695 -0.10933 10.3018 0.312336Z" fill="#ffffff"/>
</svg>`;

const greencheck = `<svg width="12" height="10" viewBox="0 0 12 10" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3018 0.312336L3.9959 7.31428L1.69819 4.76296C1.30501 4.3413 0.68002 4.34733 0.293495 4.77652C-0.0930309 5.20571 -0.0984618 5.89968 0.281288 6.33626L3.28744 9.67423C3.67875 10.1086 4.31305 10.1086 4.70435 9.67423L11.7187 1.88563C12.0985 1.44905 12.093 0.755079 11.7065 0.32589C11.32 -0.103299 10.695 -0.10933 10.3018 0.312336Z" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="6" y1="0" x2="6" y2="10" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
</defs>
</svg>`;

//itemIcon
const redbabyface = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<path d="M7.54394 12.2696C7.61718 12.4157 7.76406 12.4999 7.91707 12.4999C7.97972 12.4999 8.0432 12.4857 8.103 12.456C8.3089 12.3531 8.3923 12.1028 8.28937 11.8969C8.26781 11.8533 7.74492 10.8333 6.66664 10.8333C5.58836 10.8333 5.06547 11.8534 5.0439 11.8969C4.94136 12.102 5.02437 12.3498 5.22863 12.4535C5.43129 12.5569 5.68312 12.4759 5.78812 12.272C5.79136 12.2659 6.10754 11.6666 6.66664 11.6666C7.22574 11.6666 7.54191 12.2659 7.54394 12.2696Z" fill="url(#paint0_linear)"/>
<path d="M13.3333 10.8333C12.255 10.8333 11.7322 11.8534 11.7106 11.8969C11.6081 12.102 11.6911 12.3498 11.8953 12.4535C12.0984 12.5569 12.3494 12.4759 12.4548 12.272C12.4581 12.2659 12.7742 11.6666 13.3333 11.6666C13.8924 11.6666 14.2086 12.2659 14.2106 12.2696C14.2838 12.4157 14.4307 12.4999 14.5837 12.4999C14.6464 12.4999 14.7099 12.4857 14.7697 12.456C14.9756 12.3531 15.059 12.1028 14.956 11.8969C14.9345 11.8534 14.4117 10.8333 13.3333 10.8333Z" fill="url(#paint1_linear)"/>
<path d="M13.1889 15.107C13.0188 14.9569 12.7563 14.9748 12.6038 15.1416C12.5972 15.1485 11.947 15.8333 10 15.8333C8.08025 15.8333 7.42107 15.1676 7.39708 15.1424C7.24775 14.9723 6.98857 14.9516 6.81482 15.098C6.63864 15.2466 6.61665 15.5094 6.76478 15.6852C6.84981 15.7857 7.66036 16.6666 10.0001 16.6666C12.3397 16.6666 13.1503 15.7857 13.2353 15.6852C13.3814 15.5119 13.3594 15.2567 13.1889 15.107Z" fill="url(#paint2_linear)"/>
<path d="M18.5681 10.0161C17.8889 6.77937 15.3204 4.31156 12.0584 3.56922C12.049 3.56785 12.0403 3.56414 12.0309 3.56343C11.3776 3.41683 10.6992 3.33312 10 3.33312C9.56961 3.33312 9.1484 3.36949 8.73402 3.42617C8.18039 2.77843 8.20281 1.80379 8.81551 1.1914C9.28262 0.723669 10.0964 0.723669 10.5636 1.1914C10.9168 1.5448 10.9168 2.11992 10.5636 2.47336C10.4008 2.63601 10.4008 2.89957 10.5636 3.06226C10.7263 3.22492 10.99 3.22492 11.1527 3.06226C11.8314 2.38425 11.8314 1.2805 11.1527 0.602497C10.7363 0.185739 10.1542 -0.0253936 9.58313 0.00214543C9.08289 0.0262861 8.59109 0.237419 8.22633 0.602419C7.41664 1.41207 7.29367 2.64222 7.83789 3.59101C4.625 4.36148 2.10398 6.81343 1.43187 10.0161C0.623789 10.1308 0 10.827 0 11.6664C0 12.5059 0.623789 13.2021 1.43187 13.3168C2.24895 17.21 5.7959 19.9998 10 19.9998C14.2041 19.9998 17.7511 17.21 18.5681 13.3168C19.3762 13.2021 20 12.5059 20 11.6664C20 10.827 19.3762 10.1308 18.5681 10.0161ZM18.3411 12.5002L18.2577 12.49C18.0391 12.4656 17.8459 12.6222 17.8105 12.8367C17.2021 16.5045 13.9172 19.1664 10 19.1664C6.08277 19.1664 2.79785 16.5045 2.18953 12.8367C2.15617 12.6348 1.91488 12.4981 1.70613 12.4981C1.6927 12.4981 1.67969 12.4985 1.66668 12.4998C1.2073 12.4998 0.833359 12.1258 0.833359 11.6664C0.833359 11.2071 1.2073 10.8331 1.65895 10.8327L1.74234 10.8428C1.95148 10.8603 2.15414 10.7106 2.18953 10.4962C2.71625 7.32035 5.25102 4.90215 8.46406 4.30965C9.01379 4.75883 9.67586 4.99976 10.3471 4.99976C10.9535 4.99976 11.5578 4.80308 12.0814 4.42726C15.033 5.18 17.3139 7.50215 17.8105 10.4962C17.8459 10.7107 18.0383 10.8592 18.2577 10.8429L18.3334 10.8331C18.7927 10.8331 19.1667 11.2071 19.1667 11.6664C19.1667 12.1258 18.7927 12.4998 18.3411 12.5002Z" fill="url(#paint3_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="8.33347" y1="12.4999" x2="7.31394" y2="9.91912" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6188"/>
<stop offset="1" stop-color="#FFB199"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="15.0001" y1="12.4999" x2="13.9806" y2="9.91913" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6188"/>
<stop offset="1" stop-color="#FFB199"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="13.3322" y1="16.6666" x2="12.7651" y2="13.7956" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6188"/>
<stop offset="1" stop-color="#FFB199"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="20" y1="19.9998" x2="2.58421" y2="-2.04209" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6188"/>
<stop offset="1" stop-color="#FFB199"/>
</linearGradient>
</defs>
</svg>`;

const graybabyface = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<path d="M7.54394 12.2696C7.61718 12.4157 7.76406 12.4999 7.91707 12.4999C7.97972 12.4999 8.0432 12.4857 8.103 12.456C8.3089 12.3531 8.3923 12.1028 8.28937 11.8969C8.26781 11.8533 7.74492 10.8333 6.66664 10.8333C5.58836 10.8333 5.06547 11.8534 5.0439 11.8969C4.94136 12.102 5.02437 12.3498 5.22863 12.4535C5.43129 12.5569 5.68312 12.4759 5.78812 12.272C5.79136 12.2659 6.10754 11.6666 6.66664 11.6666C7.22574 11.6666 7.54191 12.2659 7.54394 12.2696Z" fill="url(#paint0_linear)"/>
<path d="M13.3333 10.8333C12.255 10.8333 11.7322 11.8534 11.7106 11.8969C11.6081 12.102 11.6911 12.3498 11.8953 12.4535C12.0984 12.5569 12.3494 12.4759 12.4548 12.272C12.4581 12.2659 12.7742 11.6666 13.3333 11.6666C13.8924 11.6666 14.2086 12.2659 14.2106 12.2696C14.2838 12.4157 14.4307 12.4999 14.5837 12.4999C14.6464 12.4999 14.7099 12.4857 14.7697 12.456C14.9756 12.3531 15.059 12.1028 14.956 11.8969C14.9345 11.8534 14.4117 10.8333 13.3333 10.8333Z" fill="url(#paint1_linear)"/>
<path d="M13.1889 15.107C13.0188 14.9569 12.7563 14.9748 12.6038 15.1416C12.5972 15.1485 11.947 15.8333 10 15.8333C8.08025 15.8333 7.42107 15.1676 7.39708 15.1424C7.24775 14.9723 6.98857 14.9516 6.81482 15.098C6.63864 15.2466 6.61665 15.5094 6.76478 15.6852C6.84981 15.7857 7.66036 16.6666 10.0001 16.6666C12.3397 16.6666 13.1503 15.7857 13.2353 15.6852C13.3814 15.5119 13.3594 15.2567 13.1889 15.107Z" fill="url(#paint2_linear)"/>
<path d="M18.5681 10.0161C17.8889 6.77937 15.3204 4.31156 12.0584 3.56922C12.049 3.56785 12.0403 3.56414 12.0309 3.56343C11.3776 3.41683 10.6992 3.33312 10 3.33312C9.56961 3.33312 9.1484 3.36949 8.73402 3.42617C8.18039 2.77843 8.20281 1.80379 8.81551 1.1914C9.28262 0.723669 10.0964 0.723669 10.5636 1.1914C10.9168 1.5448 10.9168 2.11992 10.5636 2.47336C10.4008 2.63601 10.4008 2.89957 10.5636 3.06226C10.7263 3.22492 10.99 3.22492 11.1527 3.06226C11.8314 2.38425 11.8314 1.2805 11.1527 0.602497C10.7363 0.185739 10.1542 -0.0253936 9.58313 0.00214543C9.08289 0.0262861 8.59109 0.237419 8.22633 0.602419C7.41664 1.41207 7.29367 2.64222 7.83789 3.59101C4.625 4.36148 2.10398 6.81343 1.43187 10.0161C0.623789 10.1308 0 10.827 0 11.6664C0 12.5059 0.623789 13.2021 1.43187 13.3168C2.24895 17.21 5.7959 19.9998 10 19.9998C14.2041 19.9998 17.7511 17.21 18.5681 13.3168C19.3762 13.2021 20 12.5059 20 11.6664C20 10.827 19.3762 10.1308 18.5681 10.0161ZM18.3411 12.5002L18.2577 12.49C18.0391 12.4656 17.8459 12.6222 17.8105 12.8367C17.2021 16.5045 13.9172 19.1664 10 19.1664C6.08277 19.1664 2.79785 16.5045 2.18953 12.8367C2.15617 12.6348 1.91488 12.4981 1.70613 12.4981C1.6927 12.4981 1.67969 12.4985 1.66668 12.4998C1.2073 12.4998 0.833359 12.1258 0.833359 11.6664C0.833359 11.2071 1.2073 10.8331 1.65895 10.8327L1.74234 10.8428C1.95148 10.8603 2.15414 10.7106 2.18953 10.4962C2.71625 7.32035 5.25102 4.90215 8.46406 4.30965C9.01379 4.75883 9.67586 4.99976 10.3471 4.99976C10.9535 4.99976 11.5578 4.80308 12.0814 4.42726C15.033 5.18 17.3139 7.50215 17.8105 10.4962C17.8459 10.7107 18.0383 10.8592 18.2577 10.8429L18.3334 10.8331C18.7927 10.8331 19.1667 11.2071 19.1667 11.6664C19.1667 12.1258 18.7927 12.4998 18.3411 12.5002Z" fill="url(#paint3_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="8.33347" y1="12.4999" x2="7.31394" y2="9.91912" gradientUnits="userSpaceOnUse">
<stop stop-color="#DEDEDE"/>
<stop offset="1" stop-color="#DEDEDE"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="15.0001" y1="12.4999" x2="13.9806" y2="9.91913" gradientUnits="userSpaceOnUse">
<stop stop-color="#DEDEDE"/>
<stop offset="1" stop-color="#DEDEDE"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="13.3322" y1="16.6666" x2="12.7651" y2="13.7956" gradientUnits="userSpaceOnUse">
<stop stop-color="#DEDEDE"/>
<stop offset="1" stop-color="#DEDEDE"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="20" y1="19.9998" x2="2.58421" y2="-2.04209" gradientUnits="userSpaceOnUse">
<stop stop-color="#DEDEDE"/>
<stop offset="1" stop-color="#DEDEDE"/>
</linearGradient>
</defs>
</svg>`;

const bluebabyface = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<path d="M7.54394 12.2699C7.61718 12.416 7.76406 12.5002 7.91707 12.5002C7.97972 12.5002 8.0432 12.4859 8.103 12.4562C8.3089 12.3533 8.3923 12.103 8.28937 11.8971C8.26781 11.8536 7.74492 10.8335 6.66664 10.8335C5.58836 10.8335 5.06547 11.8536 5.0439 11.8971C4.94136 12.1022 5.02437 12.35 5.22863 12.4538C5.43129 12.5571 5.68312 12.4762 5.78812 12.2723C5.79136 12.2662 6.10754 11.6668 6.66664 11.6668C7.22574 11.6668 7.54191 12.2662 7.54394 12.2699Z" fill="url(#paint0_linear)"/>
<path d="M13.3333 10.8335C12.255 10.8335 11.7322 11.8536 11.7106 11.8971C11.6081 12.1022 11.6911 12.35 11.8953 12.4538C12.0984 12.5571 12.3494 12.4762 12.4548 12.2723C12.4581 12.2662 12.7742 11.6668 13.3333 11.6668C13.8924 11.6668 14.2086 12.2662 14.2106 12.2699C14.2838 12.416 14.4307 12.5002 14.5837 12.5002C14.6464 12.5002 14.7099 12.4859 14.7697 12.4562C14.9756 12.3533 15.059 12.103 14.956 11.8971C14.9345 11.8536 14.4117 10.8335 13.3333 10.8335Z" fill="url(#paint1_linear)"/>
<path d="M13.1889 15.1073C13.0188 14.9571 12.7563 14.975 12.6038 15.1418C12.5972 15.1488 11.947 15.8335 10 15.8335C8.08025 15.8335 7.42107 15.1679 7.39708 15.1426C7.24775 14.9725 6.98857 14.9518 6.81482 15.0983C6.63864 15.2468 6.61665 15.5096 6.76478 15.6854C6.84981 15.7859 7.66036 16.6669 10.0001 16.6669C12.3397 16.6669 13.1503 15.7859 13.2353 15.6854C13.3814 15.5121 13.3594 15.257 13.1889 15.1073Z" fill="url(#paint2_linear)"/>
<path d="M18.5681 10.0163C17.8889 6.77962 15.3204 4.3118 12.0584 3.56946C12.049 3.56809 12.0403 3.56438 12.0309 3.56368C11.3776 3.41708 10.6992 3.33337 10 3.33337C9.56961 3.33337 9.1484 3.36973 8.73402 3.42641C8.18039 2.77868 8.20281 1.80403 8.81551 1.19165C9.28262 0.723913 10.0964 0.723913 10.5636 1.19165C10.9168 1.54505 10.9168 2.12016 10.5636 2.4736C10.4008 2.63626 10.4008 2.89981 10.5636 3.06251C10.7263 3.22516 10.99 3.22516 11.1527 3.06251C11.8314 2.3845 11.8314 1.28075 11.1527 0.602741C10.7363 0.185983 10.1542 -0.0251495 9.58313 0.00238957C9.08289 0.0265302 8.59109 0.237663 8.22633 0.602663C7.41664 1.41231 7.29367 2.64247 7.83789 3.59126C4.625 4.36173 2.10398 6.81368 1.43187 10.0163C0.623789 10.131 0 10.8272 0 11.6667C0 12.5061 0.623789 13.2024 1.43187 13.3171C2.24895 17.2103 5.7959 20 10 20C14.2041 20 17.7511 17.2103 18.5681 13.3171C19.3762 13.2023 20 12.5061 20 11.6667C20 10.8272 19.3762 10.131 18.5681 10.0163ZM18.3411 12.5004L18.2577 12.4902C18.0391 12.4658 17.8459 12.6225 17.8105 12.8369C17.2021 16.5047 13.9172 19.1667 10 19.1667C6.08277 19.1667 2.79785 16.5047 2.18953 12.8369C2.15617 12.6351 1.91488 12.4984 1.70613 12.4984C1.6927 12.4984 1.67969 12.4988 1.66668 12.5C1.2073 12.5 0.833359 12.1261 0.833359 11.6667C0.833359 11.2073 1.2073 10.8334 1.65895 10.8329L1.74234 10.8431C1.95148 10.8606 2.15414 10.7109 2.18953 10.4964C2.71625 7.32059 5.25102 4.90239 8.46406 4.30989C9.01379 4.75907 9.67586 5.00001 10.3471 5.00001C10.9535 5.00001 11.5578 4.80333 12.0814 4.42751C15.033 5.18024 17.3139 7.50239 17.8105 10.4965C17.8459 10.7109 18.0383 10.8594 18.2577 10.8431L18.3334 10.8334C18.7927 10.8334 19.1667 11.2073 19.1667 11.6667C19.1667 12.1261 18.7927 12.5 18.3411 12.5004Z" fill="url(#paint3_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="6.6667" y1="10.8335" x2="6.6667" y2="12.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="13.3334" y1="10.8335" x2="13.3334" y2="12.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="9.99944" y1="15.0005" x2="9.99944" y2="16.6669" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="10" y1="0" x2="10" y2="20" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
</defs>
</svg>`;

//backgroundButton(smallbtn)
const bluebutton = `<svg width="183" height="36" viewBox="0 0 183 36" fill="none" >
<rect width="183" height="36" rx="18" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="91.5" y1="0" x2="91.5" y2="36" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
</defs>
</svg>`;

const bluebuttonSm = `<svg width="117" height="36" viewBox="0 0 117 36" fill="none" >
<rect width="117" height="36" rx="18" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="58.5" y1="0" x2="58.5" y2="36" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
</defs>
</svg>`;

const graybutton = `<svg width="183" height="36" viewBox="0 0 183 36" fill="none" >
<rect width="183" height="36" rx="18" fill="#DEDEDE"/>
</svg>`;

const bottombargreenbtn = `<svg width="110" height="36" viewBox="0 0 110 36" fill="none" >
<rect width="110" height="36" rx="18" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="55" y1="0" x2="55" y2="36" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
</defs>
</svg>`;

//backgroundbutton(squarebtn)
const graysquare = `<svg width="117" height="80" viewBox="0 0 117 80" fill="none" >
<rect width="117" height="80" rx="16" fill="#DEDEDE"/>
</svg>`;

const babymotionsquare = `<svg width="117" height="80" viewBox="0 0 117 80" fill="none" >
<rect width="117" height="80" rx="16" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="58.5" y1="0" x2="58.5" y2="80" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFDB5C"/>
<stop offset="1" stop-color="#FFC700"/>
</linearGradient>
</defs>
</svg>`;

const bluesquare = `<svg width="117" height="80" viewBox="0 0 117 80" fill="none" >
<rect width="117" height="80" rx="16" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="117" y1="80" x2="57.1104" y2="-30.8542" gradientUnits="userSpaceOnUse">
<stop stop-color="#0030DB"/>
<stop offset="1" stop-color="#44B0FF"/>
</linearGradient>
</defs>
</svg>`;

const greenmindsquare = `<svg width="117" height="80" viewBox="0 0 117 80" fill="none" >
<rect width="117" height="80" rx="16" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="117" y1="80" x2="57.1104" y2="-30.8542" gradientUnits="userSpaceOnUse">
<stop stop-color="#41CA00"/>
<stop offset="1" stop-color="#63F98D"/>
</linearGradient>
</defs>
</svg>`;

const orangesquare = `<svg width="117" height="80" viewBox="0 0 117 80" fill="none" >
<rect width="117" height="80" rx="16" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="117" y1="80" x2="57.1104" y2="-30.8542" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7A00"/>
<stop offset="1" stop-color="#FFC225"/>
</linearGradient>
</defs>
</svg>`;

const blueyesquare = `<svg width="117" height="80" viewBox="0 0 117 80" fill="none" >
<rect width="117" height="80" rx="16" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="117" y1="80" x2="57.1104" y2="-30.8542" gradientUnits="userSpaceOnUse">
<stop stop-color="#4481EB"/>
<stop offset="1" stop-color="#04BEFE"/>
</linearGradient>
</defs>
</svg>`;

const purplesquare = `<svg width="117" height="80" viewBox="0 0 117 80" fill="none" >
<rect width="117" height="80" rx="16" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="19.0125" y1="-2.23516e-09" x2="60.2256" y2="94.5478" gradientUnits="userSpaceOnUse">
<stop stop-color="#D57BFF"/>
<stop offset="1" stop-color="#DC02FF"/>
</linearGradient>
</defs>
</svg>`;

const pinksquare = `<svg width="117" height="80" viewBox="0 0 117 80" fill="none" >
<rect width="117" height="80" rx="16" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="117" y1="80" x2="57.1104" y2="-30.8542" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6188"/>
<stop offset="1" stop-color="#FFB199"/>
</linearGradient>
</defs>
</svg>`;

//backgroundbutton(squarebtnsmall)
const babymotionsquareSm = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" >
<rect width="40" height="40" rx="8" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFDB5C"/>
<stop offset="1" stop-color="#FFC700"/>
</linearGradient>
</defs>
</svg>`;

const bluesquareSm = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" >
<rect width="40" height="40" rx="8" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="40" y1="40" x2="5.16843" y2="-4.0837" gradientUnits="userSpaceOnUse">
<stop stop-color="#0030DB"/>
<stop offset="1" stop-color="#44B0FF"/>
</linearGradient>
</defs>
</svg>`;

const greenmindsquareSm = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" >
<rect width="40" height="40" rx="8" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="0" y1="0" x2="28" y2="35.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#5FFF95"/>
<stop offset="1" stop-color="#00C442"/>
</linearGradient>
</defs>
</svg>`;

const orangesquareSm = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" >
<rect width="40" height="40" rx="8" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="40" y1="40" x2="5.16843" y2="-4.0837" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7A00"/>
<stop offset="1" stop-color="#FFC225"/>
</linearGradient>
</defs>
</svg>`;

const blueyesquareSm = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" >
<rect width="40" height="40" rx="8" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="40" y1="40" x2="5.16843" y2="-4.0837" gradientUnits="userSpaceOnUse">
<stop stop-color="#00A3FF"/>
<stop offset="1" stop-color="#99E7FF"/>
</linearGradient>
</defs>
</svg>`;

const purplesquareSm = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" >
<rect width="40" height="40" rx="8" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="6.5" y1="-1.11758e-09" x2="32" y2="40" gradientUnits="userSpaceOnUse">
<stop stop-color="#D57BFF"/>
<stop offset="1" stop-color="#DC02FF"/>
</linearGradient>
</defs>
</svg>`;

const pinksquareSm = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" >
<rect width="40" height="40" rx="8" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="40" y1="40" x2="5.16843" y2="-4.0837" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6188"/>
<stop offset="1" stop-color="#FFB199"/>
</linearGradient>
</defs>
</svg>`;

const graysquareSm = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" >
<rect width="40" height="40" rx="8" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="40" y1="40" x2="5.16843" y2="-4.0837" gradientUnits="userSpaceOnUse">
<stop stop-color="#DEDEDE"/>
<stop offset="1" stop-color="#828282"/>
</linearGradient>
</defs>
</svg>`;

const filterIcon = `<svg width="20" height="18" viewBox="0 0 20 18" fill="none" >
<path d="M8.12139 14.6042H1.03308" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.2831 3.70038H18.3714" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.31707 3.63954C6.31707 2.18192 5.12664 1 3.65854 1C2.19043 1 1 2.18192 1 3.63954C1 5.09715 2.19043 6.27907 3.65854 6.27907C5.12664 6.27907 6.31707 5.09715 6.31707 3.63954Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.0001 14.5604C19.0001 13.1028 17.8105 11.9209 16.3424 11.9209C14.8734 11.9209 13.683 13.1028 13.683 14.5604C13.683 16.018 14.8734 17.2 16.3424 17.2C17.8105 17.2 19.0001 16.018 19.0001 14.5604Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const locationIcon = `
<svg width="18" height="21" viewBox="0 0 18 21" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6666 9.0007C11.6666 7.52735 10.4728 6.3335 9.00052 6.3335C7.52717 6.3335 6.33331 7.52735 6.33331 9.0007C6.33331 10.473 7.52717 11.6668 9.00052 11.6668C10.4728 11.6668 11.6666 10.473 11.6666 9.0007Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.99948 20.2C7.7211 20.2 1 14.7583 1 9.06751C1 4.61241 4.58091 1 8.99948 1C13.4181 1 17 4.61241 17 9.06751C17 14.7583 10.2779 20.2 8.99948 20.2Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const locationGreenIcon = `
<svg width="18" height="21" viewBox="0 0 18 21" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6666 9.0007C11.6666 7.52735 10.4728 6.3335 9.00052 6.3335C7.52717 6.3335 6.33331 7.52735 6.33331 9.0007C6.33331 10.473 7.52717 11.6668 9.00052 11.6668C10.4728 11.6668 11.6666 10.473 11.6666 9.0007Z" stroke="#e9636e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.99948 20.2C7.7211 20.2 1 14.7583 1 9.06751C1 4.61241 4.58091 1 8.99948 1C13.4181 1 17 4.61241 17 9.06751C17 14.7583 10.2779 20.2 8.99948 20.2Z" stroke="#e9636e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const locationGrayIcon = `
<svg width="18" height="21" viewBox="0 0 18 21" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6666 9.0007C11.6666 7.52735 10.4728 6.3335 9.00052 6.3335C7.52717 6.3335 6.33331 7.52735 6.33331 9.0007C6.33331 10.473 7.52717 11.6668 9.00052 11.6668C10.4728 11.6668 11.6666 10.473 11.6666 9.0007Z" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.99948 20.2C7.7211 20.2 1 14.7583 1 9.06751C1 4.61241 4.58091 1 8.99948 1C13.4181 1 17 4.61241 17 9.06751C17 14.7583 10.2779 20.2 8.99948 20.2Z" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const documentIcon = `
<svg width="20" height="22" viewBox="0 0 20 22" fill="none" >
<path d="M13.9241 15.5527H6.12573" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.9241 11.0313H6.12573" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.10155 6.51955H6.12585" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.132 1C14.132 1 5.83996 1.00432 5.827 1.00432C2.8459 1.02268 1 2.98416 1 5.97606V15.9087C1 18.9158 2.85995 20.8848 5.86697 20.8848C5.86697 20.8848 14.1579 20.8815 14.1719 20.8815C17.153 20.8632 19 18.9006 19 15.9087V5.97606C19 2.96904 17.139 1 14.132 1Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const documentGreenIcon = `
<svg width="20" height="22" viewBox="0 0 20 22" fill="none" >
<path d="M13.9241 15.5527H6.12573" stroke="#e9636e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.9241 11.0313H6.12573" stroke="#e9636e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.10155 6.51955H6.12585" stroke="#e9636e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.132 1C14.132 1 5.83996 1.00432 5.827 1.00432C2.8459 1.02268 1 2.98416 1 5.97606V15.9087C1 18.9158 2.85995 20.8848 5.86697 20.8848C5.86697 20.8848 14.1579 20.8815 14.1719 20.8815C17.153 20.8632 19 18.9006 19 15.9087V5.97606C19 2.96904 17.139 1 14.132 1Z" stroke="#e9636e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const documentPinkIcon = `
<svg width="20" height="22" viewBox="0 0 20 22" fill="none" >
<path d="M13.9241 15.5527H6.12573" stroke="#F26091" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.9241 11.0313H6.12573" stroke="#F26091" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.10155 6.51955H6.12585" stroke="#F26091" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.132 1C14.132 1 5.83996 1.00432 5.827 1.00432C2.8459 1.02268 1 2.98416 1 5.97606V15.9087C1 18.9158 2.85995 20.8848 5.86697 20.8848C5.86697 20.8848 14.1579 20.8815 14.1719 20.8815C17.153 20.8632 19 18.9006 19 15.9087V5.97606C19 2.96904 17.139 1 14.132 1Z" stroke="#F26091" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const documentGrayIcon = `
<svg width="20" height="22" viewBox="0 0 20 22" fill="none" >
<path d="M13.9241 15.5527H6.12573" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.9241 11.0313H6.12573" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.10155 6.51955H6.12585" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.132 1C14.132 1 5.83996 1.00432 5.827 1.00432C2.8459 1.02268 1 2.98416 1 5.97606V15.9087C1 18.9158 2.85995 20.8848 5.86697 20.8848C5.86697 20.8848 14.1579 20.8815 14.1719 20.8815C17.153 20.8632 19 18.9006 19 15.9087V5.97606C19 2.96904 17.139 1 14.132 1Z" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const clockIcon = `
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 11C21 16.5232 16.5232 21 11 21C5.47676 21 1 16.5232 1 11C1 5.47676 5.47676 1 11 1C16.5232 1 21 5.47676 21 11Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.7098 14.1811L10.6341 11.7498V6.50977" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const clockGreenIcon = `
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 11C21 16.5232 16.5232 21 11 21C5.47676 21 1 16.5232 1 11C1 5.47676 5.47676 1 11 1C16.5232 1 21 5.47676 21 11Z" stroke="#e9636e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.7098 14.1811L10.6341 11.7498V6.50977" stroke="#e9636e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const clockGrayIcon = `
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 11C21 16.5232 16.5232 21 11 21C5.47676 21 1 16.5232 1 11C1 5.47676 5.47676 1 11 1C16.5232 1 21 5.47676 21 11Z" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.7098 14.1811L10.6341 11.7498V6.50977" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const cateIcon = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.5C1 1.87479 1.02811 1 4.5 1C7.97189 1 8 1.87479 8 4.5C8 7.12521 8.01107 8 4.5 8C0.988927 8 1 7.12521 1 4.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.5C12 1.87479 12.0281 1 15.5 1C18.9719 1 19 1.87479 19 4.5C19 7.12521 19.0111 8 15.5 8C11.9889 8 12 7.12521 12 4.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 15.5C1 12.8748 1.02811 12 4.5 12C7.97189 12 8 12.8748 8 15.5C8 18.1252 8.01107 19 4.5 19C0.988927 19 1 18.1252 1 15.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.5C12 12.8748 12.0281 12 15.5 12C18.9719 12 19 12.8748 19 15.5C19 18.1252 19.0111 19 15.5 19C11.9889 19 12 18.1252 12 15.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const cateGrayIcon = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.5C1 1.87479 1.02811 1 4.5 1C7.97189 1 8 1.87479 8 4.5C8 7.12521 8.01107 8 4.5 8C0.988927 8 1 7.12521 1 4.5Z" stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.5C12 1.87479 12.0281 1 15.5 1C18.9719 1 19 1.87479 19 4.5C19 7.12521 19.0111 8 15.5 8C11.9889 8 12 7.12521 12 4.5Z" stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 15.5C1 12.8748 1.02811 12 4.5 12C7.97189 12 8 12.8748 8 15.5C8 18.1252 8.01107 19 4.5 19C0.988927 19 1 18.1252 1 15.5Z" stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.5C12 12.8748 12.0281 12 15.5 12C18.9719 12 19 12.8748 19 15.5C19 18.1252 19.0111 19 15.5 19C11.9889 19 12 18.1252 12 15.5Z" stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const babyLessonIconCate = `<svg width="20" height="19" viewBox="0 0 20 19" fill="none" >
<path d="M15.9077 8.18471C15.0982 8.18471 14.3069 7.94464 13.6339 7.49488C12.9608 7.04511 12.4363 6.40584 12.1266 5.65794C11.8169 4.91004 11.736 4.08709 11.8941 3.29319C12.0522 2.4993 12.4421 1.77011 13.0147 1.19787C13.5872 0.625631 14.3166 0.23604 15.1106 0.0783761C15.9046 -0.0792878 16.7275 0.00205748 17.4752 0.312124C18.223 0.622191 18.8619 1.14705 19.3114 1.82031C19.7608 2.49358 20.0004 3.285 20 4.09448C19.9989 5.1793 19.5673 6.21933 18.8 6.98622C18.0327 7.7531 16.9925 8.18415 15.9077 8.18471ZM15.9077 0.427752C15.1825 0.427752 14.4735 0.642802 13.8705 1.04571C13.2675 1.44861 12.7976 2.02128 12.52 2.69129C12.2425 3.36129 12.1699 4.09855 12.3114 4.80983C12.4529 5.5211 12.8021 6.17445 13.3149 6.68726C13.8277 7.20006 14.481 7.54928 15.1923 7.69076C15.9036 7.83224 16.6409 7.75963 17.3109 7.4821C17.9809 7.20458 18.5535 6.7346 18.9564 6.13161C19.3593 5.52862 19.5744 4.8197 19.5744 4.09448C19.5738 3.12218 19.1873 2.18986 18.4998 1.50234C17.8123 0.814812 16.88 0.428316 15.9077 0.427752Z" fill="#FFC700"/>
<path d="M7.93572 18.6168H1.9004C1.39759 18.6129 0.916474 18.4114 0.56092 18.0559C0.205367 17.7003 0.0038958 17.2192 0 16.7164V16.078C0.0038958 15.5751 0.205367 15.094 0.56092 14.7385C0.916474 14.3829 1.39759 14.1814 1.9004 14.1776H4.81378L4.57543 13.7179C3.77051 13.429 3.06927 12.908 2.56029 12.2207C2.05131 11.5335 1.75742 10.7108 1.71575 9.85663C1.67407 9.00244 1.88649 8.15507 2.32615 7.42154C2.76582 6.68801 3.41302 6.10124 4.18599 5.73534L5.19472 5.25865H5.00106L6.45668 4.67129L6.55032 4.63511L8.83165 3.70726L8.87422 3.68172C8.99173 3.6228 9.11514 3.57644 9.24238 3.54339C9.66279 3.4355 10.1074 3.47361 10.5033 3.65146C10.8992 3.82932 11.223 4.13638 11.4216 4.52232L16.6439 14.899C16.7612 15.122 16.8327 15.3661 16.8546 15.6171C16.8764 15.868 16.8479 16.1208 16.7709 16.3607C16.6939 16.6006 16.5699 16.8227 16.4061 17.0141C16.2423 17.2055 16.042 17.3623 15.8169 17.4754C15.5918 17.5886 15.3464 17.6557 15.0951 17.6729C14.8438 17.6901 14.5915 17.6571 14.3531 17.5757C14.1147 17.4943 13.8949 17.3663 13.7065 17.199C13.5181 17.0317 13.365 16.8286 13.256 16.6015L10.9151 11.9537C10.6252 12.2018 10.3039 12.4107 9.95955 12.5751L8.65715 13.1837L9.5318 14.9224C9.59644 15.0462 9.64711 15.1768 9.6829 15.3118C9.78906 15.5518 9.84414 15.8113 9.84463 16.0737V16.7121C9.84183 17.2172 9.63968 17.7006 9.28217 18.0573C8.92467 18.414 8.44074 18.6151 7.93572 18.6168ZM1.9004 14.6074C1.50944 14.608 1.13465 14.7636 0.858197 15.04C0.581744 15.3165 0.426185 15.6912 0.425622 16.0822V16.7206C0.426185 17.1116 0.581744 17.4864 0.858197 17.7628C1.13465 18.0393 1.50944 18.1949 1.9004 18.1954H7.93572C8.32705 18.1954 8.70239 18.0401 8.9793 17.7636C9.25621 17.4871 9.41206 17.112 9.41263 16.7206V16.0822C9.41237 15.8729 9.36738 15.6662 9.28068 15.4757L9.26792 15.4395C9.24177 15.3288 9.20248 15.2217 9.15087 15.1203L8.08681 12.9922L9.7893 12.1899C10.1821 12.0056 10.5417 11.7575 10.8534 11.4557L11.0662 11.2429L13.6625 16.3993C13.7282 16.6001 13.8365 16.7844 13.9799 16.9396C14.1233 17.0947 14.2984 17.2172 14.4934 17.2986C14.6884 17.38 14.8986 17.4184 15.1098 17.4113C15.321 17.4041 15.5281 17.3515 15.7171 17.2571C15.9062 17.1627 16.0726 17.0286 16.2052 16.8641C16.3377 16.6995 16.4332 16.5083 16.4852 16.3035C16.5372 16.0987 16.5445 15.8851 16.5065 15.6773C16.4685 15.4694 16.3862 15.2722 16.2651 15.099L11.0406 4.71385C10.888 4.41388 10.6375 4.17503 10.3306 4.03687C10.0237 3.8987 9.6788 3.86951 9.35304 3.95412C9.25341 3.9791 9.15701 4.01552 9.06574 4.06265L9.02957 4.08393H9.00829L6.70354 5.02456L6.61629 5.0586L6.52053 5.09904L4.36262 6.11628C3.65559 6.44717 3.06411 6.98259 2.66466 7.65329C2.26522 8.32398 2.07619 9.09909 2.12203 9.87838C2.16787 10.6577 2.44647 11.4053 2.92179 12.0245C3.39711 12.6437 4.0473 13.1061 4.78825 13.3518L4.87124 13.3795L5.49478 14.6159L1.9004 14.6074ZM8.17407 11.8409C7.97708 11.8211 7.78934 11.7475 7.6314 11.6281L7.59948 11.6025L6.53542 10.5385C6.42051 10.4534 5.33517 9.67235 4.44775 10.7641C4.39962 10.8651 4.33109 10.9551 4.24649 11.0283C4.16188 11.1016 4.06303 11.1565 3.95615 11.1897C3.88854 11.1985 3.8198 11.1909 3.75573 11.1675C3.69166 11.1442 3.63413 11.1058 3.58799 11.0556L3.56033 11.0237C3.18786 10.3924 3.06704 9.64392 3.22196 8.92751C3.44754 7.90176 4.21366 6.97816 5.49903 6.18863C5.53042 6.16894 5.56578 6.15643 5.60258 6.15202C5.63937 6.1476 5.67669 6.15138 5.71184 6.16309C6.13747 6.29291 7.45689 8.91687 8.47839 11.0939V11.1173C8.51456 11.2259 8.61671 11.6004 8.38475 11.777C8.32385 11.8222 8.24985 11.8461 8.17407 11.8451V11.8409ZM7.88464 11.2791C7.9569 11.3279 8.0339 11.3692 8.11448 11.4025C8.10871 11.3572 8.09946 11.3123 8.08681 11.2684C7.12917 9.2148 5.98637 7.01221 5.62246 6.61C4.50308 7.32079 3.83485 8.12734 3.63907 9.00837C3.50908 9.61034 3.60289 10.239 3.90295 10.7768C3.97703 10.714 4.03719 10.6365 4.07959 10.5491L4.10512 10.5129C5.05639 9.32334 6.29069 9.79578 6.80995 10.2108L6.8291 10.2278L7.88464 11.2791Z" fill="#FFC700"/>
</svg>`;

const cissorIconCate = `<svg width="20" height="15" viewBox="0 0 20 15" fill="none" >
<path d="M18.529 11.5723C18.2812 11.5691 18.0343 11.5417 17.7918 11.4904C15.3704 10.9889 7.7265 9.26675 7.65058 9.24877L7.50074 9.21681V9.06297C7.50074 9.033 7.36888 6.14208 5.85449 5.68656C5.33505 5.53073 4.96544 5.41286 4.74967 5.33294C4.18647 5.75994 3.4891 5.97139 2.7836 5.92908C2.0781 5.88677 1.411 5.59349 0.902872 5.10224C0.394742 4.61099 0.0790991 3.95418 0.0129873 3.25051C-0.0531246 2.54683 0.134655 1.84273 0.542392 1.26543C0.950129 0.688127 1.55092 0.275724 2.2362 0.102746C2.92147 -0.0702327 3.64602 0.00762592 4.2789 0.322251C4.91178 0.636877 5.41124 1.16751 5.68701 1.81826C5.96278 2.46901 5.99668 3.19694 5.78257 3.8705C5.75411 3.96016 5.72076 4.0482 5.68268 4.13422L19.9255 9.57642L19.9515 9.67632C19.9515 9.71427 20.1792 10.6153 19.6478 11.1707C19.4991 11.3112 19.323 11.4194 19.1304 11.4886C18.9379 11.5577 18.7331 11.5862 18.529 11.5723ZM7.88433 8.89315C8.95919 9.13489 15.6421 10.6373 17.8737 11.0908C18.5909 11.2387 19.0904 11.1707 19.3621 10.891C19.6338 10.6113 19.6158 10.0799 19.5839 9.86811L5.12926 4.35198L5.23316 4.1522C5.30077 4.02396 5.35758 3.8903 5.40298 3.75262C5.60965 3.10432 5.55071 2.40051 5.23908 1.79561C4.92746 1.19071 4.3886 0.734135 3.74074 0.52606C3.09245 0.318832 2.38839 0.377519 1.78335 0.689218C1.17831 1.00092 0.721802 1.54012 0.514181 2.18829C0.346337 2.71535 0.353346 3.28254 0.534167 3.80528C0.714987 4.32803 1.05993 4.77833 1.51756 5.08903C1.97519 5.39973 2.52099 5.55419 3.07357 5.52938C3.62615 5.50457 4.15591 5.30181 4.58385 4.95135L4.67775 4.87543L4.78763 4.92138C4.90351 4.96933 5.20319 5.07522 5.96438 5.30497C7.54469 5.77847 7.83439 8.23985 7.88433 8.89315Z" fill="#e9636e"/>
<path d="M3.92856 14.7369C3.66751 14.7366 3.4076 14.7024 3.15539 14.635C2.75725 14.5299 2.38536 14.343 2.06339 14.0863C1.74141 13.8296 1.47641 13.5086 1.28523 13.1439C1.09405 12.7792 0.98089 12.3787 0.952945 11.9679C0.925001 11.557 0.982887 11.1449 1.12292 10.7576C1.26295 10.3704 1.48206 10.0165 1.76631 9.71858C2.05055 9.42063 2.39371 9.18512 2.77394 9.02703C3.15417 8.86895 3.56315 8.79174 3.97484 8.80033C4.38654 8.80892 4.79194 8.90312 5.16524 9.07693C5.36503 8.95506 5.69468 8.76127 6.16418 8.49755C7.54671 7.73237 7.05923 4.87741 7.05323 4.84944L7.02726 4.6976L7.16711 4.63367C7.23704 4.5997 14.3415 1.29322 16.6011 0.290292C17.4002 -0.0653295 18.0355 -0.0952972 18.4831 0.206382C19.1204 0.635924 19.0964 1.56094 19.0944 1.60489V1.70878L6.33799 10.0479C6.39394 10.1278 6.44588 10.2057 6.49183 10.2856C6.75158 10.7363 6.88834 11.2474 6.88843 11.7676C6.88853 12.2877 6.75194 12.7988 6.49235 13.2496C6.23277 13.7004 5.85929 14.0751 5.40934 14.3361C4.95938 14.5971 4.44874 14.7353 3.92856 14.7369ZM3.92856 9.2028C3.53559 9.20441 3.14823 9.29622 2.79633 9.47114C2.44444 9.64606 2.13739 9.89944 1.89886 10.2117C1.66033 10.524 1.49667 10.8869 1.42051 11.2725C1.34434 11.658 1.35769 12.0558 1.45954 12.4354C1.56138 12.8149 1.749 13.166 2.00794 13.4616C2.26688 13.7573 2.59022 13.9895 2.95305 14.1404C3.31589 14.2913 3.70853 14.357 4.10072 14.3322C4.49292 14.3075 4.8742 14.193 5.21519 13.9977C5.54127 13.8119 5.82231 13.5565 6.03826 13.2495C6.2542 12.9426 6.39971 12.5918 6.46441 12.2221C6.52911 11.8525 6.51139 11.4731 6.41252 11.111C6.31365 10.749 6.13608 10.4133 5.89247 10.1278L5.74862 9.954L18.6988 1.48902C18.6868 1.27524 18.6169 0.773777 18.2633 0.53603C17.9097 0.298283 17.4362 0.358219 16.7689 0.655902C14.6871 1.57892 8.47772 4.46784 7.47678 4.93335C7.56669 5.58066 7.80643 8.04803 6.36397 8.84718C5.66671 9.23277 5.39899 9.39859 5.2951 9.47052L5.19721 9.53844L5.08932 9.4845C4.72739 9.29978 4.32691 9.20325 3.92057 9.2028H3.92856Z" fill="#e9636e"/>
<path d="M8.49163 7.47459C8.35965 7.47459 8.23064 7.43546 8.1209 7.36214C8.01117 7.28881 7.92564 7.1846 7.87514 7.06267C7.82463 6.94073 7.81142 6.80656 7.83716 6.67712C7.86291 6.54768 7.92646 6.42878 8.01978 6.33546C8.11311 6.24214 8.23201 6.17858 8.36145 6.15284C8.49089 6.12709 8.62506 6.1403 8.74699 6.19081C8.86892 6.24131 8.97314 6.32684 9.04646 6.43658C9.11978 6.54631 9.15892 6.67533 9.15892 6.8073C9.15839 6.98412 9.08792 7.15354 8.96289 7.27857C8.83787 7.40359 8.66844 7.47407 8.49163 7.47459ZM8.49163 6.53959C8.43868 6.53959 8.38692 6.55529 8.3429 6.58471C8.29887 6.61412 8.26456 6.65594 8.24429 6.70485C8.22403 6.75377 8.21873 6.8076 8.22906 6.85953C8.23939 6.91146 8.26489 6.95917 8.30233 6.99661C8.33977 7.03405 8.38747 7.05955 8.4394 7.06987C8.49133 7.0802 8.54516 7.0749 8.59408 7.05464C8.643 7.03438 8.68481 7.00006 8.71423 6.95604C8.74364 6.91201 8.75934 6.86025 8.75934 6.8073C8.76041 6.77148 8.75428 6.73581 8.74131 6.7024C8.72833 6.66899 8.70878 6.63853 8.68382 6.61281C8.65885 6.5871 8.62897 6.56666 8.59596 6.55271C8.56295 6.53876 8.52747 6.53158 8.49163 6.5316V6.53959Z" fill="#e9636e"/>
</svg>`;

const brainIconCate = `<svg width="20" height="17" viewBox="0 0 20 17" fill="none" >
<path d="M7.8825 15.9364C7.74246 15.9366 7.60284 15.9212 7.46623 15.8904C6.93705 15.7523 6.47228 15.4346 6.15137 14.9918C6.14722 15.0259 6.13436 15.0583 6.11403 15.086C6.0937 15.1137 6.06659 15.1357 6.0353 15.1499C5.94524 15.1919 3.79583 16.1686 2.27484 15.246C1.41228 14.7236 0.939969 13.7089 0.873926 12.228C0.87194 12.2154 0.87194 12.2026 0.873926 12.19C0.883933 12.1179 1.15211 10.4088 2.46096 9.62628C3.24347 9.15598 4.22212 9.12595 5.36686 9.53622L6.10134 9.78038C5.93923 9.31208 5.77513 8.53157 6.12336 7.86513C6.43756 7.26474 7.09199 6.8985 8.06663 6.77842C8.09291 6.77514 8.11958 6.77706 8.14512 6.78408C8.17066 6.7911 8.19456 6.80309 8.21547 6.81935C8.23637 6.83561 8.25387 6.85583 8.26696 6.87885C8.28006 6.90188 8.28849 6.92725 8.29177 6.95354C8.29506 6.97982 8.29313 7.00649 8.28611 7.03203C8.27909 7.05756 8.26711 7.08147 8.25085 7.10238C8.23458 7.12328 8.21436 7.14078 8.19134 7.15388C8.16832 7.16697 8.14294 7.1754 8.11666 7.17868C7.27811 7.28275 6.72775 7.57894 6.47759 8.05525C6.0453 8.88179 6.62568 10.0085 6.63168 10.0205C6.65027 10.056 6.65778 10.0962 6.65325 10.136C6.64872 10.1758 6.63236 10.2133 6.60628 10.2437C6.5802 10.2741 6.5456 10.296 6.50696 10.3065C6.46832 10.317 6.42741 10.3157 6.38953 10.3027L5.23678 9.91847C4.20611 9.55023 3.34354 9.56824 2.6671 9.97251C1.58839 10.6149 1.30421 12.0579 1.26618 12.234C1.33222 13.5629 1.73849 14.4614 2.46696 14.9077C3.5897 15.5882 5.18875 15.0558 5.69308 14.8577L5.16473 13.1126C5.15658 13.0875 5.15346 13.061 5.15554 13.0347C5.15762 13.0084 5.16485 12.9828 5.17684 12.9592C5.18883 12.9357 5.20532 12.9148 5.2254 12.8977C5.24547 12.8806 5.26871 12.8675 5.29381 12.8594C5.31891 12.8512 5.34537 12.8481 5.37168 12.8502C5.39798 12.8523 5.42362 12.8595 5.44713 12.8715C5.47064 12.8835 5.49156 12.9 5.50869 12.9201C5.52582 12.9401 5.53883 12.9634 5.54698 12.9885C6.06732 14.4754 6.73776 15.322 7.53628 15.5021C8.3348 15.6822 9.1053 15.1019 9.31544 14.9157V1.8472C9.17335 1.04668 8.88716 0.588378 8.46289 0.446285C7.65836 0.196122 6.40554 1.21078 5.99327 1.61105C5.97122 1.63296 5.94436 1.64943 5.91483 1.65916C5.88531 1.66888 5.85392 1.6716 5.82316 1.66708C4.64039 1.49297 3.84386 1.63706 3.52365 2.08135C3.08337 2.69375 3.5957 3.72242 3.60171 3.73243C3.61367 3.75595 3.62087 3.7816 3.62292 3.80791C3.62497 3.83422 3.62181 3.86067 3.61364 3.88576C3.60546 3.91085 3.59242 3.93408 3.57526 3.95413C3.55811 3.97418 3.53717 3.99065 3.51365 4.00261C3.49013 4.01457 3.46448 4.02177 3.43817 4.02382C3.41187 4.02587 3.38542 4.02271 3.36033 4.01454C3.33524 4.00636 3.312 3.99332 3.29195 3.97616C3.27191 3.95901 3.25543 3.93807 3.24347 3.91455C3.21746 3.86252 2.61906 2.65373 3.19944 1.8472C3.60971 1.27883 4.47828 1.0807 5.78313 1.25882C6.11935 0.94261 7.51026 -0.278188 8.59897 0.058032C9.17735 0.240151 9.5576 0.82053 9.72571 1.77916C9.72681 1.79047 9.72681 1.80186 9.72571 1.81318V14.9998C9.72586 15.0261 9.72081 15.0522 9.71085 15.0766C9.70089 15.101 9.68622 15.1232 9.66767 15.1419C9.63565 15.1779 8.87115 15.9364 7.8825 15.9364Z" fill="#63F98D"/>
<path d="M1.14007 11.8437C1.09836 11.8434 1.05777 11.8301 1.02399 11.8056C0.98396 11.7756 0.0653585 11.0952 0.00331799 9.96043C-0.0407108 9.1599 0.353548 8.34737 1.18009 7.55886C0.873888 7.09655 0.0273371 5.66162 0.519659 4.60292C0.825859 3.9465 1.57235 3.57425 2.73911 3.4982C2.77713 3.4882 4.64635 3.51822 4.7184 6.08189C4.7184 6.13497 4.69732 6.18587 4.65978 6.2234C4.62225 6.26094 4.57134 6.28202 4.51827 6.28202C4.46519 6.28202 4.41429 6.26094 4.37676 6.2234C4.33922 6.18587 4.31814 6.13497 4.31814 6.08189C4.2581 3.92048 2.81316 3.88045 2.75312 3.88045C1.75246 3.9485 1.12205 4.24269 0.883898 4.75502C0.399582 5.7937 1.59236 7.43478 1.60436 7.45279C1.63338 7.49279 1.64657 7.5421 1.6414 7.59125C1.63623 7.64039 1.61306 7.68588 1.57635 7.71896C0.759815 8.46545 0.363557 9.20793 0.401582 9.9204C0.451615 10.863 1.25213 11.4614 1.26014 11.4674C1.28132 11.483 1.29921 11.5027 1.31279 11.5252C1.32636 11.5478 1.33536 11.5728 1.33927 11.5988C1.34317 11.6248 1.3419 11.6513 1.33554 11.6769C1.32917 11.7024 1.31783 11.7264 1.30217 11.7476C1.28511 11.7757 1.2614 11.7991 1.23313 11.8159C1.20486 11.8327 1.1729 11.8422 1.14007 11.8437Z" fill="#63F98D"/>
<path d="M12.1192 16.1264C11.1286 16.1264 10.3661 15.3679 10.3281 15.3259C10.2918 15.2883 10.2717 15.238 10.272 15.1858V2.0112C10.2711 1.99988 10.2711 1.9885 10.272 1.97718C10.4401 1.01855 10.8204 0.440174 11.4008 0.256054C12.4875 -0.0881707 13.8804 1.13463 14.2146 1.45684C15.5195 1.28072 16.39 1.47885 16.7983 2.05723C17.3807 2.85775 16.7803 4.07055 16.7543 4.12258C16.7282 4.16588 16.6867 4.19772 16.6382 4.21171C16.5896 4.22569 16.5376 4.2208 16.4925 4.198C16.4474 4.17519 16.4126 4.13618 16.3951 4.08878C16.3775 4.04138 16.3786 3.98911 16.398 3.94246C16.398 3.94246 16.9124 2.89778 16.4741 2.28938C16.1519 1.84509 15.3573 1.703 14.1766 1.87711C14.1455 1.88119 14.114 1.87827 14.0842 1.86858C14.0544 1.85888 14.0272 1.84265 14.0045 1.82108C13.5922 1.40881 12.3414 0.398147 11.5208 0.656316C11.0986 0.790403 10.8104 1.25671 10.6703 2.05723V15.1238C10.8704 15.3079 11.6269 15.8963 12.4475 15.7101C13.268 15.524 13.9164 14.6815 14.4387 13.1945C14.4566 13.1459 14.4927 13.1062 14.5393 13.0836C14.5859 13.061 14.6394 13.0573 14.6886 13.0734C14.7379 13.0895 14.7789 13.124 14.8033 13.1697C14.8276 13.2154 14.8332 13.2688 14.819 13.3186L14.2907 15.0637C14.797 15.2639 16.398 15.7922 17.5188 15.1138C18.2532 14.6675 18.6595 13.7689 18.7195 12.442C18.6895 12.2639 18.4033 10.823 17.3186 10.1785C16.6422 9.77827 15.7796 9.75826 14.753 10.1245L13.5962 10.5088C13.5577 10.5207 13.5164 10.5208 13.4778 10.5089C13.4393 10.497 13.4052 10.4737 13.3801 10.4421C13.355 10.4105 13.34 10.3721 13.3371 10.3318C13.3343 10.2916 13.3437 10.2514 13.364 10.2166C13.364 10.2166 13.9484 9.07381 13.5161 8.24928C13.266 7.77497 12.7156 7.48077 11.8771 7.37471C11.824 7.36807 11.7757 7.34062 11.7429 7.2984C11.71 7.25618 11.6953 7.20264 11.702 7.14956C11.7086 7.09648 11.736 7.04821 11.7783 7.01537C11.8205 6.98253 11.874 6.96781 11.9271 6.97444C12.9037 7.09652 13.5562 7.46276 13.8704 8.06115C14.2206 8.72759 14.0545 9.5081 13.8924 9.9784L14.6309 9.73225C15.7716 9.33198 16.7503 9.354 17.5348 9.8223C18.8416 10.6048 19.1098 12.3139 19.1218 12.386C19.1228 12.3986 19.1228 12.4113 19.1218 12.424C19.0518 13.905 18.5795 14.9196 17.7209 15.442C16.1979 16.3646 14.0485 15.3879 13.9584 15.3459C13.9278 15.3316 13.9012 15.3098 13.8813 15.2825C13.8614 15.2553 13.8486 15.2233 13.8444 15.1898C13.522 15.6307 13.0577 15.9473 12.5295 16.0864C12.3946 16.1146 12.257 16.128 12.1192 16.1264Z" fill="#63F98D"/>
<path d="M18.8597 12.0338C18.8179 12.0334 18.7772 12.0199 18.7435 11.9951C18.7097 11.9704 18.6846 11.9358 18.6715 11.896C18.6585 11.8562 18.6582 11.8134 18.6708 11.7735C18.6834 11.7336 18.7082 11.6986 18.7416 11.6736C18.7416 11.6736 19.5422 11.0732 19.5982 10.1245C19.6362 9.40807 19.24 8.66559 18.4234 7.9231C18.387 7.88976 18.3642 7.84413 18.3594 7.795C18.3546 7.74587 18.3682 7.69669 18.3974 7.65693C18.4094 7.64092 19.5982 5.99584 19.1179 4.95917C18.8777 4.44683 18.2453 4.15864 17.2346 4.0866C17.1866 4.0866 15.7437 4.12062 15.6816 6.28803C15.6816 6.34111 15.6606 6.39202 15.623 6.42955C15.5855 6.46708 15.5346 6.48816 15.4815 6.48816C15.4284 6.48816 15.3775 6.46708 15.34 6.42955C15.3025 6.39202 15.2814 6.34111 15.2814 6.28803C15.3534 3.73036 17.2226 3.70435 17.2487 3.70435C18.4274 3.7824 19.1739 4.15464 19.4801 4.80907C19.9724 5.86776 19.1259 7.3047 18.8197 7.765C19.6462 8.56552 20.0425 9.36604 19.9965 10.1666C19.9344 11.3013 19.0158 11.9838 18.9758 12.0118C18.9402 12.0306 18.8997 12.0383 18.8597 12.0338Z" fill="#63F98D"/>
</svg>`;

const faceLessonIconCate = `<svg width="20" height="19" viewBox="0 0 20 19" fill="none" >
<path d="M6.90321 18.1545C5.46496 18.156 4.06223 17.7077 2.89135 16.8725C1.72047 16.0373 0.840042 14.8568 0.373273 13.4964C-0.0934965 12.136 -0.123244 10.6637 0.288205 9.28559C0.699654 7.90744 1.53171 6.69243 2.6679 5.8106C3.13002 4.85777 4.41157 1.8516 3.29914 0.381865C3.26509 0.336819 3.24814 0.281141 3.25132 0.224761C3.25451 0.168381 3.27763 0.114966 3.31655 0.074047C3.35546 0.0331276 3.40765 0.00736482 3.4638 0.00135384C3.51995 -0.00465715 3.5764 0.00947462 3.6231 0.0412288C4.31912 0.586435 4.77401 1.38249 4.89036 2.25893C4.88499 2.19576 4.90494 2.13304 4.94581 2.08457C4.98669 2.0361 5.04515 2.00585 5.10833 2.00048C5.17151 1.99511 5.23423 2.01506 5.2827 2.05593C5.33117 2.09681 5.36141 2.15526 5.36678 2.21844C5.36813 2.2319 5.36813 2.24547 5.36678 2.25893C5.52952 3.0242 5.4826 3.8192 5.231 4.56001C6.18599 4.30317 7.18501 4.25437 8.16049 4.41691C9.13597 4.57944 10.0652 4.94953 10.8853 5.50214C11.7054 6.05475 12.3973 6.77701 12.9143 7.62008C13.4312 8.46315 13.7611 9.40738 13.8816 10.3889C14.0021 11.3705 13.9105 12.3665 13.613 13.3096C13.3154 14.2527 12.8188 15.1209 12.1568 15.8555C11.4947 16.5902 10.6827 17.1741 9.77551 17.5678C8.86834 17.9616 7.88721 18.1559 6.89844 18.1378L6.90321 18.1545ZM4.18528 1.48C4.36632 3.19985 3.43492 5.32466 3.07284 6.07024C3.05615 6.10408 3.03166 6.13348 3.00138 6.156C1.71844 7.13737 0.851721 8.56555 0.573518 10.1567C0.295316 11.7478 0.625997 13.3853 1.49983 14.7438C2.37366 16.1023 3.72666 17.0822 5.28989 17.4889C6.85313 17.8955 8.51213 17.699 9.93715 16.9385C11.3622 16.178 12.4489 14.9092 12.9812 13.3842C13.5136 11.8592 13.4526 10.1897 12.8105 8.70754C12.1684 7.22542 10.992 6.03917 9.51536 5.3846C8.03868 4.73003 6.36977 4.65506 4.84035 5.17459C4.79333 5.19028 4.74257 5.19091 4.69518 5.17639C4.64778 5.16187 4.60609 5.13293 4.57593 5.0936C4.5472 5.05325 4.53177 5.00496 4.53177 4.95544C4.53177 4.90591 4.5472 4.85762 4.57593 4.81728C4.8004 4.45728 4.93595 4.04901 4.97136 3.62624C4.81176 3.95735 4.64025 4.26702 4.52353 4.46711C4.49252 4.51865 4.44316 4.55655 4.38537 4.5732C4.32757 4.58985 4.26562 4.58401 4.21194 4.55688C4.15827 4.52974 4.11685 4.4833 4.096 4.42688C4.07514 4.37047 4.07639 4.30825 4.09951 4.25273C4.61642 3.03549 4.47589 2.11601 4.18528 1.48476V1.48Z" fill="#FFC225"/>
<path d="M4.65689 11.0653C4.56633 11.0658 4.47767 11.0394 4.40215 10.9894C4.32662 10.9395 4.26764 10.8682 4.23265 10.7847C4.19767 10.7011 4.18826 10.6091 4.20564 10.5202C4.22302 10.4314 4.26639 10.3496 4.33025 10.2854C4.39412 10.2212 4.47562 10.1774 4.5644 10.1596C4.65319 10.1418 4.74526 10.1507 4.82897 10.1852C4.91268 10.2198 4.98425 10.2784 5.03461 10.3536C5.08497 10.4289 5.11185 10.5174 5.11186 10.608C5.11186 10.7289 5.06401 10.8448 4.97875 10.9305C4.89349 11.0163 4.77777 11.0647 4.65689 11.0653ZM4.65689 10.5889C4.65159 10.5889 4.64647 10.5908 4.64251 10.5943C4.63855 10.5979 4.63603 10.6027 4.63544 10.608C4.63544 10.6318 4.67595 10.6318 4.67595 10.608C4.67543 10.6031 4.67325 10.5986 4.66978 10.5951C4.66632 10.5916 4.66176 10.5894 4.65689 10.5889Z" fill="#FFC225"/>
<path d="M8.36813 9.25992C8.27758 9.2604 8.18892 9.23397 8.1134 9.184C8.03787 9.13404 7.97887 9.06277 7.94389 8.97924C7.9089 8.89572 7.89951 8.80368 7.91689 8.71481C7.93426 8.62593 7.97763 8.54422 8.0415 8.48002C8.10537 8.41582 8.18685 8.37202 8.27564 8.35418C8.36442 8.33634 8.45651 8.34526 8.54022 8.3798C8.62393 8.41435 8.6955 8.47296 8.74586 8.54823C8.79622 8.62349 8.8231 8.71201 8.8231 8.80256C8.8231 8.92345 8.77524 9.03942 8.68998 9.12513C8.60473 9.21083 8.48902 9.25929 8.36813 9.25992ZM8.36813 8.78351C8.36544 8.78317 8.3627 8.78341 8.36011 8.78421C8.35751 8.78502 8.35512 8.78637 8.35309 8.78817C8.35106 8.78998 8.34943 8.7922 8.34833 8.79468C8.34723 8.79716 8.34667 8.79985 8.34669 8.80256C8.34669 8.824 8.38718 8.824 8.38718 8.80256C8.38718 8.79751 8.38517 8.79266 8.3816 8.78909C8.37802 8.78552 8.37319 8.78351 8.36813 8.78351Z" fill="#FFC225"/>
<path d="M7.87269 14.6553C7.46977 14.6567 7.0687 14.6006 6.68166 14.4885C6.65179 14.479 6.62409 14.4637 6.60014 14.4434C6.57619 14.4232 6.55646 14.3984 6.54209 14.3705C6.52771 14.3427 6.51895 14.3122 6.51634 14.281C6.51372 14.2497 6.51728 14.2183 6.52682 14.1884C6.53636 14.1585 6.5517 14.1308 6.57195 14.1069C6.5922 14.0829 6.61696 14.0632 6.64483 14.0488C6.6727 14.0344 6.70313 14.0257 6.73438 14.0231C6.76563 14.0205 6.79709 14.024 6.82696 14.0336C6.84125 14.0336 8.19189 14.4576 9.22809 13.843C9.81646 13.4952 10.2 12.8711 10.3715 11.9921C10.3774 11.9608 10.3895 11.931 10.4069 11.9044C10.4244 11.8778 10.4469 11.8549 10.4733 11.837C10.4996 11.819 10.5292 11.8065 10.5603 11.8C10.5915 11.7935 10.6237 11.7932 10.6549 11.7992C10.6862 11.8051 10.716 11.8172 10.7427 11.8346C10.7693 11.8521 10.7922 11.8746 10.8101 11.901C10.8281 11.9273 10.8406 11.9569 10.8471 11.988C10.8536 12.0192 10.8538 12.0514 10.8479 12.0827C10.6478 13.1046 10.1857 13.8335 9.47344 14.2551C8.98542 14.5297 8.43252 14.6679 7.87269 14.6553Z" fill="#FFC225"/>
<path d="M16.079 13.3879C16.0409 13.3881 16.0033 13.3791 15.9694 13.3617C15.9415 13.3474 15.9167 13.3277 15.8965 13.3037C15.8762 13.2798 15.8609 13.2521 15.8514 13.2222C15.8419 13.1923 15.8383 13.1609 15.841 13.1296C15.8437 13.0984 15.8525 13.068 15.867 13.0401C16.0387 12.7159 16.1132 12.3491 16.0815 11.9836C16.0498 11.618 15.9133 11.2695 15.6883 10.9797C15.6472 10.9313 15.6271 10.8687 15.6322 10.8054C15.6373 10.7422 15.6674 10.6837 15.7157 10.6426C15.764 10.6015 15.8267 10.5813 15.8899 10.5865C15.9531 10.5916 16.0117 10.6217 16.0528 10.67C16.3391 11.0321 16.514 11.4696 16.5563 11.9293C16.5986 12.389 16.5064 12.851 16.291 13.2593C16.2709 13.2981 16.2404 13.3307 16.203 13.3534C16.1656 13.3761 16.1227 13.388 16.079 13.3879Z" fill="#FFC225"/>
<path d="M17.7654 13.7263C17.7386 13.726 17.712 13.7211 17.6868 13.712C17.6271 13.6914 17.578 13.648 17.5504 13.5913C17.5227 13.5345 17.5186 13.4691 17.5391 13.4094C17.7217 12.8758 17.7961 12.3111 17.7581 11.7483C17.7201 11.1855 17.5703 10.636 17.3176 10.1317C17.2933 10.078 17.2898 10.0171 17.3078 9.96098C17.3258 9.90482 17.3639 9.85733 17.4149 9.82769C17.4659 9.79805 17.5261 9.78837 17.5838 9.80053C17.6415 9.81269 17.6926 9.84582 17.7273 9.89351C18.0195 10.4558 18.1935 11.072 18.2386 11.7042C18.2836 12.3363 18.1988 12.9709 17.9893 13.569C17.9727 13.6151 17.9423 13.6549 17.9022 13.683C17.8621 13.7111 17.8144 13.7262 17.7654 13.7263Z" fill="#FFC225"/>
<path d="M19.4043 14.3598C19.3767 14.3598 19.3493 14.355 19.3233 14.3455C19.2939 14.3347 19.2669 14.3181 19.2438 14.2967C19.2208 14.2754 19.2022 14.2497 19.1891 14.2211C19.1761 14.1926 19.1688 14.1617 19.1677 14.1303C19.1666 14.0989 19.1717 14.0676 19.1828 14.0383C19.4481 13.3028 19.5557 12.5198 19.4987 11.7401C19.4416 10.9603 19.2212 10.2013 18.8517 9.51232C18.8182 9.45862 18.8074 9.39382 18.8217 9.33217C18.836 9.27053 18.8742 9.21708 18.9279 9.1836C18.9816 9.15011 19.0464 9.13933 19.1081 9.15363C19.1697 9.16792 19.2232 9.20612 19.2566 9.25982C19.6713 10.0099 19.9192 10.8407 19.9833 11.6954C20.0474 12.5501 19.9263 13.4086 19.6282 14.2121C19.6101 14.2564 19.579 14.2942 19.5391 14.3205C19.4991 14.3468 19.4522 14.3605 19.4043 14.3598Z" fill="#FFC225"/>
</svg>`;

const eyeLessonIconCate = `<svg width="20" height="15" viewBox="0 0 20 15" fill="none" >
<path d="M10 14.6203C5.59049 14.6203 1.67539 12.9885 0.043265 10.4644C0.0150683 10.4207 0 10.3692 0 10.3165C0 10.2638 0.0150683 10.2123 0.043265 10.1686C1.68296 7.64444 5.59301 6.0127 10 6.0127C14.407 6.0127 18.3246 7.64444 19.9567 10.1686C19.9849 10.2123 20 10.2638 20 10.3165C20 10.3692 19.9849 10.4207 19.9567 10.4644C18.3196 12.9938 14.4095 14.6203 10 14.6203ZM0.560397 10.3165C2.14712 12.5819 5.90834 14.0922 10 14.0922C14.0917 14.0922 17.8529 12.5819 19.4396 10.3165C17.8529 8.05106 14.0942 6.54077 10 6.54077C5.90581 6.54077 2.14712 8.05634 0.560397 10.3218V10.3165Z" fill="#04BEFE"/>
<path d="M10 13.6077C9.32404 13.6077 8.66326 13.4146 8.10122 13.053C7.53918 12.6914 7.10111 12.1774 6.84243 11.576C6.58375 10.9746 6.51608 10.3129 6.64795 9.67446C6.77982 9.03604 7.10533 8.44962 7.5833 7.98934C8.06128 7.52907 8.67026 7.21562 9.33323 7.08863C9.9962 6.96164 10.6834 7.02682 11.3079 7.27592C11.9324 7.52501 12.4662 7.94685 12.8417 8.48807C13.2173 9.0293 13.4177 9.66561 13.4177 10.3165C13.4165 11.189 13.0561 12.0255 12.4154 12.6424C11.7747 13.2594 10.9061 13.6065 10 13.6077ZM10 7.45872C9.41304 7.45872 8.83925 7.62633 8.35121 7.94035C7.86317 8.25437 7.4828 8.7007 7.25818 9.2229C7.03356 9.74509 6.97478 10.3197 7.08929 10.8741C7.2038 11.4284 7.48646 11.9376 7.9015 12.3373C8.31655 12.737 8.84534 13.0092 9.42102 13.1194C9.99671 13.2297 10.5934 13.1731 11.1357 12.9568C11.678 12.7405 12.1415 12.3742 12.4676 11.9042C12.7937 11.4343 12.9677 10.8818 12.9677 10.3165C12.9665 9.55894 12.6535 8.83271 12.0972 8.29702C11.5409 7.76133 10.7867 7.45987 10 7.45872Z" fill="#04BEFE"/>
<path d="M10.0709 4.43038C10.0038 4.43038 9.93936 4.40371 9.89189 4.35623C9.84441 4.30875 9.81775 4.24436 9.81775 4.17722V0.253165C9.81775 0.186021 9.84441 0.121628 9.89189 0.07415C9.93936 0.0266724 10.0038 0 10.0709 0C10.1381 0 10.2024 0.0266724 10.2499 0.07415C10.2974 0.121628 10.3241 0.186021 10.3241 0.253165V4.17722C10.3241 4.24436 10.2974 4.30875 10.2499 4.35623C10.2024 4.40371 10.1381 4.43038 10.0709 4.43038Z" fill="#04BEFE"/>
<path d="M7.02026 4.43048C6.96883 4.43084 6.91851 4.41553 6.876 4.38658C6.83349 4.35764 6.8008 4.31643 6.78228 4.26845L5.40507 0.5925C5.38201 0.530031 5.38449 0.46099 5.41198 0.400335C5.43946 0.339681 5.48973 0.292297 5.55191 0.26845C5.58299 0.256644 5.6161 0.251076 5.64933 0.252065C5.68257 0.253055 5.71529 0.260583 5.74561 0.274219C5.77594 0.287854 5.80329 0.30733 5.82609 0.331535C5.84889 0.355739 5.86669 0.384197 5.87849 0.415285L7.2557 4.0887C7.26751 4.11979 7.27309 4.15289 7.2721 4.18613C7.27111 4.21937 7.26357 4.25208 7.24994 4.28241C7.2363 4.31274 7.21683 4.34008 7.19263 4.36288C7.16842 4.38568 7.13996 4.40349 7.10888 4.41529C7.08034 4.42503 7.05042 4.43016 7.02026 4.43048Z" fill="#04BEFE"/>
<path d="M13.4633 4.43281C13.4331 4.43307 13.4031 4.42792 13.3747 4.41761C13.3433 4.40606 13.3146 4.38844 13.2902 4.36574C13.2657 4.34305 13.2459 4.31574 13.232 4.28539C13.2182 4.25504 13.2104 4.22224 13.2093 4.18889C13.2081 4.15553 13.2135 4.12228 13.2253 4.09103L14.5949 0.415084C14.6065 0.383832 14.6242 0.355179 14.6469 0.33076C14.6696 0.30634 14.6969 0.286633 14.7273 0.272763C14.7576 0.258893 14.7904 0.251132 14.8237 0.249923C14.857 0.248714 14.8902 0.254081 14.9215 0.265717C14.9527 0.277353 14.9814 0.295031 15.0058 0.31774C15.0302 0.34045 15.0499 0.367747 15.0638 0.398073C15.0777 0.428399 15.0854 0.46116 15.0867 0.494485C15.0879 0.527811 15.0825 0.561048 15.0709 0.592299L13.6987 4.26825C13.6807 4.3163 13.6486 4.35777 13.6066 4.38715C13.5645 4.41654 13.5146 4.43246 13.4633 4.43281Z" fill="#04BEFE"/>
</svg>`;

const brushIconCate = `<svg width="17" height="20" viewBox="0 0 17 20" fill="none" >
<path d="M6.04289 12.9129C5.94496 12.9135 5.85018 12.8783 5.77638 12.8139L4.04794 11.3386C3.96754 11.2681 3.9178 11.169 3.90927 11.0624C3.90074 10.9558 3.93409 10.85 4.00225 10.7676L5.08539 9.49789C5.1562 9.41791 5.25524 9.36848 5.36172 9.35996C5.4682 9.35144 5.57383 9.3845 5.65646 9.4522L7.38491 10.9275C7.46573 10.9977 7.51579 11.0969 7.52433 11.2037C7.53287 11.3104 7.49921 11.4163 7.43059 11.4985L6.34746 12.7682C6.31251 12.8093 6.26981 12.843 6.22179 12.8675C6.17377 12.892 6.12138 12.9068 6.06764 12.911L6.04289 12.9129ZM5.39757 9.72632C5.39317 9.72645 5.38884 9.72754 5.3849 9.72952C5.38095 9.73149 5.37749 9.73429 5.37473 9.73774L4.2916 11.0074C4.28664 11.0133 4.28391 11.0207 4.28391 11.0284C4.28391 11.036 4.28664 11.0435 4.2916 11.0493L6.02005 12.5246C6.02687 12.5266 6.03416 12.5266 6.04098 12.5246C6.04885 12.5227 6.05607 12.5187 6.06192 12.5131L7.14505 11.2435C7.14794 11.2408 7.15023 11.2376 7.1518 11.2339C7.15338 11.2303 7.1542 11.2265 7.1542 11.2225C7.1542 11.2186 7.15338 11.2147 7.1518 11.2111C7.15023 11.2075 7.14794 11.2043 7.14505 11.2016L5.41851 9.73964C5.41625 9.73599 5.41319 9.73289 5.40956 9.73058C5.40594 9.72828 5.40184 9.72682 5.39757 9.72632Z" fill="#DC02FF"/>
<path d="M8.21482 11.3197C8.08878 11.3194 7.9676 11.2711 7.87599 11.1846L5.68497 9.12488C5.58961 9.03459 5.53387 8.91022 5.52995 8.77895C5.52602 8.64768 5.57422 8.5202 5.66402 8.42437L13.4477 0.155249C13.538 0.0598834 13.6624 0.00414587 13.7937 0.000222059C13.9249 -0.00370175 14.0524 0.0445076 14.1482 0.13431L16.3374 2.19588C16.3853 2.24023 16.4238 2.29375 16.4506 2.35326C16.4774 2.41278 16.492 2.47707 16.4935 2.54233C16.4954 2.60734 16.4845 2.6721 16.4613 2.73287C16.4381 2.79363 16.4031 2.84921 16.3583 2.89639L8.57269 11.1636C8.52647 11.2122 8.47099 11.251 8.40953 11.2778C8.34807 11.3046 8.28186 11.3189 8.21482 11.3197ZM13.8094 0.37987C13.7778 0.380421 13.7477 0.393419 13.7257 0.416038L5.94195 8.68516C5.93107 8.69564 5.92242 8.7082 5.9165 8.7221C5.91059 8.736 5.90755 8.75096 5.90755 8.76606C5.90755 8.78117 5.91059 8.79612 5.9165 8.81002C5.92242 8.82392 5.93107 8.83648 5.94195 8.84696L8.13106 10.9085C8.15273 10.9296 8.18175 10.9414 8.21196 10.9414C8.24217 10.9414 8.2712 10.9296 8.29287 10.9085L16.0766 2.64131C16.0869 2.63046 16.095 2.6176 16.1002 2.60353C16.1055 2.58945 16.1078 2.57446 16.107 2.55946C16.1071 2.54431 16.104 2.52932 16.0977 2.51551C16.0915 2.50171 16.0823 2.48943 16.0709 2.47951L13.8875 0.412231C13.8665 0.391865 13.8386 0.380285 13.8094 0.37987Z" fill="#DC02FF"/>
<path d="M4.28012 15.7912C3.84945 15.7831 3.42529 15.6845 3.03518 15.5019L3.01424 15.4905C2.25281 14.986 1.76741 15.4467 1.74647 15.4676L1.69126 15.5209H1.61322C1.4804 15.5327 1.34673 15.5114 1.22416 15.4589C1.10159 15.4064 0.993925 15.3244 0.910797 15.2202C0.667139 14.8832 0.811812 14.4169 0.828944 14.3655L0.844176 14.3217L0.876534 14.2912C1.87401 13.2937 3.45207 14.2227 3.51869 14.2627C4.18685 14.7081 4.64751 14.4111 4.76553 14.316C4.88355 13.9943 5.05677 13.8058 5.2833 13.7449C5.4079 13.7279 5.53477 13.7405 5.65353 13.7819C5.7723 13.8233 5.8796 13.8921 5.96669 13.9828L5.99904 14.0152L6.01237 14.0571C6.09201 14.249 6.11227 14.4605 6.07053 14.6641C6.02879 14.8677 5.92698 15.0541 5.77823 15.1992C5.64549 15.3287 5.48823 15.4303 5.31567 15.4981C5.00664 15.6951 4.64656 15.797 4.28012 15.7912ZM3.21412 15.165C3.32262 15.2164 4.35626 15.6808 5.11769 15.165L5.16148 15.144C5.25492 15.117 5.34204 15.0716 5.41777 15.0106C5.4935 14.9495 5.55632 14.874 5.60256 14.7884C5.64881 14.7028 5.67755 14.6089 5.68712 14.5121C5.69669 14.4153 5.6869 14.3176 5.65831 14.2246C5.61877 14.1879 5.57233 14.1594 5.52167 14.1407C5.47102 14.1221 5.41717 14.1137 5.36326 14.1161C5.26427 14.1408 5.1729 14.2684 5.10247 14.4797L5.08724 14.5234L5.05488 14.5539C4.80932 14.8014 4.12594 15.125 3.3074 14.5787C3.3074 14.5787 1.96347 13.7906 1.17159 14.5215C1.12278 14.6781 1.13713 14.8475 1.21156 14.9936C1.25211 15.0389 1.30213 15.0746 1.35806 15.0983C1.414 15.122 1.47447 15.133 1.53517 15.1307C1.83023 14.908 2.46411 14.6719 3.21412 15.165Z" fill="#DC02FF"/>
<path d="M14.9611 20H0.79473C0.626856 20.0006 0.463135 19.9479 0.327202 19.8494C0.19127 19.7508 0.0901583 19.6117 0.0384714 19.452C-0.0132155 19.2922 -0.0128136 19.1202 0.0396333 18.9608C0.0920801 18.8013 0.193858 18.6626 0.330258 18.5647V16.7659C0.330258 16.5892 0.400444 16.4197 0.525391 16.2947C0.650337 16.1698 0.819808 16.0996 0.996509 16.0996C1.17321 16.0996 1.34267 16.1698 1.46762 16.2947C1.59256 16.4197 1.66276 16.5892 1.66276 16.7659V18.4144H1.93116V16.7659C1.93116 16.5892 2.00136 16.4197 2.1263 16.2947C2.25125 16.1698 2.42071 16.0996 2.59741 16.0996C2.77411 16.0996 2.94358 16.1698 3.06853 16.2947C3.19347 16.4197 3.26366 16.5892 3.26366 16.7659V18.4144H3.47876V16.7659C3.47876 16.5892 3.54896 16.4197 3.67391 16.2947C3.79885 16.1698 3.96831 16.0996 4.14501 16.0996C4.32171 16.0996 4.49117 16.1698 4.61612 16.2947C4.74107 16.4197 4.81126 16.5892 4.81126 16.7659V18.4144H4.88932V16.7659C4.88932 16.5892 4.9595 16.4197 5.08445 16.2947C5.2094 16.1698 5.37887 16.0996 5.55557 16.0996C5.73227 16.0996 5.90173 16.1698 6.02667 16.2947C6.15162 16.4197 6.22182 16.5892 6.22182 16.7659V18.4144H14.9783C15.1818 18.4243 15.3737 18.5122 15.5143 18.6598C15.6548 18.8074 15.7332 19.0034 15.7332 19.2072C15.7332 19.411 15.6548 19.607 15.5143 19.7546C15.3737 19.9022 15.1818 19.9901 14.9783 20H14.9611ZM0.992698 16.4822C0.917804 16.4827 0.846151 16.5128 0.793371 16.566C0.740591 16.6191 0.710971 16.691 0.710973 16.7659V18.6352V18.7646L0.598657 18.8389C0.516127 18.8813 0.450286 18.9502 0.411739 19.0346C0.373191 19.119 0.364179 19.214 0.386166 19.3041C0.408154 19.3943 0.459862 19.4744 0.532943 19.5316C0.606024 19.5888 0.696223 19.6197 0.789014 19.6193H14.9554C15.0599 19.6122 15.1577 19.5657 15.2292 19.4892C15.3007 19.4127 15.3405 19.3119 15.3405 19.2072C15.3405 19.1025 15.3007 19.0017 15.2292 18.9252C15.1577 18.8487 15.0599 18.8022 14.9554 18.7951H5.81826V16.7659C5.81826 16.6901 5.78817 16.6175 5.73462 16.564C5.68107 16.5104 5.60846 16.4803 5.53273 16.4803C5.457 16.4803 5.38437 16.5104 5.33082 16.564C5.27727 16.6175 5.24719 16.6901 5.24719 16.7659V18.7951H4.40771V16.7659C4.40771 16.6901 4.37763 16.6175 4.32408 16.564C4.27053 16.5104 4.1979 16.4803 4.12217 16.4803C4.04644 16.4803 3.97381 16.5104 3.92027 16.564C3.86672 16.6175 3.83664 16.6901 3.83664 16.7659V18.7951H2.8601V16.7659C2.8601 16.6901 2.83002 16.6175 2.77647 16.564C2.72292 16.5104 2.6503 16.4803 2.57457 16.4803C2.49884 16.4803 2.42621 16.5104 2.37266 16.564C2.31911 16.6175 2.28903 16.6901 2.28903 16.7659V18.7951H1.2592V16.7659C1.25933 16.6935 1.23182 16.6238 1.18228 16.5711C1.13274 16.5184 1.06491 16.4866 0.992698 16.4822Z" fill="#DC02FF"/>
</svg>`;

const emotionIconCate = `<svg width="20" height="16" viewBox="0 0 20 16" fill="none" >
<path d="M4.76529 15.1935C3.77302 15.1934 2.80552 14.8835 1.99777 14.3072C1.19002 13.7309 0.582305 12.9168 0.2594 11.9785C-0.0635046 11.0403 -0.0854867 10.0246 0.196505 9.07323C0.478496 8.12187 1.0504 7.28224 1.83245 6.67149C2.43578 5.41455 2.86104 3.79939 2.26399 3.01172C2.23439 2.97189 2.21987 2.92284 2.22305 2.87331C2.22623 2.82379 2.2469 2.777 2.28136 2.74128C2.31582 2.70557 2.36183 2.68324 2.41121 2.67829C2.46059 2.67334 2.51013 2.68608 2.55099 2.71424C3.00126 3.06604 3.30866 3.56919 3.41618 4.13039C3.43943 4.10929 3.46748 4.09419 3.49789 4.08639C3.55065 4.0721 3.60691 4.07899 3.65466 4.10561C3.70241 4.13222 3.73787 4.17645 3.75346 4.22885C3.75464 4.23859 3.75464 4.24844 3.75346 4.25818C3.86088 4.76317 3.83853 5.28715 3.68852 5.78116C4.34312 5.62914 5.02247 5.61721 5.682 5.74616C6.34153 5.87511 6.96636 6.14202 7.5155 6.5294C8.06464 6.91677 8.52568 7.41585 8.86841 7.99391C9.21113 8.57196 9.42779 9.21594 9.50418 9.88361C9.58056 10.5513 9.51493 11.2275 9.31161 11.8681C9.1083 12.5086 8.77187 13.0989 8.32441 13.6003C7.87694 14.1017 7.32855 14.5028 6.71517 14.7774C6.1018 15.0519 5.43731 15.1938 4.76529 15.1935ZM2.97207 4.06754C2.97207 5.11499 2.46929 6.30907 2.18229 6.89774C2.16887 6.92769 2.14795 6.95366 2.12154 6.97315C1.25557 7.63417 0.66982 8.59665 0.480588 9.66952C0.291357 10.7424 0.512473 11.8472 1.10005 12.7646C1.68764 13.682 2.5987 14.3449 3.65238 14.6216C4.70606 14.8984 5.8253 14.7689 6.78789 14.2587C7.75048 13.7485 8.48603 12.8951 8.84851 11.8677C9.21099 10.8403 9.1739 9.71424 8.74459 8.71297C8.31528 7.7117 7.52515 6.90847 6.53107 6.46276C5.53699 6.01704 4.41165 5.96144 3.37848 6.30698C3.33701 6.3214 3.29206 6.32243 3.24998 6.30992C3.20789 6.29741 3.17081 6.272 3.14395 6.23727C3.1171 6.20254 3.10182 6.16025 3.1003 6.11637C3.09878 6.0725 3.11108 6.02925 3.13546 5.99274C3.23422 5.83797 3.30512 5.6671 3.34495 5.48788C3.2842 5.601 3.22555 5.69736 3.17318 5.79373C3.14591 5.83905 3.1025 5.87238 3.05167 5.88702C3.00085 5.90167 2.94635 5.89654 2.89915 5.87267C2.85194 5.84881 2.81552 5.80796 2.79718 5.75835C2.77884 5.70874 2.77995 5.65402 2.80029 5.60519C3.03317 5.12555 3.09384 4.58036 2.97207 4.06126V4.06754Z" fill="#FFB199"/>
<path d="M3.22558 10.3334C3.15482 10.333 3.08576 10.3116 3.02713 10.272C2.9685 10.2324 2.92291 10.1763 2.89612 10.1108C2.86933 10.0453 2.86253 9.97335 2.87658 9.904C2.89064 9.83465 2.92493 9.77102 2.97512 9.72113C3.0253 9.67124 3.08913 9.63733 3.15856 9.62368C3.22799 9.61002 3.2999 9.61724 3.36523 9.64441C3.43057 9.67158 3.48641 9.7175 3.52568 9.77636C3.56495 9.83523 3.5859 9.9044 3.5859 9.97516C3.58535 10.0704 3.54715 10.1615 3.47963 10.2286C3.41212 10.2957 3.32078 10.3334 3.22558 10.3334ZM3.22558 9.91441C3.21357 9.91441 3.20182 9.91798 3.19183 9.92465C3.18184 9.93133 3.17405 9.94081 3.16945 9.95191C3.16485 9.96302 3.16366 9.97523 3.166 9.98702C3.16834 9.9988 3.17413 10.0096 3.18262 10.0181C3.19112 10.0266 3.20195 10.0324 3.21373 10.0347C3.22552 10.0371 3.23773 10.0359 3.24883 10.0313C3.25993 10.0267 3.26941 10.0189 3.27609 10.0089C3.28276 9.99892 3.28633 9.98718 3.28633 9.97516C3.28633 9.95905 3.27993 9.9436 3.26853 9.93221C3.25714 9.92081 3.2417 9.91441 3.22558 9.91441Z" fill="#FFB199"/>
<path d="M5.76669 9.09735C5.69534 9.09735 5.62558 9.07616 5.56628 9.03648C5.50698 8.99679 5.46081 8.94039 5.4336 8.87443C5.40639 8.80847 5.39938 8.73591 5.41345 8.66596C5.42752 8.59601 5.46206 8.53181 5.51266 8.4815C5.56326 8.4312 5.62765 8.39704 5.69769 8.38338C5.76772 8.36971 5.84024 8.37715 5.90604 8.40474C5.97184 8.43234 6.02797 8.47885 6.06731 8.53837C6.10665 8.5979 6.12742 8.66777 6.12701 8.73913C6.12646 8.83433 6.08824 8.92544 6.02073 8.99256C5.95322 9.05968 5.86189 9.09735 5.76669 9.09735ZM5.76669 8.67837C5.75277 8.68099 5.7402 8.68839 5.73116 8.69929C5.72212 8.7102 5.71717 8.72391 5.71717 8.73808C5.71717 8.75224 5.72212 8.76596 5.73116 8.77686C5.7402 8.78776 5.75277 8.79516 5.76669 8.79778C5.77547 8.79943 5.78449 8.79913 5.79314 8.79689C5.80178 8.79466 5.80983 8.79054 5.8167 8.78484C5.82357 8.77914 5.8291 8.77199 5.8329 8.76391C5.8367 8.75583 5.83867 8.74701 5.83867 8.73808C5.83867 8.72915 5.8367 8.72033 5.8329 8.71225C5.8291 8.70416 5.82357 8.69702 5.8167 8.69132C5.80983 8.68562 5.80178 8.6815 5.79314 8.67926C5.78449 8.67703 5.77547 8.67672 5.76669 8.67837Z" fill="#FFB199"/>
<path d="M5.42942 12.7927C5.1517 12.7943 4.87518 12.7562 4.60822 12.6796C4.55516 12.6627 4.51101 12.6253 4.48548 12.5758C4.45994 12.5263 4.4551 12.4687 4.47205 12.4157C4.489 12.3626 4.52633 12.3185 4.57584 12.2929C4.62534 12.2674 4.68295 12.2626 4.73601 12.2795C4.73601 12.2795 5.65148 12.5623 6.3428 12.1538C6.73245 11.9213 6.98801 11.5065 7.10323 10.9178C7.11379 10.8623 7.14598 10.8132 7.19273 10.7813C7.23949 10.7495 7.29696 10.7376 7.35252 10.7481C7.40808 10.7587 7.45718 10.7909 7.489 10.8376C7.52083 10.8844 7.53277 10.9419 7.52221 10.9974C7.38185 11.7097 7.05924 12.2208 6.55856 12.5141C6.21454 12.708 5.82414 12.8043 5.42942 12.7927Z" fill="#FFB199"/>
<path d="M15.2272 12.7948C14.0317 12.792 12.8809 12.3403 12.0028 11.529C11.1247 10.7178 10.5834 9.60626 10.4861 8.41475C10.3889 7.22323 10.7428 6.03867 11.4777 5.09577C12.2126 4.15287 13.2749 3.52046 14.4541 3.32384C14.8105 3.26494 15.1725 3.24667 15.533 3.26937C15.3071 2.80569 15.1998 2.29317 15.2209 1.77781C15.2209 1.76733 15.2209 1.75686 15.2209 1.74639C15.2282 1.69263 15.2561 1.64382 15.2987 1.61022C15.3413 1.57662 15.3952 1.56085 15.4492 1.56623C15.4812 1.56827 15.5122 1.57835 15.5393 1.59555C15.5567 1.02404 15.7799 0.478024 16.1678 0.0579052C16.2036 0.0237359 16.2503 0.00335602 16.2998 0.000379277C16.3492 -0.00259747 16.398 0.0120215 16.4377 0.0416435C16.4774 0.0712656 16.5053 0.113976 16.5164 0.162203C16.5276 0.210429 16.5213 0.261055 16.4988 0.305102C16.0379 1.18077 16.7208 2.69956 17.5211 3.84547C18.3913 4.32173 19.0913 5.05759 19.5236 5.95051C19.9558 6.84343 20.0988 7.84895 19.9326 8.82697C19.7663 9.80498 19.2992 10.7068 18.5962 11.4068C17.8932 12.1067 16.9894 12.57 16.0106 12.732C15.7516 12.7738 15.4896 12.7948 15.2272 12.7948ZM14.5233 3.73653C13.5049 3.90353 12.5789 4.42691 11.9106 5.21328C11.2423 5.99966 10.8751 6.99788 10.8745 8.02988C10.874 9.06188 11.24 10.0605 11.9074 10.8476C12.5749 11.6348 13.5002 12.1592 14.5184 12.3273C15.5366 12.4955 16.5815 12.2964 17.4665 11.7657C18.3516 11.235 19.0193 10.407 19.3506 9.42965C19.6818 8.45226 19.6551 7.38897 19.2751 6.42948C18.8951 5.46998 18.1866 4.67669 17.2759 4.19112C17.2467 4.17557 17.2216 4.15332 17.2026 4.12618C16.8256 3.59198 16.1384 2.50683 15.9646 1.46148C15.9284 1.99142 16.0764 2.51759 16.3835 2.95095C16.4126 2.99587 16.4233 3.05018 16.4135 3.10276C16.4038 3.15534 16.3743 3.20221 16.3312 3.23376C16.2879 3.26585 16.234 3.28005 16.1805 3.27342C16.1271 3.26679 16.0783 3.23983 16.0442 3.19815C15.9792 3.11854 15.9038 3.02636 15.8347 2.92581C15.9054 3.09505 16.0046 3.25093 16.128 3.38668C16.158 3.41877 16.1773 3.4595 16.1829 3.50311C16.1885 3.54673 16.1803 3.59101 16.1594 3.62969C16.1392 3.66642 16.1084 3.69623 16.071 3.71528C16.0337 3.73433 15.9915 3.74173 15.9499 3.73653C15.481 3.65901 15.0026 3.65901 14.5337 3.73653H14.5233Z" fill="#FFB199"/>
<path d="M16.6748 7.69798C16.5996 7.69844 16.5262 7.67497 16.4653 7.63095C16.4269 7.60332 16.3943 7.56836 16.3695 7.52809C16.3447 7.48782 16.3281 7.44303 16.3207 7.39632C16.3127 7.35016 16.314 7.30287 16.3244 7.2572C16.3349 7.21153 16.3543 7.16839 16.3815 7.13027C16.4157 7.08174 16.4615 7.04243 16.5146 7.01586C16.5677 6.98928 16.6266 6.97625 16.686 6.97793C16.7454 6.97961 16.8034 6.99594 16.855 7.02548C16.9065 7.05502 16.95 7.09685 16.9814 7.14724C17.0129 7.19763 17.0314 7.25501 17.0354 7.31429C17.0393 7.37357 17.0285 7.4329 17.0039 7.487C16.9794 7.5411 16.9418 7.58828 16.8946 7.62436C16.8474 7.66044 16.7921 7.68429 16.7334 7.69379L16.6748 7.69798ZM16.6748 7.279H16.6643C16.6526 7.28109 16.6417 7.28657 16.6331 7.29478C16.6244 7.30298 16.6184 7.31355 16.6157 7.32516C16.613 7.33677 16.6138 7.34891 16.618 7.36007C16.6222 7.37124 16.6295 7.38093 16.6391 7.38794C16.6528 7.39673 16.6691 7.40044 16.6852 7.39841C16.6929 7.39693 16.7001 7.39395 16.7066 7.38963C16.7131 7.38532 16.7186 7.37975 16.7229 7.37327C16.7281 7.35906 16.7281 7.3435 16.7229 7.32928C16.722 7.32119 16.7192 7.31341 16.7149 7.30652C16.7105 7.29963 16.7047 7.29381 16.6978 7.28948C16.6916 7.28461 16.6845 7.28105 16.6769 7.279H16.6748Z" fill="#FFB199"/>
<path d="M13.9682 6.89155C13.883 6.8912 13.8008 6.86071 13.736 6.80549C13.6712 6.75027 13.628 6.67389 13.6141 6.58989C13.606 6.5436 13.6073 6.49613 13.6181 6.45038C13.6289 6.40464 13.649 6.36158 13.677 6.32383C13.7039 6.28504 13.7384 6.25206 13.7783 6.22687C13.8183 6.20168 13.8629 6.18478 13.9095 6.17719C14.0014 6.16656 14.0939 6.1917 14.1678 6.24741C14.2417 6.30311 14.2913 6.3851 14.3064 6.4764C14.3215 6.5677 14.3009 6.6613 14.2488 6.73781C14.1968 6.81431 14.1173 6.86786 14.0268 6.88736L13.9682 6.89155ZM13.9682 6.47257C13.9604 6.47383 13.953 6.47663 13.9463 6.48082C13.9397 6.485 13.9339 6.49048 13.9294 6.49693C13.925 6.50338 13.9218 6.51067 13.9202 6.51836C13.9186 6.52605 13.9185 6.53399 13.92 6.5417C13.921 6.54965 13.9236 6.5573 13.9277 6.5642C13.9318 6.57109 13.9372 6.57708 13.9437 6.58179C13.9502 6.5865 13.9575 6.58983 13.9654 6.59159C13.9732 6.59334 13.9813 6.59347 13.9891 6.59198C14.0045 6.58892 14.0182 6.58002 14.0271 6.56713C14.0361 6.55424 14.0398 6.53837 14.0373 6.52285C14.0363 6.5149 14.0337 6.50725 14.0296 6.50035C14.0255 6.49346 14.0201 6.48747 14.0136 6.48276C14.0071 6.47805 13.9998 6.47472 13.9919 6.47296C13.9841 6.47121 13.976 6.47108 13.9682 6.47257Z" fill="#FFB199"/>
<path d="M14.5422 10.5114C14.2932 10.5132 14.0461 10.4692 13.8131 10.3815C13.2727 10.172 12.8704 9.71951 12.617 9.04076C12.6072 9.01491 12.6027 8.98739 12.6037 8.95979C12.6047 8.93219 12.6111 8.90505 12.6226 8.87993C12.634 8.85482 12.6504 8.83222 12.6706 8.81344C12.6909 8.79467 12.7147 8.78008 12.7406 8.77052C12.7925 8.75155 12.8499 8.7539 12.9001 8.77705C12.9503 8.80021 12.9894 8.84229 13.0087 8.89412C13.2182 9.45555 13.5387 9.82425 13.9619 9.98975C14.7098 10.2809 15.5582 9.85777 15.5666 9.85358C15.5912 9.84095 15.618 9.83331 15.6456 9.83111C15.6732 9.82891 15.7009 9.83219 15.7272 9.84076C15.7535 9.84933 15.7778 9.86302 15.7988 9.88104C15.8198 9.89906 15.8369 9.92105 15.8494 9.94575C15.8742 9.99523 15.8785 10.0525 15.8612 10.1051C15.8439 10.1577 15.8065 10.2014 15.7572 10.2265C15.3773 10.4075 14.9629 10.5047 14.5422 10.5114Z" fill="#FFB199"/>
</svg>`;

const babyLessonIcon = `<svg width="20" height="19" viewBox="0 0 20 19" fill="none" >
<path d="M15.9077 8.18471C15.0982 8.18471 14.3069 7.94464 13.6339 7.49488C12.9608 7.04511 12.4363 6.40584 12.1266 5.65794C11.8169 4.91004 11.736 4.08709 11.8941 3.29319C12.0522 2.4993 12.4421 1.77011 13.0147 1.19787C13.5872 0.625631 14.3166 0.23604 15.1106 0.0783761C15.9046 -0.0792878 16.7275 0.00205748 17.4752 0.312124C18.223 0.622191 18.8619 1.14705 19.3114 1.82031C19.7608 2.49358 20.0004 3.285 20 4.09448C19.9989 5.1793 19.5673 6.21933 18.8 6.98622C18.0327 7.7531 16.9925 8.18415 15.9077 8.18471ZM15.9077 0.427752C15.1825 0.427752 14.4735 0.642802 13.8705 1.04571C13.2675 1.44861 12.7976 2.02128 12.52 2.69129C12.2425 3.36129 12.1699 4.09855 12.3114 4.80983C12.4529 5.5211 12.8021 6.17445 13.3149 6.68726C13.8277 7.20006 14.481 7.54928 15.1923 7.69076C15.9036 7.83224 16.6409 7.75963 17.3109 7.4821C17.9809 7.20458 18.5535 6.7346 18.9564 6.13161C19.3593 5.52862 19.5744 4.8197 19.5744 4.09448C19.5738 3.12218 19.1873 2.18986 18.4998 1.50234C17.8123 0.814812 16.88 0.428316 15.9077 0.427752Z" fill="#ffffff"/>
<path d="M7.93572 18.6168H1.9004C1.39759 18.6129 0.916474 18.4114 0.56092 18.0559C0.205367 17.7003 0.0038958 17.2192 0 16.7164V16.078C0.0038958 15.5751 0.205367 15.094 0.56092 14.7385C0.916474 14.3829 1.39759 14.1814 1.9004 14.1776H4.81378L4.57543 13.7179C3.77051 13.429 3.06927 12.908 2.56029 12.2207C2.05131 11.5335 1.75742 10.7108 1.71575 9.85663C1.67407 9.00244 1.88649 8.15507 2.32615 7.42154C2.76582 6.68801 3.41302 6.10124 4.18599 5.73534L5.19472 5.25865H5.00106L6.45668 4.67129L6.55032 4.63511L8.83165 3.70726L8.87422 3.68172C8.99173 3.6228 9.11514 3.57644 9.24238 3.54339C9.66279 3.4355 10.1074 3.47361 10.5033 3.65146C10.8992 3.82932 11.223 4.13638 11.4216 4.52232L16.6439 14.899C16.7612 15.122 16.8327 15.3661 16.8546 15.6171C16.8764 15.868 16.8479 16.1208 16.7709 16.3607C16.6939 16.6006 16.5699 16.8227 16.4061 17.0141C16.2423 17.2055 16.042 17.3623 15.8169 17.4754C15.5918 17.5886 15.3464 17.6557 15.0951 17.6729C14.8438 17.6901 14.5915 17.6571 14.3531 17.5757C14.1147 17.4943 13.8949 17.3663 13.7065 17.199C13.5181 17.0317 13.365 16.8286 13.256 16.6015L10.9151 11.9537C10.6252 12.2018 10.3039 12.4107 9.95955 12.5751L8.65715 13.1837L9.5318 14.9224C9.59644 15.0462 9.64711 15.1768 9.6829 15.3118C9.78906 15.5518 9.84414 15.8113 9.84463 16.0737V16.7121C9.84183 17.2172 9.63968 17.7006 9.28217 18.0573C8.92467 18.414 8.44074 18.6151 7.93572 18.6168ZM1.9004 14.6074C1.50944 14.608 1.13465 14.7636 0.858197 15.04C0.581744 15.3165 0.426185 15.6912 0.425622 16.0822V16.7206C0.426185 17.1116 0.581744 17.4864 0.858197 17.7628C1.13465 18.0393 1.50944 18.1949 1.9004 18.1954H7.93572C8.32705 18.1954 8.70239 18.0401 8.9793 17.7636C9.25621 17.4871 9.41206 17.112 9.41263 16.7206V16.0822C9.41237 15.8729 9.36738 15.6662 9.28068 15.4757L9.26792 15.4395C9.24177 15.3288 9.20248 15.2217 9.15087 15.1203L8.08681 12.9922L9.7893 12.1899C10.1821 12.0056 10.5417 11.7575 10.8534 11.4557L11.0662 11.2429L13.6625 16.3993C13.7282 16.6001 13.8365 16.7844 13.9799 16.9396C14.1233 17.0947 14.2984 17.2172 14.4934 17.2986C14.6884 17.38 14.8986 17.4184 15.1098 17.4113C15.321 17.4041 15.5281 17.3515 15.7171 17.2571C15.9062 17.1627 16.0726 17.0286 16.2052 16.8641C16.3377 16.6995 16.4332 16.5083 16.4852 16.3035C16.5372 16.0987 16.5445 15.8851 16.5065 15.6773C16.4685 15.4694 16.3862 15.2722 16.2651 15.099L11.0406 4.71385C10.888 4.41388 10.6375 4.17503 10.3306 4.03687C10.0237 3.8987 9.6788 3.86951 9.35304 3.95412C9.25341 3.9791 9.15701 4.01552 9.06574 4.06265L9.02957 4.08393H9.00829L6.70354 5.02456L6.61629 5.0586L6.52053 5.09904L4.36262 6.11628C3.65559 6.44717 3.06411 6.98259 2.66466 7.65329C2.26522 8.32398 2.07619 9.09909 2.12203 9.87838C2.16787 10.6577 2.44647 11.4053 2.92179 12.0245C3.39711 12.6437 4.0473 13.1061 4.78825 13.3518L4.87124 13.3795L5.49478 14.6159L1.9004 14.6074ZM8.17407 11.8409C7.97708 11.8211 7.78934 11.7475 7.6314 11.6281L7.59948 11.6025L6.53542 10.5385C6.42051 10.4534 5.33517 9.67235 4.44775 10.7641C4.39962 10.8651 4.33109 10.9551 4.24649 11.0283C4.16188 11.1016 4.06303 11.1565 3.95615 11.1897C3.88854 11.1985 3.8198 11.1909 3.75573 11.1675C3.69166 11.1442 3.63413 11.1058 3.58799 11.0556L3.56033 11.0237C3.18786 10.3924 3.06704 9.64392 3.22196 8.92751C3.44754 7.90176 4.21366 6.97816 5.49903 6.18863C5.53042 6.16894 5.56578 6.15643 5.60258 6.15202C5.63937 6.1476 5.67669 6.15138 5.71184 6.16309C6.13747 6.29291 7.45689 8.91687 8.47839 11.0939V11.1173C8.51456 11.2259 8.61671 11.6004 8.38475 11.777C8.32385 11.8222 8.24985 11.8461 8.17407 11.8451V11.8409ZM7.88464 11.2791C7.9569 11.3279 8.0339 11.3692 8.11448 11.4025C8.10871 11.3572 8.09946 11.3123 8.08681 11.2684C7.12917 9.2148 5.98637 7.01221 5.62246 6.61C4.50308 7.32079 3.83485 8.12734 3.63907 9.00837C3.50908 9.61034 3.60289 10.239 3.90295 10.7768C3.97703 10.714 4.03719 10.6365 4.07959 10.5491L4.10512 10.5129C5.05639 9.32334 6.29069 9.79578 6.80995 10.2108L6.8291 10.2278L7.88464 11.2791Z" fill="#ffffff"/>
</svg>`;

const cissorIcon = `<svg width="20" height="15" viewBox="0 0 20 15" fill="none" >
<path d="M18.529 11.5723C18.2812 11.5691 18.0343 11.5417 17.7918 11.4904C15.3704 10.9889 7.7265 9.26675 7.65058 9.24877L7.50074 9.21681V9.06297C7.50074 9.033 7.36888 6.14208 5.85449 5.68656C5.33505 5.53073 4.96544 5.41286 4.74967 5.33294C4.18647 5.75994 3.4891 5.97139 2.7836 5.92908C2.0781 5.88677 1.411 5.59349 0.902872 5.10224C0.394742 4.61099 0.0790991 3.95418 0.0129873 3.25051C-0.0531246 2.54683 0.134655 1.84273 0.542392 1.26543C0.950129 0.688127 1.55092 0.275724 2.2362 0.102746C2.92147 -0.0702327 3.64602 0.00762592 4.2789 0.322251C4.91178 0.636877 5.41124 1.16751 5.68701 1.81826C5.96278 2.46901 5.99668 3.19694 5.78257 3.8705C5.75411 3.96016 5.72076 4.0482 5.68268 4.13422L19.9255 9.57642L19.9515 9.67632C19.9515 9.71427 20.1792 10.6153 19.6478 11.1707C19.4991 11.3112 19.323 11.4194 19.1304 11.4886C18.9379 11.5577 18.7331 11.5862 18.529 11.5723ZM7.88433 8.89315C8.95919 9.13489 15.6421 10.6373 17.8737 11.0908C18.5909 11.2387 19.0904 11.1707 19.3621 10.891C19.6338 10.6113 19.6158 10.0799 19.5839 9.86811L5.12926 4.35198L5.23316 4.1522C5.30077 4.02396 5.35758 3.8903 5.40298 3.75262C5.60965 3.10432 5.55071 2.40051 5.23908 1.79561C4.92746 1.19071 4.3886 0.734135 3.74074 0.52606C3.09245 0.318832 2.38839 0.377519 1.78335 0.689218C1.17831 1.00092 0.721802 1.54012 0.514181 2.18829C0.346337 2.71535 0.353346 3.28254 0.534167 3.80528C0.714987 4.32803 1.05993 4.77833 1.51756 5.08903C1.97519 5.39973 2.52099 5.55419 3.07357 5.52938C3.62615 5.50457 4.15591 5.30181 4.58385 4.95135L4.67775 4.87543L4.78763 4.92138C4.90351 4.96933 5.20319 5.07522 5.96438 5.30497C7.54469 5.77847 7.83439 8.23985 7.88433 8.89315Z" fill="#ffffff"/>
<path d="M3.92856 14.7369C3.66751 14.7366 3.4076 14.7024 3.15539 14.635C2.75725 14.5299 2.38536 14.343 2.06339 14.0863C1.74141 13.8296 1.47641 13.5086 1.28523 13.1439C1.09405 12.7792 0.98089 12.3787 0.952945 11.9679C0.925001 11.557 0.982887 11.1449 1.12292 10.7576C1.26295 10.3704 1.48206 10.0165 1.76631 9.71858C2.05055 9.42063 2.39371 9.18512 2.77394 9.02703C3.15417 8.86895 3.56315 8.79174 3.97484 8.80033C4.38654 8.80892 4.79194 8.90312 5.16524 9.07693C5.36503 8.95506 5.69468 8.76127 6.16418 8.49755C7.54671 7.73237 7.05923 4.87741 7.05323 4.84944L7.02726 4.6976L7.16711 4.63367C7.23704 4.5997 14.3415 1.29322 16.6011 0.290292C17.4002 -0.0653295 18.0355 -0.0952972 18.4831 0.206382C19.1204 0.635924 19.0964 1.56094 19.0944 1.60489V1.70878L6.33799 10.0479C6.39394 10.1278 6.44588 10.2057 6.49183 10.2856C6.75158 10.7363 6.88834 11.2474 6.88843 11.7676C6.88853 12.2877 6.75194 12.7988 6.49235 13.2496C6.23277 13.7004 5.85929 14.0751 5.40934 14.3361C4.95938 14.5971 4.44874 14.7353 3.92856 14.7369ZM3.92856 9.2028C3.53559 9.20441 3.14823 9.29622 2.79633 9.47114C2.44444 9.64606 2.13739 9.89944 1.89886 10.2117C1.66033 10.524 1.49667 10.8869 1.42051 11.2725C1.34434 11.658 1.35769 12.0558 1.45954 12.4354C1.56138 12.8149 1.749 13.166 2.00794 13.4616C2.26688 13.7573 2.59022 13.9895 2.95305 14.1404C3.31589 14.2913 3.70853 14.357 4.10072 14.3322C4.49292 14.3075 4.8742 14.193 5.21519 13.9977C5.54127 13.8119 5.82231 13.5565 6.03826 13.2495C6.2542 12.9426 6.39971 12.5918 6.46441 12.2221C6.52911 11.8525 6.51139 11.4731 6.41252 11.111C6.31365 10.749 6.13608 10.4133 5.89247 10.1278L5.74862 9.954L18.6988 1.48902C18.6868 1.27524 18.6169 0.773777 18.2633 0.53603C17.9097 0.298283 17.4362 0.358219 16.7689 0.655902C14.6871 1.57892 8.47772 4.46784 7.47678 4.93335C7.56669 5.58066 7.80643 8.04803 6.36397 8.84718C5.66671 9.23277 5.39899 9.39859 5.2951 9.47052L5.19721 9.53844L5.08932 9.4845C4.72739 9.29978 4.32691 9.20325 3.92057 9.2028H3.92856Z" fill="#ffffff"/>
<path d="M8.49163 7.47459C8.35965 7.47459 8.23064 7.43546 8.1209 7.36214C8.01117 7.28881 7.92564 7.1846 7.87514 7.06267C7.82463 6.94073 7.81142 6.80656 7.83716 6.67712C7.86291 6.54768 7.92646 6.42878 8.01978 6.33546C8.11311 6.24214 8.23201 6.17858 8.36145 6.15284C8.49089 6.12709 8.62506 6.1403 8.74699 6.19081C8.86892 6.24131 8.97314 6.32684 9.04646 6.43658C9.11978 6.54631 9.15892 6.67533 9.15892 6.8073C9.15839 6.98412 9.08792 7.15354 8.96289 7.27857C8.83787 7.40359 8.66844 7.47407 8.49163 7.47459ZM8.49163 6.53959C8.43868 6.53959 8.38692 6.55529 8.3429 6.58471C8.29887 6.61412 8.26456 6.65594 8.24429 6.70485C8.22403 6.75377 8.21873 6.8076 8.22906 6.85953C8.23939 6.91146 8.26489 6.95917 8.30233 6.99661C8.33977 7.03405 8.38747 7.05955 8.4394 7.06987C8.49133 7.0802 8.54516 7.0749 8.59408 7.05464C8.643 7.03438 8.68481 7.00006 8.71423 6.95604C8.74364 6.91201 8.75934 6.86025 8.75934 6.8073C8.76041 6.77148 8.75428 6.73581 8.74131 6.7024C8.72833 6.66899 8.70878 6.63853 8.68382 6.61281C8.65885 6.5871 8.62897 6.56666 8.59596 6.55271C8.56295 6.53876 8.52747 6.53158 8.49163 6.5316V6.53959Z" fill="#ffffff"/>
</svg>`;

const brainIcon = `<svg width="20" height="17" viewBox="0 0 20 17" fill="none" >
<path d="M7.8825 15.9364C7.74246 15.9366 7.60284 15.9212 7.46623 15.8904C6.93705 15.7523 6.47228 15.4346 6.15137 14.9918C6.14722 15.0259 6.13436 15.0583 6.11403 15.086C6.0937 15.1137 6.06659 15.1357 6.0353 15.1499C5.94524 15.1919 3.79583 16.1686 2.27484 15.246C1.41228 14.7236 0.939969 13.7089 0.873926 12.228C0.87194 12.2154 0.87194 12.2026 0.873926 12.19C0.883933 12.1179 1.15211 10.4088 2.46096 9.62628C3.24347 9.15598 4.22212 9.12595 5.36686 9.53622L6.10134 9.78038C5.93923 9.31208 5.77513 8.53157 6.12336 7.86513C6.43756 7.26474 7.09199 6.8985 8.06663 6.77842C8.09291 6.77514 8.11958 6.77706 8.14512 6.78408C8.17066 6.7911 8.19456 6.80309 8.21547 6.81935C8.23637 6.83561 8.25387 6.85583 8.26696 6.87885C8.28006 6.90188 8.28849 6.92725 8.29177 6.95354C8.29506 6.97982 8.29313 7.00649 8.28611 7.03203C8.27909 7.05756 8.26711 7.08147 8.25085 7.10238C8.23458 7.12328 8.21436 7.14078 8.19134 7.15388C8.16832 7.16697 8.14294 7.1754 8.11666 7.17868C7.27811 7.28275 6.72775 7.57894 6.47759 8.05525C6.0453 8.88179 6.62568 10.0085 6.63168 10.0205C6.65027 10.056 6.65778 10.0962 6.65325 10.136C6.64872 10.1758 6.63236 10.2133 6.60628 10.2437C6.5802 10.2741 6.5456 10.296 6.50696 10.3065C6.46832 10.317 6.42741 10.3157 6.38953 10.3027L5.23678 9.91847C4.20611 9.55023 3.34354 9.56824 2.6671 9.97251C1.58839 10.6149 1.30421 12.0579 1.26618 12.234C1.33222 13.5629 1.73849 14.4614 2.46696 14.9077C3.5897 15.5882 5.18875 15.0558 5.69308 14.8577L5.16473 13.1126C5.15658 13.0875 5.15346 13.061 5.15554 13.0347C5.15762 13.0084 5.16485 12.9828 5.17684 12.9592C5.18883 12.9357 5.20532 12.9148 5.2254 12.8977C5.24547 12.8806 5.26871 12.8675 5.29381 12.8594C5.31891 12.8512 5.34537 12.8481 5.37168 12.8502C5.39798 12.8523 5.42362 12.8595 5.44713 12.8715C5.47064 12.8835 5.49156 12.9 5.50869 12.9201C5.52582 12.9401 5.53883 12.9634 5.54698 12.9885C6.06732 14.4754 6.73776 15.322 7.53628 15.5021C8.3348 15.6822 9.1053 15.1019 9.31544 14.9157V1.8472C9.17335 1.04668 8.88716 0.588378 8.46289 0.446285C7.65836 0.196122 6.40554 1.21078 5.99327 1.61105C5.97122 1.63296 5.94436 1.64943 5.91483 1.65916C5.88531 1.66888 5.85392 1.6716 5.82316 1.66708C4.64039 1.49297 3.84386 1.63706 3.52365 2.08135C3.08337 2.69375 3.5957 3.72242 3.60171 3.73243C3.61367 3.75595 3.62087 3.7816 3.62292 3.80791C3.62497 3.83422 3.62181 3.86067 3.61364 3.88576C3.60546 3.91085 3.59242 3.93408 3.57526 3.95413C3.55811 3.97418 3.53717 3.99065 3.51365 4.00261C3.49013 4.01457 3.46448 4.02177 3.43817 4.02382C3.41187 4.02587 3.38542 4.02271 3.36033 4.01454C3.33524 4.00636 3.312 3.99332 3.29195 3.97616C3.27191 3.95901 3.25543 3.93807 3.24347 3.91455C3.21746 3.86252 2.61906 2.65373 3.19944 1.8472C3.60971 1.27883 4.47828 1.0807 5.78313 1.25882C6.11935 0.94261 7.51026 -0.278188 8.59897 0.058032C9.17735 0.240151 9.5576 0.82053 9.72571 1.77916C9.72681 1.79047 9.72681 1.80186 9.72571 1.81318V14.9998C9.72586 15.0261 9.72081 15.0522 9.71085 15.0766C9.70089 15.101 9.68622 15.1232 9.66767 15.1419C9.63565 15.1779 8.87115 15.9364 7.8825 15.9364Z" fill="#ffffff"/>
<path d="M1.14007 11.8437C1.09836 11.8434 1.05777 11.8301 1.02399 11.8056C0.98396 11.7756 0.0653585 11.0952 0.00331799 9.96043C-0.0407108 9.1599 0.353548 8.34737 1.18009 7.55886C0.873888 7.09655 0.0273371 5.66162 0.519659 4.60292C0.825859 3.9465 1.57235 3.57425 2.73911 3.4982C2.77713 3.4882 4.64635 3.51822 4.7184 6.08189C4.7184 6.13497 4.69732 6.18587 4.65978 6.2234C4.62225 6.26094 4.57134 6.28202 4.51827 6.28202C4.46519 6.28202 4.41429 6.26094 4.37676 6.2234C4.33922 6.18587 4.31814 6.13497 4.31814 6.08189C4.2581 3.92048 2.81316 3.88045 2.75312 3.88045C1.75246 3.9485 1.12205 4.24269 0.883898 4.75502C0.399582 5.7937 1.59236 7.43478 1.60436 7.45279C1.63338 7.49279 1.64657 7.5421 1.6414 7.59125C1.63623 7.64039 1.61306 7.68588 1.57635 7.71896C0.759815 8.46545 0.363557 9.20793 0.401582 9.9204C0.451615 10.863 1.25213 11.4614 1.26014 11.4674C1.28132 11.483 1.29921 11.5027 1.31279 11.5252C1.32636 11.5478 1.33536 11.5728 1.33927 11.5988C1.34317 11.6248 1.3419 11.6513 1.33554 11.6769C1.32917 11.7024 1.31783 11.7264 1.30217 11.7476C1.28511 11.7757 1.2614 11.7991 1.23313 11.8159C1.20486 11.8327 1.1729 11.8422 1.14007 11.8437Z" fill="#ffffff"/>
<path d="M12.1192 16.1264C11.1286 16.1264 10.3661 15.3679 10.3281 15.3259C10.2918 15.2883 10.2717 15.238 10.272 15.1858V2.0112C10.2711 1.99988 10.2711 1.9885 10.272 1.97718C10.4401 1.01855 10.8204 0.440174 11.4008 0.256054C12.4875 -0.0881707 13.8804 1.13463 14.2146 1.45684C15.5195 1.28072 16.39 1.47885 16.7983 2.05723C17.3807 2.85775 16.7803 4.07055 16.7543 4.12258C16.7282 4.16588 16.6867 4.19772 16.6382 4.21171C16.5896 4.22569 16.5376 4.2208 16.4925 4.198C16.4474 4.17519 16.4126 4.13618 16.3951 4.08878C16.3775 4.04138 16.3786 3.98911 16.398 3.94246C16.398 3.94246 16.9124 2.89778 16.4741 2.28938C16.1519 1.84509 15.3573 1.703 14.1766 1.87711C14.1455 1.88119 14.114 1.87827 14.0842 1.86858C14.0544 1.85888 14.0272 1.84265 14.0045 1.82108C13.5922 1.40881 12.3414 0.398147 11.5208 0.656316C11.0986 0.790403 10.8104 1.25671 10.6703 2.05723V15.1238C10.8704 15.3079 11.6269 15.8963 12.4475 15.7101C13.268 15.524 13.9164 14.6815 14.4387 13.1945C14.4566 13.1459 14.4927 13.1062 14.5393 13.0836C14.5859 13.061 14.6394 13.0573 14.6886 13.0734C14.7379 13.0895 14.7789 13.124 14.8033 13.1697C14.8276 13.2154 14.8332 13.2688 14.819 13.3186L14.2907 15.0637C14.797 15.2639 16.398 15.7922 17.5188 15.1138C18.2532 14.6675 18.6595 13.7689 18.7195 12.442C18.6895 12.2639 18.4033 10.823 17.3186 10.1785C16.6422 9.77827 15.7796 9.75826 14.753 10.1245L13.5962 10.5088C13.5577 10.5207 13.5164 10.5208 13.4778 10.5089C13.4393 10.497 13.4052 10.4737 13.3801 10.4421C13.355 10.4105 13.34 10.3721 13.3371 10.3318C13.3343 10.2916 13.3437 10.2514 13.364 10.2166C13.364 10.2166 13.9484 9.07381 13.5161 8.24928C13.266 7.77497 12.7156 7.48077 11.8771 7.37471C11.824 7.36807 11.7757 7.34062 11.7429 7.2984C11.71 7.25618 11.6953 7.20264 11.702 7.14956C11.7086 7.09648 11.736 7.04821 11.7783 7.01537C11.8205 6.98253 11.874 6.96781 11.9271 6.97444C12.9037 7.09652 13.5562 7.46276 13.8704 8.06115C14.2206 8.72759 14.0545 9.5081 13.8924 9.9784L14.6309 9.73225C15.7716 9.33198 16.7503 9.354 17.5348 9.8223C18.8416 10.6048 19.1098 12.3139 19.1218 12.386C19.1228 12.3986 19.1228 12.4113 19.1218 12.424C19.0518 13.905 18.5795 14.9196 17.7209 15.442C16.1979 16.3646 14.0485 15.3879 13.9584 15.3459C13.9278 15.3316 13.9012 15.3098 13.8813 15.2825C13.8614 15.2553 13.8486 15.2233 13.8444 15.1898C13.522 15.6307 13.0577 15.9473 12.5295 16.0864C12.3946 16.1146 12.257 16.128 12.1192 16.1264Z" fill="#ffffff"/>
<path d="M18.8597 12.0338C18.8179 12.0334 18.7772 12.0199 18.7435 11.9951C18.7097 11.9704 18.6846 11.9358 18.6715 11.896C18.6585 11.8562 18.6582 11.8134 18.6708 11.7735C18.6834 11.7336 18.7082 11.6986 18.7416 11.6736C18.7416 11.6736 19.5422 11.0732 19.5982 10.1245C19.6362 9.40807 19.24 8.66559 18.4234 7.9231C18.387 7.88976 18.3642 7.84413 18.3594 7.795C18.3546 7.74587 18.3682 7.69669 18.3974 7.65693C18.4094 7.64092 19.5982 5.99584 19.1179 4.95917C18.8777 4.44683 18.2453 4.15864 17.2346 4.0866C17.1866 4.0866 15.7437 4.12062 15.6816 6.28803C15.6816 6.34111 15.6606 6.39202 15.623 6.42955C15.5855 6.46708 15.5346 6.48816 15.4815 6.48816C15.4284 6.48816 15.3775 6.46708 15.34 6.42955C15.3025 6.39202 15.2814 6.34111 15.2814 6.28803C15.3534 3.73036 17.2226 3.70435 17.2487 3.70435C18.4274 3.7824 19.1739 4.15464 19.4801 4.80907C19.9724 5.86776 19.1259 7.3047 18.8197 7.765C19.6462 8.56552 20.0425 9.36604 19.9965 10.1666C19.9344 11.3013 19.0158 11.9838 18.9758 12.0118C18.9402 12.0306 18.8997 12.0383 18.8597 12.0338Z" fill="#ffffff"/>
</svg>`;

const faceLessonIcon = `<svg width="20" height="19" viewBox="0 0 20 19" fill="none" >
<path d="M6.90321 18.1545C5.46496 18.156 4.06223 17.7077 2.89135 16.8725C1.72047 16.0373 0.840042 14.8568 0.373273 13.4964C-0.0934965 12.136 -0.123244 10.6637 0.288205 9.28559C0.699654 7.90744 1.53171 6.69243 2.6679 5.8106C3.13002 4.85777 4.41157 1.8516 3.29914 0.381865C3.26509 0.336819 3.24814 0.281141 3.25132 0.224761C3.25451 0.168381 3.27763 0.114966 3.31655 0.074047C3.35546 0.0331276 3.40765 0.00736482 3.4638 0.00135384C3.51995 -0.00465715 3.5764 0.00947462 3.6231 0.0412288C4.31912 0.586435 4.77401 1.38249 4.89036 2.25893C4.88499 2.19576 4.90494 2.13304 4.94581 2.08457C4.98669 2.0361 5.04515 2.00585 5.10833 2.00048C5.17151 1.99511 5.23423 2.01506 5.2827 2.05593C5.33117 2.09681 5.36141 2.15526 5.36678 2.21844C5.36813 2.2319 5.36813 2.24547 5.36678 2.25893C5.52952 3.0242 5.4826 3.8192 5.231 4.56001C6.18599 4.30317 7.18501 4.25437 8.16049 4.41691C9.13597 4.57944 10.0652 4.94953 10.8853 5.50214C11.7054 6.05475 12.3973 6.77701 12.9143 7.62008C13.4312 8.46315 13.7611 9.40738 13.8816 10.3889C14.0021 11.3705 13.9105 12.3665 13.613 13.3096C13.3154 14.2527 12.8188 15.1209 12.1568 15.8555C11.4947 16.5902 10.6827 17.1741 9.77551 17.5678C8.86834 17.9616 7.88721 18.1559 6.89844 18.1378L6.90321 18.1545ZM4.18528 1.48C4.36632 3.19985 3.43492 5.32466 3.07284 6.07024C3.05615 6.10408 3.03166 6.13348 3.00138 6.156C1.71844 7.13737 0.851721 8.56555 0.573518 10.1567C0.295316 11.7478 0.625997 13.3853 1.49983 14.7438C2.37366 16.1023 3.72666 17.0822 5.28989 17.4889C6.85313 17.8955 8.51213 17.699 9.93715 16.9385C11.3622 16.178 12.4489 14.9092 12.9812 13.3842C13.5136 11.8592 13.4526 10.1897 12.8105 8.70754C12.1684 7.22542 10.992 6.03917 9.51536 5.3846C8.03868 4.73003 6.36977 4.65506 4.84035 5.17459C4.79333 5.19028 4.74257 5.19091 4.69518 5.17639C4.64778 5.16187 4.60609 5.13293 4.57593 5.0936C4.5472 5.05325 4.53177 5.00496 4.53177 4.95544C4.53177 4.90591 4.5472 4.85762 4.57593 4.81728C4.8004 4.45728 4.93595 4.04901 4.97136 3.62624C4.81176 3.95735 4.64025 4.26702 4.52353 4.46711C4.49252 4.51865 4.44316 4.55655 4.38537 4.5732C4.32757 4.58985 4.26562 4.58401 4.21194 4.55688C4.15827 4.52974 4.11685 4.4833 4.096 4.42688C4.07514 4.37047 4.07639 4.30825 4.09951 4.25273C4.61642 3.03549 4.47589 2.11601 4.18528 1.48476V1.48Z" fill="#ffffff"/>
<path d="M4.65689 11.0653C4.56633 11.0658 4.47767 11.0394 4.40215 10.9894C4.32662 10.9395 4.26764 10.8682 4.23265 10.7847C4.19767 10.7011 4.18826 10.6091 4.20564 10.5202C4.22302 10.4314 4.26639 10.3496 4.33025 10.2854C4.39412 10.2212 4.47562 10.1774 4.5644 10.1596C4.65319 10.1418 4.74526 10.1507 4.82897 10.1852C4.91268 10.2198 4.98425 10.2784 5.03461 10.3536C5.08497 10.4289 5.11185 10.5174 5.11186 10.608C5.11186 10.7289 5.06401 10.8448 4.97875 10.9305C4.89349 11.0163 4.77777 11.0647 4.65689 11.0653ZM4.65689 10.5889C4.65159 10.5889 4.64647 10.5908 4.64251 10.5943C4.63855 10.5979 4.63603 10.6027 4.63544 10.608C4.63544 10.6318 4.67595 10.6318 4.67595 10.608C4.67543 10.6031 4.67325 10.5986 4.66978 10.5951C4.66632 10.5916 4.66176 10.5894 4.65689 10.5889Z" fill="#ffffff"/>
<path d="M8.36813 9.25992C8.27758 9.2604 8.18892 9.23397 8.1134 9.184C8.03787 9.13404 7.97887 9.06277 7.94389 8.97924C7.9089 8.89572 7.89951 8.80368 7.91689 8.71481C7.93426 8.62593 7.97763 8.54422 8.0415 8.48002C8.10537 8.41582 8.18685 8.37202 8.27564 8.35418C8.36442 8.33634 8.45651 8.34526 8.54022 8.3798C8.62393 8.41435 8.6955 8.47296 8.74586 8.54823C8.79622 8.62349 8.8231 8.71201 8.8231 8.80256C8.8231 8.92345 8.77524 9.03942 8.68998 9.12513C8.60473 9.21083 8.48902 9.25929 8.36813 9.25992ZM8.36813 8.78351C8.36544 8.78317 8.3627 8.78341 8.36011 8.78421C8.35751 8.78502 8.35512 8.78637 8.35309 8.78817C8.35106 8.78998 8.34943 8.7922 8.34833 8.79468C8.34723 8.79716 8.34667 8.79985 8.34669 8.80256C8.34669 8.824 8.38718 8.824 8.38718 8.80256C8.38718 8.79751 8.38517 8.79266 8.3816 8.78909C8.37802 8.78552 8.37319 8.78351 8.36813 8.78351Z" fill="#ffffff"/>
<path d="M7.87269 14.6553C7.46977 14.6567 7.0687 14.6006 6.68166 14.4885C6.65179 14.479 6.62409 14.4637 6.60014 14.4434C6.57619 14.4232 6.55646 14.3984 6.54209 14.3705C6.52771 14.3427 6.51895 14.3122 6.51634 14.281C6.51372 14.2497 6.51728 14.2183 6.52682 14.1884C6.53636 14.1585 6.5517 14.1308 6.57195 14.1069C6.5922 14.0829 6.61696 14.0632 6.64483 14.0488C6.6727 14.0344 6.70313 14.0257 6.73438 14.0231C6.76563 14.0205 6.79709 14.024 6.82696 14.0336C6.84125 14.0336 8.19189 14.4576 9.22809 13.843C9.81646 13.4952 10.2 12.8711 10.3715 11.9921C10.3774 11.9608 10.3895 11.931 10.4069 11.9044C10.4244 11.8778 10.4469 11.8549 10.4733 11.837C10.4996 11.819 10.5292 11.8065 10.5603 11.8C10.5915 11.7935 10.6237 11.7932 10.6549 11.7992C10.6862 11.8051 10.716 11.8172 10.7427 11.8346C10.7693 11.8521 10.7922 11.8746 10.8101 11.901C10.8281 11.9273 10.8406 11.9569 10.8471 11.988C10.8536 12.0192 10.8538 12.0514 10.8479 12.0827C10.6478 13.1046 10.1857 13.8335 9.47344 14.2551C8.98542 14.5297 8.43252 14.6679 7.87269 14.6553Z" fill="#ffffff"/>
<path d="M16.079 13.3879C16.0409 13.3881 16.0033 13.3791 15.9694 13.3617C15.9415 13.3474 15.9167 13.3277 15.8965 13.3037C15.8762 13.2798 15.8609 13.2521 15.8514 13.2222C15.8419 13.1923 15.8383 13.1609 15.841 13.1296C15.8437 13.0984 15.8525 13.068 15.867 13.0401C16.0387 12.7159 16.1132 12.3491 16.0815 11.9836C16.0498 11.618 15.9133 11.2695 15.6883 10.9797C15.6472 10.9313 15.6271 10.8687 15.6322 10.8054C15.6373 10.7422 15.6674 10.6837 15.7157 10.6426C15.764 10.6015 15.8267 10.5813 15.8899 10.5865C15.9531 10.5916 16.0117 10.6217 16.0528 10.67C16.3391 11.0321 16.514 11.4696 16.5563 11.9293C16.5986 12.389 16.5064 12.851 16.291 13.2593C16.2709 13.2981 16.2404 13.3307 16.203 13.3534C16.1656 13.3761 16.1227 13.388 16.079 13.3879Z" fill="#ffffff"/>
<path d="M17.7654 13.7263C17.7386 13.726 17.712 13.7211 17.6868 13.712C17.6271 13.6914 17.578 13.648 17.5504 13.5913C17.5227 13.5345 17.5186 13.4691 17.5391 13.4094C17.7217 12.8758 17.7961 12.3111 17.7581 11.7483C17.7201 11.1855 17.5703 10.636 17.3176 10.1317C17.2933 10.078 17.2898 10.0171 17.3078 9.96098C17.3258 9.90482 17.3639 9.85733 17.4149 9.82769C17.4659 9.79805 17.5261 9.78837 17.5838 9.80053C17.6415 9.81269 17.6926 9.84582 17.7273 9.89351C18.0195 10.4558 18.1935 11.072 18.2386 11.7042C18.2836 12.3363 18.1988 12.9709 17.9893 13.569C17.9727 13.6151 17.9423 13.6549 17.9022 13.683C17.8621 13.7111 17.8144 13.7262 17.7654 13.7263Z" fill="#ffffff"/>
<path d="M19.4043 14.3598C19.3767 14.3598 19.3493 14.355 19.3233 14.3455C19.2939 14.3347 19.2669 14.3181 19.2438 14.2967C19.2208 14.2754 19.2022 14.2497 19.1891 14.2211C19.1761 14.1926 19.1688 14.1617 19.1677 14.1303C19.1666 14.0989 19.1717 14.0676 19.1828 14.0383C19.4481 13.3028 19.5557 12.5198 19.4987 11.7401C19.4416 10.9603 19.2212 10.2013 18.8517 9.51232C18.8182 9.45862 18.8074 9.39382 18.8217 9.33217C18.836 9.27053 18.8742 9.21708 18.9279 9.1836C18.9816 9.15011 19.0464 9.13933 19.1081 9.15363C19.1697 9.16792 19.2232 9.20612 19.2566 9.25982C19.6713 10.0099 19.9192 10.8407 19.9833 11.6954C20.0474 12.5501 19.9263 13.4086 19.6282 14.2121C19.6101 14.2564 19.579 14.2942 19.5391 14.3205C19.4991 14.3468 19.4522 14.3605 19.4043 14.3598Z" fill="#ffffff"/>
</svg>`;

const eyeLessonIcon = `<svg width="20" height="15" viewBox="0 0 20 15" fill="none" >
<path d="M10 14.6203C5.59049 14.6203 1.67539 12.9885 0.043265 10.4644C0.0150683 10.4207 0 10.3692 0 10.3165C0 10.2638 0.0150683 10.2123 0.043265 10.1686C1.68296 7.64444 5.59301 6.0127 10 6.0127C14.407 6.0127 18.3246 7.64444 19.9567 10.1686C19.9849 10.2123 20 10.2638 20 10.3165C20 10.3692 19.9849 10.4207 19.9567 10.4644C18.3196 12.9938 14.4095 14.6203 10 14.6203ZM0.560397 10.3165C2.14712 12.5819 5.90834 14.0922 10 14.0922C14.0917 14.0922 17.8529 12.5819 19.4396 10.3165C17.8529 8.05106 14.0942 6.54077 10 6.54077C5.90581 6.54077 2.14712 8.05634 0.560397 10.3218V10.3165Z" fill="#ffffff"/>
<path d="M10 13.6077C9.32404 13.6077 8.66326 13.4146 8.10122 13.053C7.53918 12.6914 7.10111 12.1774 6.84243 11.576C6.58375 10.9746 6.51608 10.3129 6.64795 9.67446C6.77982 9.03604 7.10533 8.44962 7.5833 7.98934C8.06128 7.52907 8.67026 7.21562 9.33323 7.08863C9.9962 6.96164 10.6834 7.02682 11.3079 7.27592C11.9324 7.52501 12.4662 7.94685 12.8417 8.48807C13.2173 9.0293 13.4177 9.66561 13.4177 10.3165C13.4165 11.189 13.0561 12.0255 12.4154 12.6424C11.7747 13.2594 10.9061 13.6065 10 13.6077ZM10 7.45872C9.41304 7.45872 8.83925 7.62633 8.35121 7.94035C7.86317 8.25437 7.4828 8.7007 7.25818 9.2229C7.03356 9.74509 6.97478 10.3197 7.08929 10.8741C7.2038 11.4284 7.48646 11.9376 7.9015 12.3373C8.31655 12.737 8.84534 13.0092 9.42102 13.1194C9.99671 13.2297 10.5934 13.1731 11.1357 12.9568C11.678 12.7405 12.1415 12.3742 12.4676 11.9042C12.7937 11.4343 12.9677 10.8818 12.9677 10.3165C12.9665 9.55894 12.6535 8.83271 12.0972 8.29702C11.5409 7.76133 10.7867 7.45987 10 7.45872Z" fill="#ffffff"/>
<path d="M10.0709 4.43038C10.0038 4.43038 9.93936 4.40371 9.89189 4.35623C9.84441 4.30875 9.81775 4.24436 9.81775 4.17722V0.253165C9.81775 0.186021 9.84441 0.121628 9.89189 0.07415C9.93936 0.0266724 10.0038 0 10.0709 0C10.1381 0 10.2024 0.0266724 10.2499 0.07415C10.2974 0.121628 10.3241 0.186021 10.3241 0.253165V4.17722C10.3241 4.24436 10.2974 4.30875 10.2499 4.35623C10.2024 4.40371 10.1381 4.43038 10.0709 4.43038Z" fill="#ffffff"/>
<path d="M7.02026 4.43048C6.96883 4.43084 6.91851 4.41553 6.876 4.38658C6.83349 4.35764 6.8008 4.31643 6.78228 4.26845L5.40507 0.5925C5.38201 0.530031 5.38449 0.46099 5.41198 0.400335C5.43946 0.339681 5.48973 0.292297 5.55191 0.26845C5.58299 0.256644 5.6161 0.251076 5.64933 0.252065C5.68257 0.253055 5.71529 0.260583 5.74561 0.274219C5.77594 0.287854 5.80329 0.30733 5.82609 0.331535C5.84889 0.355739 5.86669 0.384197 5.87849 0.415285L7.2557 4.0887C7.26751 4.11979 7.27309 4.15289 7.2721 4.18613C7.27111 4.21937 7.26357 4.25208 7.24994 4.28241C7.2363 4.31274 7.21683 4.34008 7.19263 4.36288C7.16842 4.38568 7.13996 4.40349 7.10888 4.41529C7.08034 4.42503 7.05042 4.43016 7.02026 4.43048Z" fill="#ffffff"/>
<path d="M13.4633 4.43281C13.4331 4.43307 13.4031 4.42792 13.3747 4.41761C13.3433 4.40606 13.3146 4.38844 13.2902 4.36574C13.2657 4.34305 13.2459 4.31574 13.232 4.28539C13.2182 4.25504 13.2104 4.22224 13.2093 4.18889C13.2081 4.15553 13.2135 4.12228 13.2253 4.09103L14.5949 0.415084C14.6065 0.383832 14.6242 0.355179 14.6469 0.33076C14.6696 0.30634 14.6969 0.286633 14.7273 0.272763C14.7576 0.258893 14.7904 0.251132 14.8237 0.249923C14.857 0.248714 14.8902 0.254081 14.9215 0.265717C14.9527 0.277353 14.9814 0.295031 15.0058 0.31774C15.0302 0.34045 15.0499 0.367747 15.0638 0.398073C15.0777 0.428399 15.0854 0.46116 15.0867 0.494485C15.0879 0.527811 15.0825 0.561048 15.0709 0.592299L13.6987 4.26825C13.6807 4.3163 13.6486 4.35777 13.6066 4.38715C13.5645 4.41654 13.5146 4.43246 13.4633 4.43281Z" fill="#ffffff"/>
</svg>`;

const brushIcon = `<svg width="17" height="20" viewBox="0 0 17 20" fill="none" >
<path d="M6.04289 12.9129C5.94496 12.9135 5.85018 12.8783 5.77638 12.8139L4.04794 11.3386C3.96754 11.2681 3.9178 11.169 3.90927 11.0624C3.90074 10.9558 3.93409 10.85 4.00225 10.7676L5.08539 9.49789C5.1562 9.41791 5.25524 9.36848 5.36172 9.35996C5.4682 9.35144 5.57383 9.3845 5.65646 9.4522L7.38491 10.9275C7.46573 10.9977 7.51579 11.0969 7.52433 11.2037C7.53287 11.3104 7.49921 11.4163 7.43059 11.4985L6.34746 12.7682C6.31251 12.8093 6.26981 12.843 6.22179 12.8675C6.17377 12.892 6.12138 12.9068 6.06764 12.911L6.04289 12.9129ZM5.39757 9.72632C5.39317 9.72645 5.38884 9.72754 5.3849 9.72952C5.38095 9.73149 5.37749 9.73429 5.37473 9.73774L4.2916 11.0074C4.28664 11.0133 4.28391 11.0207 4.28391 11.0284C4.28391 11.036 4.28664 11.0435 4.2916 11.0493L6.02005 12.5246C6.02687 12.5266 6.03416 12.5266 6.04098 12.5246C6.04885 12.5227 6.05607 12.5187 6.06192 12.5131L7.14505 11.2435C7.14794 11.2408 7.15023 11.2376 7.1518 11.2339C7.15338 11.2303 7.1542 11.2265 7.1542 11.2225C7.1542 11.2186 7.15338 11.2147 7.1518 11.2111C7.15023 11.2075 7.14794 11.2043 7.14505 11.2016L5.41851 9.73964C5.41625 9.73599 5.41319 9.73289 5.40956 9.73058C5.40594 9.72828 5.40184 9.72682 5.39757 9.72632Z" fill="#ffffff"/>
<path d="M8.21482 11.3197C8.08878 11.3194 7.9676 11.2711 7.87599 11.1846L5.68497 9.12488C5.58961 9.03459 5.53387 8.91022 5.52995 8.77895C5.52602 8.64768 5.57422 8.5202 5.66402 8.42437L13.4477 0.155249C13.538 0.0598834 13.6624 0.00414587 13.7937 0.000222059C13.9249 -0.00370175 14.0524 0.0445076 14.1482 0.13431L16.3374 2.19588C16.3853 2.24023 16.4238 2.29375 16.4506 2.35326C16.4774 2.41278 16.492 2.47707 16.4935 2.54233C16.4954 2.60734 16.4845 2.6721 16.4613 2.73287C16.4381 2.79363 16.4031 2.84921 16.3583 2.89639L8.57269 11.1636C8.52647 11.2122 8.47099 11.251 8.40953 11.2778C8.34807 11.3046 8.28186 11.3189 8.21482 11.3197ZM13.8094 0.37987C13.7778 0.380421 13.7477 0.393419 13.7257 0.416038L5.94195 8.68516C5.93107 8.69564 5.92242 8.7082 5.9165 8.7221C5.91059 8.736 5.90755 8.75096 5.90755 8.76606C5.90755 8.78117 5.91059 8.79612 5.9165 8.81002C5.92242 8.82392 5.93107 8.83648 5.94195 8.84696L8.13106 10.9085C8.15273 10.9296 8.18175 10.9414 8.21196 10.9414C8.24217 10.9414 8.2712 10.9296 8.29287 10.9085L16.0766 2.64131C16.0869 2.63046 16.095 2.6176 16.1002 2.60353C16.1055 2.58945 16.1078 2.57446 16.107 2.55946C16.1071 2.54431 16.104 2.52932 16.0977 2.51551C16.0915 2.50171 16.0823 2.48943 16.0709 2.47951L13.8875 0.412231C13.8665 0.391865 13.8386 0.380285 13.8094 0.37987Z" fill="#ffffff"/>
<path d="M4.28012 15.7912C3.84945 15.7831 3.42529 15.6845 3.03518 15.5019L3.01424 15.4905C2.25281 14.986 1.76741 15.4467 1.74647 15.4676L1.69126 15.5209H1.61322C1.4804 15.5327 1.34673 15.5114 1.22416 15.4589C1.10159 15.4064 0.993925 15.3244 0.910797 15.2202C0.667139 14.8832 0.811812 14.4169 0.828944 14.3655L0.844176 14.3217L0.876534 14.2912C1.87401 13.2937 3.45207 14.2227 3.51869 14.2627C4.18685 14.7081 4.64751 14.4111 4.76553 14.316C4.88355 13.9943 5.05677 13.8058 5.2833 13.7449C5.4079 13.7279 5.53477 13.7405 5.65353 13.7819C5.7723 13.8233 5.8796 13.8921 5.96669 13.9828L5.99904 14.0152L6.01237 14.0571C6.09201 14.249 6.11227 14.4605 6.07053 14.6641C6.02879 14.8677 5.92698 15.0541 5.77823 15.1992C5.64549 15.3287 5.48823 15.4303 5.31567 15.4981C5.00664 15.6951 4.64656 15.797 4.28012 15.7912ZM3.21412 15.165C3.32262 15.2164 4.35626 15.6808 5.11769 15.165L5.16148 15.144C5.25492 15.117 5.34204 15.0716 5.41777 15.0106C5.4935 14.9495 5.55632 14.874 5.60256 14.7884C5.64881 14.7028 5.67755 14.6089 5.68712 14.5121C5.69669 14.4153 5.6869 14.3176 5.65831 14.2246C5.61877 14.1879 5.57233 14.1594 5.52167 14.1407C5.47102 14.1221 5.41717 14.1137 5.36326 14.1161C5.26427 14.1408 5.1729 14.2684 5.10247 14.4797L5.08724 14.5234L5.05488 14.5539C4.80932 14.8014 4.12594 15.125 3.3074 14.5787C3.3074 14.5787 1.96347 13.7906 1.17159 14.5215C1.12278 14.6781 1.13713 14.8475 1.21156 14.9936C1.25211 15.0389 1.30213 15.0746 1.35806 15.0983C1.414 15.122 1.47447 15.133 1.53517 15.1307C1.83023 14.908 2.46411 14.6719 3.21412 15.165Z" fill="#ffffff"/>
<path d="M14.9611 20H0.79473C0.626856 20.0006 0.463135 19.9479 0.327202 19.8494C0.19127 19.7508 0.0901583 19.6117 0.0384714 19.452C-0.0132155 19.2922 -0.0128136 19.1202 0.0396333 18.9608C0.0920801 18.8013 0.193858 18.6626 0.330258 18.5647V16.7659C0.330258 16.5892 0.400444 16.4197 0.525391 16.2947C0.650337 16.1698 0.819808 16.0996 0.996509 16.0996C1.17321 16.0996 1.34267 16.1698 1.46762 16.2947C1.59256 16.4197 1.66276 16.5892 1.66276 16.7659V18.4144H1.93116V16.7659C1.93116 16.5892 2.00136 16.4197 2.1263 16.2947C2.25125 16.1698 2.42071 16.0996 2.59741 16.0996C2.77411 16.0996 2.94358 16.1698 3.06853 16.2947C3.19347 16.4197 3.26366 16.5892 3.26366 16.7659V18.4144H3.47876V16.7659C3.47876 16.5892 3.54896 16.4197 3.67391 16.2947C3.79885 16.1698 3.96831 16.0996 4.14501 16.0996C4.32171 16.0996 4.49117 16.1698 4.61612 16.2947C4.74107 16.4197 4.81126 16.5892 4.81126 16.7659V18.4144H4.88932V16.7659C4.88932 16.5892 4.9595 16.4197 5.08445 16.2947C5.2094 16.1698 5.37887 16.0996 5.55557 16.0996C5.73227 16.0996 5.90173 16.1698 6.02667 16.2947C6.15162 16.4197 6.22182 16.5892 6.22182 16.7659V18.4144H14.9783C15.1818 18.4243 15.3737 18.5122 15.5143 18.6598C15.6548 18.8074 15.7332 19.0034 15.7332 19.2072C15.7332 19.411 15.6548 19.607 15.5143 19.7546C15.3737 19.9022 15.1818 19.9901 14.9783 20H14.9611ZM0.992698 16.4822C0.917804 16.4827 0.846151 16.5128 0.793371 16.566C0.740591 16.6191 0.710971 16.691 0.710973 16.7659V18.6352V18.7646L0.598657 18.8389C0.516127 18.8813 0.450286 18.9502 0.411739 19.0346C0.373191 19.119 0.364179 19.214 0.386166 19.3041C0.408154 19.3943 0.459862 19.4744 0.532943 19.5316C0.606024 19.5888 0.696223 19.6197 0.789014 19.6193H14.9554C15.0599 19.6122 15.1577 19.5657 15.2292 19.4892C15.3007 19.4127 15.3405 19.3119 15.3405 19.2072C15.3405 19.1025 15.3007 19.0017 15.2292 18.9252C15.1577 18.8487 15.0599 18.8022 14.9554 18.7951H5.81826V16.7659C5.81826 16.6901 5.78817 16.6175 5.73462 16.564C5.68107 16.5104 5.60846 16.4803 5.53273 16.4803C5.457 16.4803 5.38437 16.5104 5.33082 16.564C5.27727 16.6175 5.24719 16.6901 5.24719 16.7659V18.7951H4.40771V16.7659C4.40771 16.6901 4.37763 16.6175 4.32408 16.564C4.27053 16.5104 4.1979 16.4803 4.12217 16.4803C4.04644 16.4803 3.97381 16.5104 3.92027 16.564C3.86672 16.6175 3.83664 16.6901 3.83664 16.7659V18.7951H2.8601V16.7659C2.8601 16.6901 2.83002 16.6175 2.77647 16.564C2.72292 16.5104 2.6503 16.4803 2.57457 16.4803C2.49884 16.4803 2.42621 16.5104 2.37266 16.564C2.31911 16.6175 2.28903 16.6901 2.28903 16.7659V18.7951H1.2592V16.7659C1.25933 16.6935 1.23182 16.6238 1.18228 16.5711C1.13274 16.5184 1.06491 16.4866 0.992698 16.4822Z" fill="#ffffff"/>
</svg>`;

const emotionIcon = `<svg width="20" height="16" viewBox="0 0 20 16" fill="none" >
<path d="M4.76529 15.1935C3.77302 15.1934 2.80552 14.8835 1.99777 14.3072C1.19002 13.7309 0.582305 12.9168 0.2594 11.9785C-0.0635046 11.0403 -0.0854867 10.0246 0.196505 9.07323C0.478496 8.12187 1.0504 7.28224 1.83245 6.67149C2.43578 5.41455 2.86104 3.79939 2.26399 3.01172C2.23439 2.97189 2.21987 2.92284 2.22305 2.87331C2.22623 2.82379 2.2469 2.777 2.28136 2.74128C2.31582 2.70557 2.36183 2.68324 2.41121 2.67829C2.46059 2.67334 2.51013 2.68608 2.55099 2.71424C3.00126 3.06604 3.30866 3.56919 3.41618 4.13039C3.43943 4.10929 3.46748 4.09419 3.49789 4.08639C3.55065 4.0721 3.60691 4.07899 3.65466 4.10561C3.70241 4.13222 3.73787 4.17645 3.75346 4.22885C3.75464 4.23859 3.75464 4.24844 3.75346 4.25818C3.86088 4.76317 3.83853 5.28715 3.68852 5.78116C4.34312 5.62914 5.02247 5.61721 5.682 5.74616C6.34153 5.87511 6.96636 6.14202 7.5155 6.5294C8.06464 6.91677 8.52568 7.41585 8.86841 7.99391C9.21113 8.57196 9.42779 9.21594 9.50418 9.88361C9.58056 10.5513 9.51493 11.2275 9.31161 11.8681C9.1083 12.5086 8.77187 13.0989 8.32441 13.6003C7.87694 14.1017 7.32855 14.5028 6.71517 14.7774C6.1018 15.0519 5.43731 15.1938 4.76529 15.1935ZM2.97207 4.06754C2.97207 5.11499 2.46929 6.30907 2.18229 6.89774C2.16887 6.92769 2.14795 6.95366 2.12154 6.97315C1.25557 7.63417 0.66982 8.59665 0.480588 9.66952C0.291357 10.7424 0.512473 11.8472 1.10005 12.7646C1.68764 13.682 2.5987 14.3449 3.65238 14.6216C4.70606 14.8984 5.8253 14.7689 6.78789 14.2587C7.75048 13.7485 8.48603 12.8951 8.84851 11.8677C9.21099 10.8403 9.1739 9.71424 8.74459 8.71297C8.31528 7.7117 7.52515 6.90847 6.53107 6.46276C5.53699 6.01704 4.41165 5.96144 3.37848 6.30698C3.33701 6.3214 3.29206 6.32243 3.24998 6.30992C3.20789 6.29741 3.17081 6.272 3.14395 6.23727C3.1171 6.20254 3.10182 6.16025 3.1003 6.11637C3.09878 6.0725 3.11108 6.02925 3.13546 5.99274C3.23422 5.83797 3.30512 5.6671 3.34495 5.48788C3.2842 5.601 3.22555 5.69736 3.17318 5.79373C3.14591 5.83905 3.1025 5.87238 3.05167 5.88702C3.00085 5.90167 2.94635 5.89654 2.89915 5.87267C2.85194 5.84881 2.81552 5.80796 2.79718 5.75835C2.77884 5.70874 2.77995 5.65402 2.80029 5.60519C3.03317 5.12555 3.09384 4.58036 2.97207 4.06126V4.06754Z" fill="#ffffff"/>
<path d="M3.22558 10.3334C3.15482 10.333 3.08576 10.3116 3.02713 10.272C2.9685 10.2324 2.92291 10.1763 2.89612 10.1108C2.86933 10.0453 2.86253 9.97335 2.87658 9.904C2.89064 9.83465 2.92493 9.77102 2.97512 9.72113C3.0253 9.67124 3.08913 9.63733 3.15856 9.62368C3.22799 9.61002 3.2999 9.61724 3.36523 9.64441C3.43057 9.67158 3.48641 9.7175 3.52568 9.77636C3.56495 9.83523 3.5859 9.9044 3.5859 9.97516C3.58535 10.0704 3.54715 10.1615 3.47963 10.2286C3.41212 10.2957 3.32078 10.3334 3.22558 10.3334ZM3.22558 9.91441C3.21357 9.91441 3.20182 9.91798 3.19183 9.92465C3.18184 9.93133 3.17405 9.94081 3.16945 9.95191C3.16485 9.96302 3.16366 9.97523 3.166 9.98702C3.16834 9.9988 3.17413 10.0096 3.18262 10.0181C3.19112 10.0266 3.20195 10.0324 3.21373 10.0347C3.22552 10.0371 3.23773 10.0359 3.24883 10.0313C3.25993 10.0267 3.26941 10.0189 3.27609 10.0089C3.28276 9.99892 3.28633 9.98718 3.28633 9.97516C3.28633 9.95905 3.27993 9.9436 3.26853 9.93221C3.25714 9.92081 3.2417 9.91441 3.22558 9.91441Z" fill="#ffffff"/>
<path d="M5.76669 9.09735C5.69534 9.09735 5.62558 9.07616 5.56628 9.03648C5.50698 8.99679 5.46081 8.94039 5.4336 8.87443C5.40639 8.80847 5.39938 8.73591 5.41345 8.66596C5.42752 8.59601 5.46206 8.53181 5.51266 8.4815C5.56326 8.4312 5.62765 8.39704 5.69769 8.38338C5.76772 8.36971 5.84024 8.37715 5.90604 8.40474C5.97184 8.43234 6.02797 8.47885 6.06731 8.53837C6.10665 8.5979 6.12742 8.66777 6.12701 8.73913C6.12646 8.83433 6.08824 8.92544 6.02073 8.99256C5.95322 9.05968 5.86189 9.09735 5.76669 9.09735ZM5.76669 8.67837C5.75277 8.68099 5.7402 8.68839 5.73116 8.69929C5.72212 8.7102 5.71717 8.72391 5.71717 8.73808C5.71717 8.75224 5.72212 8.76596 5.73116 8.77686C5.7402 8.78776 5.75277 8.79516 5.76669 8.79778C5.77547 8.79943 5.78449 8.79913 5.79314 8.79689C5.80178 8.79466 5.80983 8.79054 5.8167 8.78484C5.82357 8.77914 5.8291 8.77199 5.8329 8.76391C5.8367 8.75583 5.83867 8.74701 5.83867 8.73808C5.83867 8.72915 5.8367 8.72033 5.8329 8.71225C5.8291 8.70416 5.82357 8.69702 5.8167 8.69132C5.80983 8.68562 5.80178 8.6815 5.79314 8.67926C5.78449 8.67703 5.77547 8.67672 5.76669 8.67837Z" fill="#ffffff"/>
<path d="M5.42942 12.7927C5.1517 12.7943 4.87518 12.7562 4.60822 12.6796C4.55516 12.6627 4.51101 12.6253 4.48548 12.5758C4.45994 12.5263 4.4551 12.4687 4.47205 12.4157C4.489 12.3626 4.52633 12.3185 4.57584 12.2929C4.62534 12.2674 4.68295 12.2626 4.73601 12.2795C4.73601 12.2795 5.65148 12.5623 6.3428 12.1538C6.73245 11.9213 6.98801 11.5065 7.10323 10.9178C7.11379 10.8623 7.14598 10.8132 7.19273 10.7813C7.23949 10.7495 7.29696 10.7376 7.35252 10.7481C7.40808 10.7587 7.45718 10.7909 7.489 10.8376C7.52083 10.8844 7.53277 10.9419 7.52221 10.9974C7.38185 11.7097 7.05924 12.2208 6.55856 12.5141C6.21454 12.708 5.82414 12.8043 5.42942 12.7927Z" fill="#ffffff"/>
<path d="M15.2272 12.7948C14.0317 12.792 12.8809 12.3403 12.0028 11.529C11.1247 10.7178 10.5834 9.60626 10.4861 8.41475C10.3889 7.22323 10.7428 6.03867 11.4777 5.09577C12.2126 4.15287 13.2749 3.52046 14.4541 3.32384C14.8105 3.26494 15.1725 3.24667 15.533 3.26937C15.3071 2.80569 15.1998 2.29317 15.2209 1.77781C15.2209 1.76733 15.2209 1.75686 15.2209 1.74639C15.2282 1.69263 15.2561 1.64382 15.2987 1.61022C15.3413 1.57662 15.3952 1.56085 15.4492 1.56623C15.4812 1.56827 15.5122 1.57835 15.5393 1.59555C15.5567 1.02404 15.7799 0.478024 16.1678 0.0579052C16.2036 0.0237359 16.2503 0.00335602 16.2998 0.000379277C16.3492 -0.00259747 16.398 0.0120215 16.4377 0.0416435C16.4774 0.0712656 16.5053 0.113976 16.5164 0.162203C16.5276 0.210429 16.5213 0.261055 16.4988 0.305102C16.0379 1.18077 16.7208 2.69956 17.5211 3.84547C18.3913 4.32173 19.0913 5.05759 19.5236 5.95051C19.9558 6.84343 20.0988 7.84895 19.9326 8.82697C19.7663 9.80498 19.2992 10.7068 18.5962 11.4068C17.8932 12.1067 16.9894 12.57 16.0106 12.732C15.7516 12.7738 15.4896 12.7948 15.2272 12.7948ZM14.5233 3.73653C13.5049 3.90353 12.5789 4.42691 11.9106 5.21328C11.2423 5.99966 10.8751 6.99788 10.8745 8.02988C10.874 9.06188 11.24 10.0605 11.9074 10.8476C12.5749 11.6348 13.5002 12.1592 14.5184 12.3273C15.5366 12.4955 16.5815 12.2964 17.4665 11.7657C18.3516 11.235 19.0193 10.407 19.3506 9.42965C19.6818 8.45226 19.6551 7.38897 19.2751 6.42948C18.8951 5.46998 18.1866 4.67669 17.2759 4.19112C17.2467 4.17557 17.2216 4.15332 17.2026 4.12618C16.8256 3.59198 16.1384 2.50683 15.9646 1.46148C15.9284 1.99142 16.0764 2.51759 16.3835 2.95095C16.4126 2.99587 16.4233 3.05018 16.4135 3.10276C16.4038 3.15534 16.3743 3.20221 16.3312 3.23376C16.2879 3.26585 16.234 3.28005 16.1805 3.27342C16.1271 3.26679 16.0783 3.23983 16.0442 3.19815C15.9792 3.11854 15.9038 3.02636 15.8347 2.92581C15.9054 3.09505 16.0046 3.25093 16.128 3.38668C16.158 3.41877 16.1773 3.4595 16.1829 3.50311C16.1885 3.54673 16.1803 3.59101 16.1594 3.62969C16.1392 3.66642 16.1084 3.69623 16.071 3.71528C16.0337 3.73433 15.9915 3.74173 15.9499 3.73653C15.481 3.65901 15.0026 3.65901 14.5337 3.73653H14.5233Z" fill="#ffffff"/>
<path d="M16.6748 7.69798C16.5996 7.69844 16.5262 7.67497 16.4653 7.63095C16.4269 7.60332 16.3943 7.56836 16.3695 7.52809C16.3447 7.48782 16.3281 7.44303 16.3207 7.39632C16.3127 7.35016 16.314 7.30287 16.3244 7.2572C16.3349 7.21153 16.3543 7.16839 16.3815 7.13027C16.4157 7.08174 16.4615 7.04243 16.5146 7.01586C16.5677 6.98928 16.6266 6.97625 16.686 6.97793C16.7454 6.97961 16.8034 6.99594 16.855 7.02548C16.9065 7.05502 16.95 7.09685 16.9814 7.14724C17.0129 7.19763 17.0314 7.25501 17.0354 7.31429C17.0393 7.37357 17.0285 7.4329 17.0039 7.487C16.9794 7.5411 16.9418 7.58828 16.8946 7.62436C16.8474 7.66044 16.7921 7.68429 16.7334 7.69379L16.6748 7.69798ZM16.6748 7.279H16.6643C16.6526 7.28109 16.6417 7.28657 16.6331 7.29478C16.6244 7.30298 16.6184 7.31355 16.6157 7.32516C16.613 7.33677 16.6138 7.34891 16.618 7.36007C16.6222 7.37124 16.6295 7.38093 16.6391 7.38794C16.6528 7.39673 16.6691 7.40044 16.6852 7.39841C16.6929 7.39693 16.7001 7.39395 16.7066 7.38963C16.7131 7.38532 16.7186 7.37975 16.7229 7.37327C16.7281 7.35906 16.7281 7.3435 16.7229 7.32928C16.722 7.32119 16.7192 7.31341 16.7149 7.30652C16.7105 7.29963 16.7047 7.29381 16.6978 7.28948C16.6916 7.28461 16.6845 7.28105 16.6769 7.279H16.6748Z" fill="#ffffff"/>
<path d="M13.9682 6.89155C13.883 6.8912 13.8008 6.86071 13.736 6.80549C13.6712 6.75027 13.628 6.67389 13.6141 6.58989C13.606 6.5436 13.6073 6.49613 13.6181 6.45038C13.6289 6.40464 13.649 6.36158 13.677 6.32383C13.7039 6.28504 13.7384 6.25206 13.7783 6.22687C13.8183 6.20168 13.8629 6.18478 13.9095 6.17719C14.0014 6.16656 14.0939 6.1917 14.1678 6.24741C14.2417 6.30311 14.2913 6.3851 14.3064 6.4764C14.3215 6.5677 14.3009 6.6613 14.2488 6.73781C14.1968 6.81431 14.1173 6.86786 14.0268 6.88736L13.9682 6.89155ZM13.9682 6.47257C13.9604 6.47383 13.953 6.47663 13.9463 6.48082C13.9397 6.485 13.9339 6.49048 13.9294 6.49693C13.925 6.50338 13.9218 6.51067 13.9202 6.51836C13.9186 6.52605 13.9185 6.53399 13.92 6.5417C13.921 6.54965 13.9236 6.5573 13.9277 6.5642C13.9318 6.57109 13.9372 6.57708 13.9437 6.58179C13.9502 6.5865 13.9575 6.58983 13.9654 6.59159C13.9732 6.59334 13.9813 6.59347 13.9891 6.59198C14.0045 6.58892 14.0182 6.58002 14.0271 6.56713C14.0361 6.55424 14.0398 6.53837 14.0373 6.52285C14.0363 6.5149 14.0337 6.50725 14.0296 6.50035C14.0255 6.49346 14.0201 6.48747 14.0136 6.48276C14.0071 6.47805 13.9998 6.47472 13.9919 6.47296C13.9841 6.47121 13.976 6.47108 13.9682 6.47257Z" fill="#ffffff"/>
<path d="M14.5422 10.5114C14.2932 10.5132 14.0461 10.4692 13.8131 10.3815C13.2727 10.172 12.8704 9.71951 12.617 9.04076C12.6072 9.01491 12.6027 8.98739 12.6037 8.95979C12.6047 8.93219 12.6111 8.90505 12.6226 8.87993C12.634 8.85482 12.6504 8.83222 12.6706 8.81344C12.6909 8.79467 12.7147 8.78008 12.7406 8.77052C12.7925 8.75155 12.8499 8.7539 12.9001 8.77705C12.9503 8.80021 12.9894 8.84229 13.0087 8.89412C13.2182 9.45555 13.5387 9.82425 13.9619 9.98975C14.7098 10.2809 15.5582 9.85777 15.5666 9.85358C15.5912 9.84095 15.618 9.83331 15.6456 9.83111C15.6732 9.82891 15.7009 9.83219 15.7272 9.84076C15.7535 9.84933 15.7778 9.86302 15.7988 9.88104C15.8198 9.89906 15.8369 9.92105 15.8494 9.94575C15.8742 9.99523 15.8785 10.0525 15.8612 10.1051C15.8439 10.1577 15.8065 10.2014 15.7572 10.2265C15.3773 10.4075 14.9629 10.5047 14.5422 10.5114Z" fill="#ffffff"/>
</svg>`;

const editIcon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" >
<path d="M8.42548 1.03296H5.24956C2.63765 1.03296 1 2.88211 1 5.49997V12.5619C1 15.1798 2.63 17.0289 5.24956 17.0289H12.7447C15.3651 17.0289 16.9951 15.1798 16.9951 12.5619V9.14051" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.16224 7.94005L12.5098 1.59246C13.3006 0.802514 14.5824 0.802514 15.3732 1.59246L16.4069 2.62618C17.1977 3.41698 17.1977 4.69957 16.4069 5.48952L10.0287 11.8677C9.68302 12.2134 9.21415 12.4079 8.72489 12.4079H5.54303L5.62287 9.19716C5.63477 8.72489 5.82758 8.27471 6.16224 7.94005Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.5453 2.573L15.4237 6.45137" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const ticketIcon = `<svg width="22" height="18" viewBox="0 0 22 18" fill="none" >
<path d="M12.8497 1.25024V3.67024" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.8497 14.76V16.784" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.8497 11.3247V6.50366" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7021 17C19.5242 17 21 15.5426 21 13.7431V11.1506C19.7943 11.1506 18.8233 10.1917 18.8233 9.00103C18.8233 7.81035 19.7943 6.85039 21 6.85039L20.999 4.25686C20.999 2.45745 19.5221 1 17.7011 1H4.29892C2.47789 1 1.00104 2.45745 1.00104 4.25686L1 6.93485C2.20567 6.93485 3.17668 7.81035 3.17668 9.00103C3.17668 10.1917 2.20567 11.1506 1 11.1506V13.7431C1 15.5426 2.4758 17 4.29787 17H17.7021Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const boyBtnMainIcon = `<svg width="18" height="20" viewBox="0 0 18 20" fill="none" >
<path d="M5.45282 8.00195V8.62152C5.45282 8.78332 5.58399 8.91449 5.74579 8.91449C5.90762 8.91449 6.03876 8.78332 6.03876 8.62152V8.00195C6.03876 7.84016 5.90762 7.70898 5.74579 7.70898C5.58399 7.70898 5.45282 7.84016 5.45282 8.00195Z" fill="#ffffff"/>
<path d="M12.1945 7.70898C12.0327 7.70898 11.9015 7.84016 11.9015 8.00195V8.62152C11.9015 8.78332 12.0327 8.91449 12.1945 8.91449C12.3563 8.91449 12.4875 8.78332 12.4875 8.62152V8.00195C12.4875 7.84016 12.3563 7.70898 12.1945 7.70898Z" fill="#ffffff"/>
<path d="M9.59933 8.41064C9.44051 8.59291 9.21117 8.69744 8.97012 8.69744C8.72906 8.69744 8.49973 8.5929 8.3409 8.41068C8.23461 8.28869 8.04957 8.27599 7.92754 8.38228C7.80555 8.48857 7.79285 8.67365 7.89914 8.79564C8.1693 9.10564 8.55961 9.28341 8.97012 9.28341C9.38058 9.28341 9.7709 9.10564 10.0411 8.79568C10.1474 8.67369 10.1347 8.48865 10.0127 8.38232C9.8907 8.27599 9.70566 8.28869 9.59933 8.41064Z" fill="#ffffff"/>
<path d="M14.607 2.15758C13.0538 0.76625 11.0519 0 8.97016 0C7.31746 0 5.715 0.479336 4.33594 1.38613C4.20074 1.47504 4.16324 1.65668 4.25211 1.79188C4.34098 1.92707 4.5227 1.96465 4.65785 1.8757C5.94105 1.03191 7.43223 0.585938 8.97016 0.585938C10.9074 0.585938 12.7704 1.29906 14.216 2.59402C15.4807 3.72691 16.3402 5.2241 16.679 6.8641C16.4048 6.73414 16.0916 6.66039 15.7841 6.65391C15.6015 6.16043 15.2106 5.74559 14.6925 5.5427C13.7187 5.16145 12.7093 4.25816 12.1571 3.455C12.0374 3.27836 11.7723 3.28438 11.6623 3.47047C10.8929 4.77395 9.43387 5.47645 7.94484 5.7102C8.43059 4.71105 8.00414 3.57141 7.98215 3.51426C7.90355 3.31 7.63309 3.25961 7.4875 3.42734C6.54688 4.51051 5.09672 5.05031 3.68973 5.26531C2.93441 5.38074 2.32996 5.93191 2.14332 6.65426C1.8484 6.66211 1.53879 6.73266 1.26121 6.86418C1.60262 5.21148 2.47215 3.70527 3.75293 2.56898C3.87395 2.4616 3.885 2.27645 3.77766 2.15539C3.67027 2.03437 3.48512 2.02328 3.36406 2.13066C1.83004 3.49168 0.845664 5.34723 0.584062 7.36473C0.221797 7.75758 0 8.2818 0 8.85703C0 10.1472 1.11109 11.1713 2.40805 11.0507C3.02914 12.6074 4.1909 13.8969 5.65695 14.6836C4.43406 15.8079 3.58734 17.5841 3.58734 19.707C3.58734 19.8688 3.71852 20 3.88031 20H14.06C14.2219 20 14.353 19.8688 14.353 19.707C14.353 17.6068 13.5205 15.8249 12.2896 14.6894C12.8252 14.4036 13.3264 14.0469 13.7802 13.6242C13.8986 13.5139 13.9052 13.3286 13.7949 13.2102C13.6846 13.0918 13.4993 13.0852 13.3808 13.1955C12.0398 14.4445 10.3025 15.0193 8.59629 14.9204C4.56105 14.6874 1.65539 10.7779 2.71281 6.79262C2.84488 6.29516 3.26328 5.9232 3.77828 5.84449C5.14918 5.63492 6.5368 5.13629 7.55211 4.20023C7.62516 4.66133 7.62609 5.36187 7.12707 5.86086C6.9448 6.04316 7.06996 6.36316 7.33957 6.36094C7.77445 6.35293 8.51453 6.23602 9.18527 6.01906C10.2741 5.66695 11.2586 5.05121 11.9318 4.12621C12.5995 4.94637 13.4979 5.70418 14.4789 6.08828C15.175 6.36082 15.2811 7.0159 15.2833 7.02027C15.6945 8.76246 15.3405 10.7691 14.1337 12.3623C14.036 12.4913 14.0613 12.675 14.1903 12.7727C14.3193 12.8704 14.503 12.8451 14.6007 12.7161C14.9923 12.1991 15.3063 11.6402 15.5393 11.0512C17.5482 11.231 18.7109 8.83363 17.3563 7.36465C17.0965 5.36164 16.123 3.51562 14.607 2.15758ZM11.2221 15.1501V16.107H9.26313V15.5109C9.95492 15.4827 10.6175 15.354 11.2221 15.1501ZM13.5093 17.8004H11.808V16.6929H13.071C13.2522 17.045 13.3988 17.4143 13.5093 17.8004ZM11.2221 17.8004H9.26313V16.6929H11.2221V17.8004ZM4.86934 16.6929H6.13227V17.8005H4.43098C4.54156 17.4143 4.68809 17.045 4.86934 16.6929ZM6.7182 16.6929H8.67719V17.8005H6.7182V16.6929ZM6.7182 15.1471C7.34977 15.3617 8.00562 15.4832 8.67719 15.5106V16.107H6.7182V15.1471ZM8.67719 18.3864V19.4141H6.7182V18.3864H8.67719ZM9.26313 18.3864H11.2221V19.4141H9.26313V18.3864ZM6.13227 15.045V16.107H5.21418C5.50254 15.675 5.81746 15.3209 6.13227 15.045ZM4.29328 18.3864H6.13227V19.4141H4.17879C4.19223 19.0609 4.23105 18.7184 4.29328 18.3864ZM11.808 19.4141V18.3864H13.647C13.7092 18.7184 13.748 19.0609 13.7615 19.4141H11.808ZM12.7261 16.107H11.808V15.045C12.1196 15.3181 12.4369 15.6732 12.7261 16.107ZM2.20621 10.4747C0.731601 10.4747 0.0355469 8.6707 1.09957 7.67566C1.12395 7.65898 1.44523 7.31699 2.01387 7.25078C1.83387 8.29562 1.88492 9.40508 2.20621 10.4747ZM15.7386 10.4746C16.0562 9.40563 16.1055 8.28602 15.9266 7.25082C16.7304 7.34426 17.3543 8.03066 17.3543 8.85703C17.3543 9.7484 16.6296 10.4736 15.7386 10.4746Z" fill="#ffffff"/>
</svg>`;

const boyBtnMainGrayIcon = `<svg width="18" height="20" viewBox="0 0 18 20" fill="none" >
<path d="M5.45282 8.00195V8.62152C5.45282 8.78332 5.58399 8.91449 5.74579 8.91449C5.90762 8.91449 6.03876 8.78332 6.03876 8.62152V8.00195C6.03876 7.84016 5.90762 7.70898 5.74579 7.70898C5.58399 7.70898 5.45282 7.84016 5.45282 8.00195Z" fill="gray"/>
<path d="M12.1945 7.70898C12.0327 7.70898 11.9015 7.84016 11.9015 8.00195V8.62152C11.9015 8.78332 12.0327 8.91449 12.1945 8.91449C12.3563 8.91449 12.4875 8.78332 12.4875 8.62152V8.00195C12.4875 7.84016 12.3563 7.70898 12.1945 7.70898Z" fill="gray"/>
<path d="M9.59933 8.41064C9.44051 8.59291 9.21117 8.69744 8.97012 8.69744C8.72906 8.69744 8.49973 8.5929 8.3409 8.41068C8.23461 8.28869 8.04957 8.27599 7.92754 8.38228C7.80555 8.48857 7.79285 8.67365 7.89914 8.79564C8.1693 9.10564 8.55961 9.28341 8.97012 9.28341C9.38058 9.28341 9.7709 9.10564 10.0411 8.79568C10.1474 8.67369 10.1347 8.48865 10.0127 8.38232C9.8907 8.27599 9.70566 8.28869 9.59933 8.41064Z" fill="gray"/>
<path d="M14.607 2.15758C13.0538 0.76625 11.0519 0 8.97016 0C7.31746 0 5.715 0.479336 4.33594 1.38613C4.20074 1.47504 4.16324 1.65668 4.25211 1.79188C4.34098 1.92707 4.5227 1.96465 4.65785 1.8757C5.94105 1.03191 7.43223 0.585938 8.97016 0.585938C10.9074 0.585938 12.7704 1.29906 14.216 2.59402C15.4807 3.72691 16.3402 5.2241 16.679 6.8641C16.4048 6.73414 16.0916 6.66039 15.7841 6.65391C15.6015 6.16043 15.2106 5.74559 14.6925 5.5427C13.7187 5.16145 12.7093 4.25816 12.1571 3.455C12.0374 3.27836 11.7723 3.28438 11.6623 3.47047C10.8929 4.77395 9.43387 5.47645 7.94484 5.7102C8.43059 4.71105 8.00414 3.57141 7.98215 3.51426C7.90355 3.31 7.63309 3.25961 7.4875 3.42734C6.54688 4.51051 5.09672 5.05031 3.68973 5.26531C2.93441 5.38074 2.32996 5.93191 2.14332 6.65426C1.8484 6.66211 1.53879 6.73266 1.26121 6.86418C1.60262 5.21148 2.47215 3.70527 3.75293 2.56898C3.87395 2.4616 3.885 2.27645 3.77766 2.15539C3.67027 2.03437 3.48512 2.02328 3.36406 2.13066C1.83004 3.49168 0.845664 5.34723 0.584062 7.36473C0.221797 7.75758 0 8.2818 0 8.85703C0 10.1472 1.11109 11.1713 2.40805 11.0507C3.02914 12.6074 4.1909 13.8969 5.65695 14.6836C4.43406 15.8079 3.58734 17.5841 3.58734 19.707C3.58734 19.8688 3.71852 20 3.88031 20H14.06C14.2219 20 14.353 19.8688 14.353 19.707C14.353 17.6068 13.5205 15.8249 12.2896 14.6894C12.8252 14.4036 13.3264 14.0469 13.7802 13.6242C13.8986 13.5139 13.9052 13.3286 13.7949 13.2102C13.6846 13.0918 13.4993 13.0852 13.3808 13.1955C12.0398 14.4445 10.3025 15.0193 8.59629 14.9204C4.56105 14.6874 1.65539 10.7779 2.71281 6.79262C2.84488 6.29516 3.26328 5.9232 3.77828 5.84449C5.14918 5.63492 6.5368 5.13629 7.55211 4.20023C7.62516 4.66133 7.62609 5.36187 7.12707 5.86086C6.9448 6.04316 7.06996 6.36316 7.33957 6.36094C7.77445 6.35293 8.51453 6.23602 9.18527 6.01906C10.2741 5.66695 11.2586 5.05121 11.9318 4.12621C12.5995 4.94637 13.4979 5.70418 14.4789 6.08828C15.175 6.36082 15.2811 7.0159 15.2833 7.02027C15.6945 8.76246 15.3405 10.7691 14.1337 12.3623C14.036 12.4913 14.0613 12.675 14.1903 12.7727C14.3193 12.8704 14.503 12.8451 14.6007 12.7161C14.9923 12.1991 15.3063 11.6402 15.5393 11.0512C17.5482 11.231 18.7109 8.83363 17.3563 7.36465C17.0965 5.36164 16.123 3.51562 14.607 2.15758ZM11.2221 15.1501V16.107H9.26313V15.5109C9.95492 15.4827 10.6175 15.354 11.2221 15.1501ZM13.5093 17.8004H11.808V16.6929H13.071C13.2522 17.045 13.3988 17.4143 13.5093 17.8004ZM11.2221 17.8004H9.26313V16.6929H11.2221V17.8004ZM4.86934 16.6929H6.13227V17.8005H4.43098C4.54156 17.4143 4.68809 17.045 4.86934 16.6929ZM6.7182 16.6929H8.67719V17.8005H6.7182V16.6929ZM6.7182 15.1471C7.34977 15.3617 8.00562 15.4832 8.67719 15.5106V16.107H6.7182V15.1471ZM8.67719 18.3864V19.4141H6.7182V18.3864H8.67719ZM9.26313 18.3864H11.2221V19.4141H9.26313V18.3864ZM6.13227 15.045V16.107H5.21418C5.50254 15.675 5.81746 15.3209 6.13227 15.045ZM4.29328 18.3864H6.13227V19.4141H4.17879C4.19223 19.0609 4.23105 18.7184 4.29328 18.3864ZM11.808 19.4141V18.3864H13.647C13.7092 18.7184 13.748 19.0609 13.7615 19.4141H11.808ZM12.7261 16.107H11.808V15.045C12.1196 15.3181 12.4369 15.6732 12.7261 16.107ZM2.20621 10.4747C0.731601 10.4747 0.0355469 8.6707 1.09957 7.67566C1.12395 7.65898 1.44523 7.31699 2.01387 7.25078C1.83387 8.29562 1.88492 9.40508 2.20621 10.4747ZM15.7386 10.4746C16.0562 9.40563 16.1055 8.28602 15.9266 7.25082C16.7304 7.34426 17.3543 8.03066 17.3543 8.85703C17.3543 9.7484 16.6296 10.4736 15.7386 10.4746Z" fill="gray"/>
</svg>`;

const girlBtnMainGrayIcon = `<svg width="18" height="20" viewBox="0 0 18 20" fill="none" >
<path d="M5.5291 8.65266C5.70128 8.65266 5.84086 8.52149 5.84086 8.35969V7.73297C5.84086 7.57117 5.70128 7.44 5.5291 7.44C5.35693 7.44 5.21735 7.57117 5.21735 7.73297V8.35969C5.21735 8.52149 5.35693 8.65266 5.5291 8.65266Z" fill="#828282"/>
<path d="M12.4706 8.65266C12.6428 8.65266 12.7824 8.52149 12.7824 8.35969V7.73297C12.7824 7.57117 12.6428 7.44 12.4706 7.44C12.2985 7.44 12.1589 7.57117 12.1589 7.73297V8.35969C12.1589 8.52149 12.2984 8.65266 12.4706 8.65266Z" fill="#828282"/>
<path d="M8.99984 9.02572C9.44062 9.02572 9.85979 8.84631 10.1499 8.53349C10.263 8.4115 10.2495 8.22646 10.1197 8.12013C9.98986 8.01384 9.79291 8.02654 9.6798 8.14853C9.32041 8.53611 8.68027 8.53728 8.31979 8.14853C8.20669 8.02654 8.00974 8.01384 7.87992 8.12013C7.75011 8.22642 7.7366 8.4115 7.8497 8.53349C8.13989 8.84631 8.55905 9.02572 8.99984 9.02572Z" fill="#828282"/>
<path d="M17.9996 8.45774C17.9996 6.09703 16.9595 3.87891 15.1412 2.28117C15.0155 2.1707 14.8182 2.17688 14.7006 2.29508C14.5829 2.41328 14.5896 2.59867 14.7153 2.70918C16.4036 4.19258 17.376 6.25453 17.376 8.45774C17.3782 14.0333 17.4564 15.2626 14.0413 16.6632C13.6549 15.8783 13.1148 15.1937 12.5343 14.6906C15.1951 13.3539 16.7419 10.6714 16.4843 7.84832C16.4007 6.93277 15.744 6.15723 14.8113 5.8725C12.5003 5.16711 11.1871 5.20031 9.31157 2.8627V0.591289C10.9157 0.646641 12.4528 1.12891 13.7751 1.99445C13.9164 2.08691 14.1107 2.0543 14.2092 1.92152C14.3075 1.78875 14.2728 1.60613 14.1315 1.51367C12.6188 0.523398 10.8443 0 8.99985 0C4.03743 0 0.000169501 3.7941 0.000169501 8.45774L8.62524e-05 8.84148C-0.00186743 14.156 -0.00170143 15.6764 3.72363 17.2057C3.46055 17.8916 3.27196 18.7252 3.27196 19.707C3.27196 19.8688 3.41154 20 3.58372 20H14.4161C14.5883 20 14.7279 19.8688 14.7279 19.707C14.7279 18.7252 14.5393 17.8916 14.2762 17.2057C18.0954 15.6379 18.001 14.0713 17.9996 8.45774ZM12.6757 19.4141H5.32403C5.10123 17.8648 6.94924 16.9098 8.21959 17.797C8.68627 18.1232 9.31344 18.1232 9.78012 17.7971C11.0733 16.8939 12.9011 17.8927 12.6757 19.4141ZM9.97865 15.4577V17.0299C9.77734 17.1037 9.58579 17.2028 9.40805 17.3269C9.15939 17.5007 8.8303 17.4936 8.59158 17.3269C8.42335 17.2093 8.22774 17.1057 8.02106 17.03V15.4573C8.65252 15.5349 9.30987 15.5386 9.97865 15.4577ZM6.34892 15.0618C6.69796 15.1862 7.03474 15.2781 7.39759 15.3546V16.887C7.05678 16.8528 6.6911 16.8854 6.34892 16.9914V15.0618ZM10.6022 16.887V15.3567C10.96 15.284 11.3102 15.187 11.6508 15.0665V16.9913C11.3101 16.8858 10.9451 16.8528 10.6022 16.887ZM3.95832 16.6632C0.621024 15.2945 0.621647 14.0913 0.623559 8.84172L0.623642 8.45774C0.623642 4.21523 4.21317 0.745859 8.6881 0.591328V2.86266C6.87517 5.13922 5.55095 5.15133 3.18832 5.87246C2.25571 6.15719 1.59911 6.93238 1.51543 7.84746C1.36234 9.52402 1.83846 11.2016 2.92844 12.6048C3.04496 12.7549 3.27836 12.7661 3.41109 12.6291C3.50873 12.5283 3.52095 12.3736 3.43212 12.2593C2.431 10.9705 1.99629 9.43168 2.1367 7.89762C2.19835 7.22273 2.68319 6.64277 3.38099 6.42977C5.72071 5.71547 7.13438 5.66797 8.99985 3.44293C10.9189 5.73242 12.4518 5.76813 14.6187 6.42977C15.3096 6.64066 15.8007 7.215 15.8631 7.89836C16.1143 10.6489 14.4805 13.2352 11.8338 14.3595H11.8338C9.2715 15.4474 6.26067 14.9629 4.21729 13.1062C4.09329 12.9935 3.89572 12.997 3.77626 13.1134C3.65658 13.2297 3.65991 13.4152 3.7837 13.5276C4.27798 13.9768 4.84991 14.3727 5.47114 14.6857C4.87593 15.2 4.33867 15.8906 3.95832 16.6632ZM3.90129 19.4141C3.97175 17.675 4.6937 16.2527 5.72536 15.2719V17.2831C5.05126 17.7227 4.68268 18.4354 4.68268 19.1758C4.68405 19.2579 4.6863 19.3289 4.69573 19.4141H3.90129ZM13.304 19.4141C13.3951 18.579 13.0112 17.7636 12.2743 17.2831V15.2718C13.3354 16.2805 14.0296 17.7147 14.0984 19.4141H13.304Z" fill="#828282"/>
</svg>`;

const girlBtnMainIcon = `<svg width="18" height="20" viewBox="0 0 18 20" fill="none" >
<path d="M5.5291 8.65266C5.70128 8.65266 5.84086 8.52149 5.84086 8.35969V7.73297C5.84086 7.57117 5.70128 7.44 5.5291 7.44C5.35693 7.44 5.21735 7.57117 5.21735 7.73297V8.35969C5.21735 8.52149 5.35693 8.65266 5.5291 8.65266Z" fill="#ffffff"/>
<path d="M12.4706 8.65266C12.6428 8.65266 12.7824 8.52149 12.7824 8.35969V7.73297C12.7824 7.57117 12.6428 7.44 12.4706 7.44C12.2985 7.44 12.1589 7.57117 12.1589 7.73297V8.35969C12.1589 8.52149 12.2984 8.65266 12.4706 8.65266Z" fill="#ffffff"/>
<path d="M8.99984 9.02572C9.44062 9.02572 9.85979 8.84631 10.1499 8.53349C10.263 8.4115 10.2495 8.22646 10.1197 8.12013C9.98986 8.01384 9.79291 8.02654 9.6798 8.14853C9.32041 8.53611 8.68027 8.53728 8.31979 8.14853C8.20669 8.02654 8.00974 8.01384 7.87992 8.12013C7.75011 8.22642 7.7366 8.4115 7.8497 8.53349C8.13989 8.84631 8.55905 9.02572 8.99984 9.02572Z" fill="#ffffff"/>
<path d="M17.9996 8.45774C17.9996 6.09703 16.9595 3.87891 15.1412 2.28117C15.0155 2.1707 14.8182 2.17688 14.7006 2.29508C14.5829 2.41328 14.5896 2.59867 14.7153 2.70918C16.4036 4.19258 17.376 6.25453 17.376 8.45774C17.3782 14.0333 17.4564 15.2626 14.0413 16.6632C13.6549 15.8783 13.1148 15.1937 12.5343 14.6906C15.1951 13.3539 16.7419 10.6714 16.4843 7.84832C16.4007 6.93277 15.744 6.15723 14.8113 5.8725C12.5003 5.16711 11.1871 5.20031 9.31157 2.8627V0.591289C10.9157 0.646641 12.4528 1.12891 13.7751 1.99445C13.9164 2.08691 14.1107 2.0543 14.2092 1.92152C14.3075 1.78875 14.2728 1.60613 14.1315 1.51367C12.6188 0.523398 10.8443 0 8.99985 0C4.03743 0 0.000169501 3.7941 0.000169501 8.45774L8.62524e-05 8.84148C-0.00186743 14.156 -0.00170143 15.6764 3.72363 17.2057C3.46055 17.8916 3.27196 18.7252 3.27196 19.707C3.27196 19.8688 3.41154 20 3.58372 20H14.4161C14.5883 20 14.7279 19.8688 14.7279 19.707C14.7279 18.7252 14.5393 17.8916 14.2762 17.2057C18.0954 15.6379 18.001 14.0713 17.9996 8.45774ZM12.6757 19.4141H5.32403C5.10123 17.8648 6.94924 16.9098 8.21959 17.797C8.68627 18.1232 9.31344 18.1232 9.78012 17.7971C11.0733 16.8939 12.9011 17.8927 12.6757 19.4141ZM9.97865 15.4577V17.0299C9.77734 17.1037 9.58579 17.2028 9.40805 17.3269C9.15939 17.5007 8.8303 17.4936 8.59158 17.3269C8.42335 17.2093 8.22774 17.1057 8.02106 17.03V15.4573C8.65252 15.5349 9.30987 15.5386 9.97865 15.4577ZM6.34892 15.0618C6.69796 15.1862 7.03474 15.2781 7.39759 15.3546V16.887C7.05678 16.8528 6.6911 16.8854 6.34892 16.9914V15.0618ZM10.6022 16.887V15.3567C10.96 15.284 11.3102 15.187 11.6508 15.0665V16.9913C11.3101 16.8858 10.9451 16.8528 10.6022 16.887ZM3.95832 16.6632C0.621024 15.2945 0.621647 14.0913 0.623559 8.84172L0.623642 8.45774C0.623642 4.21523 4.21317 0.745859 8.6881 0.591328V2.86266C6.87517 5.13922 5.55095 5.15133 3.18832 5.87246C2.25571 6.15719 1.59911 6.93238 1.51543 7.84746C1.36234 9.52402 1.83846 11.2016 2.92844 12.6048C3.04496 12.7549 3.27836 12.7661 3.41109 12.6291C3.50873 12.5283 3.52095 12.3736 3.43212 12.2593C2.431 10.9705 1.99629 9.43168 2.1367 7.89762C2.19835 7.22273 2.68319 6.64277 3.38099 6.42977C5.72071 5.71547 7.13438 5.66797 8.99985 3.44293C10.9189 5.73242 12.4518 5.76813 14.6187 6.42977C15.3096 6.64066 15.8007 7.215 15.8631 7.89836C16.1143 10.6489 14.4805 13.2352 11.8338 14.3595H11.8338C9.2715 15.4474 6.26067 14.9629 4.21729 13.1062C4.09329 12.9935 3.89572 12.997 3.77626 13.1134C3.65658 13.2297 3.65991 13.4152 3.7837 13.5276C4.27798 13.9768 4.84991 14.3727 5.47114 14.6857C4.87593 15.2 4.33867 15.8906 3.95832 16.6632ZM3.90129 19.4141C3.97175 17.675 4.6937 16.2527 5.72536 15.2719V17.2831C5.05126 17.7227 4.68268 18.4354 4.68268 19.1758C4.68405 19.2579 4.6863 19.3289 4.69573 19.4141H3.90129ZM13.304 19.4141C13.3951 18.579 13.0112 17.7636 12.2743 17.2831V15.2718C13.3354 16.2805 14.0296 17.7147 14.0984 19.4141H13.304Z" fill="#ffffff"/>
</svg>`;

const redBabyLesson = `<svg width="20" height="15" viewBox="0 0 20 15" fill="none" >
<path d="M20 3.75C20 1.68211 18.3179 0 16.25 0C14.1821 0 12.5 1.68215 12.5 3.75C12.5 4.00758 12.5263 4.2591 12.5761 4.50223C12.1678 4.28891 11.7084 4.16668 11.224 4.16668H5.70477C3.4782 4.16668 1.66668 5.9782 1.66668 8.20477C1.66668 8.90668 1.85059 9.59961 2.19891 10.2084L3.03223 11.6667H1.66668C0.747461 11.6667 0 12.4141 0 13.3333C0 14.2525 0.747461 15 1.66668 15H4.58336C5.73203 15 6.66668 14.0654 6.66668 12.9167V10.8334H11.8014L13.0046 13.8428C13.2861 14.5455 13.9575 15 14.7209 15C15.5673 15 16.3017 14.4263 16.5072 13.6048L16.5422 13.4652C16.637 13.0868 16.6105 12.6954 16.4657 12.3344L14.3093 6.94273C14.8773 7.28926 15.5373 7.5 16.25 7.5C18.3179 7.5 20 5.81789 20 3.75ZM5.83332 12.9167C5.83332 13.606 5.27262 14.1667 4.58332 14.1667H1.66668C1.2073 14.1667 0.833359 13.7927 0.833359 13.3334C0.833359 12.874 1.2073 12.5 1.66668 12.5H3.75C3.89852 12.5 4.03566 12.4211 4.11051 12.2925C4.18496 12.1639 4.18539 12.0056 4.11172 11.8766L3.51566 10.8334H5.83332V12.9167ZM5.83332 10H3.03957L2.92238 9.79492C2.64609 9.31152 2.5 8.7618 2.5 8.20477C2.5 6.43758 3.93758 5 5.70477 5H5.83336V10H5.83332ZM15.6921 12.6441C15.7711 12.8418 15.7857 13.0554 15.7341 13.263L15.6991 13.4025C15.5864 13.8526 15.1843 14.1667 14.7148 14.1667C14.3001 14.1667 13.9323 13.9181 13.7785 13.5332L12.4703 10.2621C12.4068 10.1038 12.2538 10 12.0833 10H6.66668V5H11.224C12.0809 5 12.8402 5.51391 13.1584 6.30941L15.6921 12.6441ZM13.3333 3.75C13.3333 2.14191 14.6419 0.83332 16.25 0.83332C17.8581 0.83332 19.1667 2.14191 19.1667 3.75C19.1667 5.35809 17.8581 6.66668 16.25 6.66668C14.6419 6.66668 13.3333 5.35809 13.3333 3.75Z" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="20" y1="15" x2="8.2233" y2="-4.87308" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6188"/>
<stop offset="1" stop-color="#FFB199"/>
</linearGradient>
</defs>
</svg>`;

const playIcon = `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" >
<path d="M13.5 0C6.05936 0 0 6.05644 0 13.5078C0 20.9436 6.05936 27 13.5 27C20.9406 27 27 20.9436 27 13.5078C27 6.05644 20.9406 0 13.5 0Z" fill="url(#paint0_linear)"/>
<path d="M18.8166 14.4571C18.7775 14.5092 18.595 14.7306 18.4517 14.8739L18.3735 14.952C17.2789 16.1372 14.5555 17.9216 13.1742 18.4947C13.1742 18.5077 12.3532 18.8464 11.9623 18.8594H11.9102C11.3108 18.8594 10.7505 18.5207 10.4638 17.9737C10.3074 17.6741 10.1641 16.8015 10.151 16.7885C10.0338 16.007 9.95557 14.81 9.95557 13.4932C9.95557 12.1126 10.0338 10.8623 10.1771 10.0938C10.1771 10.0808 10.3204 9.37747 10.4116 9.14303C10.555 8.80439 10.8156 8.51785 11.1414 8.33551C11.402 8.20526 11.6756 8.14014 11.9623 8.14014C12.262 8.15316 12.8224 8.34983 13.0439 8.4397C14.5033 9.01279 17.292 10.8883 18.3605 12.0345C18.5429 12.2168 18.7384 12.4383 18.7905 12.4904C19.012 12.7769 19.1293 13.1286 19.1293 13.5076C19.1293 13.8449 19.0251 14.1836 18.8166 14.4571Z" fill="#ffffff"/>
<defs>
<linearGradient id="paint0_linear" x1="13.5" y1="0" x2="13.5" y2="27" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
</defs>
</svg>`;

const headerToolbarLeft = `<svg width="30" height="20" viewBox="0 0 30 20" fill="none" >
<rect width="30" height="3.52941" rx="1.76471" transform="matrix(-1 0 0 1 30 0)" fill="#ffffff"/>
<rect width="19.2" height="3.52941" rx="1.76471" transform="matrix(-1 0 0 1 19.2 8.23535)" fill="#ffffff"/>
<rect width="24" height="3.52941" rx="1.76471" transform="matrix(-1 0 0 1 24 16.4707)" fill="#ffffff"/>
</svg>`;

const heartIcon = `<svg width="22" height="21" viewBox="0 0 22 21" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.3915 10.0522C0.261851 6.52539 1.58205 2.49425 5.28472 1.30144C7.23239 0.67292 9.38219 1.0435 11.0014 2.26158C12.5332 1.07719 14.762 0.677132 16.7075 1.30144C20.4102 2.49425 21.7388 6.52539 20.6102 10.0522C18.8521 15.6426 11.0014 19.9485 11.0014 19.9485C11.0014 19.9485 3.20862 15.7078 1.3915 10.0522Z" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.2127 4.89551C16.3392 5.25977 17.1351 6.26519 17.2309 7.44537" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const heartRedIcon = `<svg width="22" height="21" viewBox="0 0 22 21" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.3915 10.0522C0.261851 6.52539 1.58205 2.49425 5.28472 1.30144C7.23239 0.67292 9.38219 1.0435 11.0014 2.26158C12.5332 1.07719 14.762 0.677132 16.7075 1.30144C20.4102 2.49425 21.7388 6.52539 20.6102 10.0522C18.8521 15.6426 11.0014 19.9485 11.0014 19.9485C11.0014 19.9485 3.20862 15.7078 1.3915 10.0522Z" stroke="#FFB199" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.2127 4.89551C16.3392 5.25977 17.1351 6.26519 17.2309 7.44537" stroke="#FFB199" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const heartGreenIcon = `<svg width="22" height="21" viewBox="0 0 22 21" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.3915 10.0522C0.261851 6.52539 1.58205 2.49425 5.28472 1.30144C7.23239 0.67292 9.38219 1.0435 11.0014 2.26158C12.5332 1.07719 14.762 0.677132 16.7075 1.30144C20.4102 2.49425 21.7388 6.52539 20.6102 10.0522C18.8521 15.6426 11.0014 19.9485 11.0014 19.9485C11.0014 19.9485 3.20862 15.7078 1.3915 10.0522Z" stroke="#e9636e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.2127 4.89551C16.3392 5.25977 17.1351 6.26519 17.2309 7.44537" stroke="#e9636e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const heartBlackIcon = `<svg width="22" height="21" viewBox="0 0 22 21" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.3915 10.0522C0.261851 6.52539 1.58205 2.49425 5.28472 1.30144C7.23239 0.67292 9.38219 1.0435 11.0014 2.26158C12.5332 1.07719 14.762 0.677132 16.7075 1.30144C20.4102 2.49425 21.7388 6.52539 20.6102 10.0522C18.8521 15.6426 11.0014 19.9485 11.0014 19.9485C11.0014 19.9485 3.20862 15.7078 1.3915 10.0522Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.2127 4.89551C16.3392 5.25977 17.1351 6.26519 17.2309 7.44537" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const heartWhiteIcon = `<svg width="22" height="21" viewBox="0 0 22 21" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.3915 10.0522C0.261851 6.52539 1.58205 2.49425 5.28472 1.30144C7.23239 0.67292 9.38219 1.0435 11.0014 2.26158C12.5332 1.07719 14.762 0.677132 16.7075 1.30144C20.4102 2.49425 21.7388 6.52539 20.6102 10.0522C18.8521 15.6426 11.0014 19.9485 11.0014 19.9485C11.0014 19.9485 3.20862 15.7078 1.3915 10.0522Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.2127 4.89551C16.3392 5.25977 17.1351 6.26519 17.2309 7.44537" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const warningIcon = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C16.5222 1 21 5.47676 21 11C21 16.5222 16.5222 21 11 21C5.47676 21 1 16.5222 1 11C1 5.47676 5.47676 1 11 1Z" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.9947 6.89697V11.6743" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.9945 15.1035H11.0053" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const dangerIcon = `<svg width="22" height="19" viewBox="0 0 22 19" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.814 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.223 1.78675L2.025 14.3518C1.239 15.7258 2.231 17.4368 3.814 17.4368Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.0025 10.4149V7.31494" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.995 13.5H11.005" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const dangerGrayIcon = `<svg width="22" height="19" viewBox="0 0 22 19" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.814 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.223 1.78675L2.025 14.3518C1.239 15.7258 2.231 17.4368 3.814 17.4368Z" stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.0025 10.4149V7.31494" stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.995 13.5H11.005" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const checkWhiteBoxIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3344 0.75H5.66543C2.64443 0.75 0.750427 2.889 0.750427 5.916V14.084C0.750427 17.111 2.63543 19.25 5.66543 19.25H14.3334C17.3644 19.25 19.2504 17.111 19.2504 14.084V5.916C19.2504 2.889 17.3644 0.75 14.3344 0.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.43994 9.99995L8.81394 12.373L13.5599 7.62695" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const checkGrayBoxIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3344 0.75H5.66543C2.64443 0.75 0.750427 2.889 0.750427 5.916V14.084C0.750427 17.111 2.63543 19.25 5.66543 19.25H14.3334C17.3644 19.25 19.2504 17.111 19.2504 14.084V5.916C19.2504 2.889 17.3644 0.75 14.3344 0.75Z" stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.43994 9.99995L8.81394 12.373L13.5599 7.62695" stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const paperPlaneIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<path d="M13.8325 6.17463L8.10904 11.9592L1.59944 7.88767C0.66675 7.30414 0.860765 5.88744 1.91572 5.57893L17.3712 1.05277C18.3373 0.769629 19.2326 1.67283 18.9456 2.642L14.3731 18.0868C14.0598 19.1432 12.6512 19.332 12.0732 18.3953L8.10601 11.9602" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const paperPlaneGrayIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<path d="M13.8325 6.17463L8.10904 11.9592L1.59944 7.88767C0.66675 7.30414 0.860765 5.88744 1.91572 5.57893L17.3712 1.05277C18.3373 0.769629 19.2326 1.67283 18.9456 2.642L14.3731 18.0868C14.0598 19.1432 12.6512 19.332 12.0732 18.3953L8.10601 11.9602" stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const bluecisIcon = `<svg width="20" height="15" viewBox="0 0 20 15" fill="none" >
<path d="M18.4844 11.5723C18.2371 11.5691 17.9908 11.5417 17.7489 11.4904C15.3333 10.9889 7.70789 9.26675 7.63215 9.24877L7.48267 9.2168V9.06297C7.48267 9.033 7.35113 6.14208 5.84039 5.68656C5.32219 5.53073 4.95348 5.41286 4.73823 5.33294C4.17638 5.75994 3.4807 5.97139 2.77689 5.92908C2.07309 5.88677 1.4076 5.59349 0.900697 5.10224C0.393791 4.61099 0.0789085 3.95418 0.012956 3.25051C-0.0529966 2.54683 0.13433 1.84273 0.541085 1.26543C0.94784 0.688127 1.54719 0.275724 2.23081 0.102746C2.91444 -0.0702326 3.63724 0.00762592 4.26859 0.322251C4.89994 0.636877 5.3982 1.16751 5.67331 1.81826C5.94841 2.46901 5.98223 3.19694 5.76864 3.8705C5.74025 3.96016 5.70698 4.0482 5.66898 4.13422L19.8775 9.57642L19.9034 9.67631C19.9034 9.71427 20.1306 10.6153 19.6005 11.1707C19.4521 11.3112 19.2764 11.4194 19.0843 11.4886C18.8922 11.5577 18.688 11.5862 18.4844 11.5723ZM7.86534 8.89315C8.9376 9.13489 15.6044 10.6373 17.8306 11.0908C18.5461 11.2387 19.0444 11.1707 19.3155 10.891C19.5865 10.6113 19.5686 10.0799 19.5367 9.86811L5.11691 4.35198L5.22055 4.1522C5.288 4.02396 5.34467 3.8903 5.38996 3.75262C5.59614 3.10432 5.53733 2.40051 5.22646 1.79561C4.91558 1.19071 4.37803 0.734135 3.73173 0.52606C3.085 0.318832 2.38264 0.377518 1.77905 0.689218C1.17547 1.00092 0.720063 1.54012 0.512942 2.18829C0.345502 2.71535 0.352495 3.28254 0.53288 3.80528C0.713265 4.32803 1.05738 4.77833 1.5139 5.08903C1.97043 5.39973 2.51491 5.55419 3.06616 5.52938C3.61741 5.50457 4.14589 5.30181 4.5728 4.95135L4.66648 4.87543L4.7761 4.92138C4.89169 4.96933 5.19065 5.07521 5.95001 5.30497C7.52652 5.77847 7.81551 8.23984 7.86534 8.89315Z" fill="url(#paint0_linear)"/>
<path d="M3.91911 14.7369C3.65869 14.7366 3.39941 14.7024 3.1478 14.635C2.75063 14.5299 2.37963 14.343 2.05844 14.0863C1.73724 13.8296 1.47287 13.5086 1.28215 13.1439C1.09144 12.7792 0.978547 12.3787 0.950671 11.9679C0.922794 11.557 0.98054 11.1449 1.12023 10.7576C1.25993 10.3704 1.47851 10.0165 1.76207 9.71858C2.04563 9.42063 2.38796 9.18512 2.76728 9.02703C3.14659 8.86894 3.55458 8.79174 3.96528 8.80033C4.37599 8.80892 4.78041 8.90312 5.15281 9.07693C5.35212 8.95506 5.68097 8.76127 6.14934 8.49755C7.52854 7.73236 7.04223 4.87741 7.03625 4.84944L7.01034 4.6976L7.14986 4.63367C7.21961 4.5997 14.3069 1.29322 16.5611 0.290292C17.3583 -0.0653295 17.9921 -0.0952972 18.4385 0.206381C19.0743 0.635924 19.0504 1.56094 19.0484 1.60489V1.70878L6.32274 10.0479C6.37854 10.1278 6.43036 10.2057 6.4762 10.2856C6.73532 10.7363 6.87176 11.2474 6.87185 11.7676C6.87194 12.2877 6.73568 12.7988 6.47672 13.2496C6.21776 13.7004 5.84519 14.0751 5.39632 14.3361C4.94745 14.5971 4.43804 14.7353 3.91911 14.7369ZM3.91911 9.2028C3.52709 9.20441 3.14066 9.29622 2.78962 9.47114C2.43857 9.64606 2.13226 9.89944 1.89431 10.2117C1.65635 10.524 1.49309 10.8869 1.41711 11.2725C1.34112 11.658 1.35444 12.0558 1.45604 12.4354C1.55764 12.8149 1.74481 13.166 2.00312 13.4616C2.26143 13.7572 2.584 13.9895 2.94596 14.1404C3.30792 14.2913 3.69961 14.357 4.09086 14.3322C4.48211 14.3075 4.86247 14.193 5.20264 13.9977C5.52794 13.8119 5.8083 13.5565 6.02372 13.2495C6.23914 12.9426 6.38431 12.5918 6.44885 12.2221C6.51339 11.8525 6.49571 11.4731 6.39709 11.111C6.29846 10.749 6.12131 10.4133 5.87829 10.1278L5.73479 9.954L18.6538 1.48902C18.6418 1.27524 18.5721 0.773777 18.2193 0.53603C17.8665 0.298283 17.3942 0.358219 16.7285 0.655902C14.6517 1.57892 8.4573 4.46784 7.45878 4.93335C7.54847 5.58066 7.78764 8.04803 6.34865 8.84718C5.65307 9.23277 5.386 9.39859 5.28236 9.47051L5.1847 9.53844L5.07708 9.4845C4.71602 9.29978 4.3165 9.20325 3.91114 9.2028H3.91911Z" fill="url(#paint1_linear)"/>
<path d="M8.47123 7.47472C8.33957 7.47472 8.21086 7.43558 8.10139 7.36226C7.99192 7.28894 7.9066 7.18472 7.85621 7.06279C7.80583 6.94086 7.79265 6.80669 7.81833 6.67725C7.84402 6.5478 7.90742 6.4289 8.00052 6.33558C8.09361 6.24226 8.21223 6.17871 8.34136 6.15296C8.47049 6.12721 8.60434 6.14043 8.72598 6.19093C8.84762 6.24144 8.95158 6.32697 9.02473 6.4367C9.09788 6.54644 9.13692 6.67545 9.13692 6.80743C9.13639 6.98424 9.06609 7.15366 8.94136 7.27869C8.81664 7.40372 8.64762 7.47419 8.47123 7.47472ZM8.47123 6.53971C8.41841 6.53971 8.36677 6.55541 8.32285 6.58483C8.27893 6.61425 8.2447 6.65606 8.22449 6.70498C8.20427 6.75389 8.19898 6.80772 8.20929 6.85965C8.21959 6.91159 8.24503 6.95929 8.28238 6.99673C8.31973 7.03417 8.36732 7.05967 8.41913 7.07C8.47093 7.08033 8.52463 7.07502 8.57344 7.05476C8.62224 7.0345 8.66395 7.00019 8.69329 6.95616C8.72264 6.91214 8.7383 6.86037 8.7383 6.80743C8.73937 6.7716 8.73325 6.73593 8.72031 6.70252C8.70736 6.66911 8.68786 6.63865 8.66296 6.61294C8.63805 6.58722 8.60824 6.56679 8.57531 6.55284C8.54237 6.53888 8.50698 6.5317 8.47123 6.53172V6.53971Z" fill="url(#paint2_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="19.9518" y1="11.5757" x2="12.1163" y2="-5.53554" gradientUnits="userSpaceOnUse">
<stop stop-color="#0030DB"/>
<stop offset="1" stop-color="#44B0FF"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="19.049" y1="14.7369" x2="7.04689" y2="-3.92506" gradientUnits="userSpaceOnUse">
<stop stop-color="#0030DB"/>
<stop offset="1" stop-color="#44B0FF"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="9.13692" y1="7.47472" x2="7.97414" y2="6.00661" gradientUnits="userSpaceOnUse">
<stop stop-color="#0030DB"/>
<stop offset="1" stop-color="#44B0FF"/>
</linearGradient>
</defs>
</svg>`;

const gameIcon = `<svg width="20" height="19" viewBox="0 0 20 19" fill="none" >
<path d="M7.37359 9.26172V12.3825" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.96589 10.8219H5.78162" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.8051 9.35656H12.7159" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.3164 12.3356H14.2272" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.72681 0.666504V0.666504C6.72681 1.28357 7.23721 1.78381 7.86682 1.78381H8.74722C9.71858 1.78727 10.5054 2.55839 10.5098 3.51039V4.07293" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6903 17.302C11.186 17.3445 8.72755 17.3427 6.31064 17.302C3.62794 17.302 1.66669 15.3885 1.66669 12.7593V8.88464C1.66669 6.25539 3.62794 4.34187 6.31064 4.34187C8.74079 4.30033 11.201 4.30119 13.6903 4.34187C16.373 4.34187 18.3334 6.25625 18.3334 8.88464V12.7593C18.3334 15.3885 16.373 17.302 13.6903 17.302Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const closebtnIcon = `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" >
<path d="M24.5892 19.3997L19.4087 24.5803" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.5907 24.5833L19.4059 19.3973" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.6854 12H17.3135C14.0476 12 12 14.3124 12 17.5849V26.4151C12 29.6876 14.0378 32 17.3135 32H26.6843C29.9611 32 32 29.6876 32 26.4151V17.5849C32 14.3124 29.9611 12 26.6854 12Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const closebtnWhiteIcon = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" >
<path d="M13.5892 8.3999L8.40869 13.5804" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5907 13.5834L8.40588 8.39746" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6854 1H6.31351C3.04757 1 1 3.31243 1 6.58486V15.4151C1 18.6876 3.03784 21 6.31351 21H15.6843C18.9611 21 21 18.6876 21 15.4151V6.58486C21 3.31243 18.9611 1 15.6854 1Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const greenCalendar = `<svg width="18" height="20" viewBox="0 0 18 20" fill="none" >
<path d="M1.57721 7.83688H16.4305" stroke="url(#paint0_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.7017 11.0913H12.7094" stroke="url(#paint1_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.00384 11.0913H9.01156" stroke="url(#paint2_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.29822 11.0913H5.30594" stroke="url(#paint3_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.7017 14.33H12.7094" stroke="url(#paint4_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.00384 14.33H9.01156" stroke="url(#paint5_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.29822 14.33H5.30594" stroke="url(#paint6_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.3698 1.6665V4.40882" stroke="url(#paint7_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.63789 1.6665V4.40882" stroke="url(#paint8_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5319 2.98242H5.4758C3.02856 2.98242 1.5 4.3457 1.5 6.85161V14.393C1.5 16.9383 3.02856 18.3331 5.4758 18.3331H12.5242C14.9791 18.3331 16.5 16.9619 16.5 14.456V6.85161C16.5077 4.3457 14.9868 2.98242 12.5319 2.98242Z" stroke="url(#paint9_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear" x1="9.00385" y1="7.44287" x2="9.00385" y2="8.23089" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="12.7056" y1="10.6973" x2="12.7056" y2="11.4853" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="9.0077" y1="10.6973" x2="9.0077" y2="11.4853" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="5.30208" y1="10.6973" x2="5.30208" y2="11.4853" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
<linearGradient id="paint4_linear" x1="12.7056" y1="13.936" x2="12.7056" y2="14.7241" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
<linearGradient id="paint5_linear" x1="9.0077" y1="13.936" x2="9.0077" y2="14.7241" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
<linearGradient id="paint6_linear" x1="5.30208" y1="13.936" x2="5.30208" y2="14.7241" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
<linearGradient id="paint7_linear" x1="12.3698" y1="1.6665" x2="12.3698" y2="4.40882" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
<linearGradient id="paint8_linear" x1="5.63789" y1="1.6665" x2="5.63789" y2="4.40882" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
<linearGradient id="paint9_linear" x1="9" y1="2.98242" x2="9" y2="18.3331" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
</defs>
</svg>`;

const walletIcon = `<svg width="22" height="21" viewBox="0 0 22 21" fill="none" >
<path d="M21 12.9084H16.7696C15.2163 12.9074 13.9573 11.6494 13.9563 10.096C13.9563 8.54273 15.2163 7.28464 16.7696 7.28369H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.2481 10.0319H16.9223" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.48376 1H15.5161C18.5446 1 20.9998 3.45521 20.9998 6.48376V13.9837C20.9998 17.0122 18.5446 19.4674 15.5161 19.4674H6.48376C3.45521 19.4674 1 17.0122 1 13.9837V6.48376C1 3.45521 3.45521 1 6.48376 1Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.73975 5.7423H11.3816" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const shuffleIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<path d="M19.3065 14.0411L16.8783 11.6328C16.5719 11.329 16.0773 11.331 15.7734 11.6373C15.4696 11.9437 15.4716 12.4384 15.778 12.7422L18.015 14.9609H17.0616C14.8055 14.9609 12.7238 13.9848 11.3502 12.2828C11.0792 11.947 10.5873 11.8945 10.2516 12.1655C9.91578 12.4364 9.86328 12.9283 10.1343 13.2641C11.8059 15.3355 14.3309 16.5234 17.0616 16.5234H17.9363L15.778 18.6641C15.4716 18.9679 15.4696 19.4625 15.7734 19.7689C15.9262 19.9229 16.1271 20 16.3282 20C16.527 20 16.726 19.9245 16.8783 19.7734L19.3065 17.3651C19.7537 16.9216 20 16.3313 20 15.7031C20 15.075 19.7537 14.4847 19.3065 14.0411Z" fill="url(#paint0_linear)"/>
<path d="M19.3065 2.63488L16.8783 0.226564C16.5719 -0.077264 16.0773 -0.0752718 15.7734 0.231095C15.4696 0.537463 15.4716 1.03211 15.778 1.33594L17.9363 3.47656H17.0616C13.8716 3.47656 10.9182 5.15824 9.3541 7.86528L9.02301 8.43836L8.48879 7.51371C6.92469 4.80668 3.97133 3.125 0.78125 3.125C0.349766 3.125 0 3.47477 0 3.90625C0 4.33774 0.349766 4.6875 0.78125 4.6875C3.41508 4.6875 5.85004 6.06996 7.13586 8.29539L8.1207 10L7.13582 11.7046C5.85004 13.9301 3.41508 15.3125 0.78125 15.3125C0.349766 15.3125 0 15.6623 0 16.0938C0 16.5252 0.349766 16.875 0.78125 16.875C3.97133 16.875 6.92465 15.1933 8.48879 12.4863L9.6927 10.4026C9.69707 10.3953 9.70133 10.3879 9.70547 10.3805L10.707 8.64695C11.9929 6.42153 14.4278 5.03906 17.0616 5.03906H18.015L15.778 7.25781C15.4716 7.56164 15.4696 8.05629 15.7734 8.36266C15.9262 8.51664 16.1271 8.59375 16.3282 8.59375C16.527 8.59375 16.726 8.51828 16.8783 8.36719L19.3065 5.95887C19.7537 5.51531 20 4.92504 20 4.29688C20 3.66871 19.7537 3.07848 19.3065 2.63488Z" fill="url(#paint1_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="14.9805" y1="11.4062" x2="14.9805" y2="20" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="10" y1="0" x2="10" y2="16.875" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
</defs>
</svg>`;

const shareIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<g clip-path="url(#clip0)">
<path d="M16.6406 13.2814C15.6022 13.2814 14.6724 13.755 14.0557 14.4975L11.4417 13.1973C11.0554 13.0053 10.5864 13.1626 10.3943 13.549C10.2021 13.9353 10.3596 14.4042 10.7459 14.5963L13.3639 15.8984C13.3098 16.1374 13.2812 16.3858 13.2812 16.6408C13.2812 18.4932 14.7883 20.0002 16.6406 20.0002C18.493 20.0002 20 18.4932 20 16.6408C20 14.7884 18.493 13.2814 16.6406 13.2814ZM16.6406 18.4377C15.6498 18.4377 14.8437 17.6316 14.8437 16.6408C14.8437 16.3951 14.8933 16.1608 14.983 15.9473C15.0022 15.9188 15.0198 15.8888 15.0355 15.8573C15.0521 15.8238 15.0662 15.7896 15.0777 15.755C15.387 15.2114 15.9717 14.8439 16.6406 14.8439C17.6314 14.8439 18.4375 15.65 18.4375 16.6408C18.4375 17.6316 17.6314 18.4377 16.6406 18.4377Z" fill="url(#paint0_linear)"/>
<path d="M16.6406 0C14.7883 0 13.2812 1.50699 13.2812 3.35938C13.2812 3.61824 13.3107 3.87035 13.3664 4.11254L5.93125 7.84105C5.31453 7.10758 4.39047 6.64062 3.35938 6.64062C1.50703 6.64062 0 8.14762 0 10C0 11.8524 1.50703 13.3594 3.35938 13.3594C4.38602 13.3594 5.30656 12.8964 5.92324 12.1684L7.18469 12.8104C7.2982 12.8682 7.41918 12.8956 7.5384 12.8956C7.82301 12.8956 8.09738 12.7395 8.23531 12.4685C8.43102 12.0839 8.27797 11.6136 7.8934 11.4179L6.62867 10.7743C6.68758 10.5256 6.71875 10.2664 6.71875 10C6.71875 9.73793 6.68859 9.48277 6.63152 9.23785L14.0628 5.51125C14.6795 6.24883 15.6062 6.71875 16.6406 6.71875C18.493 6.71875 20 5.21176 20 3.35938C20 1.50699 18.493 0 16.6406 0ZM3.35938 11.7969C2.36859 11.7969 1.5625 10.9908 1.5625 10C1.5625 9.00922 2.36859 8.20312 3.35938 8.20312C4.35016 8.20312 5.15625 9.00922 5.15625 10C5.15625 10.9908 4.35016 11.7969 3.35938 11.7969ZM16.6406 5.15625C15.6498 5.15625 14.8438 4.35016 14.8438 3.35938C14.8438 2.36859 15.6498 1.5625 16.6406 1.5625C17.6314 1.5625 18.4375 2.36859 18.4375 3.35938C18.4375 4.35016 17.6314 5.15625 16.6406 5.15625Z" fill="url(#paint1_linear)"/>
</g>
<defs>
<linearGradient id="paint0_linear" x1="15.1562" y1="13.1155" x2="15.1562" y2="20.0002" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="10" y1="0" x2="10" y2="13.3594" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
<clipPath id="clip0">
<rect width="20" height="20" fill="#ffffff"/>
</clipPath>
</defs>
</svg>`;

const lockkkkIcon = `<svg width="20" height="23" viewBox="0 0 20 23" fill="none" >
<path d="M19.1071 16.2617C19.6003 16.2617 20 15.8595 20 15.3633V12.0391C20 10.0575 18.3979 8.44531 16.4286 8.44531H15.3555V5.27679C15.3555 2.36716 12.9523 0 9.99835 0C7.04442 0 4.64121 2.36716 4.64121 5.27679V8.44531H3.57143C1.60214 8.44531 0 10.0575 0 12.0391V19.4062C0 21.3878 1.60214 23 3.57143 23H16.4286C18.3979 23 20 21.3878 20 19.4062C20 18.91 19.6003 18.5078 19.1071 18.5078C18.614 18.5078 18.2143 18.91 18.2143 19.4062C18.2143 20.397 17.4132 21.2031 16.4286 21.2031H3.57143C2.58679 21.2031 1.78571 20.397 1.78571 19.4062V12.0391C1.78571 11.0483 2.58679 10.2422 3.57143 10.2422H16.4286C17.4132 10.2422 18.2143 11.0483 18.2143 12.0391V15.3633C18.2143 15.8595 18.614 16.2617 19.1071 16.2617ZM13.5698 8.44531H6.42692V5.27679C6.42692 3.35796 8.02906 1.79688 9.99835 1.79688C11.9676 1.79688 13.5698 3.35796 13.5698 5.27679V8.44531Z" fill="url(#paint0_linear)"/>
<path d="M10 16.4863C10.4931 16.4863 10.8929 16.0841 10.8929 15.5879C10.8929 15.0917 10.4931 14.6895 10 14.6895C9.50692 14.6895 9.10718 15.0917 9.10718 15.5879C9.10718 16.0841 9.50692 16.4863 10 16.4863Z" fill="url(#paint1_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="10" y1="0" x2="10" y2="23" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="10" y1="14.6895" x2="10" y2="16.4863" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
</defs>
</svg>`;

const logoutIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<path d="M16.875 0H3.125C1.40188 0 0 1.40188 0 3.125V4.6875C0 5.11898 0.349766 5.46875 0.78125 5.46875C1.21273 5.46875 1.5625 5.11898 1.5625 4.6875V3.125C1.5625 2.26344 2.26344 1.5625 3.125 1.5625H16.875C17.7366 1.5625 18.4375 2.26344 18.4375 3.125V16.875C18.4375 17.7366 17.7366 18.4375 16.875 18.4375H3.125C2.26344 18.4375 1.5625 17.7366 1.5625 16.875V15.3125C1.5625 14.881 1.21273 14.5312 0.78125 14.5312C0.349766 14.5312 0 14.881 0 15.3125V16.875C0 18.5981 1.40188 20 3.125 20H16.875C18.5981 20 20 18.5981 20 16.875V3.125C20 1.40188 18.5981 0 16.875 0Z" fill="url(#paint0_linear)"/>
<path d="M13.1219 8.34248L10.2006 5.42388C9.89537 5.11892 9.40072 5.11916 9.09576 5.42439C8.7908 5.72962 8.79103 6.22427 9.09627 6.52924L12.0173 9.44756C12.3219 9.75217 12.3219 10.2478 12.0173 10.5524C12.0162 10.5535 12.015 10.5547 12.0139 10.5558L9.09263 13.5135C8.78943 13.8205 8.79248 14.3151 9.09947 14.6184C9.2517 14.7687 9.45009 14.8438 9.64841 14.8438C9.84998 14.8438 10.0515 14.7662 10.2043 14.6115L13.124 11.6554C14.036 10.7414 14.0353 9.25596 13.1219 8.34248Z" fill="url(#paint1_linear)"/>
<path d="M9.10156 9.21875H0.78125C0.349766 9.21875 0 9.56852 0 10C0 10.4315 0.349766 10.7812 0.78125 10.7812H9.10156C9.53305 10.7812 9.88281 10.4315 9.88281 10C9.88281 9.56852 9.53305 9.21875 9.10156 9.21875Z" fill="url(#paint2_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="10" y1="0" x2="10" y2="20" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="11.3373" y1="5.19531" x2="11.3373" y2="14.8438" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="4.94141" y1="9.21875" x2="4.94141" y2="10.7812" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
</defs>
</svg>`;

const plusIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.6229 0H6.37714C2.45714 0 0 2.7745 0 6.70219V17.2978C0 21.2255 2.44571 24 6.37714 24H17.6229C21.5543 24 24 21.2255 24 17.2978V6.70219C24 2.7745 21.5543 0 17.6229 0Z" fill="url(#paint0_linear)"/>
<path d="M11.6666 8V15.3264" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.3333 11.6632H8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
</defs>
</svg>`;

const editBabyIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<path d="M11.7474 18.443H19" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.78 1.79479C11.5557 0.867787 12.95 0.731856 13.8962 1.49173C13.9485 1.53296 15.6295 2.83879 15.6295 2.83879C16.669 3.46719 16.992 4.80311 16.3494 5.82259C16.3153 5.87718 6.81195 17.7645 6.81195 17.7645C6.49578 18.1589 6.01583 18.3918 5.50291 18.3973L1.86353 18.443L1.04353 14.9723C0.928662 14.4843 1.04353 13.9718 1.3597 13.5773L10.78 1.79479Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.02087 4.00085L14.4731 8.18798" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const editGreenBabyIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<path d="M11.7474 18.443H19" stroke="url(#paint0_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.78 1.79479C11.5557 0.867787 12.95 0.731856 13.8962 1.49173C13.9485 1.53296 15.6295 2.83879 15.6295 2.83879C16.669 3.46719 16.992 4.80311 16.3494 5.82259C16.3153 5.87718 6.81195 17.7645 6.81195 17.7645C6.49578 18.1589 6.01583 18.3918 5.50291 18.3973L1.86353 18.443L1.04353 14.9723C0.928662 14.4843 1.04353 13.9718 1.3597 13.5773L10.78 1.79479Z" stroke="url(#paint1_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.02087 4.00085L14.4731 8.18798" stroke="url(#paint2_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear" x1="15.3737" y1="17.8859" x2="15.3737" y2="19.0001" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="8.83997" y1="1" x2="8.83997" y2="18.443" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="11.747" y1="4.00085" x2="11.747" y2="8.18798" gradientUnits="userSpaceOnUse">
<stop stop-color="#e9636e"/>
<stop offset="1" stop-color="#e9636e"/>
</linearGradient>
</defs>
</svg>`;

const checkBoxBlack = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<rect x="1" y="1" width="18" height="18" rx="3" stroke="#828282" stroke-width="2"/>
</svg>`;

const activityIcon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" >
<path d="M4.72168 11.4176L7.21548 8.17639L10.0601 10.4109L12.5005 7.26123" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="15.3452" cy="2.60153" r="1.60153" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.1201 1.70166H5.06482C2.55577 1.70166 1 3.47859 1 5.98765V12.7217C1 15.2307 2.52526 17 5.06482 17H12.2336C14.7426 17 16.2984 15.2307 16.2984 12.7217V6.85705" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const activityWhiteIcon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" >
<path d="M4.72168 11.4176L7.21548 8.17639L10.0601 10.4109L12.5005 7.26123" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="15.3452" cy="2.60153" r="1.60153" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.1201 1.70166H5.06482C2.55577 1.70166 1 3.47859 1 5.98765V12.7217C1 15.2307 2.52526 17 5.06482 17H12.2336C14.7426 17 16.2984 15.2307 16.2984 12.7217V6.85705" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const heightPinkIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<path d="M14.8828 0H5.11719C4.6857 0 4.33594 0.349766 4.33594 0.78125C4.33594 1.21273 4.6857 1.5625 5.11719 1.5625H14.8828C15.3143 1.5625 15.6641 1.21273 15.6641 0.78125C15.6641 0.349766 15.3143 0 14.8828 0Z" fill="url(#paint0_linear)"/>
<path d="M14.8828 18.4375H5.11719C4.6857 18.4375 4.33594 18.7873 4.33594 19.2188C4.33594 19.6502 4.6857 20 5.11719 20H14.8828C15.3143 20 15.6641 19.6502 15.6641 19.2188C15.6641 18.7873 15.3143 18.4375 14.8828 18.4375Z" fill="url(#paint1_linear)"/>
<path d="M14.1094 4.68422L11.701 2.25602C11.2575 1.80879 10.6672 1.5625 10.0391 1.5625C9.41089 1.5625 8.82066 1.80879 8.37707 2.25602L5.96875 4.68422C5.66492 4.99055 5.66692 5.48523 5.97328 5.78906C6.27969 6.09293 6.7743 6.09086 7.07812 5.78453L9.21875 3.62629V13.7891C9.21875 14.2205 9.56851 14.5703 9.99999 14.5703C10.4315 14.5703 10.7812 14.2205 10.7812 13.7891V3.5475L13 5.78453C13.1528 5.93855 13.3537 6.01566 13.5547 6.01562C13.7535 6.01562 13.9525 5.94016 14.1048 5.78906C14.4112 5.48523 14.4132 4.99055 14.1094 4.68422Z" fill="url(#paint2_linear)"/>
<path d="M14.1048 14.2109C13.7984 13.9071 13.3038 13.9091 13 14.2155L10.5917 16.6437C10.4437 16.7928 10.2475 16.875 10.0391 16.875C9.83067 16.875 9.63446 16.7928 9.48649 16.6437L7.07814 14.2155C6.77431 13.9092 6.2797 13.9071 5.9733 14.2109C5.66693 14.5148 5.6649 15.0094 5.96877 15.3158L8.37708 17.744C8.82068 18.1912 9.41091 18.4375 10.0391 18.4375C10.6672 18.4375 11.2575 18.1912 11.7011 17.744L14.1094 15.3158C14.4132 15.0094 14.4112 14.5148 14.1048 14.2109Z" fill="url(#paint3_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="15.6641" y1="1.5625" x2="15.3628" y2="-1.20174" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6188"/>
<stop offset="1" stop-color="#FFB199"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="15.6641" y1="20" x2="15.3628" y2="17.2358" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6188"/>
<stop offset="1" stop-color="#FFB199"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="14.3359" y1="14.5703" x2="2.87711" y2="4.98902" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6188"/>
<stop offset="1" stop-color="#FFB199"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="14.3359" y1="18.4375" x2="11.5407" y2="11.6103" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6188"/>
<stop offset="1" stop-color="#FFB199"/>
</linearGradient>
</defs>
</svg>`;

const heightYellowIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<path d="M14.8828 0H5.11719C4.6857 0 4.33594 0.349766 4.33594 0.78125C4.33594 1.21273 4.6857 1.5625 5.11719 1.5625H14.8828C15.3143 1.5625 15.6641 1.21273 15.6641 0.78125C15.6641 0.349766 15.3143 0 14.8828 0Z" fill="url(#paint0_linear)"/>
<path d="M14.8828 18.4375H5.11719C4.6857 18.4375 4.33594 18.7873 4.33594 19.2188C4.33594 19.6502 4.6857 20 5.11719 20H14.8828C15.3143 20 15.6641 19.6502 15.6641 19.2188C15.6641 18.7873 15.3143 18.4375 14.8828 18.4375Z" fill="url(#paint1_linear)"/>
<path d="M14.1094 4.68422L11.701 2.25602C11.2575 1.80879 10.6672 1.5625 10.0391 1.5625C9.41089 1.5625 8.82066 1.80879 8.37707 2.25602L5.96875 4.68422C5.66492 4.99055 5.66692 5.48523 5.97328 5.78906C6.27969 6.09293 6.7743 6.09086 7.07812 5.78453L9.21875 3.62629V13.7891C9.21875 14.2205 9.56851 14.5703 9.99999 14.5703C10.4315 14.5703 10.7812 14.2205 10.7812 13.7891V3.5475L13 5.78453C13.1528 5.93855 13.3537 6.01566 13.5547 6.01562C13.7535 6.01562 13.9525 5.94016 14.1048 5.78906C14.4112 5.48523 14.4132 4.99055 14.1094 4.68422Z" fill="url(#paint2_linear)"/>
<path d="M14.1048 14.2109C13.7984 13.9071 13.3038 13.9091 13 14.2155L10.5917 16.6437C10.4437 16.7928 10.2475 16.875 10.0391 16.875C9.83067 16.875 9.63446 16.7928 9.48649 16.6437L7.07814 14.2155C6.77431 13.9092 6.2797 13.9071 5.9733 14.2109C5.66693 14.5148 5.6649 15.0094 5.96877 15.3158L8.37708 17.744C8.82068 18.1912 9.41091 18.4375 10.0391 18.4375C10.6672 18.4375 11.2575 18.1912 11.7011 17.744L14.1094 15.3158C14.4132 15.0094 14.4112 14.5148 14.1048 14.2109Z" fill="url(#paint3_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="15.6641" y1="1.5625" x2="15.3628" y2="-1.20174" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7A00"/>
<stop offset="1" stop-color="#FFC225"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="15.6641" y1="20" x2="15.3628" y2="17.2358" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7A00"/>
<stop offset="1" stop-color="#FFC225"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="14.3359" y1="14.5703" x2="2.87711" y2="4.98902" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7A00"/>
<stop offset="1" stop-color="#FFC225"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="14.3359" y1="18.4375" x2="11.5407" y2="11.6103" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7A00"/>
<stop offset="1" stop-color="#FFC225"/>
</linearGradient>
</defs>
</svg>`;

const weightBlueIcon = `<svg width="19" height="20" viewBox="0 0 19 20" fill="none" >
<path d="M9.3348 2.47266C9.33476 2.47266 9.33476 2.47266 9.3348 2.47266C6.81468 2.47266 4.45028 3.59519 2.67707 5.63348C2.48492 5.85434 2.48492 6.183 2.67707 6.40387L5.87498 10.0798C5.98645 10.2079 6.14797 10.2815 6.31777 10.2815H12.3519C12.5217 10.2815 12.6832 10.2079 12.7947 10.0798L15.9926 6.40387C16.1847 6.183 16.1847 5.8543 15.9926 5.63344C14.2193 3.59519 11.8549 2.4727 9.3348 2.47266ZM8.98994 9.1077L9.33476 8.36077L9.67958 9.1077H8.98994ZM12.0845 9.1077H10.9725L9.86763 6.71461C9.77169 6.50681 9.56369 6.37375 9.33476 6.37375C9.10588 6.37375 8.89784 6.50681 8.8019 6.71461L7.69709 9.1077H6.58505L3.90712 6.02951C4.24169 5.68598 4.59669 5.37743 4.96862 5.10496L5.4739 5.71106C5.58999 5.85031 5.75686 5.92215 5.92499 5.92215C6.05751 5.92215 6.19077 5.87751 6.30048 5.78603C6.54944 5.57846 6.58301 5.20841 6.37549 4.95945L5.97432 4.47823C6.84348 4.02464 7.77942 3.74978 8.74787 3.67063V4.39345C8.74787 4.71757 9.01064 4.98034 9.33476 4.98034C9.65889 4.98034 9.92166 4.71757 9.92166 4.39345V3.67063C10.8901 3.74978 11.8261 4.02464 12.6952 4.47823L12.294 4.95945C12.0865 5.20841 12.1201 5.5785 12.369 5.78603C12.4788 5.87751 12.612 5.92215 12.7445 5.92215C12.9127 5.92215 13.0795 5.85027 13.1956 5.71106L13.7009 5.10496C14.0728 5.37743 14.4278 5.68598 14.7624 6.02951L12.0845 9.1077Z" fill="url(#paint0_linear)"/>
<path d="M17.5659 1.41809C16.7534 0.516859 15.5916 0 14.3783 0H4.29148C3.07817 0 1.91635 0.516859 1.10393 1.41805C0.291516 2.31925 -0.102486 3.52829 0.0228748 4.73514L1.20926 16.152C1.43721 18.3457 3.27231 20 5.47786 20H13.1919C15.3974 20 17.2325 18.3457 17.4605 16.152L18.6469 4.73518C18.7723 3.52833 18.3782 2.31929 17.5659 1.41809ZM17.4794 4.61381L16.293 16.0307C16.1274 17.6244 14.7942 18.8262 13.1919 18.8262H9.92179V15.3061C9.92179 14.9819 9.65902 14.7192 9.3349 14.7192C9.01077 14.7192 8.748 14.9819 8.748 15.3061V18.8262H5.47786C3.87556 18.8262 2.54237 17.6244 2.37675 16.0307L1.1904 4.61381C1.09928 3.73703 1.38553 2.85872 1.97575 2.20399C2.56597 1.54928 3.41 1.17379 4.29148 1.17379H14.3783C15.2598 1.17379 16.1038 1.54928 16.694 2.20402C17.2843 2.85872 17.5705 3.73707 17.4794 4.61381Z" fill="url(#paint1_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="16.1367" y1="10.2815" x2="10.8783" y2="-1.31236" gradientUnits="userSpaceOnUse">
<stop stop-color="#0030DB"/>
<stop offset="1" stop-color="#44B0FF"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="18.6698" y1="20" x2="1.01453" y2="-0.858715" gradientUnits="userSpaceOnUse">
<stop stop-color="#0030DB"/>
<stop offset="1" stop-color="#44B0FF"/>
</linearGradient>
</defs>
</svg>`;

const scanYellowIcon = `<svg width="23" height="20" viewBox="0 0 23 20" fill="none" >
<path d="M22 10.4556H1" stroke="url(#paint0_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.1299 6.245V4.732C20.1299 2.671 18.4589 1 16.3969 1H15.1919" stroke="url(#paint1_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.87012 6.245V4.732C2.87012 2.671 4.54112 1 6.60312 1H7.83912" stroke="url(#paint2_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.1299 10.4546V14.5286C20.1299 16.5906 18.4589 18.2616 16.3969 18.2616H15.1919" stroke="url(#paint3_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.87012 10.4546V14.5286C2.87012 16.5906 4.54112 18.2616 6.60312 18.2616H7.83912" stroke="url(#paint4_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear" x1="22" y1="10.9556" x2="21.9327" y2="9.16797" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7A00"/>
<stop offset="1" stop-color="#FFC225"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="20.1299" y1="6.245" x2="15.5065" y2="0.735987" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7A00"/>
<stop offset="1" stop-color="#FFC225"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="7.83912" y1="6.245" x2="3.2208" y2="0.707523" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7A00"/>
<stop offset="1" stop-color="#FFC225"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="20.1299" y1="18.2616" x2="13.3116" y2="12.8034" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7A00"/>
<stop offset="1" stop-color="#FFC225"/>
</linearGradient>
<linearGradient id="paint4_linear" x1="7.83912" y1="18.2616" x2="1.01161" y2="12.7617" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7A00"/>
<stop offset="1" stop-color="#FFC225"/>
</linearGradient>
</defs>
</svg>`;

const scanPinkIcon = `<svg width="23" height="20" viewBox="0 0 23 20" fill="none" >
<path d="M22 10.4556H1" stroke="url(#paint0_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.1299 6.245V4.732C20.1299 2.671 18.4589 1 16.3969 1H15.1919" stroke="url(#paint1_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.87012 6.245V4.732C2.87012 2.671 4.54112 1 6.60312 1H7.83912" stroke="url(#paint2_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.1299 10.4546V14.5286C20.1299 16.5906 18.4589 18.2616 16.3969 18.2616H15.1919" stroke="url(#paint3_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.87012 10.4546V14.5286C2.87012 16.5906 4.54112 18.2616 6.60312 18.2616H7.83912" stroke="url(#paint4_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear" x1="22" y1="10.9556" x2="21.9327" y2="9.16797" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6188"/>
<stop offset="1" stop-color="#FFB199"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="20.1299" y1="6.245" x2="15.5065" y2="0.735987" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6188"/>
<stop offset="1" stop-color="#FFB199"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="7.83912" y1="6.245" x2="3.2208" y2="0.707523" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6188"/>
<stop offset="1" stop-color="#FFB199"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="20.1299" y1="18.2616" x2="13.3116" y2="12.8034" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6188"/>
<stop offset="1" stop-color="#FFB199"/>
</linearGradient>
<linearGradient id="paint4_linear" x1="7.83912" y1="18.2616" x2="1.01161" y2="12.7617" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6188"/>
<stop offset="1" stop-color="#FFB199"/>
</linearGradient>
</defs>
</svg>`;

const chartPinkIcon = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" >
<path d="M6.37145 9.20166V16.0618" stroke="url(#paint0_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.0382 5.91919V16.0619" stroke="url(#paint1_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.6285 12.8269V16.0619" stroke="url(#paint2_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z" stroke="url(#paint3_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear" x1="6.84764" y1="16.0618" x2="4.75453" y2="15.694" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6188"/>
<stop offset="1" stop-color="#FFB199"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="11.5144" y1="16.0619" x2="9.3867" y2="15.8091" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6188"/>
<stop offset="1" stop-color="#FFB199"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="16.1047" y1="16.0619" x2="14.21" y2="15.356" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6188"/>
<stop offset="1" stop-color="#FFB199"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="21" y1="21" x2="3.58422" y2="-1.04185" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6188"/>
<stop offset="1" stop-color="#FFB199"/>
</linearGradient>
</defs>
</svg>`;

const chartBlueIcon = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" >
<path d="M6.37145 9.20166V16.0618" stroke="url(#paint0_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.0382 5.91919V16.0619" stroke="url(#paint1_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.6285 12.8269V16.0619" stroke="url(#paint2_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z" stroke="url(#paint3_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear" x1="6.84764" y1="16.0618" x2="4.75453" y2="15.694" gradientUnits="userSpaceOnUse">
<stop stop-color="#0030DB"/>
<stop offset="1" stop-color="#44B0FF"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="11.5144" y1="16.0619" x2="9.3867" y2="15.8091" gradientUnits="userSpaceOnUse">
<stop stop-color="#0030DB"/>
<stop offset="1" stop-color="#44B0FF"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="16.1047" y1="16.0619" x2="14.21" y2="15.356" gradientUnits="userSpaceOnUse">
<stop stop-color="#0030DB"/>
<stop offset="1" stop-color="#44B0FF"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="21" y1="21" x2="3.58422" y2="-1.04185" gradientUnits="userSpaceOnUse">
<stop stop-color="#0030DB"/>
<stop offset="1" stop-color="#44B0FF"/>
</linearGradient>
</defs>
</svg>`;

const chartYellowIcon = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" >
<path d="M6.37145 9.20166V16.0618" stroke="url(#paint0_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.0382 5.91919V16.0619" stroke="url(#paint1_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.6285 12.8269V16.0619" stroke="url(#paint2_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z" stroke="url(#paint3_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear" x1="6.84764" y1="16.0618" x2="4.75453" y2="15.694" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7A00"/>
<stop offset="1" stop-color="#FFC225"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="11.5144" y1="16.0619" x2="9.3867" y2="15.8091" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7A00"/>
<stop offset="1" stop-color="#FFC225"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="16.1047" y1="16.0619" x2="14.21" y2="15.356" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7A00"/>
<stop offset="1" stop-color="#FFC225"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="21" y1="21" x2="3.58422" y2="-1.04185" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7A00"/>
<stop offset="1" stop-color="#FFC225"/>
</linearGradient>
</defs>
</svg>`;

const bigEyeHide = `<svg width="54" height="40" viewBox="0 0 54 40" fill="none" >
<path d="M27 39.8748C15.0943 39.8748 4.52356 35.4691 0.116815 28.6538C0.0406843 28.5359 0 28.3968 0 28.2545C0 28.1122 0.0406843 27.9732 0.116815 27.8553C4.54399 21.04 15.1011 16.6343 27 16.6343C38.8989 16.6343 49.4764 21.04 53.8832 27.8553C53.9593 27.9732 54 28.1122 54 28.2545C54 28.3968 53.9593 28.5359 53.8832 28.6538C49.4628 35.4833 38.9057 39.8748 27 39.8748ZM1.51307 28.2545C5.79722 34.3712 15.9525 38.449 27 38.449C38.0475 38.449 48.2028 34.3712 52.4869 28.2545C48.2028 22.1379 38.0543 18.0601 27 18.0601C15.9457 18.0601 5.79722 22.1521 1.51307 28.2688V28.2545Z" fill="#ffffff"/>
<path d="M26.9999 37.1407C25.1749 37.1407 23.3908 36.6195 21.8732 35.6431C20.3557 34.6667 19.173 33.2789 18.4745 31.6552C17.7761 30.0314 17.5934 28.2448 17.9494 26.521C18.3055 24.7973 19.1843 23.2139 20.4749 21.9712C21.7654 20.7285 23.4096 19.8821 25.1997 19.5393C26.9897 19.1964 28.8451 19.3724 30.5313 20.0449C32.2175 20.7175 33.6586 21.8565 34.6726 23.3178C35.6866 24.7791 36.2278 26.4971 36.2278 28.2546C36.2246 30.6104 35.2513 32.8688 33.5215 34.5346C31.7916 36.2004 29.4463 37.1376 26.9999 37.1407ZM26.9999 20.5385C25.4152 20.5385 23.8659 20.9911 22.5482 21.8389C21.2305 22.6868 20.2035 23.8919 19.597 25.3018C18.9906 26.7117 18.8319 28.2632 19.141 29.7599C19.4502 31.2567 20.2134 32.6316 21.334 33.7107C22.4546 34.7898 23.8824 35.5247 25.4367 35.8224C26.9911 36.1202 28.6022 35.9674 30.0663 35.3833C31.5305 34.7993 32.7819 33.8103 33.6624 32.5414C34.5429 31.2725 35.0128 29.7807 35.0128 28.2546C35.0096 26.2091 34.1644 24.2483 32.6624 22.8019C31.1604 21.3556 29.1241 20.5416 26.9999 20.5385Z" fill="#ffffff"/>
<path d="M27.1912 12.3621C27.0099 12.3621 26.8361 12.29 26.7079 12.1618C26.5797 12.0337 26.5077 11.8598 26.5077 11.6785V1.08357C26.5077 0.902282 26.5797 0.728419 26.7079 0.600229C26.8361 0.47204 27.0099 0.400024 27.1912 0.400024C27.3725 0.400024 27.5464 0.47204 27.6746 0.600229C27.8028 0.728419 27.8748 0.902282 27.8748 1.08357V11.6785C27.8748 11.8598 27.8028 12.0337 27.6746 12.1618C27.5464 12.29 27.3725 12.3621 27.1912 12.3621Z" fill="#ffffff"/>
<path d="M18.9547 12.3622C18.8158 12.3632 18.68 12.3218 18.5652 12.2437C18.4504 12.1655 18.3622 12.0543 18.3122 11.9247L14.5937 1.99968C14.5314 1.83101 14.5381 1.6446 14.6123 1.48083C14.6865 1.31706 14.8223 1.18913 14.9902 1.12474C15.0741 1.09286 15.1635 1.07783 15.2532 1.0805C15.3429 1.08318 15.4313 1.1035 15.5132 1.14032C15.595 1.17713 15.6689 1.22972 15.7304 1.29507C15.792 1.36042 15.8401 1.43726 15.8719 1.5212L19.5904 11.4394C19.6223 11.5234 19.6373 11.6127 19.6347 11.7025C19.632 11.7922 19.6116 11.8806 19.5748 11.9624C19.538 12.0443 19.4854 12.1181 19.4201 12.1797C19.3547 12.2413 19.2779 12.2893 19.194 12.3212C19.1169 12.3475 19.0361 12.3613 18.9547 12.3622Z" fill="#ffffff"/>
<path d="M36.351 12.3687C36.2694 12.3694 36.1884 12.3555 36.1118 12.3277C36.0272 12.2965 35.9497 12.2489 35.8836 12.1876C35.8175 12.1264 35.7642 12.0526 35.7267 11.9707C35.6892 11.8887 35.6683 11.8002 35.6652 11.7101C35.6621 11.6201 35.6768 11.5303 35.7085 11.4459L39.4065 1.52085C39.4379 1.43647 39.4856 1.35911 39.5469 1.29317C39.6082 1.22724 39.6819 1.17403 39.7638 1.13658C39.8457 1.09913 39.9342 1.07818 40.0241 1.07491C40.1141 1.07165 40.2038 1.08614 40.2882 1.11756C40.3726 1.14897 40.45 1.1967 40.5159 1.25802C40.5818 1.31934 40.6351 1.39304 40.6725 1.47492C40.71 1.5568 40.7309 1.64525 40.7342 1.73523C40.7374 1.82521 40.723 1.91495 40.6915 1.99933L36.9867 11.9244C36.9382 12.0541 36.8515 12.1661 36.738 12.2454C36.6244 12.3248 36.4895 12.3678 36.351 12.3687Z" fill="#ffffff"/>
</svg>`;

const bigBabyHide = `<svg width="48" height="46" viewBox="0 0 48 46" fill="none" >
<path d="M38.1782 20.0433C36.2355 20.0433 34.3363 19.4672 32.7211 18.3877C31.1058 17.3083 29.8469 15.774 29.1037 13.9791C28.3605 12.1841 28.1663 10.209 28.5457 8.30369C28.9251 6.39834 29.861 4.6483 31.2351 3.27492C32.6092 1.90154 34.3597 0.966521 36.2652 0.588127C38.1708 0.209734 40.1458 0.404962 41.9403 1.14912C43.7349 1.89328 45.2685 3.15294 46.3471 4.76878C47.4257 6.38461 48.0009 8.28403 47.9999 10.2268C47.9972 12.8303 46.9614 15.3264 45.1199 17.1669C43.2784 19.0075 40.7818 20.042 38.1782 20.0433ZM38.1782 1.42663C36.4377 1.42663 34.7363 1.94275 33.2891 2.90972C31.8419 3.8767 30.714 5.25109 30.0479 6.85911C29.3819 8.46713 29.2076 10.2365 29.5472 11.9436C29.8867 13.6507 30.7248 15.2187 31.9556 16.4494C33.1863 17.6802 34.7543 18.5183 36.4614 18.8578C38.1685 19.1974 39.9379 19.0231 41.5459 18.3571C43.1539 17.691 44.5283 16.5631 45.4953 15.1159C46.4623 13.6687 46.9784 11.9673 46.9784 10.2268C46.977 7.89326 46.0494 5.65569 44.3994 4.00563C42.7493 2.35557 40.5118 1.42798 38.1782 1.42663Z" fill="#ffffff"/>
<path d="M19.0457 45.0802H4.56096C3.35421 45.0708 2.19954 44.5873 1.34621 43.734C0.492881 42.8807 0.00934991 41.726 0 40.5192V38.987C0.00934991 37.7802 0.492881 36.6256 1.34621 35.7722C2.19954 34.9189 3.35421 34.4354 4.56096 34.426H11.5531L10.981 33.3228C9.04923 32.6294 7.36625 31.3791 6.1447 29.7297C4.92314 28.0803 4.21781 26.1059 4.11779 24.0558C4.01777 22.0058 4.52757 19.9721 5.58277 18.2116C6.63797 16.4511 8.19124 15.0429 10.0464 14.1647L12.4673 13.0207H12.0025L15.496 11.611L15.7208 11.5242L21.196 9.29732L21.2981 9.23603C21.5802 9.09462 21.8763 8.98335 22.1817 8.90404C23.1907 8.64511 24.2577 8.73656 25.2079 9.16341C26.1581 9.59027 26.9352 10.3272 27.4117 11.2535L39.9455 36.1575C40.2268 36.6926 40.3986 37.2785 40.4509 37.8809C40.5033 38.4832 40.435 39.0899 40.2502 39.6656C40.0655 40.2413 39.7678 40.7744 39.3747 41.2337C38.9815 41.6931 38.5008 42.0695 37.9606 42.341C37.4203 42.6124 36.8314 42.7735 36.2282 42.8148C35.625 42.8562 35.0197 42.7769 34.4474 42.5816C33.8752 42.3863 33.3477 42.079 32.8956 41.6775C32.4435 41.2761 32.0759 40.7885 31.8144 40.2434L26.1962 29.0887C25.5004 29.6842 24.7294 30.1856 23.9029 30.5801L20.7772 32.0408L22.8763 36.2136C23.0314 36.5108 23.1531 36.8243 23.239 37.1483C23.4938 37.7243 23.6259 38.347 23.6271 38.9768V40.509C23.6204 41.7211 23.1352 42.8814 22.2772 43.7375C21.4192 44.5936 20.2578 45.0762 19.0457 45.0802ZM4.56096 35.4577C3.62265 35.4591 2.72316 35.8324 2.05967 36.4959C1.39619 37.1594 1.02284 38.0589 1.02149 38.9972V40.5295C1.02284 41.4678 1.39619 42.3673 2.05967 43.0307C2.72316 43.6942 3.62265 44.0676 4.56096 44.0689H19.0457C19.9849 44.0689 20.8857 43.6962 21.5503 43.0325C22.2149 42.3689 22.589 41.4686 22.5903 40.5295V38.9972C22.5897 38.495 22.4817 37.9987 22.2736 37.5416L22.243 37.4548C22.1803 37.1891 22.0859 36.9319 21.9621 36.6886L19.4084 31.5812L23.4943 29.6557C24.4371 29.2134 25.3 28.618 26.0481 27.8936L26.5588 27.3828L32.7899 39.7582C32.9477 40.2401 33.2076 40.6824 33.5517 41.0548C33.8959 41.4273 34.3162 41.7212 34.7842 41.9166C35.2522 42.112 35.7567 42.2042 36.2635 42.187C36.7704 42.1698 37.2675 42.0436 37.7212 41.8169C38.1748 41.5903 38.5743 41.2686 38.8924 40.8736C39.2105 40.4787 39.4398 40.0199 39.5646 39.5284C39.6894 39.0368 39.7068 38.5242 39.6156 38.0254C39.5245 37.5265 39.3269 37.0532 39.0363 36.6376L26.4975 11.7131C26.1312 10.9932 25.53 10.42 24.7934 10.0884C24.0569 9.75679 23.2291 9.68672 22.4473 9.88978C22.2082 9.94974 21.9768 10.0371 21.7578 10.1503L21.671 10.2013H21.6199L16.0885 12.4588L15.8791 12.5406L15.6493 12.6376L10.4703 15.079C8.77342 15.8731 7.35385 17.1581 6.39519 18.7678C5.43652 20.3775 4.98286 22.2377 5.09288 24.108C5.20289 25.9783 5.87153 27.7726 7.0123 29.2587C8.15308 30.7449 9.71351 31.8546 11.4918 32.4443L11.691 32.5107L13.1875 35.4782L4.56096 35.4577ZM19.6178 28.818C19.145 28.7705 18.6944 28.5938 18.3154 28.3073L18.2387 28.246L15.685 25.6923C15.4092 25.488 12.8044 23.6135 10.6746 26.2337C10.5591 26.4761 10.3946 26.6921 10.1916 26.8679C9.98852 27.0437 9.75128 27.1755 9.49477 27.2552C9.33249 27.2762 9.16752 27.258 9.01375 27.202C8.85998 27.146 8.72192 27.0539 8.61118 26.9334L8.54479 26.8568C7.65088 25.3417 7.3609 23.5453 7.7327 21.8259C8.27409 19.3641 10.1128 17.1475 13.1977 15.2526C13.273 15.2053 13.3579 15.1753 13.4462 15.1647C13.5345 15.1541 13.624 15.1632 13.7084 15.1913C14.7299 15.5029 17.8965 21.8004 20.3481 27.0253V27.0815C20.435 27.342 20.6801 28.2409 20.1234 28.6648C19.9772 28.7731 19.7996 28.8305 19.6178 28.8283V28.818ZM18.9231 27.4697C19.0965 27.5868 19.2814 27.686 19.4748 27.7659C19.4609 27.6571 19.4387 27.5495 19.4084 27.4441C17.11 22.5154 14.3673 17.2292 13.4939 16.2639C10.8074 17.9698 9.20365 19.9055 8.73376 22.02C8.42178 23.4647 8.64694 24.9736 9.36708 26.2643C9.54487 26.1136 9.68925 25.9275 9.791 25.7178L9.8523 25.631C12.1353 22.7759 15.0977 23.9098 16.3439 24.9057L16.3898 24.9466L18.9231 27.4697Z" fill="#ffffff"/>
</svg>
`;

const bigCissorHide = `<svg width="66" height="48" viewBox="0 0 66 48" fill="none" >
<path d="M60.3513 37.6925C59.5441 37.6822 58.7399 37.5928 57.9501 37.4257C50.0632 35.7923 25.1662 30.183 24.9189 30.1245L24.4309 30.0203V29.5193C24.4309 29.4217 24.0014 20.0056 19.0688 18.5219C17.3769 18.0143 16.1731 17.6304 15.4703 17.3701C13.6359 18.7609 11.3645 19.4496 9.06654 19.3118C6.76863 19.174 4.59582 18.2187 2.94077 16.6187C1.28572 15.0186 0.257636 12.8793 0.0423011 10.5873C-0.173034 8.2954 0.438588 6.00202 1.76664 4.12169C3.09469 2.24135 5.05156 0.898099 7.28359 0.334687C9.51562 -0.228725 11.8756 0.0248702 13.9369 1.04965C15.9983 2.07442 17.6251 3.80277 18.5233 5.92234C19.4215 8.04191 19.5319 10.4129 18.8346 12.6067C18.7419 12.8988 18.6333 13.1855 18.5092 13.4657L64.8999 31.1917L64.9845 31.517C64.9845 31.6407 65.7264 34.5755 63.9954 36.3845C63.5111 36.8422 62.9374 37.1946 62.3102 37.4197C61.6831 37.6448 61.0161 37.7377 60.3513 37.6925ZM25.6803 28.9662C29.1812 29.7535 50.9482 34.647 58.2169 36.1242C60.553 36.6058 62.1799 36.3845 63.0649 35.4735C63.9499 34.5625 63.8913 32.8315 63.7872 32.1417L16.7067 14.175L17.0451 13.5243C17.2653 13.1066 17.4503 12.6713 17.5982 12.2228C18.2713 10.1112 18.0794 7.81879 17.0644 5.84856C16.0494 3.87833 14.2942 2.3912 12.1841 1.71348C10.0725 1.03851 7.7793 1.22966 5.8086 2.2449C3.8379 3.26015 2.351 5.0164 1.67475 7.12757C1.12806 8.84426 1.15089 10.6917 1.73985 12.3943C2.32881 14.097 3.45233 15.5637 4.94288 16.5757C6.43344 17.5876 8.21118 18.0908 10.011 18.0099C11.8108 17.9291 13.5363 17.2687 14.9302 16.1272L15.236 15.8799L15.5939 16.0296C15.9713 16.1858 16.9474 16.5307 19.4267 17.279C24.574 18.8212 25.5176 26.8383 25.6803 28.9662Z" fill="#ffffff"/>
<path d="M12.7957 48C11.9454 47.999 11.0988 47.8875 10.2773 47.6681C8.98055 47.3256 7.76926 46.717 6.72055 45.8808C5.67184 45.0447 4.80868 43.9994 4.18599 42.8115C3.5633 41.6235 3.19472 40.319 3.1037 38.9808C3.01268 37.6427 3.20122 36.3003 3.65732 35.039C4.11342 33.7776 4.82709 32.6251 5.75292 31.6547C6.67875 30.6842 7.79645 29.9171 9.03491 29.4022C10.2734 28.8873 11.6055 28.6358 12.9464 28.6638C14.2874 28.6918 15.6078 28.9986 16.8237 29.5647C17.4744 29.1678 18.5481 28.5366 20.0774 27.6776C24.5804 25.1853 22.9926 15.8863 22.9731 15.7952L22.8885 15.3007L23.344 15.0924C23.5718 14.9818 46.7118 4.2122 54.0716 0.945518C56.6746 -0.212786 58.7439 -0.310395 60.2015 0.672211C62.2774 2.07129 62.1993 5.08418 62.1928 5.22734V5.56572L20.6435 32.7273C20.8257 32.9876 20.9949 33.2414 21.1446 33.5017C21.9906 34.9696 22.436 36.6341 22.4363 38.3284C22.4366 40.0228 21.9918 41.6874 21.1463 43.1557C20.3008 44.6239 19.0843 45.8443 17.6187 46.6945C16.1532 47.5447 14.49 47.9949 12.7957 48ZM12.7957 29.9747C11.5157 29.98 10.254 30.279 9.10785 30.8487C7.96168 31.4185 6.9616 32.2437 6.18467 33.2609C5.40774 34.2781 4.87469 35.4601 4.62661 36.7158C4.37852 37.9715 4.42201 39.2674 4.75373 40.5037C5.08546 41.7399 5.69656 42.8835 6.53995 43.8463C7.38334 44.8091 8.43651 45.5655 9.6183 46.0571C10.8001 46.5487 12.079 46.7625 13.3564 46.6819C14.6338 46.6013 15.8757 46.2285 16.9864 45.5923C18.0485 44.9872 18.9639 44.1551 19.6672 43.1554C20.3706 42.1557 20.8445 41.013 21.0552 39.809C21.266 38.605 21.2083 37.3692 20.8862 36.1901C20.5642 35.0109 19.9858 33.9174 19.1924 32.9876L18.7238 32.4215L60.9043 4.84992C60.8653 4.15363 60.6375 2.52029 59.4857 1.74592C58.3339 0.971546 56.7917 1.16677 54.6182 2.13636C47.8376 5.14274 27.6128 14.5523 24.3527 16.0685C24.6455 18.1769 25.4264 26.2135 20.7281 28.8164C18.457 30.0723 17.585 30.6124 17.2467 30.8467L16.9278 31.0679L16.5764 30.8922C15.3976 30.2906 14.0931 29.9762 12.7696 29.9747H12.7957Z" fill="#ffffff"/>
<path d="M27.6587 24.3462C27.2288 24.3462 26.8086 24.2187 26.4512 23.9799C26.0937 23.7411 25.8152 23.4016 25.6507 23.0045C25.4862 22.6073 25.4431 22.1703 25.527 21.7487C25.6109 21.3271 25.8179 20.9398 26.1218 20.6359C26.4258 20.3319 26.8131 20.1249 27.2347 20.041C27.6563 19.9572 28.0933 20.0002 28.4904 20.1647C28.8876 20.3292 29.227 20.6078 29.4658 20.9652C29.7047 21.3226 29.8321 21.7428 29.8321 22.1727C29.8304 22.7486 29.6009 23.3004 29.1936 23.7077C28.7864 24.1149 28.2346 24.3444 27.6587 24.3462ZM27.6587 21.3007C27.4862 21.3007 27.3176 21.3519 27.1742 21.4477C27.0308 21.5435 26.9191 21.6797 26.8531 21.839C26.7871 21.9984 26.7698 22.1737 26.8034 22.3428C26.8371 22.512 26.9201 22.6673 27.0421 22.7893C27.164 22.9112 27.3194 22.9943 27.4886 23.0279C27.6577 23.0616 27.833 23.0443 27.9924 22.9783C28.1517 22.9123 28.2879 22.8006 28.3837 22.6572C28.4795 22.5138 28.5307 22.3452 28.5307 22.1727C28.5341 22.056 28.5142 21.9398 28.4719 21.831C28.4296 21.7222 28.366 21.623 28.2847 21.5392C28.2033 21.4555 28.106 21.3889 27.9985 21.3435C27.891 21.298 27.7754 21.2747 27.6587 21.2747V21.3007Z" fill="#ffffff"/>
</svg>
`;

const bigBrainHide = `<svg width="46" height="38" viewBox="0 0 46 38" fill="none" >
<path d="M18.1296 37.2538C17.8075 37.2543 17.4864 37.2188 17.1722 37.148C15.9551 36.8303 14.8861 36.0998 14.148 35.0812C14.1385 35.1596 14.1089 35.2343 14.0621 35.298C14.0154 35.3617 13.953 35.4122 13.8811 35.4448C13.6739 35.5415 8.73029 37.7878 5.232 35.6658C3.2481 34.4644 2.16179 32.1307 2.0099 28.7245C2.00533 28.6955 2.00533 28.666 2.0099 28.637C2.03291 28.4713 2.64971 24.5403 5.66008 22.7405C7.45985 21.6588 9.71073 21.5898 12.3437 22.5334L14.0329 23.095C13.6601 22.0179 13.2827 20.2227 14.0836 18.6899C14.8063 17.309 16.3114 16.4666 18.5531 16.1905C18.6136 16.1829 18.6749 16.1873 18.7336 16.2035C18.7924 16.2196 18.8473 16.2472 18.8954 16.2846C18.9435 16.322 18.9838 16.3685 19.0139 16.4215C19.044 16.4744 19.0634 16.5328 19.0709 16.5932C19.0785 16.6537 19.0741 16.715 19.0579 16.7738C19.0418 16.8325 19.0142 16.8875 18.9768 16.9356C18.9394 16.9837 18.8929 17.0239 18.8399 17.054C18.787 17.0841 18.7286 17.1035 18.6682 17.1111C16.7395 17.3504 15.4737 18.0317 14.8983 19.1272C13.9041 21.0282 15.2389 23.6197 15.2527 23.6473C15.2955 23.7289 15.3128 23.8215 15.3023 23.913C15.2919 24.0045 15.2543 24.0908 15.1943 24.1607C15.1343 24.2306 15.0548 24.2809 14.9659 24.3051C14.877 24.3293 14.7829 24.3262 14.6958 24.2964L12.0445 23.4126C9.67391 22.5656 7.69 22.6071 6.13419 23.5369C3.65316 25.0144 2.99954 28.3332 2.91208 28.7383C3.06398 31.7947 3.99839 33.8614 5.67389 34.8879C8.25617 36.4529 11.934 35.2285 13.0939 34.7728L11.8787 30.759C11.86 30.7013 11.8528 30.6404 11.8576 30.5799C11.8624 30.5194 11.879 30.4604 11.9066 30.4064C11.9342 30.3523 11.9721 30.3042 12.0183 30.2648C12.0644 30.2254 12.1179 30.1954 12.1756 30.1767C12.2334 30.158 12.2942 30.1508 12.3547 30.1556C12.4152 30.1603 12.4742 30.177 12.5283 30.2046C12.5823 30.2321 12.6305 30.2701 12.6699 30.3162C12.7093 30.3624 12.7392 30.4159 12.7579 30.4736C13.9547 33.8936 15.4967 35.8407 17.3333 36.255C19.1699 36.6692 20.9421 35.3344 21.4254 34.9063V4.84866C21.0986 3.00746 20.4403 1.95337 19.4645 1.62655C17.6141 1.05118 14.7326 3.3849 13.7844 4.3055C13.7337 4.3559 13.6719 4.39378 13.604 4.41616C13.5361 4.43853 13.4639 4.44477 13.3931 4.43439C10.6728 4.03393 8.84075 4.36534 8.10427 5.38721C7.09161 6.79573 8.26999 9.16168 8.2838 9.18469C8.3113 9.23879 8.32788 9.29778 8.33258 9.35829C8.33729 9.41879 8.33004 9.47964 8.31123 9.53734C8.29242 9.59504 8.26243 9.64847 8.22297 9.69459C8.18351 9.7407 8.13536 9.77859 8.08126 9.8061C8.02716 9.8336 7.96817 9.85018 7.90767 9.85489C7.84716 9.85959 7.78632 9.85234 7.72862 9.83353C7.67092 9.81472 7.61747 9.78473 7.57136 9.74527C7.52525 9.70582 7.48736 9.65767 7.45985 9.60357C7.40001 9.48389 6.02372 6.70367 7.35859 4.84866C8.3022 3.5414 10.2999 3.08571 13.3011 3.49538C14.0744 2.7681 17.2735 -0.0397339 19.7775 0.733571C21.1078 1.15244 21.9823 2.48732 22.369 4.69216C22.3715 4.71818 22.3715 4.74438 22.369 4.77041V35.0996C22.3693 35.1602 22.3577 35.2203 22.3348 35.2763C22.3119 35.3324 22.2782 35.3834 22.2355 35.4264C22.1619 35.5093 20.4035 37.2538 18.1296 37.2538Z" fill="#ffffff"/>
<path d="M2.62215 27.8405C2.52622 27.8399 2.43287 27.8093 2.35517 27.753C2.26311 27.684 0.150325 26.119 0.00763138 23.5091C-0.0936348 21.6679 0.81316 19.7991 2.7142 17.9855C2.00994 16.9222 0.0628753 13.6218 1.19521 11.1868C1.89948 9.67704 3.61639 8.82088 6.29995 8.64597C6.3874 8.62295 10.6866 8.69199 10.8523 14.5884C10.8523 14.7105 10.8038 14.8276 10.7175 14.9139C10.6312 15.0003 10.5141 15.0487 10.392 15.0487C10.2699 15.0487 10.1529 15.0003 10.0665 14.9139C9.98022 14.8276 9.93171 14.7105 9.93171 14.5884C9.79362 9.6172 6.47026 9.52514 6.33217 9.52514C4.03067 9.68164 2.58072 10.3583 2.03297 11.5367C0.919038 13.9256 3.66242 17.7001 3.69004 17.7415C3.75677 17.8335 3.78712 17.9469 3.77522 18.06C3.76332 18.173 3.71003 18.2776 3.6256 18.3537C1.74758 20.0706 0.836182 21.7783 0.923639 23.417C1.03871 25.585 2.87991 26.9613 2.89832 26.9751C2.94703 27.0111 2.98818 27.0562 3.01941 27.1081C3.05063 27.1599 3.07134 27.2174 3.08032 27.2773C3.08929 27.3372 3.08637 27.3982 3.07173 27.4569C3.05709 27.5157 3.03102 27.5709 2.99499 27.6196C2.95576 27.6842 2.90123 27.7381 2.8362 27.7767C2.77118 27.8152 2.69766 27.8371 2.62215 27.8405Z" fill="#ffffff"/>
<path d="M27.8741 37.6909C25.5957 37.6909 23.8419 35.9464 23.7545 35.8497C23.6711 35.7632 23.6248 35.6476 23.6256 35.5275V5.22591C23.6233 5.19987 23.6233 5.17369 23.6256 5.14766C24.0122 2.94282 24.8868 1.61255 26.2217 1.18907C28.7211 0.397354 31.9248 3.20979 32.6935 3.95088C35.6947 3.54581 37.697 4.00151 38.636 5.33178C39.9755 7.17298 38.5946 9.9624 38.5347 10.0821C38.4748 10.1817 38.3794 10.2549 38.2677 10.2871C38.156 10.3192 38.0363 10.308 37.9326 10.2555C37.8289 10.2031 37.7488 10.1134 37.7086 10.0043C37.6683 9.89532 37.6707 9.7751 37.7154 9.66781C37.7154 9.66781 38.8984 7.26504 37.8903 5.86573C37.1492 4.84386 35.3218 4.51705 32.606 4.91751C32.5346 4.92688 32.462 4.92017 32.3935 4.89787C32.325 4.87557 32.2624 4.83825 32.2102 4.78862C31.262 3.8404 28.3851 1.51588 26.4979 2.10967C25.5266 2.41807 24.8638 3.49057 24.5416 5.33178V35.3848C25.0019 35.8083 26.7418 37.1616 28.629 36.7335C30.5163 36.3054 32.0076 34.3675 33.209 30.9475C33.2502 30.8357 33.3331 30.7443 33.4402 30.6924C33.5474 30.6404 33.6706 30.632 33.7838 30.669C33.897 30.7059 33.9915 30.7853 34.0474 30.8905C34.1033 30.9956 34.1163 31.1184 34.0836 31.2329L32.8684 35.2467C34.033 35.707 37.7154 36.9222 40.2931 35.3618C41.9824 34.3353 42.9168 32.2686 43.0549 29.2168C42.9858 28.8071 42.3276 25.4929 39.8328 24.0108C38.2769 23.0902 36.293 23.0441 33.9317 23.8865L31.2712 24.7703C31.1825 24.7978 31.0876 24.798 30.9989 24.7706C30.9102 24.7433 30.8318 24.6898 30.7741 24.6171C30.7163 24.5444 30.6819 24.456 30.6753 24.3634C30.6688 24.2708 30.6903 24.1784 30.7372 24.0982C30.7372 24.0982 32.0813 21.4699 31.0871 19.5735C30.5117 18.4826 29.2458 17.8059 27.3172 17.562C27.1951 17.5467 27.0841 17.4836 27.0086 17.3865C26.933 17.2893 26.8992 17.1662 26.9144 17.0441C26.9297 16.9221 26.9928 16.811 27.0899 16.7355C27.187 16.66 27.3102 16.6261 27.4323 16.6414C29.6785 16.9222 31.1791 17.7645 31.9018 19.1408C32.7073 20.6736 32.3253 22.4688 31.9524 23.5505L33.6509 22.9843C36.2746 22.0637 38.5255 22.1143 40.3299 23.1914C43.3356 24.9912 43.9524 28.9222 43.9801 29.0879C43.9824 29.117 43.9824 29.1462 43.9801 29.1754C43.819 32.5816 42.7326 34.9153 40.758 36.1167C37.2551 38.2387 32.3114 35.9924 32.1043 35.8957C32.0338 35.8629 31.9728 35.8128 31.9269 35.75C31.881 35.6872 31.8518 35.6138 31.8419 35.5367C31.1004 36.5508 30.0326 37.2789 28.8178 37.5989C28.5075 37.6638 28.1911 37.6946 27.8741 37.6909Z" fill="#ffffff"/>
<path d="M43.3771 28.2778C43.2809 28.2769 43.1874 28.2458 43.1098 28.1889C43.0322 28.1321 42.9743 28.0524 42.9443 27.9609C42.9144 27.8695 42.9138 27.771 42.9427 27.6792C42.9716 27.5874 43.0286 27.507 43.1056 27.4493C43.1056 27.4493 44.9468 26.0684 45.0757 23.8866C45.1631 22.2387 44.2517 20.531 42.3737 18.8233C42.29 18.7466 42.2376 18.6416 42.2265 18.5286C42.2155 18.4156 42.2466 18.3025 42.3139 18.2111C42.3415 18.1742 45.0757 14.3906 43.9709 12.0062C43.4186 10.8278 41.964 10.165 39.6395 9.99929C39.529 9.99929 36.2103 10.0775 36.0676 15.0626C36.0676 15.1847 36.0191 15.3018 35.9328 15.3881C35.8464 15.4744 35.7294 15.5229 35.6073 15.5229C35.4852 15.5229 35.3681 15.4744 35.2818 15.3881C35.1955 15.3018 35.147 15.1847 35.147 15.0626C35.3127 9.17996 39.6119 9.12012 39.6717 9.12012C42.3829 9.29963 44.0998 10.1558 44.8041 11.661C45.9364 14.096 43.9894 17.4009 43.2851 18.4596C45.1861 20.3008 46.0975 22.142 45.9917 23.9832C45.849 26.5931 43.7362 28.1628 43.6441 28.2272C43.5623 28.2706 43.4692 28.2882 43.3771 28.2778Z" fill="#ffffff"/>
</svg>`;

const bigFaceHide = `<svg width="48" height="44" viewBox="0 0 48 44" fill="none" >
<path d="M16.5677 43.5707C13.1159 43.5743 9.74936 42.4985 6.93925 40.494C4.12913 38.4894 2.0161 35.6564 0.895855 32.3915C-0.224391 29.1265 -0.295785 25.593 0.691692 22.2854C1.67917 18.9779 3.6761 16.0618 6.40297 13.9454C7.51206 11.6587 10.5878 4.44384 7.91794 0.916475C7.83621 0.808367 7.79553 0.674738 7.80318 0.539426C7.81083 0.404114 7.86631 0.275919 7.95971 0.177713C8.05311 0.0795063 8.17835 0.0176756 8.31311 0.00324921C8.44787 -0.0111772 8.58337 0.0227391 8.69544 0.0989492C10.3659 1.40744 11.4576 3.31797 11.7369 5.42144C11.724 5.26982 11.7719 5.11929 11.87 5.00296C11.9681 4.88663 12.1084 4.81404 12.26 4.80115C12.4116 4.78827 12.5621 4.83614 12.6785 4.93424C12.7948 5.03234 12.8674 5.17263 12.8803 5.32425C12.8835 5.35657 12.8835 5.38913 12.8803 5.42144C13.2708 7.25807 13.1582 9.16608 12.5544 10.944C14.8464 10.3276 17.244 10.2105 19.5852 10.6006C21.9263 10.9907 24.1564 11.8789 26.1247 13.2051C28.093 14.5314 29.7536 16.2648 30.9942 18.2882C32.2348 20.3116 33.0265 22.5777 33.3158 24.9335C33.6051 27.2892 33.3853 29.6796 32.6711 31.943C31.9569 34.2064 30.7651 36.2901 29.1762 38.0533C27.5873 39.8164 25.6384 41.2178 23.4612 42.1628C21.284 43.1077 18.9293 43.5742 16.5563 43.5307L16.5677 43.5707ZM10.0447 3.552C10.4792 7.67964 8.2438 12.7792 7.37482 14.5686C7.33476 14.6498 7.27599 14.7203 7.20332 14.7744C4.12425 17.1297 2.04413 20.5573 1.37644 24.376C0.708758 28.1947 1.50239 32.1248 3.59958 35.3851C5.69677 38.6455 8.94398 40.9974 12.6957 41.9733C16.4475 42.9492 20.4291 42.4777 23.8492 40.6525C27.2692 38.8272 29.8773 35.782 31.1549 32.122C32.4326 28.462 32.2863 24.4552 30.7452 20.8981C29.204 17.341 26.3809 14.494 22.8369 12.923C19.2928 11.3521 15.2874 11.1721 11.6168 12.419C11.504 12.4567 11.3822 12.4582 11.2684 12.4233C11.1547 12.3885 11.0546 12.319 10.9822 12.2246C10.9133 12.1278 10.8763 12.0119 10.8763 11.893C10.8763 11.7742 10.9133 11.6583 10.9822 11.5615C11.521 10.6975 11.8463 9.71762 11.9313 8.70298C11.5482 9.49764 11.1366 10.2408 10.8565 10.7211C10.782 10.8448 10.6636 10.9357 10.5249 10.9757C10.3862 11.0156 10.2375 11.0016 10.1087 10.9365C9.97984 10.8714 9.88043 10.7599 9.83039 10.6245C9.78034 10.4891 9.78334 10.3398 9.83883 10.2065C11.0794 7.28517 10.7421 5.07842 10.0447 3.56343V3.552Z" fill="#ffffff"/>
<path d="M11.1767 26.5569C10.9594 26.558 10.7466 26.4946 10.5654 26.3747C10.3841 26.2547 10.2425 26.0837 10.1586 25.8832C10.0746 25.6828 10.0521 25.4619 10.0938 25.2486C10.1355 25.0353 10.2395 24.8392 10.3928 24.6851C10.5461 24.531 10.7417 24.4259 10.9548 24.3831C11.1679 24.3403 11.3888 24.3617 11.5897 24.4446C11.7907 24.5275 11.9624 24.6682 12.0833 24.8488C12.2042 25.0294 12.2687 25.2419 12.2687 25.4592C12.2687 25.7493 12.1538 26.0277 11.9492 26.2334C11.7446 26.439 11.4669 26.5554 11.1767 26.5569ZM11.1767 25.4135C11.164 25.4134 11.1517 25.418 11.1422 25.4265C11.1327 25.4349 11.1267 25.4466 11.1253 25.4592C11.1253 25.5164 11.2225 25.5164 11.2225 25.4592C11.2213 25.4475 11.216 25.4366 11.2077 25.4283C11.1994 25.4199 11.1885 25.4147 11.1767 25.4135Z" fill="#ffffff"/>
<path d="M20.0836 22.2237C19.8663 22.2249 19.6535 22.1615 19.4722 22.0415C19.291 21.9216 19.1494 21.7506 19.0654 21.5501C18.9815 21.3496 18.9589 21.1288 19.0006 20.9155C19.0423 20.7022 19.1464 20.5061 19.2997 20.352C19.453 20.1979 19.6485 20.0928 19.8616 20.05C20.0747 20.0071 20.2957 20.0285 20.4966 20.1114C20.6975 20.1944 20.8693 20.335 20.9902 20.5157C21.111 20.6963 21.1755 20.9087 21.1755 21.1261C21.1755 21.4162 21.0607 21.6945 20.8561 21.9002C20.6514 22.1059 20.3737 22.2222 20.0836 22.2237ZM20.0836 21.0804C20.0771 21.0795 20.0706 21.0801 20.0644 21.082C20.0581 21.084 20.0524 21.0872 20.0475 21.0915C20.0426 21.0959 20.0387 21.1012 20.0361 21.1072C20.0334 21.1131 20.0321 21.1196 20.0321 21.1261C20.0321 21.1775 20.1293 21.1775 20.1293 21.1261C20.1293 21.114 20.1245 21.1023 20.1159 21.0937C20.1074 21.0852 20.0957 21.0804 20.0836 21.0804Z" fill="#ffffff"/>
<path d="M18.8946 35.1726C17.9276 35.1761 16.965 35.0413 16.0361 34.7724C15.9644 34.7495 15.8979 34.7127 15.8405 34.6641C15.783 34.6155 15.7356 34.5561 15.7011 34.4892C15.6666 34.4223 15.6456 34.3493 15.6393 34.2743C15.633 34.1993 15.6416 34.1238 15.6645 34.0521C15.6874 33.9804 15.7242 33.9139 15.7728 33.8564C15.8214 33.7989 15.8808 33.7516 15.9477 33.7171C16.0146 33.6826 16.0876 33.6616 16.1626 33.6553C16.2376 33.649 16.3131 33.6576 16.3848 33.6805C16.4191 33.6805 19.6607 34.6981 22.1475 33.2231C23.5596 32.3884 24.4801 30.8906 24.8917 28.781C24.9059 28.706 24.9349 28.6344 24.9768 28.5705C25.0187 28.5066 25.0728 28.4516 25.1359 28.4086C25.1991 28.3656 25.2701 28.3355 25.3449 28.3199C25.4198 28.3044 25.4969 28.3037 25.572 28.318C25.6471 28.3322 25.7186 28.3611 25.7825 28.4031C25.8464 28.445 25.9014 28.499 25.9444 28.5622C25.9874 28.6254 26.0176 28.6964 26.0331 28.7712C26.0487 28.8461 26.0493 28.9232 26.0351 28.9983C25.5548 31.4509 24.4457 33.2003 22.7364 34.2122C21.5651 34.8712 20.2382 35.203 18.8946 35.1726Z" fill="#ffffff"/>
<path d="M38.5894 32.131C38.498 32.1314 38.4078 32.1098 38.3264 32.0681C38.2595 32.0337 38.2 31.9864 38.1514 31.9289C38.1028 31.8715 38.0661 31.805 38.0432 31.7333C38.0204 31.6616 38.0119 31.586 38.0183 31.5111C38.0247 31.4361 38.0459 31.3631 38.0806 31.2963C38.4927 30.5182 38.6715 29.6377 38.5954 28.7605C38.5194 27.8833 38.1917 27.0467 37.6518 26.3511C37.5532 26.2351 37.5048 26.0848 37.5171 25.9331C37.5295 25.7813 37.6015 25.6407 37.7175 25.5422C37.8335 25.4436 37.9839 25.3952 38.1356 25.4075C38.2873 25.4199 38.428 25.4919 38.5265 25.6079C39.2137 26.477 39.6336 27.527 39.735 28.6302C39.8365 29.7335 39.6153 30.8424 39.0982 31.8223C39.0499 31.9155 38.9769 31.9936 38.8871 32.0481C38.7974 32.1025 38.6944 32.1312 38.5894 32.131Z" fill="#ffffff"/>
<path d="M42.6368 32.9429C42.5725 32.9422 42.5087 32.9306 42.4482 32.9086C42.305 32.8593 42.1872 32.7551 42.1207 32.619C42.0543 32.4828 42.0446 32.3259 42.0938 32.1826C42.5319 30.9018 42.7106 29.5465 42.6193 28.1958C42.528 26.8452 42.1686 25.5263 41.5621 24.3161C41.5038 24.1871 41.4954 24.0411 41.5386 23.9063C41.5817 23.7715 41.6734 23.6575 41.7957 23.5864C41.9181 23.5152 42.0624 23.492 42.2009 23.5212C42.3394 23.5504 42.4622 23.6299 42.5454 23.7444C43.2467 25.094 43.6643 26.5728 43.7725 28.0899C43.8806 29.607 43.677 31.1302 43.1742 32.5656C43.1343 32.6761 43.0613 32.7716 42.9651 32.8391C42.869 32.9067 42.7543 32.9429 42.6368 32.9429Z" fill="#ffffff"/>
<path d="M46.5702 34.4635C46.5039 34.4635 46.4381 34.4519 46.3758 34.4292C46.3051 34.4032 46.2402 34.3634 46.185 34.3121C46.1297 34.2609 46.0851 34.1992 46.0537 34.1307C46.0224 34.0621 46.0049 33.9881 46.0023 33.9127C45.9997 33.8374 46.012 33.7623 46.0385 33.6918C46.6752 31.9267 46.9335 30.0475 46.7966 28.1761C46.6597 26.3047 46.1307 24.4831 45.2439 22.8295C45.1635 22.7006 45.1376 22.5451 45.1719 22.3972C45.2062 22.2492 45.2979 22.1209 45.4268 22.0406C45.5556 21.9602 45.7112 21.9344 45.8591 21.9687C46.0071 22.003 46.1353 22.0946 46.2157 22.2235C47.2109 24.0238 47.8058 26.0176 47.9597 28.0689C48.1136 30.1202 47.823 32.1805 47.1076 34.1091C47.0639 34.2153 46.9894 34.3059 46.8935 34.3692C46.7977 34.4324 46.685 34.4653 46.5702 34.4635Z" fill="#ffffff"/>
</svg>`;

const bigDuofaceHide = `<svg width="54" height="42" viewBox="0 0 54 42" fill="none" >
<path d="M12.8663 41.4224C10.1871 41.4221 7.5749 40.5855 5.39399 39.0294C3.21307 37.4733 1.57222 35.2753 0.70038 32.742C-0.171462 30.2087 -0.230814 27.4664 0.530563 24.8977C1.29194 22.329 2.83608 20.062 4.94761 18.413C6.57659 15.0193 7.7248 10.6583 6.11278 8.53161C6.03284 8.42407 5.99366 8.29165 6.00224 8.15792C6.01083 8.0242 6.06663 7.89787 6.15967 7.80144C6.2527 7.70501 6.37695 7.64473 6.51028 7.63136C6.64361 7.61799 6.77735 7.65239 6.88768 7.72843C8.10339 8.67828 8.93338 10.0368 9.22369 11.552C9.28646 11.4951 9.36219 11.4543 9.44429 11.4332C9.58676 11.3946 9.73865 11.4133 9.86758 11.4851C9.99651 11.557 10.0922 11.6764 10.1343 11.8179C10.1375 11.8442 10.1375 11.8708 10.1343 11.8971C10.4244 13.2605 10.364 14.6753 9.95899 16.0091C11.7264 15.5987 13.5607 15.5664 15.3414 15.9146C17.1221 16.2628 18.8092 16.9834 20.2919 18.0293C21.7745 19.0752 23.0193 20.4228 23.9447 21.9835C24.8701 23.5443 25.455 25.283 25.6613 27.0857C25.8675 28.8884 25.6903 30.7144 25.1414 32.4438C24.5924 34.1732 23.6841 35.767 22.4759 37.1208C21.2677 38.4745 19.7871 39.5576 18.131 40.2989C16.4749 41.0402 14.6807 41.4231 12.8663 41.4224ZM8.02458 11.3823C8.02458 14.2104 6.66708 17.4345 5.89218 19.0239C5.85595 19.1047 5.79946 19.1749 5.72817 19.2275C3.39003 21.0122 1.80851 23.6109 1.29759 26.5077C0.786665 29.4044 1.38368 32.3874 2.97015 34.8643C4.55661 37.3413 7.0165 39.1311 9.86143 39.8784C12.7064 40.6258 15.7283 40.276 18.3273 38.8985C20.9263 37.521 22.9123 35.2166 23.891 32.4428C24.8697 29.6689 24.7695 26.6284 23.6104 23.925C22.4512 21.2216 20.3179 19.0528 17.6339 17.8494C14.9499 16.646 11.9115 16.4959 9.12189 17.4288C9.00993 17.4678 8.88856 17.4705 8.77493 17.4368C8.66131 17.403 8.56119 17.3344 8.48867 17.2406C8.41616 17.1468 8.37492 17.0326 8.37081 16.9142C8.3667 16.7957 8.3999 16.679 8.46575 16.5804C8.73238 16.1625 8.92381 15.7011 9.03137 15.2172C8.86734 15.5227 8.70899 15.7829 8.56759 16.043C8.49396 16.1654 8.37676 16.2554 8.23952 16.2949C8.10229 16.3345 7.95515 16.3206 7.8277 16.2562C7.70025 16.1917 7.60189 16.0815 7.55238 15.9475C7.50287 15.8136 7.50587 15.6658 7.56077 15.534C8.18957 14.239 8.35336 12.7669 8.02458 11.3654V11.3823Z" fill="#ffffff"/>
<path d="M8.70895 28.3001C8.5179 28.299 8.33143 28.2413 8.17312 28.1344C8.01481 28.0274 7.89174 27.876 7.8194 27.6992C7.74706 27.5223 7.72869 27.328 7.76665 27.1408C7.80461 26.9535 7.89719 26.7817 8.03268 26.647C8.16817 26.5123 8.34052 26.4208 8.52798 26.3839C8.71544 26.347 8.9096 26.3665 9.086 26.4399C9.26241 26.5133 9.41317 26.6372 9.5192 26.7962C9.62523 26.9551 9.68179 27.1419 9.6818 27.3329C9.6803 27.59 9.57717 27.836 9.39488 28.0172C9.21259 28.1984 8.96599 28.3001 8.70895 28.3001ZM8.70895 27.1689C8.67651 27.1689 8.64478 27.1785 8.61781 27.1965C8.59083 27.2146 8.56981 27.2402 8.55739 27.2701C8.54498 27.3001 8.54174 27.3331 8.54807 27.3649C8.5544 27.3967 8.57001 27.426 8.59295 27.4489C8.61589 27.4718 8.64513 27.4875 8.67694 27.4938C8.70876 27.5001 8.74174 27.4969 8.77171 27.4845C8.80168 27.472 8.82729 27.451 8.84531 27.424C8.86334 27.3971 8.87296 27.3654 8.87296 27.3329C8.87296 27.2894 8.85567 27.2477 8.82491 27.2169C8.79415 27.1862 8.75245 27.1689 8.70895 27.1689Z" fill="#ffffff"/>
<path d="M15.57 24.9628C15.3774 24.9628 15.189 24.9056 15.0289 24.7985C14.8688 24.6913 14.7442 24.539 14.6707 24.3609C14.5972 24.1828 14.5783 23.9869 14.6163 23.7981C14.6543 23.6092 14.7475 23.4359 14.8841 23.3C15.0208 23.1642 15.1946 23.072 15.3837 23.0351C15.5728 22.9982 15.7686 23.0183 15.9463 23.0928C16.1239 23.1673 16.2755 23.2929 16.3817 23.4536C16.4879 23.6143 16.544 23.803 16.5429 23.9956C16.5414 24.2527 16.4382 24.4987 16.2559 24.6799C16.0736 24.8611 15.8271 24.9628 15.57 24.9628ZM15.57 23.8316C15.5325 23.8387 15.4985 23.8586 15.4741 23.8881C15.4497 23.9175 15.4363 23.9545 15.4363 23.9928C15.4363 24.031 15.4497 24.0681 15.4741 24.0975C15.4985 24.1269 15.5325 24.1469 15.57 24.154C15.5937 24.1584 15.6181 24.1576 15.6414 24.1516C15.6648 24.1455 15.6865 24.1344 15.7051 24.119C15.7236 24.1037 15.7385 24.0844 15.7488 24.0625C15.759 24.0407 15.7644 24.0169 15.7644 23.9928C15.7644 23.9687 15.759 23.9449 15.7488 23.923C15.7385 23.9012 15.7236 23.8819 15.7051 23.8665C15.6865 23.8511 15.6648 23.84 15.6414 23.834C15.6181 23.8279 15.5937 23.8271 15.57 23.8316Z" fill="#ffffff"/>
<path d="M14.6593 34.9405C13.9095 34.9446 13.1629 34.8418 12.4421 34.6351C12.2988 34.5893 12.1796 34.4885 12.1107 34.3549C12.0417 34.2212 12.0287 34.0656 12.0744 33.9224C12.1202 33.7791 12.221 33.6599 12.3546 33.5909C12.4883 33.522 12.6438 33.509 12.7871 33.5547C12.7871 33.5547 15.2589 34.3183 17.1254 33.2153C18.1775 32.5875 18.8675 31.4676 19.1786 29.8782C19.2071 29.7282 19.294 29.5956 19.4203 29.5097C19.5465 29.4238 19.7017 29.3915 19.8517 29.42C20.0017 29.4485 20.1343 29.5355 20.2202 29.6617C20.3061 29.7879 20.3384 29.9431 20.3098 30.0931C19.9309 32.0162 19.0598 33.3963 17.708 34.1882C16.7791 34.7117 15.7251 34.9718 14.6593 34.9405Z" fill="#ffffff"/>
<path d="M41.1134 34.9461C37.8856 34.9385 34.7784 33.7187 32.4076 31.5283C30.0368 29.338 28.5752 26.3369 28.3126 23.1198C28.0501 19.9028 29.0056 16.7044 30.9899 14.1586C32.9742 11.6128 35.8424 9.90525 39.0262 9.37439C39.9885 9.21537 40.9658 9.16603 41.9392 9.22733C41.3292 7.9754 41.0396 6.59158 41.0964 5.20011C41.0964 5.17183 41.0964 5.14355 41.0964 5.11527C41.1162 4.97014 41.1915 4.83834 41.3065 4.74762C41.4215 4.65689 41.5672 4.61431 41.7129 4.62883C41.7994 4.63434 41.883 4.66158 41.9561 4.70802C42.0032 3.16492 42.6058 1.69069 43.653 0.556368C43.7497 0.464111 43.876 0.409086 44.0094 0.401048C44.1428 0.393011 44.2748 0.432482 44.3819 0.512462C44.489 0.592441 44.5643 0.707761 44.5944 0.837972C44.6246 0.968184 44.6077 1.10487 44.5467 1.2238C43.3023 3.58809 45.1462 7.68884 47.3069 10.7828C49.6566 12.0687 51.5466 14.0555 52.7137 16.4664C53.8807 18.8773 54.2668 21.5922 53.818 24.2328C53.3691 26.8735 52.1078 29.3084 50.2097 31.1983C48.3116 33.0882 45.8713 34.339 43.2288 34.7764C42.5293 34.8892 41.8219 34.946 41.1134 34.9461ZM39.2129 10.4887C36.4632 10.9396 33.9631 12.3527 32.1587 14.4759C30.3543 16.5991 29.3629 19.2943 29.3613 22.0807C29.3597 24.8671 30.3481 27.5634 32.1502 29.6887C33.9522 31.8139 36.4506 33.2298 39.1998 33.6838C41.949 34.1379 44.77 33.6004 47.1596 32.1674C49.5493 30.7344 51.3522 28.499 52.2466 25.8601C53.141 23.2211 53.0687 20.3503 52.0427 17.7596C51.0168 15.169 49.1038 13.0271 46.6451 11.7161C46.5662 11.6741 46.4984 11.614 46.4472 11.5407C45.429 10.0984 43.5738 7.16847 43.1044 4.34602C43.0067 5.77686 43.4063 7.19751 44.2356 8.36758C44.3139 8.48886 44.3429 8.63551 44.3166 8.77748C44.2903 8.91945 44.2108 9.04599 44.0942 9.13117C43.9774 9.21781 43.8318 9.25616 43.6875 9.23826C43.5432 9.22035 43.4113 9.14757 43.3193 9.03502C43.144 8.82008 42.9403 8.57121 42.7537 8.29971C42.9447 8.75665 43.2125 9.17752 43.5455 9.54407C43.6267 9.63069 43.6786 9.74067 43.6939 9.85843C43.7091 9.9762 43.6869 10.0958 43.6304 10.2002C43.5758 10.2994 43.4927 10.3798 43.3919 10.4313C43.291 10.4827 43.1771 10.5027 43.0648 10.4887C41.7988 10.2793 40.5071 10.2793 39.2412 10.4887H39.2129Z" fill="#ffffff"/>
<path d="M45.0219 21.1845C44.8189 21.1858 44.6208 21.1224 44.4562 21.0035C44.3526 20.9289 44.2648 20.8345 44.1978 20.7258C44.1308 20.6171 44.086 20.4962 44.066 20.37C44.0444 20.2454 44.0478 20.1177 44.076 19.9944C44.1042 19.8711 44.1565 19.7546 44.23 19.6517C44.3225 19.5207 44.446 19.4145 44.5895 19.3428C44.7329 19.271 44.8919 19.2358 45.0522 19.2404C45.2126 19.2449 45.3693 19.289 45.5085 19.3688C45.6476 19.4485 45.7649 19.5615 45.8499 19.6975C45.9349 19.8336 45.9849 19.9885 45.9955 20.1486C46.0061 20.3086 45.9769 20.4688 45.9106 20.6149C45.8444 20.7609 45.743 20.8883 45.6155 20.9858C45.4881 21.0832 45.3386 21.1476 45.1802 21.1732L45.0219 21.1845ZM45.0219 20.0533H44.9936C44.9619 20.0589 44.9326 20.0737 44.9093 20.0959C44.886 20.118 44.8697 20.1466 44.8624 20.1779C44.8552 20.2093 44.8573 20.242 44.8686 20.2722C44.8798 20.3023 44.8997 20.3285 44.9257 20.3474C44.9626 20.3712 45.0067 20.3812 45.0502 20.3757C45.0708 20.3717 45.0904 20.3636 45.1079 20.352C45.1254 20.3403 45.1404 20.3253 45.152 20.3078C45.1658 20.2694 45.1658 20.2274 45.152 20.189C45.1494 20.1672 45.142 20.1462 45.1302 20.1276C45.1185 20.109 45.1027 20.0933 45.0841 20.0816C45.0673 20.0684 45.0481 20.0588 45.0275 20.0533H45.0219Z" fill="#ffffff"/>
<path d="M37.714 19.0071C37.4842 19.0062 37.2621 18.9239 37.0871 18.7748C36.9121 18.6257 36.7956 18.4194 36.7581 18.1926C36.7361 18.0676 36.7398 17.9395 36.769 17.816C36.7981 17.6924 36.8522 17.5762 36.9278 17.4743C37.0006 17.3695 37.0936 17.2805 37.2015 17.2125C37.3093 17.1445 37.4298 17.0988 37.5557 17.0783C37.8039 17.0496 38.0536 17.1175 38.2531 17.2679C38.4526 17.4183 38.5866 17.6397 38.6273 17.8862C38.668 18.1327 38.6124 18.3854 38.4718 18.592C38.3313 18.7986 38.1167 18.9432 37.8724 18.9958L37.714 19.0071ZM37.714 17.8759C37.6931 17.8793 37.673 17.8868 37.6551 17.8981C37.6371 17.9094 37.6216 17.9242 37.6095 17.9416C37.5973 17.9591 37.5888 17.9787 37.5844 17.9995C37.5801 18.0203 37.5799 18.0417 37.584 18.0625C37.5867 18.084 37.5937 18.1046 37.6047 18.1233C37.6157 18.1419 37.6304 18.158 37.6479 18.1708C37.6654 18.1835 37.6853 18.1925 37.7064 18.1972C37.7275 18.2019 37.7494 18.2023 37.7706 18.1983C37.8122 18.19 37.849 18.166 37.8733 18.1312C37.8975 18.0964 37.9074 18.0535 37.9007 18.0116C37.898 17.9902 37.8909 17.9695 37.8799 17.9509C37.8689 17.9323 37.8542 17.9161 37.8367 17.9034C37.8193 17.8907 37.7993 17.8817 37.7782 17.8769C37.7571 17.8722 37.7353 17.8718 37.714 17.8759Z" fill="#ffffff"/>
<path d="M39.2637 28.7808C38.5916 28.7858 37.9244 28.6669 37.2954 28.4301C35.8361 27.8645 34.7501 26.6427 34.0657 24.8101C34.0394 24.7403 34.0273 24.666 34.0299 24.5915C34.0325 24.517 34.0498 24.4437 34.0808 24.3759C34.1118 24.3081 34.1559 24.247 34.2106 24.1963C34.2653 24.1456 34.3295 24.1063 34.3994 24.0805C34.5397 24.0292 34.6946 24.0356 34.8302 24.0981C34.9658 24.1606 35.0712 24.2742 35.1234 24.4142C35.689 25.93 36.5544 26.9255 37.697 27.3724C39.7163 28.1586 42.007 27.016 42.0296 27.0047C42.096 26.9706 42.1686 26.95 42.243 26.9441C42.3174 26.9381 42.3923 26.947 42.4633 26.9701C42.5343 26.9932 42.6 27.0302 42.6566 27.0789C42.7132 27.1275 42.7596 27.1869 42.7932 27.2536C42.8603 27.3872 42.8718 27.5419 42.8252 27.6839C42.7785 27.8259 42.6775 27.9437 42.5443 28.0115C41.5186 28.5003 40.3998 28.7627 39.2637 28.7808Z" fill="#ffffff"/>
</svg>`;

const bigBrushHide = `<svg width="41" height="48" viewBox="0 0 41 48" fill="none" >
<path d="M15.303 30.991C15.068 30.9925 14.8405 30.908 14.6634 30.7535L10.5151 27.2128C10.3222 27.0435 10.2028 26.8057 10.1823 26.5498C10.1619 26.2939 10.2419 26.0401 10.4055 25.8422L13.005 22.795C13.175 22.6031 13.4127 22.4844 13.6682 22.464C13.9238 22.4435 14.1773 22.5229 14.3756 22.6854L18.5239 26.226C18.7179 26.3947 18.838 26.6327 18.8585 26.8889C18.879 27.1451 18.7982 27.3992 18.6335 27.5966L16.034 30.6438C15.9501 30.7423 15.8476 30.8233 15.7324 30.8821C15.6171 30.9409 15.4914 30.9764 15.3624 30.9865L15.303 30.991ZM13.7543 23.3432C13.7437 23.3436 13.7333 23.3462 13.7239 23.3509C13.7144 23.3556 13.7061 23.3624 13.6995 23.3706L11.0999 26.4179C11.088 26.4319 11.0815 26.4497 11.0815 26.4681C11.0815 26.4865 11.088 26.5044 11.0999 26.5184L15.2482 30.059C15.2646 30.064 15.2821 30.064 15.2985 30.059C15.3173 30.0545 15.3347 30.0451 15.3487 30.0316L17.9482 26.9844C17.9551 26.978 17.9607 26.9702 17.9644 26.9615C17.9682 26.9529 17.9702 26.9436 17.9702 26.9341C17.9702 26.9247 17.9682 26.9154 17.9644 26.9067C17.9607 26.8981 17.9551 26.8903 17.9482 26.8839L13.8045 23.3752C13.7991 23.3664 13.7918 23.359 13.7831 23.3535C13.7744 23.3479 13.7645 23.3444 13.7543 23.3432Z" fill="#ffffff"/>
<path d="M20.5158 27.1673C20.2133 27.1667 19.9224 27.0506 19.7026 26.8429L14.4441 21.8997C14.2153 21.683 14.0815 21.3845 14.0721 21.0695C14.0626 20.7544 14.1783 20.4485 14.3939 20.2185L33.0748 0.372597C33.2915 0.14372 33.59 0.00995008 33.905 0.000532943C34.2201 -0.0088842 34.526 0.106818 34.756 0.322343L40.0099 5.27011C40.1248 5.37655 40.2172 5.505 40.2816 5.64783C40.3459 5.79066 40.3809 5.94497 40.3845 6.10159C40.3891 6.25762 40.3629 6.41304 40.3072 6.55888C40.2515 6.70472 40.1676 6.8381 40.0601 6.95134L21.3746 26.7927C21.2637 26.9093 21.1306 27.0025 20.9831 27.0668C20.8356 27.1311 20.6767 27.1653 20.5158 27.1673ZM33.9428 0.911689C33.867 0.913011 33.7947 0.944205 33.7418 0.998492L15.0609 20.8444C15.0348 20.8695 15.014 20.8997 14.9998 20.933C14.9856 20.9664 14.9783 21.0023 14.9783 21.0385C14.9783 21.0748 14.9856 21.1107 14.9998 21.144C15.014 21.1774 15.0348 21.2076 15.0609 21.2327L20.3147 26.1805C20.3667 26.231 20.4364 26.2593 20.5089 26.2593C20.5814 26.2593 20.6511 26.231 20.7031 26.1805L39.384 6.33916C39.4089 6.3131 39.4282 6.28225 39.4408 6.24847C39.4533 6.21469 39.4589 6.1787 39.4571 6.14271C39.4574 6.10635 39.4497 6.07036 39.4347 6.03723C39.4198 6.00411 39.3978 5.97463 39.3703 5.95083L34.1301 0.989355C34.0799 0.940475 34.0129 0.912683 33.9428 0.911689Z" fill="#ffffff"/>
<path d="M11.0724 37.8989C10.0388 37.8795 9.02078 37.6429 8.08453 37.2045L8.03428 37.1771C6.20685 35.9664 5.04187 37.072 4.99162 37.1223L4.85911 37.2502H4.67181C4.35306 37.2785 4.03225 37.2274 3.73808 37.1014C3.4439 36.9754 3.18552 36.7786 2.98601 36.5284C2.40123 35.7197 2.74845 34.6004 2.78956 34.4771L2.82612 34.372L2.90378 34.2989C5.29771 31.905 9.08506 34.1344 9.24496 34.2304C10.8485 35.2994 11.9541 34.5867 12.2374 34.3583C12.5206 33.5862 12.9363 33.1339 13.48 32.9877C13.7791 32.9469 14.0835 32.9773 14.3686 33.0765C14.6536 33.1758 14.9111 33.341 15.1201 33.5588L15.1978 33.6364L15.2298 33.737C15.4209 34.1977 15.4695 34.7051 15.3694 35.1937C15.2692 35.6824 15.0248 36.1297 14.6679 36.4781C14.3493 36.7888 13.9718 37.0326 13.5577 37.1954C12.816 37.6682 11.9518 37.9129 11.0724 37.8989ZM8.51397 36.3959C8.77438 36.5192 11.2551 37.634 13.0825 36.3959L13.1876 36.3456C13.4119 36.2807 13.621 36.1719 13.8027 36.0253C13.9845 35.8788 14.1353 35.6976 14.2462 35.4922C14.3572 35.2868 14.4262 35.0614 14.4492 34.829C14.4722 34.5967 14.4487 34.3621 14.38 34.139C14.2851 34.0508 14.1737 33.9824 14.0521 33.9377C13.9306 33.893 13.8013 33.8729 13.6719 33.8786C13.4343 33.938 13.2151 34.2441 13.046 34.7512L13.0095 34.8563L12.9318 34.9294C12.3425 35.5233 10.7023 36.2999 8.73786 34.9887C8.73786 34.9887 5.51243 33.0974 3.6119 34.8517C3.49478 35.2274 3.52922 35.634 3.70785 35.9847C3.80516 36.0933 3.9252 36.179 4.05945 36.2359C4.19369 36.2927 4.33884 36.3193 4.48451 36.3136C5.19264 35.7791 6.71395 35.2126 8.51397 36.3959Z" fill="#ffffff"/>
<path d="M36.7067 48H2.7074C2.3045 48.0015 1.91157 47.8749 1.58533 47.6384C1.2591 47.402 1.01643 47.068 0.89238 46.6847C0.768332 46.3013 0.769296 45.8885 0.895169 45.5058C1.02104 45.123 1.26531 44.7902 1.59267 44.5553V40.238C1.59267 39.814 1.76112 39.4072 2.06099 39.1074C2.36086 38.8075 2.76759 38.639 3.19167 38.639C3.61575 38.639 4.02245 38.8075 4.32232 39.1074C4.6222 39.4072 4.79067 39.814 4.79067 40.238V44.1944H5.43483V40.238C5.43483 39.814 5.6033 39.4072 5.90317 39.1074C6.20304 38.8075 6.60975 38.639 7.03383 38.639C7.45791 38.639 7.86464 38.8075 8.16451 39.1074C8.46438 39.4072 8.63283 39.814 8.63283 40.238V44.1944H9.14908V40.238C9.14908 39.814 9.31756 39.4072 9.61743 39.1074C9.9173 38.8075 10.324 38.639 10.7481 38.639C11.1722 38.639 11.5789 38.8075 11.8787 39.1074C12.1786 39.4072 12.3471 39.814 12.3471 40.238V44.1944H12.5344V40.238C12.5344 39.814 12.7029 39.4072 13.0027 39.1074C13.3026 38.8075 13.7093 38.639 14.1334 38.639C14.5575 38.639 14.9642 38.8075 15.2641 39.1074C15.5639 39.4072 15.7324 39.814 15.7324 40.238V44.1944H36.7479C37.2364 44.2184 37.697 44.4293 38.0343 44.7835C38.3716 45.1377 38.5597 45.6081 38.5597 46.0972C38.5597 46.5864 38.3716 47.0567 38.0343 47.411C37.697 47.7652 37.2364 47.9761 36.7479 48H36.7067ZM3.18252 39.5573C3.00278 39.5585 2.83081 39.6308 2.70414 39.7583C2.57747 39.8858 2.50638 40.0583 2.50638 40.238V44.7244V45.035L2.23682 45.2132C2.03875 45.315 1.88074 45.4805 1.78822 45.6831C1.69571 45.8857 1.67408 46.1135 1.72685 46.3299C1.77962 46.5462 1.90372 46.7385 2.07911 46.8758C2.25451 47.013 2.47098 47.0872 2.69368 47.0863H36.693C36.9437 47.0693 37.1786 46.9577 37.3502 46.774C37.5217 46.5904 37.6172 46.3485 37.6172 46.0972C37.6172 45.8459 37.5217 45.604 37.3502 45.4204C37.1786 45.2368 36.9437 45.1252 36.693 45.1081H14.7639V40.238C14.7639 40.0563 14.6917 39.882 14.5631 39.7535C14.4346 39.625 14.2603 39.5528 14.0786 39.5528C13.8968 39.5528 13.7225 39.625 13.594 39.7535C13.4655 39.882 13.3933 40.0563 13.3933 40.238V45.1081H11.3785V40.238C11.3785 40.0563 11.3064 39.882 11.1778 39.7535C11.0493 39.625 10.875 39.5528 10.6933 39.5528C10.5115 39.5528 10.3372 39.625 10.2087 39.7535C10.0802 39.882 10.008 40.0563 10.008 40.238V45.1081H7.66429V40.238C7.66429 40.0563 7.5921 39.882 7.46358 39.7535C7.33507 39.625 7.16076 39.5528 6.97901 39.5528C6.79726 39.5528 6.62295 39.625 6.49443 39.7535C6.36592 39.882 6.29372 40.0563 6.29372 40.238V45.1081H3.82214V40.238C3.82245 40.0644 3.75641 39.8972 3.63751 39.7707C3.51862 39.6441 3.35584 39.5678 3.18252 39.5573Z" fill="#ffffff"/>
</svg>`;

const checkBlue = `<svg width="10" height="8" viewBox="0 0 10 8" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.58484 0.249869L3.32991 5.85143L1.41516 3.81037C1.0875 3.47304 0.566683 3.47786 0.244579 3.82121C-0.0775257 4.16456 -0.0820515 4.71974 0.234407 5.06901L2.73954 7.73938C3.06562 8.08687 3.5942 8.08687 3.92029 7.73938L9.76559 1.50851C10.0821 1.15924 10.0775 0.604063 9.75542 0.260712C9.43332 -0.0826396 8.9125 -0.0874639 8.58484 0.249869Z" fill="#e9636e"/>
</svg>
`;

const checkGreen = `<svg width="10" height="8" viewBox="0 0 10 8" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.58484 0.249869L3.32991 5.85143L1.41516 3.81037C1.0875 3.47304 0.566683 3.47786 0.244579 3.82121C-0.0775257 4.16456 -0.0820515 4.71974 0.234407 5.06901L2.73954 7.73938C3.06562 8.08687 3.5942 8.08687 3.92029 7.73938L9.76559 1.50851C10.0821 1.15924 10.0775 0.604063 9.75542 0.260712C9.43332 -0.0826396 8.9125 -0.0874639 8.58484 0.249869Z" fill="#00C442"/>
</svg>
`;

const xHardred = `<svg width="8" height="8" viewBox="0 0 8 8" fill="none" >
<path d="M6.58923 1.39966L1.40869 6.5802" stroke="#FF6188" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.59087 6.58316L1.40601 1.39722" stroke="#FF6188" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const layer = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" >
<path d="M22.503 8.36911C22.5028 8.19064 22.4549 8.01547 22.3641 7.86178C22.2734 7.7081 22.1432 7.58149 21.987 7.49511L12.965 2.49511C12.8168 2.41344 12.6502 2.37061 12.481 2.37061C12.3117 2.37061 12.1452 2.41344 11.997 2.49511L3.019 7.45511C2.86303 7.54147 2.73299 7.66796 2.64234 7.82148C2.55169 7.97499 2.50373 8.14995 2.50342 8.32823C2.50311 8.50651 2.55047 8.68163 2.6406 8.83545C2.73072 8.98928 2.86033 9.11621 3.016 9.20311L12.038 14.2431C12.1865 14.3266 12.354 14.3705 12.5244 14.3707C12.6947 14.3708 12.8623 14.3273 13.011 14.2441L21.989 9.24411C22.1449 9.15739 22.2749 9.03051 22.3652 8.87665C22.4556 8.72279 22.5032 8.54755 22.503 8.36911V8.36911ZM12.526 12.2241L5.56299 8.33511L12.48 4.51311L19.444 8.37211L12.526 12.2241V12.2241Z" fill="#e9636e"/>
<path d="M21.0181 11.4961L12.5031 16.2261L3.98809 11.4961L3.01709 13.2441L12.0171 18.2441C12.1656 18.3266 12.3327 18.3699 12.5026 18.3699C12.6725 18.3699 12.8396 18.3266 12.9881 18.2441L21.9881 13.2441L21.0181 11.4961Z" fill="#e9636e"/>
<path d="M21.0181 15.4961L12.5031 20.2261L3.98809 15.4961L3.01709 17.2441L12.0171 22.2441C12.1656 22.3266 12.3327 22.3699 12.5026 22.3699C12.6725 22.3699 12.8396 22.3266 12.9881 22.2441L21.9881 17.2441L21.0181 15.4961V15.4961Z" fill="#e9636e"/>
</svg>`;

const store = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
<path d="M22 5C22 3.346 20.654 2 19 2H5C3.346 2 2 3.346 2 5V7.831C2 8.884 2.382 9.841 3 10.577V19C3 20.103 3.897 21 5 21H19C20.103 21 21 20.103 21 19V10.576C21.618 9.841 22 8.884 22 7.83V5ZM20 5V7.831C20 8.971 19.151 9.943 18.109 9.998L18 10C16.897 10 16 9.103 16 8V4H19C19.552 4 20 4.449 20 5ZM10 4H14V8C14 9.103 13.103 10 12 10C10.897 10 10 9.103 10 8V4ZM4 5C4 4.449 4.448 4 5 4H8V8C8 9.103 7.103 10 6 10L5.891 9.997C4.849 9.943 4 8.971 4 7.831V5ZM10 19V16H14V19H10ZM16 19V16C16 14.897 15.103 14 14 14H10C8.897 14 8 14.897 8 16V19H5V11.869C5.254 11.936 5.517 11.98 5.787 11.994C6.38989 12.0267 6.99233 11.9221 7.54891 11.6881C8.10548 11.4541 8.60165 11.0967 9 10.643C9.733 11.475 10.807 12 12 12C13.193 12 14.267 11.475 15 10.643C15.3983 11.0967 15.8945 11.4541 16.4511 11.6881C17.0077 11.9221 17.6101 12.0267 18.213 11.994C18.484 11.98 18.746 11.936 19 11.869V19H16Z" fill="#e9636e"/>
</svg>`;

const share = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<g clip-path="url(#clip0_56_1650)">
<path d="M16.6406 13.2814C15.6022 13.2814 14.6724 13.7549 14.0557 14.4974L11.4417 13.1973C11.0554 13.0053 10.5864 13.1625 10.3943 13.5489C10.2021 13.9352 10.3596 14.4042 10.7459 14.5963L13.3639 15.8983C13.3098 16.1373 13.2812 16.3857 13.2812 16.6407C13.2812 18.4931 14.7883 20.0001 16.6406 20.0001C18.493 20.0001 20 18.4931 20 16.6407C20 14.7883 18.493 13.2814 16.6406 13.2814ZM16.6406 18.4376C15.6498 18.4376 14.8437 17.6315 14.8437 16.6407C14.8437 16.395 14.8933 16.1607 14.983 15.9472C15.0022 15.9188 15.0198 15.8888 15.0355 15.8572C15.0521 15.8237 15.0662 15.7895 15.0777 15.7549C15.387 15.2113 15.9717 14.8439 16.6406 14.8439C17.6314 14.8439 18.4375 15.6499 18.4375 16.6407C18.4375 17.6315 17.6314 18.4376 16.6406 18.4376Z" fill="#e9636e"/>
<path d="M16.6406 0C14.7883 0 13.2812 1.50699 13.2812 3.35938C13.2812 3.61824 13.3107 3.87035 13.3664 4.11254L5.93125 7.84105C5.31453 7.10758 4.39047 6.64062 3.35938 6.64062C1.50703 6.64062 0 8.14762 0 10C0 11.8524 1.50703 13.3594 3.35938 13.3594C4.38602 13.3594 5.30656 12.8964 5.92324 12.1684L7.18469 12.8104C7.2982 12.8682 7.41918 12.8956 7.5384 12.8956C7.82301 12.8956 8.09738 12.7395 8.23531 12.4685C8.43102 12.0839 8.27797 11.6136 7.8934 11.4179L6.62867 10.7743C6.68758 10.5256 6.71875 10.2664 6.71875 10C6.71875 9.73793 6.68859 9.48277 6.63152 9.23785L14.0628 5.51125C14.6795 6.24883 15.6062 6.71875 16.6406 6.71875C18.493 6.71875 20 5.21176 20 3.35938C20 1.50699 18.493 0 16.6406 0ZM3.35938 11.7969C2.36859 11.7969 1.5625 10.9908 1.5625 10C1.5625 9.00922 2.36859 8.20312 3.35938 8.20312C4.35016 8.20312 5.15625 9.00922 5.15625 10C5.15625 10.9908 4.35016 11.7969 3.35938 11.7969ZM16.6406 5.15625C15.6498 5.15625 14.8438 4.35016 14.8438 3.35938C14.8438 2.36859 15.6498 1.5625 16.6406 1.5625C17.6314 1.5625 18.4375 2.36859 18.4375 3.35938C18.4375 4.35016 17.6314 5.15625 16.6406 5.15625Z" fill="#e9636e"/>
</g>
<defs>
<clipPath id="clip0_56_1650">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const bag = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
<path d="M5 22H19C20.103 22 21 21.103 21 20V9C21 8.73478 20.8946 8.48043 20.7071 8.29289C20.5196 8.10536 20.2652 8 20 8H17V7C17 4.243 14.757 2 12 2C9.243 2 7 4.243 7 7V8H4C3.73478 8 3.48043 8.10536 3.29289 8.29289C3.10536 8.48043 3 8.73478 3 9V20C3 21.103 3.897 22 5 22ZM9 7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V8H9V7ZM5 10H7V12H9V10H15V12H17V10H19L19.002 20H5V10Z" fill="#e9636e"/>
</svg>`;

const camera = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
<path d="M18 7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.103 2.897 19 4 19H16C17.103 19 18 18.103 18 17V13.667L22 17V7L18 10.333V7ZM16.002 17H4V7H16L16.001 11.999L16 12L16.001 12.001L16.002 17Z" fill="#e9636e"/>
</svg>
`;

const wallet = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
<path d="M16 12H18V16H16V12Z" fill="#e9636e"/>
<path d="M20 7V5C20 3.897 19.103 3 18 3H5C3.346 3 2 4.346 2 6V18C2 20.201 3.794 21 5 21H20C21.103 21 22 20.103 22 19V9C22 7.897 21.103 7 20 7ZM5 5H18V7H5C4.74252 6.98848 4.49941 6.87809 4.32128 6.69182C4.14315 6.50554 4.04373 6.25774 4.04373 6C4.04373 5.74226 4.14315 5.49446 4.32128 5.30818C4.49941 5.12191 4.74252 5.01152 5 5ZM20 19H5.012C4.55 18.988 4 18.805 4 18V8.815C4.314 8.928 4.647 9 5 9H20V19Z" fill="#e9636e"/>
</svg>
`;

const arrow = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
<path d="M16.813 4.419C16.7207 4.28935 16.5988 4.18367 16.4574 4.11077C16.3159 4.03788 16.1591 3.9999 16 4H2.99997C2.81634 4.00017 2.6363 4.05089 2.47958 4.14662C2.32287 4.24235 2.19555 4.37938 2.11157 4.54269C2.02759 4.706 1.9902 4.88928 2.0035 5.07243C2.01681 5.25558 2.08028 5.43154 2.18697 5.581L6.77097 12L2.18597 18.419C2.07923 18.5685 2.01575 18.7446 2.00249 18.9278C1.98923 19.1111 2.0267 19.2944 2.1108 19.4578C2.1949 19.6211 2.32237 19.7581 2.47923 19.8538C2.63608 19.9494 2.81625 20 2.99997 20H16C16.1591 20.0001 16.3159 19.9621 16.4574 19.8892C16.5988 19.8163 16.7207 19.7106 16.813 19.581L21.813 12.581C21.9344 12.4116 21.9998 12.2084 21.9998 12C21.9998 11.7916 21.9344 11.5884 21.813 11.419L16.813 4.419ZM15.485 18H4.94297L8.81297 12.581C8.93444 12.4116 8.99976 12.2084 8.99976 12C8.99976 11.7916 8.93444 11.5884 8.81297 11.419L4.94297 6H15.485L19.771 12L15.485 18Z" fill="#e9636e"/>
</svg>
`;

const lock = `<svg width="20" height="23" viewBox="0 0 20 23" fill="none" >
<path d="M19.1071 16.2617C19.6003 16.2617 20 15.8595 20 15.3633V12.0391C20 10.0575 18.3979 8.44531 16.4286 8.44531H15.3555V5.27679C15.3555 2.36716 12.9523 0 9.99835 0C7.04442 0 4.64121 2.36716 4.64121 5.27679V8.44531H3.57143C1.60214 8.44531 0 10.0575 0 12.0391V19.4062C0 21.3878 1.60214 23 3.57143 23H16.4286C18.3979 23 20 21.3878 20 19.4062C20 18.91 19.6003 18.5078 19.1071 18.5078C18.614 18.5078 18.2143 18.91 18.2143 19.4062C18.2143 20.397 17.4132 21.2031 16.4286 21.2031H3.57143C2.58679 21.2031 1.78571 20.397 1.78571 19.4062V12.0391C1.78571 11.0483 2.58679 10.2422 3.57143 10.2422H16.4286C17.4132 10.2422 18.2143 11.0483 18.2143 12.0391V15.3633C18.2143 15.8595 18.614 16.2617 19.1071 16.2617ZM13.5698 8.44531H6.42692V5.27679C6.42692 3.35796 8.02906 1.79688 9.99835 1.79688C11.9676 1.79688 13.5698 3.35796 13.5698 5.27679V8.44531Z" fill="#e9636e"/>
<path d="M10 16.4863C10.4931 16.4863 10.8929 16.084 10.8929 15.5878C10.8929 15.0916 10.4931 14.6894 10 14.6894C9.50692 14.6894 9.10718 15.0916 9.10718 15.5878C9.10718 16.084 9.50692 16.4863 10 16.4863Z" fill="#e9636e"/>
</svg>`;

const newFeedIcon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" >
<path d="M15 2.25H3C2.17275 2.25 1.5 2.92275 1.5 3.75V14.25C1.5 15.0773 2.17275 15.75 3 15.75H15C15.8273 15.75 16.5 15.0773 16.5 14.25V3.75C16.5 2.92275 15.8273 2.25 15 2.25ZM3 14.25V3.75H15L15.0015 14.25H3Z" fill="white"/>
<path d="M4.5 5.25H13.5V6.75H4.5V5.25ZM4.5 8.25H13.5V9.75H4.5V8.25ZM4.5 11.25H9V12.75H4.5V11.25Z" fill="white"/>
</svg>`;

const newFeedGrayIcon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" >
<path d="M15 2.25H3C2.17275 2.25 1.5 2.92275 1.5 3.75V14.25C1.5 15.0773 2.17275 15.75 3 15.75H15C15.8273 15.75 16.5 15.0773 16.5 14.25V3.75C16.5 2.92275 15.8273 2.25 15 2.25ZM3 14.25V3.75H15L15.0015 14.25H3Z" fill="#828282"/>
<path d="M4.5 5.25H13.5V6.75H4.5V5.25ZM4.5 8.25H13.5V9.75H4.5V8.25ZM4.5 11.25H9V12.75H4.5V11.25Z" fill="#828282"/>
</svg>
`;

const cameraGrayIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
<path d="M18 7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.103 2.897 19 4 19H16C17.103 19 18 18.103 18 17V13.667L22 17V7L18 10.333V7ZM16.002 17H4V7H16L16.001 11.999L16 12L16.001 12.001L16.002 17Z" fill="#828282"/>
</svg>
`;

const cameraIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
<path d="M18 7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.103 2.897 19 4 19H16C17.103 19 18 18.103 18 17V13.667L22 17V7L18 10.333V7ZM16.002 17H4V7H16L16.001 11.999L16 12L16.001 12.001L16.002 17Z" fill="white"/>
</svg>
`;

const backIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
<path d="M21.0001 11H6.41406L11.7071 5.70697L10.2931 4.29297L2.58606 12L10.2931 19.707L11.7071 18.293L6.41406 13H21.0001V11Z" fill="#333333"/>
</svg>
`;

const imageIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
<path d="M7.49902 11C8.32745 11 8.99902 10.3284 8.99902 9.5C8.99902 8.67157 8.32745 8 7.49902 8C6.6706 8 5.99902 8.67157 5.99902 9.5C5.99902 10.3284 6.6706 11 7.49902 11Z" fill="#52AC0E"/>
<path d="M10.499 14L8.99902 12L5.99902 16H17.999L13.499 10L10.499 14Z" fill="#52AC0E"/>
<path d="M19.999 4H3.99902C2.89602 4 1.99902 4.897 1.99902 6V18C1.99902 19.103 2.89602 20 3.99902 20H19.999C21.102 20 21.999 19.103 21.999 18V6C21.999 4.897 21.102 4 19.999 4ZM3.99902 18V6H19.999L20.001 18H3.99902Z" fill="#52AC0E"/>
</svg>`;

const cameraGreenIcon = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" >
<path d="M18.2979 7.14209C18.2979 6.03909 17.4009 5.14209 16.2979 5.14209H4.29785C3.19485 5.14209 2.29785 6.03909 2.29785 7.14209V17.1421C2.29785 18.2451 3.19485 19.1421 4.29785 19.1421H16.2979C17.4009 19.1421 18.2979 18.2451 18.2979 17.1421V13.8091L22.2979 17.1421V7.14209L18.2979 10.4751V7.14209ZM16.2999 17.1421H4.29785V7.14209H16.2979L16.2989 12.1411L16.2979 12.1421L16.2989 12.1431L16.2999 17.1421Z" fill="#52AC0E"/>
</svg>
`;

const thumbNumberIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<circle cx="10" cy="10" r="10" fill="#e9636e"/>
<path d="M5.33335 15.25H5.91669V7.66669H5.33335C5.02393 7.66669 4.72719 7.7896 4.5084 8.0084C4.2896 8.22719 4.16669 8.52393 4.16669 8.83335V14.0834C4.16669 14.3928 4.2896 14.6895 4.5084 14.9083C4.72719 15.1271 5.02393 15.25 5.33335 15.25ZM14.6667 7.66669H10.5834L11.2379 5.70202C11.2963 5.52668 11.3122 5.33997 11.2843 5.15728C11.2564 4.97458 11.1855 4.80113 11.0774 4.6512C10.9694 4.50127 10.8272 4.37916 10.6627 4.29492C10.4982 4.21069 10.3161 4.16673 10.1313 4.16669H10L7.08335 7.33885V15.25H13.5L15.782 10.2357L15.8334 10V8.83335C15.8334 8.52393 15.7104 8.22719 15.4916 8.0084C15.2729 7.7896 14.9761 7.66669 14.6667 7.66669Z" fill="white"/>
</svg>
`;

const thumbGrayIcon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" >
<path d="M15 6H10.791L11.6332 3.47475C11.7847 3.01875 11.7083 2.51325 11.427 2.12325C11.1458 1.73325 10.6898 1.5 10.209 1.5H9C8.77725 1.5 8.5665 1.599 8.42325 1.77L4.89825 6H3C2.17275 6 1.5 6.67275 1.5 7.5V14.25C1.5 15.0773 2.17275 15.75 3 15.75H12.9802C13.2854 15.749 13.5831 15.6554 13.8339 15.4816C14.0847 15.3077 14.2769 15.0619 14.385 14.7765L16.4528 9.26325C16.4841 9.17904 16.5001 9.08987 16.5 9V7.5C16.5 6.67275 15.8273 6 15 6ZM3 7.5H4.5V14.25H3V7.5ZM15 8.86425L12.9802 14.25H6V7.0215L9.351 3H10.2105L9.039 6.51225C9.00097 6.62499 8.99036 6.74516 9.00806 6.86282C9.02575 6.98048 9.07124 7.09222 9.14075 7.18878C9.21025 7.28535 9.30178 7.36395 9.40774 7.41807C9.51369 7.4722 9.63102 7.50028 9.75 7.5H15V8.86425Z" fill="#828282"/>
</svg>`;

const thumbBlueIcon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" >
<path d="M15 6H10.791L11.6332 3.47475C11.7847 3.01875 11.7083 2.51325 11.427 2.12325C11.1458 1.73325 10.6898 1.5 10.209 1.5H9C8.77725 1.5 8.5665 1.599 8.42325 1.77L4.89825 6H3C2.17275 6 1.5 6.67275 1.5 7.5V14.25C1.5 15.0773 2.17275 15.75 3 15.75H12.9802C13.2854 15.749 13.5831 15.6554 13.8339 15.4816C14.0847 15.3077 14.2769 15.0619 14.385 14.7765L16.4528 9.26325C16.4841 9.17904 16.5001 9.08987 16.5 9V7.5C16.5 6.67275 15.8273 6 15 6ZM3 7.5H4.5V14.25H3V7.5ZM15 8.86425L12.9802 14.25H6V7.0215L9.351 3H10.2105L9.039 6.51225C9.00097 6.62499 8.99036 6.74516 9.00806 6.86282C9.02575 6.98048 9.07124 7.09222 9.14075 7.18878C9.21025 7.28535 9.30178 7.36395 9.40774 7.41807C9.51369 7.4722 9.63102 7.50028 9.75 7.5H15V8.86425Z" fill="#e9636e"/>
</svg>`;

const commentGrayIcon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" >
<path d="M15 1.5H3C2.17275 1.5 1.5 2.17275 1.5 3V16.5L5.49975 13.5H15C15.8273 13.5 16.5 12.8273 16.5 12V3C16.5 2.17275 15.8273 1.5 15 1.5ZM15 12H5.00025L3 13.5V3H15V12Z" fill="#828282"/>
</svg>`;

const shareGrayIcon = `<svg width="19" height="18" viewBox="0 0 19 18" fill="none" >
<path d="M8.49123 5.2875V3C8.49123 2.80109 8.41222 2.61032 8.27156 2.46967C8.13091 2.32902 7.94015 2.25 7.74123 2.25C7.54448 2.25083 7.35593 2.32894 7.21623 2.4675L1.96623 7.7175C1.89594 7.78722 1.84014 7.87017 1.80206 7.96157C1.76399 8.05296 1.74438 8.15099 1.74438 8.25C1.74438 8.34901 1.76399 8.44704 1.80206 8.53843C1.84014 8.62983 1.89594 8.71278 1.96623 8.7825L7.21623 14.0325C7.32152 14.1357 7.45489 14.2056 7.59968 14.2334C7.74446 14.2612 7.89423 14.2458 8.03028 14.189C8.16633 14.1321 8.28261 14.0365 8.36459 13.914C8.44657 13.7914 8.49062 13.6474 8.49123 13.5V11.175H9.12873C10.3137 11.1573 11.4883 11.3977 12.571 11.8795C13.6537 12.3613 14.6186 13.0729 15.3987 13.965C15.4927 14.0902 15.6236 14.1828 15.7729 14.2298C15.9222 14.2769 16.0824 14.2761 16.2312 14.2275C16.3827 14.1764 16.5138 14.0783 16.6056 13.9474C16.6973 13.8165 16.7448 13.6598 16.7412 13.5C16.7412 6.66 10.6812 5.49 8.49123 5.2875ZM9.12873 9.66C8.6271 9.65843 8.12594 9.69101 7.62873 9.7575C7.45118 9.78444 7.28918 9.87419 7.1722 10.0104C7.05521 10.1467 6.991 10.3204 6.99123 10.5V11.6925L3.55623 8.25L6.99123 4.8075V6C6.99123 6.19891 7.07025 6.38968 7.2109 6.53033C7.35156 6.67098 7.54232 6.75 7.74123 6.75C8.42373 6.75 13.8237 6.9 14.9937 11.5725C13.2955 10.3204 11.2386 9.64969 9.12873 9.66Z" fill="#828282"/>
</svg>
`;

const sendIcon = `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" >
<g clip-path="url(#clip0_201_386)">
<path d="M12.1481 7.88638C11.8254 8.14188 11.6915 8.56809 11.8109 8.96203L14.215 16.86L10.8856 24.4136C10.728 24.7725 10.7944 25.1895 11.0526 25.4805L11.0919 25.5218C11.2335 25.6645 11.4148 25.7612 11.6121 25.7994C11.8095 25.8375 12.0138 25.8152 12.1983 25.7355L28.6532 18.62C28.9986 18.47 29.2318 18.1376 29.255 17.7614C29.2783 17.3852 29.0849 17.0301 28.76 16.8371L13.2714 7.80707C13.098 7.70555 12.898 7.6588 12.6975 7.67295C12.4971 7.68711 12.3056 7.7615 12.1481 7.88638Z" fill="#e9636e"/>
</g>
<defs>
<clipPath id="clip0_201_386">
<rect width="24" height="24" fill="white" transform="translate(17.9556 0.0598145) rotate(48.4299)"/>
</clipPath>
</defs>
</svg>
`;

const heartGrayIcon = `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" >
<path d="M9.26964 3.84355C8.45244 3.09213 7.3828 2.67508 6.27264 2.67505C5.68504 2.67566 5.10337 2.79247 4.56109 3.01875C4.01881 3.24503 3.52664 3.57632 3.11289 3.99355C1.34814 5.7658 1.34889 8.5378 3.11439 10.3025L8.61339 15.8015C8.74089 16.0258 8.98689 16.1705 9.26964 16.1705C9.38574 16.1694 9.49995 16.1411 9.60312 16.0878C9.70628 16.0345 9.79551 15.9578 9.86364 15.8638L15.4249 10.3025C17.1904 8.53705 17.1904 5.7658 15.4234 3.99055C15.0098 3.57409 14.5181 3.24347 13.9763 3.01771C13.4346 2.79195 12.8535 2.6755 12.2666 2.67505C11.1565 2.67523 10.0869 3.09225 9.26964 3.84355ZM14.3629 5.05105C15.5351 6.2293 15.5359 8.0698 14.3644 9.24205L9.26964 14.3368L4.17489 9.24205C3.00339 8.0698 3.00414 6.2293 4.17339 5.05405C4.74339 4.48705 5.48889 4.17505 6.27264 4.17505C7.05639 4.17505 7.79889 4.48705 8.36439 5.05255L8.73939 5.42755C8.80898 5.49726 8.89163 5.55256 8.98262 5.59029C9.07361 5.62803 9.17114 5.64745 9.26964 5.64745C9.36814 5.64745 9.46567 5.62803 9.55666 5.59029C9.64764 5.55256 9.7303 5.49726 9.79989 5.42755L10.1749 5.05255C11.3089 3.9208 13.2304 3.9238 14.3629 5.05105Z" fill="#828282"/>
</svg>
`;

const heartActiveIcon = `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" >
<path d="M9.26964 3.84355C8.45244 3.09213 7.3828 2.67508 6.27264 2.67505C5.68504 2.67566 5.10337 2.79247 4.56109 3.01875C4.01881 3.24503 3.52664 3.57632 3.11289 3.99355C1.34814 5.7658 1.34889 8.5378 3.11439 10.3025L8.61339 15.8015C8.74089 16.0258 8.98689 16.1705 9.26964 16.1705C9.38574 16.1694 9.49995 16.1411 9.60312 16.0878C9.70628 16.0345 9.79551 15.9578 9.86364 15.8638L15.4249 10.3025C17.1904 8.53705 17.1904 5.7658 15.4234 3.99055C15.0098 3.57409 14.5181 3.24347 13.9763 3.01771C13.4346 2.79195 12.8535 2.6755 12.2666 2.67505C11.1565 2.67523 10.0869 3.09225 9.26964 3.84355ZM14.3629 5.05105C15.5351 6.2293 15.5359 8.0698 14.3644 9.24205L9.26964 14.3368L4.17489 9.24205C3.00339 8.0698 3.00414 6.2293 4.17339 5.05405C4.74339 4.48705 5.48889 4.17505 6.27264 4.17505C7.05639 4.17505 7.79889 4.48705 8.36439 5.05255L8.73939 5.42755C8.80898 5.49726 8.89163 5.55256 8.98262 5.59029C9.07361 5.62803 9.17114 5.64745 9.26964 5.64745C9.36814 5.64745 9.46567 5.62803 9.55666 5.59029C9.64764 5.55256 9.7303 5.49726 9.79989 5.42755L10.1749 5.05255C11.3089 3.9208 13.2304 3.9238 14.3629 5.05105Z" fill="#F26091"/>
</svg>
`;

const numberOfHeartIcon = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<circle cx="10" cy="10" r="10" fill="#F26091"/>
<path d="M14.7863 5.79477C14.4646 5.47086 14.0821 5.21371 13.6608 5.03812C13.2394 4.86253 12.7875 4.77196 12.331 4.77161C11.4676 4.77175 10.6357 5.0961 10 5.68044C9.36443 5.096 8.53249 4.77163 7.66903 4.77161C7.21201 4.77208 6.7596 4.86293 6.33783 5.03893C5.91605 5.21493 5.53325 5.47259 5.21145 5.79711C3.83886 7.17552 3.83945 9.33152 5.21261 10.7041L10 15.4915L14.7874 10.7041C16.1606 9.33152 16.1612 7.17552 14.7863 5.79477V5.79477Z" fill="white"/>
</svg>`;

const arrowRightIcon = `<svg width="15" height="8" viewBox="0 0 15 8" fill="none" >
<path d="M0 4H14M14 4L11.5 1M14 4L11.5 7" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`;

const categoryIcon = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" >
<path d="M10.833 3.5625H4.83301C4.56779 3.5625 4.31344 3.66786 4.1259 3.85539C3.93836 4.04293 3.83301 4.29728 3.83301 4.5625V10.5625C3.83301 10.8277 3.93836 11.0821 4.1259 11.2696C4.31344 11.4571 4.56779 11.5625 4.83301 11.5625H10.833C11.0982 11.5625 11.3526 11.4571 11.5401 11.2696C11.7277 11.0821 11.833 10.8277 11.833 10.5625V4.5625C11.833 4.29728 11.7277 4.04293 11.5401 3.85539C11.3526 3.66786 11.0982 3.5625 10.833 3.5625ZM9.83301 9.5625H5.83301V5.5625H9.83301V9.5625ZM20.833 3.5625H14.833C14.5678 3.5625 14.3134 3.66786 14.1259 3.85539C13.9384 4.04293 13.833 4.29728 13.833 4.5625V10.5625C13.833 10.8277 13.9384 11.0821 14.1259 11.2696C14.3134 11.4571 14.5678 11.5625 14.833 11.5625H20.833C21.0982 11.5625 21.3526 11.4571 21.5401 11.2696C21.7277 11.0821 21.833 10.8277 21.833 10.5625V4.5625C21.833 4.29728 21.7277 4.04293 21.5401 3.85539C21.3526 3.66786 21.0982 3.5625 20.833 3.5625ZM19.833 9.5625H15.833V5.5625H19.833V9.5625ZM10.833 13.5625H4.83301C4.56779 13.5625 4.31344 13.6679 4.1259 13.8554C3.93836 14.0429 3.83301 14.2973 3.83301 14.5625V20.5625C3.83301 20.8277 3.93836 21.0821 4.1259 21.2696C4.31344 21.4571 4.56779 21.5625 4.83301 21.5625H10.833C11.0982 21.5625 11.3526 21.4571 11.5401 21.2696C11.7277 21.0821 11.833 20.8277 11.833 20.5625V14.5625C11.833 14.2973 11.7277 14.0429 11.5401 13.8554C11.3526 13.6679 11.0982 13.5625 10.833 13.5625ZM9.83301 19.5625H5.83301V15.5625H9.83301V19.5625ZM17.833 13.5625C15.627 13.5625 13.833 15.3565 13.833 17.5625C13.833 19.7685 15.627 21.5625 17.833 21.5625C20.039 21.5625 21.833 19.7685 21.833 17.5625C21.833 15.3565 20.039 13.5625 17.833 13.5625ZM17.833 19.5625C16.73 19.5625 15.833 18.6655 15.833 17.5625C15.833 16.4595 16.73 15.5625 17.833 15.5625C18.936 15.5625 19.833 16.4595 19.833 17.5625C19.833 18.6655 18.936 19.5625 17.833 19.5625Z" fill="#e9636e"/>
</svg>
`;

const personBlueIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
<path d="M12 2C11.0111 2 10.0444 2.29324 9.22215 2.84265C8.3999 3.39206 7.75904 4.17295 7.3806 5.08658C7.00216 6.00021 6.90315 7.00555 7.09607 7.97545C7.289 8.94536 7.7652 9.83627 8.46447 10.5355C9.16373 11.2348 10.0546 11.711 11.0245 11.9039C11.9945 12.0969 12.9998 11.9978 13.9134 11.6194C14.827 11.241 15.6079 10.6001 16.1573 9.77785C16.7068 8.95561 17 7.98891 17 7C17 5.67392 16.4732 4.40215 15.5355 3.46447C14.5979 2.52678 13.3261 2 12 2ZM12 10C11.4067 10 10.8266 9.82405 10.3333 9.49441C9.83994 9.16476 9.45542 8.69623 9.22836 8.14805C9.0013 7.59987 8.94189 6.99667 9.05764 6.41473C9.1734 5.83279 9.45912 5.29824 9.87868 4.87868C10.2982 4.45912 10.8328 4.1734 11.4147 4.05764C11.9967 3.94189 12.5999 4.0013 13.1481 4.22836C13.6962 4.45542 14.1648 4.83994 14.4944 5.33329C14.8241 5.82664 15 6.40666 15 7C15 7.79565 14.6839 8.55871 14.1213 9.12132C13.5587 9.68393 12.7956 10 12 10ZM21 21V20C21 18.1435 20.2625 16.363 18.9497 15.0503C17.637 13.7375 15.8565 13 14 13H10C8.14348 13 6.36301 13.7375 5.05025 15.0503C3.7375 16.363 3 18.1435 3 20V21H5V20C5 18.6739 5.52678 17.4021 6.46447 16.4645C7.40215 15.5268 8.67392 15 10 15H14C15.3261 15 16.5979 15.5268 17.5355 16.4645C18.4732 17.4021 19 18.6739 19 20V21H21Z" fill="#e9636e"/>
</svg>
`;

const emailBlueIcon = `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" >
<path d="M20 4.02026H4C2.897 4.02026 2 4.91726 2 6.02026V18.0203C2 19.1233 2.897 20.0203 4 20.0203H20C21.103 20.0203 22 19.1233 22 18.0203V6.02026C22 4.91726 21.103 4.02026 20 4.02026ZM20 6.02026V6.53126L12 12.7543L4 6.53226V6.02026H20ZM4 18.0203V9.06426L11.386 14.8093C11.5611 14.9468 11.7773 15.0216 12 15.0216C12.2227 15.0216 12.4389 14.9468 12.614 14.8093L20 9.06426L20.002 18.0203H4Z" fill="#e9636e"/>
</svg>
`;

const phoneBlueIcon = `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" >
<path d="M17.7071 13.2446C17.6143 13.1517 17.5041 13.078 17.3828 13.0277C17.2615 12.9773 17.1314 12.9514 17.0001 12.9514C16.8688 12.9514 16.7387 12.9773 16.6174 13.0277C16.4961 13.078 16.3859 13.1517 16.2931 13.2446L14.6991 14.8386C13.9601 14.6186 12.5811 14.1186 11.7071 13.2446C10.8331 12.3706 10.3331 10.9916 10.1131 10.2526L11.7071 8.65865C11.8 8.56586 11.8738 8.45566 11.9241 8.33434C11.9744 8.21303 12.0003 8.08298 12.0003 7.95165C12.0003 7.82031 11.9744 7.69027 11.9241 7.56895C11.8738 7.44764 11.8 7.33744 11.7071 7.24465L7.70709 3.24465C7.6143 3.1517 7.5041 3.07796 7.38278 3.02765C7.26147 2.97734 7.13142 2.95145 7.00009 2.95145C6.86876 2.95145 6.73871 2.97734 6.6174 3.02765C6.49608 3.07796 6.38588 3.1517 6.29309 3.24465L3.58109 5.95665C3.20109 6.33665 2.98709 6.85865 2.99509 7.39165C3.01809 8.81565 3.39509 13.7616 7.29309 17.6596C11.1911 21.5576 16.1371 21.9336 17.5621 21.9576H17.5901C18.1181 21.9576 18.6171 21.7496 18.9951 21.3716L21.7071 18.6596C21.8 18.5669 21.8738 18.4567 21.9241 18.3353C21.9744 18.214 22.0003 18.084 22.0003 17.9526C22.0003 17.8213 21.9744 17.6913 21.9241 17.57C21.8738 17.4486 21.8 17.3384 21.7071 17.2456L17.7071 13.2446ZM17.5801 19.9566C16.3321 19.9356 12.0621 19.6006 8.70709 16.2446C5.34109 12.8786 5.01509 8.59365 4.99509 7.37065L7.00009 5.36565L9.58609 7.95165L8.29309 9.24465C8.17555 9.3621 8.08913 9.50699 8.04164 9.66622C7.99415 9.82545 7.98709 9.994 8.02109 10.1566C8.04509 10.2716 8.63209 12.9986 10.2921 14.6586C11.9521 16.3186 14.6791 16.9056 14.7941 16.9296C14.9566 16.9646 15.1254 16.9581 15.2847 16.9108C15.4441 16.8634 15.589 16.7767 15.7061 16.6586L17.0001 15.3656L19.5861 17.9516L17.5801 19.9566Z" fill="#e9636e"/>
</svg>
`;

const mapPinBlueIcon = `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" >
<path d="M12 17.6929L13 15.6929V10.5509C14.721 10.1039 16 8.55087 16 6.69287C16 4.48687 14.206 2.69287 12 2.69287C9.794 2.69287 8 4.48687 8 6.69287C8 8.55087 9.279 10.1039 11 10.5509V15.6929L12 17.6929ZM10 6.69287C10 5.58987 10.897 4.69287 12 4.69287C13.103 4.69287 14 5.58987 14 6.69287C14 7.79587 13.103 8.69287 12 8.69287C10.897 8.69287 10 7.79587 10 6.69287Z" fill="#e9636e"/>
<path d="M16.267 11.2559L15.734 13.1839C18.325 13.8999 20 15.2769 20 16.6929C20 18.5849 16.715 20.6929 12 20.6929C7.285 20.6929 4 18.5849 4 16.6929C4 15.2769 5.675 13.8999 8.267 13.1829L7.734 11.2549C4.197 12.2329 2 14.3159 2 16.6929C2 20.0569 6.393 22.6929 12 22.6929C17.607 22.6929 22 20.0569 22 16.6929C22 14.3159 19.803 12.2329 16.267 11.2559Z" fill="#e9636e"/>
</svg>
`;

const checkBoxBlueIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<rect x="1" y="1" width="18" height="18" rx="3" stroke="#e9636e" stroke-width="2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5848 6.24987L8.32991 11.8514L6.41516 9.81037C6.0875 9.47304 5.56668 9.47786 5.24458 9.82121C4.92247 10.1646 4.91795 10.7197 5.23441 11.069L7.73954 13.7394C8.06562 14.0869 8.5942 14.0869 8.92029 13.7394L14.7656 7.50851C15.0821 7.15924 15.0775 6.60406 14.7554 6.26071C14.4333 5.91736 13.9125 5.91254 13.5848 6.24987Z" fill="#e9636e"/>
</svg>
`;

const codeBlueIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
<path d="M3 11H11V3H3V11ZM5 5H9V9H5V5ZM3 21H11V13H3V21ZM5 15H9V19H5V15ZM13 3V11H21V3H13ZM19 9H15V5H19V9ZM13.01 13H15.01V15H13.01V13ZM15.01 15H17.01V17H15.01V15ZM13.01 17H15.01V19H13.01V17ZM17.01 17H19.01V19H17.01V17ZM19.01 19H21.01V21H19.01V19ZM15.01 19H17.01V21H15.01V19ZM17.01 13H19.01V15H17.01V13ZM19.01 15H21.01V17H19.01V15Z" fill="#e9636e"/>
</svg>
`;

const arrDownBlueIcon = `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" >
<path d="M11.1778 20.015C11.2696 20.1483 11.3923 20.2572 11.5355 20.3325C11.6787 20.4078 11.838 20.4471 11.9998 20.4471C12.1616 20.4471 12.3209 20.4078 12.4641 20.3325C12.6073 20.2572 12.7301 20.1483 12.8218 20.015L21.8218 7.01505C21.926 6.8651 21.9871 6.68948 21.9984 6.50725C22.0098 6.32503 21.971 6.14317 21.8863 5.98144C21.8016 5.81971 21.6741 5.68429 21.5179 5.5899C21.3616 5.49551 21.1824 5.44576 20.9998 5.44605H2.99981C2.81766 5.4468 2.63915 5.49719 2.4835 5.59181C2.32784 5.68643 2.20092 5.82168 2.11638 5.98304C2.03185 6.14439 1.9929 6.32574 2.00372 6.50758C2.01455 6.68941 2.07474 6.86486 2.17781 7.01505L11.1778 20.015Z" fill="#e9636e"/>
</svg>
`;

const networkIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
<path d="M19 3C17.346 3 16 4.346 16 6C16 6.502 16.136 6.968 16.354 7.385L15.238 8.687C14.5779 8.23859 13.798 7.99921 13 8C12.261 8 11.575 8.216 10.98 8.566L9.566 7.152C9.84689 6.64643 9.99613 6.07835 10 5.5C10 3.57 8.43 2 6.5 2C4.57 2 3 3.57 3 5.5C3 7.43 4.57 9 6.5 9C7.101 9 7.658 8.834 8.152 8.566L9.566 9.98C9.19972 10.5904 9.00424 11.2881 9 12C9 12.997 9.38 13.899 9.985 14.601L8.293 16.293L8.318 16.318C7.90916 16.1115 7.45801 16.0027 7 16C5.346 16 4 17.346 4 19C4 20.654 5.346 22 7 22C8.654 22 10 20.654 10 19C10 18.524 9.879 18.081 9.682 17.682L9.707 17.707L11.661 15.753C12.082 15.903 12.528 16 13 16C15.206 16 17 14.206 17 12C16.9957 11.3788 16.8453 10.7673 16.561 10.215L17.814 8.753C18.178 8.911 18.578 9 19 9C20.654 9 22 7.654 22 6C22 4.346 20.654 3 19 3ZM7 20C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19C6 18.7348 6.10536 18.4804 6.29289 18.2929C6.48043 18.1054 6.73478 18 7 18C7.26522 18 7.51957 18.1054 7.70711 18.2929C7.89464 18.4804 8 18.7348 8 19C8 19.2652 7.89464 19.5196 7.70711 19.7071C7.51957 19.8946 7.26522 20 7 20ZM5 5.5C5 4.673 5.673 4 6.5 4C7.327 4 8 4.673 8 5.5C8 6.327 7.327 7 6.5 7C5.673 7 5 6.327 5 5.5ZM13 14C11.897 14 11 13.103 11 12C11 10.897 11.897 10 13 10C14.103 10 15 10.897 15 12C15 13.103 14.103 14 13 14ZM19 7C18.7348 7 18.4804 6.89464 18.2929 6.70711C18.1054 6.51957 18 6.26522 18 6C18 5.73478 18.1054 5.48043 18.2929 5.29289C18.4804 5.10536 18.7348 5 19 5C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6C20 6.26522 19.8946 6.51957 19.7071 6.70711C19.5196 6.89464 19.2652 7 19 7Z" fill="#e9636e"/>
</svg>
`;

export {
  checkBlue,
  checkGreen,
  xHardred,
  lockIcon,
  lockGrayIcon,
  keyIcon,
  whiteRightArrow,
  boxIcon,
  checkBoxIcon,
  backArrow,
  redbabyface,
  rightArrowLesson,
  backwhiteArrow,
  downArrowHeader,
  whitecheck,
  greencheck,
  bluebutton,
  graybutton,
  babymotionsquare,
  greenmindsquare,
  bluesquare,
  orangesquare,
  blueyesquare,
  purplesquare,
  pinksquare,
  bottombargreenbtn,
  babymotionsquareSm,
  greenmindsquareSm,
  bluesquareSm,
  orangesquareSm,
  blueyesquareSm,
  purplesquareSm,
  pinksquareSm,
  graysquare,
  bluebuttonSm,
  filterIcon,
  locationIcon,
  locationGrayIcon,
  locationGreenIcon,
  documentIcon,
  clockIcon,
  cateIcon,
  babyLessonIconCate,
  emotionIconCate,
  brushIconCate,
  eyeLessonIconCate,
  faceLessonIconCate,
  brainIconCate,
  cissorIconCate,
  babyLessonIcon,
  emotionIcon,
  brushIcon,
  eyeLessonIcon,
  faceLessonIcon,
  brainIcon,
  cissorIcon,
  editIcon,
  ticketIcon,
  boyBtnMainIcon,
  boyBtnMainGrayIcon,
  cateGrayIcon,
  redBabyLesson,
  playIcon,
  headerToolbarLeft,
  heartIcon,
  heartRedIcon,
  heartGreenIcon,
  heartBlackIcon,
  warningIcon,
  checkWhiteBoxIcon,
  paperPlaneIcon,
  dangerIcon,
  bluecisIcon,
  paperPlaneGrayIcon,
  checkGrayBoxIcon,
  dangerGrayIcon,
  gameIcon,
  bluebabyface,
  closebtnIcon,
  greenCalendar,
  walletIcon,
  logoutIcon,
  lockkkkIcon,
  shuffleIcon,
  shareIcon,
  plusIcon,
  editBabyIcon,
  editGreenBabyIcon,
  closebtnWhiteIcon,
  checkBoxBlack,
  girlBtnMainGrayIcon,
  girlBtnMainIcon,
  downGreenIcon,
  grayRightArrow,
  heartWhiteIcon,
  activityIcon,
  activityWhiteIcon,
  documentGreenIcon,
  documentGrayIcon,
  documentPinkIcon,
  clockGrayIcon,
  clockGreenIcon,
  heightPinkIcon,
  weightBlueIcon,
  scanYellowIcon,
  chartPinkIcon,
  chartBlueIcon,
  chartYellowIcon,
  bigEyeHide,
  bigBabyHide,
  bigCissorHide,
  bigBrainHide,
  bigFaceHide,
  bigBrushHide,
  bigDuofaceHide,
  graybabyface,
  heightYellowIcon,
  scanPinkIcon,
  graysquareSm,
  layer,
  store,
  share,
  bag,
  camera,
  wallet,
  arrow,
  lock,
  newFeedIcon,
  newFeedGrayIcon,
  cameraGrayIcon,
  cameraIcon,
  backIcon,
  imageIcon,
  cameraGreenIcon,
  thumbNumberIcon,
  thumbGrayIcon,
  thumbBlueIcon,
  commentGrayIcon,
  shareGrayIcon,
  sendIcon,
  heartGrayIcon,
  numberOfHeartIcon,
  heartActiveIcon,
  arrowRightIcon,
  categoryIcon,
  personBlueIcon,
  mapPinBlueIcon,
  emailBlueIcon,
  phoneBlueIcon,
  checkBoxBlueIcon,
  codeBlueIcon,
  arrDownBlueIcon,
  networkIcon,
};
