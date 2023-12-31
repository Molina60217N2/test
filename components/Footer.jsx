import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return (
      <footer class="bg-footerColor rounded-t-3xl shadow dark:bg-gray-900">
        <div class="w-full mx-auto p-4 md:py-8">
          <div class="lg:flex lg:items-center lg:justify-between">
            <div className="sm:order-1 lg:order-1">
              <Link href="/" class="flex justify-center items-center">
                <Image
                  src="/logofooter.svg"
                  width={233}
                  height={155}
                  alt="Footer logo"
                />
              </Link>
            </div>
            <div class="text-lg mt-5 lg:m-0 sm:order-3 lg:order-2">
              <p class="text-white font-medium text-center">CONTACTA CON NOSOTROS</p>
              <div class="grid-cols-2 flex gap-5 justify-center mt-5 mb-5">
                <Link href="/">
                  <svg
                    width="29"
                    height="33"
                    viewBox="0 0 29 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_44_664)">
                      <path
                        d="M28.0609 16.1956C28.0609 7.26471 21.8102 0.0246582 14.0997 0.0246582C6.38921 0.0246582 0.138489 7.26471 0.138489 16.1956C0.138489 23.7791 4.64629 30.1427 10.7272 31.8905V21.1374H7.84843V16.1956H10.7272V14.0662C10.7272 8.56227 12.8778 6.01114 17.5431 6.01114C18.4277 6.01114 19.9539 6.21231 20.5783 6.41283V10.8922C20.2488 10.8521 19.6764 10.832 18.9655 10.832C16.6764 10.832 15.7918 11.8366 15.7918 14.4478V16.1956H20.3521L19.5686 21.1374H15.7918V32.2482C22.7048 31.2811 28.0615 24.4635 28.0615 16.1956H28.0609Z"
                        fill="white"
                      />
                      <path
                        d="M19.5681 21.1375L20.3516 16.1957H15.7913V14.4479C15.7913 11.8366 16.6759 10.8321 18.9649 10.8321C19.6758 10.8321 20.2483 10.8522 20.5777 10.8923V6.41292C19.9534 6.21175 18.4272 6.01123 17.5426 6.01123C12.8773 6.01123 10.7267 8.56236 10.7267 14.0663V16.1957H7.8479V21.1375H10.7267V31.8906C11.8067 32.201 12.9365 32.3666 14.0992 32.3666C14.6716 32.3666 15.2362 32.3259 15.7907 32.2483V21.1375H19.5675H19.5681Z"
                        fill="#768692"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_44_664">
                        <rect
                          width="27.9224"
                          height="32.3419"
                          fill="white"
                          transform="translate(0.138489 0.0246582)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link href="/">
                  <svg
                    width="29"
                    height="33"
                    viewBox="0 0 29 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_44_657)">
                      <path
                        d="M1.61525 32.3665C1.45846 32.3665 1.30593 32.2947 1.19281 32.1622C1.04369 31.9875 0.986167 31.7339 1.04219 31.4967L2.85743 23.8189C1.7273 21.4518 1.13145 18.7741 1.13231 16.0559C1.1355 7.21616 7.34621 0.0246582 14.9774 0.0246582C18.6788 0.0263854 22.1568 1.69638 24.7709 4.72646C27.3845 7.75678 28.8233 11.785 28.8223 16.0688C28.8189 24.9088 22.6082 32.1008 14.9774 32.1008C14.9774 32.1008 14.9716 32.1008 14.9714 32.1008C12.7425 32.0998 10.5327 31.4706 8.56517 30.2788L1.76586 32.3441C1.71601 32.3591 1.66531 32.3665 1.61525 32.3665Z"
                        fill="#E5E5E5"
                      />
                      <path
                        d="M1.61548 31.6783L3.49527 23.7274C2.33574 21.4003 1.72583 18.7606 1.72668 16.0562C1.72966 7.59594 7.67367 0.712891 14.9777 0.712891C18.5221 0.714618 21.849 2.31256 24.3508 5.21284C26.8525 8.11312 28.2297 11.9683 28.2284 16.0685C28.2253 24.5285 22.2804 31.4126 14.9777 31.4126C14.9772 31.4126 14.9779 31.4126 14.9777 31.4126H14.9719C12.7543 31.4116 10.5754 30.7673 8.63998 29.5447L1.61548 31.6783ZM8.96528 26.767L9.3677 27.0432C11.0583 28.2053 12.9967 28.82 14.9734 28.8212H14.9777C21.0478 28.8212 25.9884 23.0996 25.991 16.0675C25.992 12.6597 24.8476 9.45518 22.7682 7.0447C20.6886 4.63422 17.9237 3.30597 14.9817 3.30449C8.9067 3.30449 3.96628 9.02535 3.96394 16.0572C3.96309 18.4669 4.54509 20.8135 5.64774 22.8442L5.90977 23.3269L4.79689 28.0329L8.96528 26.767Z"
                        fill="white"
                      />
                      <path
                        d="M2.07629 31.1427L3.89111 23.4665C2.77141 21.2201 2.18281 18.6715 2.18345 16.0611C2.18622 7.89373 7.92464 1.24902 14.9753 1.24902C18.3975 1.25075 21.6093 2.79343 24.024 5.59329C26.4394 8.39315 27.7687 12.1149 27.7674 16.0727C27.7644 24.2404 22.0258 30.8858 14.976 30.8858C14.9753 30.8858 14.9762 30.8858 14.976 30.8858H14.9702C12.8295 30.8848 10.7258 30.2625 8.8575 29.083L2.07629 31.1427Z"
                        fill="#768692"
                      />
                      <path
                        d="M1.61548 31.6783L3.49527 23.7274C2.33574 21.4003 1.72583 18.7606 1.72668 16.0562C1.72966 7.59594 7.67367 0.712891 14.9777 0.712891C18.5221 0.714618 21.849 2.31256 24.3508 5.21284C26.8525 8.11312 28.2297 11.9683 28.2284 16.0685C28.2253 24.5285 22.2804 31.4126 14.9777 31.4126C14.9772 31.4126 14.9779 31.4126 14.9777 31.4126H14.9719C12.7543 31.4116 10.5754 30.7673 8.63998 29.5447L1.61548 31.6783ZM8.96528 26.767L9.3677 27.0432C11.0583 28.2053 12.9967 28.82 14.9734 28.8212H14.9777C21.0478 28.8212 25.9884 23.0996 25.991 16.0675C25.992 12.6597 24.8476 9.45518 22.7682 7.0447C20.6886 4.63422 17.9237 3.30597 14.9817 3.30449C8.9067 3.30449 3.96628 9.02535 3.96394 16.0572C3.96309 18.4669 4.54509 20.8135 5.64774 22.8442L5.90977 23.3269L4.79689 28.0329L8.96528 26.767Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.6659 9.64187C11.4179 9.00328 11.1567 8.99045 10.9207 8.97935C10.7277 8.96973 10.5068 8.97022 10.2863 8.97022C10.0656 8.97022 9.70684 9.06645 9.40349 9.45015C9.09992 9.83384 8.24438 10.7616 8.24438 12.6485C8.24438 14.5357 9.43097 16.3589 9.59649 16.615C9.76202 16.8709 11.887 20.8668 15.2522 22.404C18.0491 23.6817 18.6181 23.4276 19.2253 23.3637C19.8324 23.2997 21.1841 22.4359 21.46 21.5404C21.7361 20.645 21.7361 19.8776 21.6532 19.7169C21.5703 19.5573 21.3496 19.4613 21.0186 19.2696C20.6875 19.0778 19.0597 18.1498 18.7562 18.022C18.4526 17.8939 18.2319 17.8303 18.0112 18.2142C17.7903 18.5977 17.1563 19.4613 16.9631 19.7169C16.7699 19.9733 16.5767 20.0054 16.2456 19.8134C15.9146 19.6212 14.8481 19.2165 13.5831 17.91C12.5989 16.8936 11.9343 15.6381 11.7411 15.2542C11.5481 14.8708 11.7379 14.6813 11.8866 14.4718C12.1544 14.0945 12.6036 13.4162 12.714 13.1605C12.8243 12.9044 12.7692 12.6806 12.6865 12.4886C12.6036 12.2969 11.9601 10.4004 11.6659 9.64187Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_44_657">
                        <rect
                          width="27.9224"
                          height="32.3419"
                          fill="white"
                          transform="translate(0.966797 0.0246582)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
              <div class="grid-cols-2 flex gap-2 items-center lg:justify-start justify-center">
                <div>
                  <svg
                    width="29"
                    height="33"
                    viewBox="0 0 29 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.4613 23.0773L21.3532 20.0452C21.0923 19.9164 20.8023 19.8893 20.5269 19.9679C20.2515 20.0465 20.0056 20.2266 19.8262 20.4811L17.1211 24.3091C12.8758 21.9907 9.45935 18.0334 7.45773 13.1162L10.7627 9.98304C10.9828 9.77564 11.1386 9.49081 11.2065 9.17166C11.2744 8.85252 11.2507 8.51644 11.139 8.21431L8.5212 1.1394C8.39856 0.813703 8.18164 0.547785 7.90785 0.387496C7.63407 0.227207 7.32058 0.182594 7.02144 0.261349L1.34959 1.7774C1.06118 1.85454 0.803866 2.04263 0.619634 2.31098C0.435403 2.57932 0.335139 2.91207 0.335205 3.25492C0.335205 19.4577 11.6734 32.5653 25.6404 32.5653C25.9364 32.5655 26.2239 32.4494 26.4556 32.236C26.6874 32.0226 26.8499 31.7245 26.9165 31.3903L28.2254 24.8208C28.293 24.4726 28.2536 24.108 28.1142 23.7898C27.9747 23.4716 27.7439 23.2197 27.4613 23.0773Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div class="text-white font-regular flex flex-col">
                  <p>+(506) 88888888</p>
                  <p>+(506) 88888888</p>
                </div>
              </div>
              <div class="flex gap-2 mt-5 justify-center">
                <div>
                  <svg
                    width="29"
                    height="25"
                    viewBox="0 0 29 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.7286 8.83681C27.9413 8.64341 28.2576 8.82433 28.2576 9.13003V21.8884C28.2576 23.5416 27.0851 24.883 25.6399 24.883H2.95293C1.50773 24.883 0.335205 23.5416 0.335205 21.8884V9.13627C0.335205 8.82433 0.64606 8.64965 0.864204 8.84305C2.08581 9.9286 3.70553 11.3074 9.2682 15.9303C10.4189 16.8911 12.3604 18.9125 14.2964 18.9C16.2434 18.9187 18.223 16.8537 19.3301 15.9303C24.8928 11.3074 26.507 9.92236 27.7286 8.83681ZM14.2964 16.8973C15.5617 16.9223 17.3832 15.0756 18.2994 14.3145C25.5363 8.30651 26.0871 7.78245 27.7559 6.28514C28.0722 6.0044 28.2576 5.56768 28.2576 5.10601V3.92064C28.2576 2.26736 27.0851 0.926025 25.6399 0.926025H2.95293C1.50773 0.926025 0.335205 2.26736 0.335205 3.92064V5.10601C0.335205 5.56768 0.520627 5.99816 0.836936 6.28514C2.50574 7.77622 3.05655 8.30651 10.2935 14.3145C11.2097 15.0756 13.0312 16.9223 14.2964 16.8973Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p class="text-white font-normal">
                  elartedeforjar@gmail.com
                </p>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 sm:order-2 lg:order-3">
              <ul class="lg:flex lg:flex-wrap items-center mb-6 text-lg font-medium text-white text-center lg:leading-none leading-10">
                <li className="">
                  <a href="#" class="hover:underline lg:me-6">
                    BLOG
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline lg:me-6">
                    CATALOGO
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline lg:me-6">
                    ACERCA DE
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline lg:me-6">
                    CONTACTOS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
}