import React from "react";

interface IInputBaby {
  placeHolder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  title: string;
  readonly?: boolean;
  isLock?: boolean;
  keyboardType?: string;
  max?: number;
}

export default function InputBaby(props: IInputBaby) {
  return (
    <>
      <p className="font-normal text-sm text-main my-2">{props.title}</p>
      <div className="flex items-center">
        {!props.isLock ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g opacity="0.64">
              <path
                d="M17.9688 14.1406C18.4002 14.1406 18.75 13.7909 18.75 13.3594V10.4688C18.75 8.74562 17.3481 7.34375 15.625 7.34375H14.6861V4.58852C14.6861 2.0584 12.5832 0 9.99855 0C7.41387 0 5.31105 2.0584 5.31105 4.58852V7.34375H4.375C2.65188 7.34375 1.25 8.74562 1.25 10.4688V16.875C1.25 18.5981 2.65188 20 4.375 20H15.625C17.3481 20 18.75 18.5981 18.75 16.875C18.75 16.4435 18.4002 16.0938 17.9688 16.0938C17.5373 16.0938 17.1875 16.4435 17.1875 16.875C17.1875 17.7366 16.4866 18.4375 15.625 18.4375H4.375C3.51344 18.4375 2.8125 17.7366 2.8125 16.875V10.4688C2.8125 9.60719 3.51344 8.90625 4.375 8.90625H15.625C16.4866 8.90625 17.1875 9.60719 17.1875 10.4688V13.3594C17.1875 13.7909 17.5373 14.1406 17.9688 14.1406ZM13.1236 7.34375H6.87355V4.58852C6.87355 2.91996 8.27543 1.5625 9.99855 1.5625C11.7217 1.5625 13.1236 2.91996 13.1236 4.58852V7.34375Z"
                fill="url(#paint0_linear)"
              />
              <path
                d="M10 14.3359C10.4315 14.3359 10.7812 13.9862 10.7812 13.5547C10.7812 13.1232 10.4315 12.7734 10 12.7734C9.56853 12.7734 9.21875 13.1232 9.21875 13.5547C9.21875 13.9862 9.56853 14.3359 10 14.3359Z"
                fill="url(#paint1_linear)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="10"
                y1="0"
                x2="10"
                y2="20"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#e9636e" />
                <stop offset="1" stopColor="#e9636e" />
              </linearGradient>
              <linearGradient
                id="paint1_linear"
                x1="10"
                y1="12.7734"
                x2="10"
                y2="14.3359"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#e9636e" />
                <stop offset="1" stopColor="#e9636e" />
              </linearGradient>
            </defs>
          </svg>
        ) : (
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
            <g opacity="0.64" clipPath="url(#clip0)">
              <path
                d="M14.2187 7.16633C14.909 7.16633 15.4687 6.60669 15.4687 5.91634C15.4687 5.22599 14.909 4.66634 14.2187 4.66634C13.5283 4.66634 12.9687 5.22599 12.9687 5.91634C12.9687 6.60669 13.5283 7.16633 14.2187 7.16633Z"
                fill="url(#paint0_linear)"
              />
              <path
                d="M19.7842 6.9276C19.367 5.86533 18.602 4.33265 17.3266 3.06328C16.0557 1.79828 14.5393 1.05516 13.4909 0.654459C12.34 0.214578 11.0321 0.491843 10.1591 1.36078L7.09122 4.41429C6.18181 5.3194 5.9197 6.71213 6.43896 7.8799C6.59997 8.24208 6.77509 8.59634 6.9622 8.9386L0.228827 15.6719C0.0823044 15.8185 0 16.0172 0 16.2244V19.6619C0 20.0934 0.349764 20.4431 0.781247 20.4431H4.21873C4.65022 20.4431 4.99998 20.0934 4.99998 19.6619V18.2556L6.40622 18.2556C6.83771 18.2556 7.18747 17.9058 7.18747 17.4743V16.0681H8.59372C9.0252 16.0681 9.37496 15.7184 9.37496 15.2869C9.37496 14.8554 9.0252 14.5057 8.59372 14.5057H6.40622C5.97474 14.5057 5.62498 14.8554 5.62498 15.2869V16.6931L4.21873 16.6931C3.78725 16.6931 3.43749 17.0429 3.43749 17.4744V18.8806H1.56249V16.548L8.4904 9.62012C8.74493 9.36559 8.79262 8.97017 8.60594 8.66243C8.3352 8.21618 8.08649 7.73931 7.86677 7.24506C7.60899 6.66533 7.74032 5.9728 8.19356 5.52167L11.2614 2.4682C11.6994 2.03231 12.3556 1.89328 12.9332 2.11398C13.8403 2.4607 15.1476 3.0989 16.2244 4.17069C17.3078 5.24897 17.9674 6.57564 18.3299 7.49869C18.5561 8.07478 18.4186 8.72927 17.9797 9.16614L14.8748 12.2565C14.4226 12.7065 13.7478 12.838 13.1554 12.5917C12.6669 12.3885 12.1937 12.1471 11.7492 11.8742C11.3815 11.6485 10.9004 11.7637 10.6747 12.1314C10.449 12.4991 10.5641 12.9802 10.9318 13.2059C11.4456 13.5212 11.9918 13.7999 12.5553 14.0343C13.7328 14.5241 15.0758 14.2609 15.977 13.364L19.0819 10.2736C19.9626 9.39712 20.2382 8.08372 19.7842 6.9276Z"
                fill="url(#paint1_linear)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="14.2187"
                y1="4.66634"
                x2="14.2187"
                y2="7.16633"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#e9636e" />
                <stop offset="1" stopColor="#e9636e" />
              </linearGradient>
              <linearGradient
                id="paint1_linear"
                x1="10"
                y1="0.448326"
                x2="10"
                y2="20.4431"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#e9636e" />
                <stop offset="1" stopColor="#e9636e" />
              </linearGradient>
              <clipPath id="clip0">
                <rect
                  width="20"
                  height="20"
                  fill="#ffffff"
                  transform="translate(0 0.44519)"
                />
              </clipPath>
            </defs>
          </svg>
        )}
        <input
          readOnly={props.readonly}
          onChange={props.onChange}
          value={props.value}
          placeholder={props.placeHolder}
          type={props.keyboardType}
          maxLength={props.max}
          className="h-9 outline-none text-base border-none py-0 px-4 w-full placeholder:text-[#828282] text-black"
        />
      </div>
      <div className="w-full h-[2px] bg-main mt-1 mb-3"></div>
    </>
  );
}
