"use client";
import { avigeaFont } from "@/utils/fonts";
import "./hero_comp.css";
import Link from "next/link";
import { motion as m } from "framer-motion";

const HeroHeader = () => {
  const svgVar = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };
  const infinite_scroll = [
    "Infusing Life into Technology",
    "One Pixel at a Time",
    "Infusing Life into Technology",
    "One Pixel at a Time",
    "Infusing Life into Technology",
    "One Pixel at a Time",
    "Infusing Life into Technology",
    "One Pixel at a Time",
  ];
  return (
    <div className="flex flex-col items-center w-full m-auto mb-4 hero-header">
      <div className="flex justify-between w-11/12 m-auto max-w-screen-2xl lg:gap-10 hero-header__wrapper">
        <div className="header__heading">
          <h1
            className={`${avigeaFont.className} lg:text-13xl xl:text-15xl md:text-10xl text-5xl`}
          >
            Experience <br></br>Designer.
          </h1>
          <h3 className="mt-6 text-sm md:mt-8 md:text-3xl">
            Currently <Link href={"https://www.hdfcbank.com/"} target="_blank">@HDFC</Link>,
            Previously <Link href={"https://www.adobe.com/in/"} target="_blank">@Adobe</Link>
          </h3>
        </div>
        <div className="header__animation">
          <m.div
            className="relative h-full ml-auto svg__wrapper"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.5 }}
          >
            <m.svg
              width="257"
              height="253"
              viewBox="0 0 257 253"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="z-20 -left-32 -bottom-1/3 lg:top-0 lg:-left-16 xl:-left-5 xl:top-0 md:top-0 md:-left-28 sm:-left-12"
              variants={svgVar}
            >
              <path
                d="M105.82 24.5547L140.058 62.0935L140.32 62.3807L140.663 62.1977L186.412 37.7837L183.037 88.1987L183.01 88.6033L183.4 88.7133L233.047 102.706L194.063 136.482L193.757 136.747L193.954 137.102L218.447 181.296L166.659 178.655L166.27 178.635L166.155 179.006L151.131 227.542L116.892 190.003L116.63 189.716L116.287 189.899L70.5384 214.313L73.913 163.898L73.9401 163.493L73.5497 163.383L23.9034 149.391L62.8867 115.615L63.1932 115.349L62.9967 114.994L38.5033 70.8001L90.2917 73.4416L90.6798 73.4614L90.7948 73.0902L105.82 24.5547Z"
                fill="#E3C9EB"
                stroke="#363636"
              />
              <path
                d="M86.9715 123.57C91.1586 122.176 94.198 123.209 94.9791 125.556C95.5738 127.342 94.6307 129.226 92.8705 129.812C91.1103 130.398 89.2531 129.446 88.6761 127.713C88.33 126.672 88.4816 125.615 89.0064 124.788C88.7041 124.859 88.3752 124.939 88.0819 125.037C84.0814 126.368 83.004 130.43 84.5129 134.964C85.9686 139.337 89.1317 141.899 93.2655 140.523C96.1191 139.573 97.7912 137.299 98.0591 134.632L98.6192 134.446C98.5548 139.059 96.66 142.444 92.4462 143.847C87.1389 145.613 82.2338 142.891 80.2811 137.024C78.2396 130.89 80.8642 125.602 86.9715 123.57ZM114.533 133.741C114.755 134.408 115.057 134.603 115.591 134.426C115.591 134.426 115.991 134.293 116.107 133.839C116.328 134.506 115.759 136.088 113.759 136.754C112.185 137.277 110.888 136.85 110.16 135.285C109.723 137.09 108.425 138.529 106.478 139.177C103.651 140.118 101.447 138.659 100.462 135.699L98.5093 129.831C98.2963 129.191 97.7188 128.613 97.0612 128.417L96.759 128.311L96.5726 127.751L100.725 125.45L101.818 125.087L104.765 133.941C105.422 135.914 106.559 136.839 107.892 136.395C109.146 135.978 109.689 134.583 109.299 132.787L107.266 126.68C106.991 126.12 106.502 125.631 105.915 125.471L105.613 125.364L105.427 124.804L109.552 122.512L110.672 122.14L114.533 133.741ZM123.094 132.521L123.423 132.619L123.609 133.179L116.968 135.389L116.782 134.829L116.96 134.563C117.36 133.985 117.485 133.203 117.272 132.563L114.582 124.482C114.369 123.842 113.792 123.264 113.134 123.068L112.832 122.961L112.646 122.401L116.798 120.101L117.891 119.737L118.264 120.857C118.718 119.729 119.66 118.822 120.861 118.423C123.287 117.615 125.269 119.296 124.859 121.447C124.618 122.505 123.845 123.206 122.938 123.508C122.405 123.686 121.854 123.721 121.347 123.623C120.743 123.498 119.783 123.107 119.393 121.489C118.992 121.711 118.788 122.253 119.045 123.204L121.672 131.098C121.885 131.738 122.481 132.281 123.094 132.521ZM123.859 114.137C123.398 112.75 124.154 111.195 125.541 110.733C126.954 110.263 128.492 111.055 128.953 112.442C129.415 113.828 128.65 115.357 127.236 115.827C125.849 116.289 124.321 115.524 123.859 114.137ZM134.892 128.595L135.221 128.693L135.407 129.253L128.766 131.463L128.58 130.903L128.758 130.636C129.158 130.059 129.283 129.276 129.07 128.636L126.381 120.555C126.168 119.915 125.59 119.337 124.932 119.142L124.63 119.035L124.444 118.475L128.596 116.175L129.689 115.811L133.47 127.172C133.684 127.812 134.279 128.354 134.892 128.595ZM133.552 122.197C132.114 117.877 134.089 114.02 138.437 112.574C142.73 111.145 146.48 113.066 147.892 117.307C149.321 121.6 147.435 125.546 143.087 126.993C138.847 128.404 134.972 126.465 133.552 122.197ZM137.997 120.777C139.098 124.084 140.91 125.881 142.537 125.339C144.217 124.78 144.601 122.194 143.5 118.887C142.382 115.526 140.543 113.739 138.889 114.289C137.262 114.831 136.879 117.417 137.997 120.777ZM164.252 117.194C164.474 117.861 164.776 118.056 165.31 117.879C165.31 117.879 165.71 117.746 165.825 117.292C166.047 117.959 165.478 119.541 163.477 120.207C161.904 120.73 160.606 120.303 159.878 118.738C159.442 120.543 158.144 121.982 156.197 122.63C153.37 123.571 151.166 122.112 150.181 119.152L148.228 113.284C148.015 112.644 147.438 112.066 146.78 111.87L146.478 111.764L146.291 111.204L150.443 108.903L151.537 108.539L154.484 117.394C155.141 119.367 156.278 120.292 157.611 119.848C158.865 119.431 159.408 118.036 159.017 116.24L156.985 110.133C156.709 109.573 156.221 109.084 155.634 108.924L155.332 108.817L155.146 108.257L159.271 105.965L160.391 105.593L164.252 117.194ZM173.347 113.663C172.495 111.103 165.33 112.54 163.963 108.433C163.164 106.032 164.899 103.767 168.312 102.63C171.806 101.468 174.108 102.509 174.632 104.082C174.995 105.176 174.444 106.278 173.404 106.624C172.337 106.979 171.235 106.427 170.889 105.387C170.694 104.8 170.774 104.152 171.094 103.689C170.801 103.52 170.001 103.52 169.227 103.777C168.001 104.186 167.52 105.057 167.778 105.83C168.603 108.31 175.741 106.705 177.232 111.185C178.067 113.692 176.404 115.905 172.777 117.112C168.936 118.39 166.226 117.455 165.622 115.642C165.214 114.415 165.828 113.144 167.028 112.745C168.175 112.363 169.454 113.004 169.845 114.177C170.067 114.844 169.933 115.511 169.613 116.062C169.942 116.159 170.502 116.24 171.515 115.902C173.115 115.37 173.631 114.517 173.347 113.663Z"
                fill="#363636"
              />
            </m.svg>
            <m.svg
              width="222"
              height="159"
              viewBox="0 0 222 159"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="-top-4 -right-18 xl:top-16 xl:right-0 lg:-right-14 lg:top-14 md:top-14 md:-right-16 sm:-right-16 sm:-top-5"
              variants={svgVar}
            >
              <path
                d="M34.5442 1.92091L181.167 63.4592C202.686 72.4911 212.81 97.258 203.778 118.778C194.746 140.297 169.979 150.42 148.46 141.389L1.83688 79.8502L34.5442 1.92091Z"
                fill="#BCCBEA"
                stroke="#363636"
                strokeWidth="1.63635"
              />
              <path
                d="M78.5508 53.3974L78.5788 53.4092C81.2197 54.5176 83.0986 56.5135 84.2153 59.3969C84.5783 60.4932 84.7831 61.3914 84.8296 62.0914C84.7275 62.1253 83.7568 62.2283 81.9175 62.4003C81.8575 61.8373 81.7008 61.1514 81.4476 60.3426C80.6121 58.2798 79.2798 56.8645 77.4508 56.0968C75.5937 55.3174 73.6372 55.3633 71.5812 56.2346C69.546 57.2134 68.1093 58.7013 67.2711 60.6983C66.2997 63.0127 66.3532 65.3565 67.4316 67.7299C68.3117 69.3725 69.4983 70.5071 70.9915 71.1338L71.2854 71.2572C72.9279 71.9465 74.7469 71.9142 76.7427 71.1604C77.6312 70.743 78.3053 70.3399 78.7649 69.9511L80.6076 72.1898L80.5841 72.2458C80.0201 72.7006 79.3397 73.1449 78.5429 73.5788C75.5764 74.946 72.7213 75.0538 69.9777 73.9023C67.2527 72.7586 65.3313 70.668 64.2135 67.6305C63.3713 64.8513 63.4868 62.1833 64.56 59.6263L64.5952 59.5423C65.6801 56.9574 67.5213 55.0026 70.1187 53.6781C73.0431 52.3591 75.8538 52.2655 78.5508 53.3974ZM92.9848 67.6874L93.3347 67.8343C94.2586 68.222 95.1016 68.8941 95.8636 69.8505L95.8577 69.8645C94.7216 71.4731 94.1172 72.3116 94.0447 72.3799C93.3955 71.416 92.7257 70.7891 92.0351 70.4992L91.8112 70.4052C90.9153 70.0292 89.9877 70.0296 89.0284 70.4062C88.2527 70.816 87.4986 71.8935 86.7662 73.6386L84.1812 79.7977L84.1356 79.828L81.5179 78.7293L81.4936 78.6697L87.0102 65.5256L87.064 65.5152L89.6816 66.6138L89.6979 66.6536L89.2749 67.6614C90.6656 67.2244 91.9023 67.233 92.9848 67.6874ZM98.5054 76.0302L105.294 78.8796L105.3 78.8656C105.341 78.3231 105.205 77.6291 104.89 76.7836C104.435 75.8793 103.788 75.2509 102.948 74.8984C101.67 74.3618 100.336 74.5978 98.9468 75.6063L98.5054 76.0302ZM103.9 72.1204L104.306 72.2908C105.669 72.8626 106.751 73.9589 107.552 75.5795C107.913 76.4446 108.119 77.1454 108.168 77.6819C108.344 79.1716 108.156 80.5744 107.604 81.8902L107.427 82.3102C107.318 82.5715 107.244 82.6943 107.207 82.6786L97.1842 78.4721C96.9798 79.5607 97.021 80.4561 97.3081 81.1583C97.7232 82.2874 98.4114 83.0537 99.3726 83.4571C100.586 83.9663 101.859 83.7819 103.194 82.9041C103.482 82.6627 103.642 82.5433 103.673 82.5457C104.973 83.9473 105.628 84.6613 105.639 84.6878C105.371 84.9596 104.872 85.3261 104.14 85.7875C102.091 86.8261 100.133 86.9538 98.2667 86.1705L98.2107 86.147C96.2883 85.3401 94.9949 83.793 94.3305 81.5056C93.9387 79.7716 94.0758 78.1114 94.7416 76.5249L94.7651 76.4689C95.6816 74.2852 97.2923 72.788 99.5973 71.9773C101.225 71.5518 102.659 71.5995 103.9 72.1204ZM119.802 78.7945C121.36 79.4486 122.446 80.6013 123.059 82.2525L123.705 80.7127L123.759 80.7024L126.405 81.8127L126.421 81.8525L120.816 95.2066L120.777 95.2228L118.131 94.1125L118.101 94.0668L118.671 92.709C117.144 93.4182 115.559 93.4281 113.916 92.7388L113.902 92.7329C111.859 91.8751 110.47 90.3208 109.735 88.0697C109.231 86.2887 109.328 84.5677 110.025 82.9066L110.031 82.8926C110.893 80.8396 112.43 79.3994 114.643 78.5721C116.421 78.0232 118.141 78.0973 119.802 78.7945ZM112.733 84.0265C112.114 85.501 112.241 86.9758 113.115 88.451C113.644 89.1779 114.226 89.6746 114.86 89.9409L115.168 90.0702C116.064 90.4462 117.085 90.4465 118.23 90.0711C119.483 89.5434 120.365 88.6729 120.874 87.4598L120.88 87.4458C121.506 85.9526 121.377 84.4825 120.492 83.0353C119.972 82.3122 119.371 81.8078 118.69 81.5219L118.466 81.4279C117.346 80.9579 116.116 81.0508 114.776 81.7068C113.81 82.3107 113.128 83.084 112.733 84.0265ZM133.983 76.6626L136.671 77.7906L136.679 77.8105L133.718 84.8655L137.189 86.3225L137.197 86.3424L136.069 89.03L136.049 89.0381L132.578 87.5811L129.74 94.3422C129.521 94.8648 129.551 95.2891 129.832 95.6153C130.019 95.8478 130.244 96.0188 130.505 96.1285C130.869 96.2813 131.438 96.3773 132.212 96.4167L132.347 96.4077L132.292 99.3643C132.029 99.3637 131.614 99.3322 131.047 99.27C130.387 99.1687 129.833 99.024 129.385 98.836L129.357 98.8242C128.471 98.4522 127.754 97.8329 127.206 96.9666C127.115 96.8184 127.005 96.5967 126.876 96.3013L126.768 95.8935C126.701 95.6348 126.664 95.3946 126.659 95.1727C126.646 94.4977 126.759 93.8755 126.998 93.3063L129.876 86.4472L127.889 85.613L127.88 85.5931L129.008 82.9055L129.028 82.8974L131.016 83.7316L133.983 76.6626ZM143.58 89.0214L137.958 102.418L137.938 102.426L135.25 101.298L135.242 101.278L140.865 87.8817L143.58 89.0214ZM145.139 81.345L145.251 81.392C145.662 81.5644 145.983 81.8856 146.213 82.3556C146.421 82.8816 146.428 83.3733 146.236 83.8306L146.201 83.9145C146.025 84.3345 145.702 84.6598 145.232 84.8906C144.706 85.0979 144.214 85.1056 143.757 84.9137L143.673 84.8784C143.244 84.6982 142.92 84.3704 142.703 83.895C142.593 83.6074 142.539 83.3706 142.54 83.1846C142.535 82.9082 142.578 82.6627 142.668 82.448L142.715 82.336C142.895 81.9068 143.236 81.5779 143.738 81.3496L144.024 81.2557C144.441 81.1782 144.813 81.208 145.139 81.345ZM149.418 91.4713C149.426 91.5297 149.431 92.0805 149.432 93.1237L149.547 99.9882L149.601 102.645L153.478 98.938L157.676 94.9376L160.798 96.2477L154.954 101.698L151.245 105.162L149.151 107.132L146.729 106.115C146.72 106.111 146.706 105.738 146.689 104.995L146.52 98.2567L146.34 91.036L146.324 90.1729L149.418 91.4713ZM163.12 103.149L169.909 105.999L169.915 105.985C169.956 105.442 169.82 104.748 169.505 103.903C169.05 102.999 168.403 102.37 167.563 102.018C166.285 101.481 164.951 101.717 163.562 102.725L163.12 103.149ZM168.515 99.2397L168.921 99.41C170.283 99.9819 171.365 101.078 172.167 102.699C172.528 103.564 172.734 104.265 172.783 104.801C172.959 106.291 172.771 107.694 172.218 109.009L172.042 109.429C171.933 109.691 171.859 109.814 171.822 109.798L161.799 105.591C161.595 106.68 161.636 107.575 161.923 108.277C162.338 109.407 163.026 110.173 163.987 110.576C165.201 111.085 166.474 110.901 167.809 110.023C168.097 109.782 168.256 109.662 168.288 109.665C169.588 111.066 170.243 111.781 170.254 111.807C169.986 112.079 169.487 112.445 168.755 112.907C166.706 113.945 164.748 114.073 162.882 113.29L162.826 113.266C160.903 112.459 159.61 110.912 158.945 108.625C158.554 106.891 158.691 105.231 159.357 103.644L159.38 103.588C160.297 101.404 161.907 99.9073 164.212 99.0966C165.84 98.671 167.274 98.7187 168.515 99.2397Z"
                fill="#363636"
              />
            </m.svg>
            <m.svg
              width="244"
              height="216"
              viewBox="0 0 244 216"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="z-10 -bottom-16 -left-22 xl:bottom-5 xl:left-1/4 lg:bottom-3 lg:left-6 md:-bottom-14 md:-left-4 sm:-bottom-18 sm:left-0"
              variants={svgVar}
            >
              <path
                d="M113.011 25.5401C116.448 17.0972 128.427 17.1645 131.769 25.6455L151.454 75.5991C152.689 78.7328 155.267 81.1457 158.475 82.1712L210.683 98.8578C220.109 101.87 220.034 115.233 210.575 118.14L158.182 134.238C154.962 135.228 152.358 137.611 151.088 140.731L130.842 190.46C127.405 198.903 115.426 198.835 112.084 190.354L92.3994 140.401C91.1645 137.267 88.5868 134.854 85.3784 133.829L33.1698 117.142C23.7443 114.13 23.8194 100.767 33.2783 97.8603L85.6711 81.7618C88.8908 80.7725 91.4955 78.3887 92.7656 75.2691L113.011 25.5401Z"
                fill="#E7DCC8"
                stroke="#363636"
                strokeWidth="1.1134"
              />
              <path
                d="M71.4666 114.24C73.3649 114.24 75.047 113.111 75.047 111.717C75.047 108.353 65.3389 107.68 65.3389 102.417C65.3389 99.6778 68.0063 97.8034 71.9712 97.8034C75.6238 97.8034 78.1229 99.3654 78.1229 101.72C78.1229 103.186 77.1136 104.219 75.6478 104.219C74.1579 104.219 73.1246 103.138 73.1246 101.6C73.1246 100.951 73.3169 100.134 73.9657 99.6057C73.7014 99.5816 73.413 99.2933 72.4278 99.2933C70.5054 99.2933 69.1357 100.279 69.1357 101.528C69.1357 104.844 78.8438 104.628 78.8438 110.515C78.8438 113.663 76.0563 115.73 72.0673 115.73C69.0876 115.73 65.0986 114.6 65.0986 111.717C65.0986 110.107 66.3722 108.833 67.8861 108.833C69.5442 108.833 70.7937 110.347 70.7937 111.933C70.7937 112.846 70.3852 113.423 69.7124 113.952C69.9767 114.072 70.7457 114.24 71.4666 114.24ZM80.3734 112.966V104.532H79.244V103.042H80.3734C81.9114 103.042 82.8485 102.273 82.8485 100.807H84.3384V103.042H85.7562V104.532H84.3384V113.471C84.3384 114.096 84.5547 114.336 85.0112 114.336C85.0112 114.336 85.3957 114.336 85.588 114C85.588 114.6 84.7229 115.73 82.8966 115.73C81.3106 115.73 80.3734 114.865 80.3734 112.966ZM85.8416 109.266C85.8416 105.373 88.4849 102.778 92.4018 102.778C96.2706 102.778 98.7938 105.349 98.7938 109.17C98.7938 113.038 96.1985 115.73 92.2816 115.73C88.4609 115.73 85.8416 113.111 85.8416 109.266ZM89.8306 109.314C89.8306 112.294 90.8158 114.24 92.2816 114.24C93.7955 114.24 94.8048 112.245 94.8048 109.266C94.8048 106.238 93.7955 104.292 92.3057 104.292C90.8398 104.292 89.8306 106.286 89.8306 109.314ZM104.913 114.817L105.154 114.985V115.49H99.1702V114.985L99.3864 114.817C99.867 114.456 100.179 113.855 100.179 113.279V105.998C100.179 105.421 99.867 104.796 99.3864 104.46L99.1702 104.292V103.787L103.159 103.042H104.144V104.051C104.817 103.258 105.826 102.778 106.908 102.778C109.095 102.778 110.248 104.676 109.335 106.31C108.854 107.103 108.037 107.463 107.22 107.463C106.74 107.463 106.283 107.343 105.899 107.127C105.442 106.863 104.769 106.286 104.889 104.868C104.505 104.94 104.192 105.325 104.144 106.166V113.279C104.144 113.855 104.481 114.456 104.913 114.817ZM109.849 103.715L109.632 103.547V103.042H114.607V110.539C114.607 112.846 114.919 113.855 116.193 113.855C118.524 113.855 120.061 110.635 119.989 105.757C118.62 105.926 117.562 105.06 117.562 103.979C117.562 103.042 118.355 102.273 119.461 102.273C120.398 102.273 121.623 102.874 121.431 106.887C121.047 113.711 117.106 120.968 112.564 120.968C110.497 120.968 109.2 119.791 109.2 118.205C109.2 116.883 110.065 116.018 111.146 116.018C112.228 116.018 113.117 116.883 113.117 117.965C113.117 118.589 112.804 119.118 112.396 119.478C112.492 119.575 112.66 119.623 112.925 119.623C114.583 119.623 116.577 117.148 118.019 114.528C117.082 115.297 115.952 115.73 114.751 115.73C112.228 115.73 110.618 113.855 110.618 110.78V105.253C110.618 104.676 110.329 104.051 109.849 103.715ZM123.083 112.966V104.532H121.954V103.042H123.083C124.621 103.042 125.558 102.273 125.558 100.807H127.048V103.042H128.466V104.532H127.048V113.471C127.048 114.096 127.264 114.336 127.721 114.336C127.721 114.336 128.105 114.336 128.298 114C128.298 114.6 127.432 115.73 125.606 115.73C124.02 115.73 123.083 114.865 123.083 112.966ZM135.544 102.778C139.1 102.778 140.662 104.724 140.662 106.911C140.662 109.626 138.331 111.669 135.159 111.669C134.511 111.669 133.838 111.573 133.141 111.404C133.742 112.582 134.799 113.255 136.169 113.255C138.476 113.255 139.893 111.356 140.134 110.515H140.638C139.869 113.639 137.827 115.73 134.631 115.73C131.122 115.73 128.551 113.255 128.551 109.458C128.551 105.469 131.363 102.778 135.544 102.778ZM132.78 110.635C137.827 109.194 137.731 104.292 135.424 104.292C133.982 104.292 132.54 106.118 132.54 108.785C132.54 109.458 132.636 110.083 132.78 110.635ZM146.752 114.817L146.993 114.985V115.49H141.009V114.985L141.225 114.817C141.706 114.456 142.018 113.855 142.018 113.279V101.023C142.018 100.447 141.706 99.8219 141.225 99.4855L141.009 99.2933V98.8127L144.998 98.0678H145.983V113.279C145.983 113.855 146.32 114.456 146.752 114.817ZM153.018 114.817L153.258 114.985V115.49H147.275V114.985L147.491 114.817C147.972 114.456 148.284 113.855 148.284 113.279V101.023C148.284 100.447 147.972 99.8219 147.491 99.4855L147.275 99.2933V98.8127L151.264 98.0678H152.249V113.279C152.249 113.855 152.585 114.456 153.018 114.817ZM160.653 102.778C164.21 102.778 165.772 104.724 165.772 106.911C165.772 109.626 163.441 111.669 160.269 111.669C159.62 111.669 158.947 111.573 158.25 111.404C158.851 112.582 159.908 113.255 161.278 113.255C163.585 113.255 165.003 111.356 165.243 110.515H165.748C164.979 113.639 162.936 115.73 159.74 115.73C156.232 115.73 153.661 113.255 153.661 109.458C153.661 105.469 156.472 102.778 160.653 102.778ZM157.89 110.635C162.936 109.194 162.84 104.292 160.533 104.292C159.091 104.292 157.65 106.118 157.65 108.785C157.65 109.458 157.746 110.083 157.89 110.635ZM172.099 114.817L172.339 114.985V115.49H166.356V114.985L166.572 114.817C167.052 114.456 167.365 113.855 167.365 113.279V105.998C167.365 105.421 167.052 104.796 166.572 104.46L166.356 104.292V103.787L170.345 103.042H171.33V104.051C172.003 103.258 173.012 102.778 174.093 102.778C176.28 102.778 177.433 104.676 176.52 106.31C176.04 107.103 175.223 107.463 174.406 107.463C173.925 107.463 173.468 107.343 173.084 107.127C172.627 106.863 171.955 106.286 172.075 104.868C171.69 104.94 171.378 105.325 171.33 106.166V113.279C171.33 113.855 171.666 114.456 172.099 114.817Z"
                fill="#363636"
              />
            </m.svg>
          </m.div>
        </div>
      </div>
      <div className="w-full py-1 overflow-hidden md:py-5 hero-infinite-scroll">
        <ul className={`${avigeaFont.className} flex text-xs md:text-2xl gap-4 md:gap-12 tracking-wider w-max`}>
          {infinite_scroll.map((item, idx) => (
            <li key={`${idx}`} className="flex items-center gap-4 md:gap-12 whitespace-nowrap">
              {item}
              <svg
                width="22"
                height="22"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 md:w-6"
              >
                <path
                  d="M13.5 6.10352e-05L16.7031 5.76719L23.0459 3.95412L21.2329 10.297L27 13.5001L21.2329 16.7031L23.0459 23.046L16.7031 21.2329L13.5 27.0001L10.2969 21.2329L3.95406 23.046L5.76713 16.7031L0 13.5001L5.76713 10.297L3.95406 3.95412L10.2969 5.76719L13.5 6.10352e-05Z"
                  fill="#EEF0EB"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeroHeader;
