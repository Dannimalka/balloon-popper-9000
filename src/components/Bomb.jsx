import React, { useState } from "react";

const Bomb = () => {
  const [animationDelay, setAnimationDelay] = useState(
    Math.floor(Math.random() * 15) + 5
  );
  const [animationDuration, setAnimationDuration] = useState(
    Math.floor(Math.random() * 3) + 2
  );
  const [translateX, setTranslateX] = useState(
    Math.floor(Math.random() * 80) + 5
  );

  return (
    <div
      className="bomb_container"
      style={{
        animationDelay: `${animationDelay}s`,
        animationDuration: `${animationDuration}s`,
        left: `${translateX}%`,
      }}
    >
      <svg id="svg8526" viewBox="0 0 214.4 221.65" version="1.1">
        <g id="layer1" transform="translate(-332.37 -231.28)">
          <path
            id="path26649"
            color="#000000"
            d="m533.08 235.77-6.2869 1.7963c-0.0862-0.007-0.30896 0.004-0.44547 0-5.8458-0.17388-11.757 0.39302-17.738 1.7963-11.818 2.7726-23.124 9.4807-32.783 20.657-11.496-4.4723-22.335-3.7541-26.046 2.4699l-3.5925 6.0624c-36.886-7.6032-76.174 8.2651-96.549 42.437-25.735 43.159-11.5 98.882 31.659 124.62 43.159 25.734 98.882 11.725 124.62-31.435 20.391-34.199 15.745-76.244-8.533-105.08l3.5925-6.0624c3.3856-5.6716-0.0862-14.443-7.8583-22.004 6.2762-6.6475 12.884-10.235 19.984-11.9 4.1113-0.96474 8.5394-1.1474 13.022-0.89813l6.7367 3.1435 1.1223-4.9397 3.8167-2.4699-4.0409-6.0624 4.939-6.5115-5.1639-0.89813-0.44548-4.7152z"
            fullrule="evenodd"
            stroke="#000"
            strokeWidth="9.1244"
          />
          <path
            id="path26367"
            d="m1915-237.1a20.179 20.179 0 1 1 -40.357 0 20.179 20.179 0 1 1 40.357 0z"
            fullrule="evenodd"
            transform="matrix(3.8728 2.3092 -2.3092 3.8728 -7457.9 -3099.7)"
            stroke="#000"
            strokeWidth="1.0103"
            fill="#c91051"
          />
          <path
            id="path26369"
            color="#000000"
            d="m483.68 263.83c-14.131-8.4258-29.279-8.9471-33.834-1.3083l-8.893 14.843c-4.5582 7.6366 3.178 20.597 17.31 29.023 14.132 8.4262 29.329 9.1408 33.883 1.5015l8.893-14.843c4.5582-7.6367-3.2261-20.79-17.358-29.216z"
            fullrule="evenodd"
            stroke="#000"
            strokeWidth="4.5553"
            fill="#c91051"
          />
          <path
            id="path26371"
            fullrule="evenodd"
            color="#000000"
            fillOpacity=".48936"
            d="m451.26 259.99-8.0825 13.697c-0.74796 0.0287-1.5541-0.11712-2.254-0.0287-4.597 0.56259-8.1558 2.3163-10.078 5.2132-5.1301 7.7216 3.6364 20.894 19.597 29.446 13.962 7.4828 28.813 8.9549 35.736 4.0259-3.6536 1.1893-8.4798 1.0132-13.667-0.19256 0-0.0431-0.0718-0.0992 0-0.15017l8.9828-17.489c-2.5909-0.68617-5.3018-1.7159-7.9905-2.9306l-8.1356 17.36-10.221-4.6536 8.8513-18.195c-11.155-8.2856-16.77-19.343-12.738-26.108zm-73.237 27.153c-9.559 6.7521-17.945 15.592-24.326 26.291-24.398 40.924-11.02 93.827 29.903 118.23 23.975 14.295 52.08 15.447 76.154 5.8624-14.147-1.7046-28.206-6.1995-41.234-13.967-47.33-28.221-64.302-87.79-40.497-136.42z"
          />
          <path
            id="path26373"
            d="m1912.2-248.9a4.1037 5.3664 0 1 1 -8.2075 0 4.1037 5.3664 0 1 1 8.2075 0z"
            fillOpacity=".92021"
            fullrule="evenodd"
            transform="matrix(3.475 -2.8731 2.8731 3.475 -5437 6685.1)"
            fill="#fff"
          />
          <path
            id="path26375"
            d="m1912.2-248.9a4.1037 5.3664 0 1 1 -8.2075 0 4.1037 5.3664 0 1 1 8.2075 0z"
            fillOpacity=".92021"
            fullrule="evenodd"
            transform="matrix(2.0469 -1.6923 1.6923 2.0469 -3006.3 4115)"
            fill="#fff"
          />
          <path
            id="path26377"
            stroke="#000"
            strokeWidth="4.5553"
            fill="none"
            d="m483.68 263.83c-14.131-8.4258-29.279-8.9471-33.834-1.3083l-8.893 14.843c-4.5582 7.6366 3.178 20.597 17.31 29.023 14.132 8.4262 29.329 9.1408 33.883 1.5015l8.893-14.843c4.5582-7.6367-3.2261-20.79-17.358-29.216z"
          />
          <path
            id="path26379"
            d="m513.1 259.12c-10.479 2.4584-19.946 8.6752-28.74 23.576l-0.6754 0.89813c-1.978 1.9218-6.8265 1.4987-11.227-1.1227-4.4806-2.6713-6.9709-6.5659-6.062-9.2059 0.25148-0.42823 0.89813-1.5717 0.89813-1.5717 11.069-18.362 25.835-28.701 41.314-32.333 5.9808-1.4032 11.892-1.9701 17.738-1.7963 0.1437 0.004 0.29458-0.006 0.38081 0.002l6.2646-1.6906 0.56043 4.563 5.1934 1.0306-5.0166 6.5142 4.135 6.0209-3.9956 2.4776-1.123 4.9277-6.6368-3.1139c-4.4828-0.24932-8.8994-0.14083-13.011 0.82391z"
            fullrule="evenodd"
            stroke="#000"
            strokeWidth="4.5553"
            fill="#ccab7f"
          />
          <path
            id="path26383"
            color="#000000"
            d="m475.41 261.18c-0.28021 12.349 5.4441 19.469 8.9813 20.208"
            strokeOpacity=".68617"
            stroke="#000"
            strokeLinecap="round"
            strokeWidth="2.2811"
            fill="none"
          />
          <path
            id="path26385"
            color="#000000"
            d="m486.06 251.84c-1.8782 12.208 2.8747 20.011 6.2869 21.202"
            strokeOpacity=".68617"
            stroke="#000"
            strokeLinecap="round"
            strokeWidth="2.2811"
            fill="none"
          />
          <path
            id="path26387"
            color="#000000"
            d="m498.36 243.31c-4.199 11.616-1.0411 20.189 2.0772 22.016"
            strokeOpacity=".68617"
            stroke="#000"
            strokeLinecap="round"
            strokeWidth="2.2811"
            fill="none"
          />
          <path
            id="path26389"
            color="#000000"
            d="m511.77 238.56c-6.3013 10.624-4.8054 19.637-2.088 22.015"
            strokeOpacity=".68617"
            stroke="#000"
            strokeLinecap="round"
            strokeWidth="2.2811"
            fill="none"
          />
          <path
            id="path26391"
            fillOpacity=".68627"
            d="m533.08 235.77-6.0628 1.7963a1.1407 1.1407 0 0 0 0 -0.22418 1.1407 1.1407 0 0 0 0 -0.22417 1.1407 1.1407 0 0 0 0 -0.22417 1.1407 1.1407 0 0 0 -0.22273 -0.22418 1.1407 1.1407 0 0 0 -0.22274 -0.22417 1.1407 1.1407 0 0 0 -0.22274 -0.22417 1.1407 1.1407 0 0 0 -0.22273 0 1.1407 1.1407 0 0 0 -0.22274 0 1.1407 1.1407 0 0 0 -0.22274 0 1.1407 1.1407 0 0 0 -0.22273 0.22417 1.1407 1.1407 0 0 0 -0.22274 0 1.1407 1.1407 0 0 0 -0.22274 0.22417c-0.26584 0.29603-0.42392 0.60283-0.67539 0.89814-1.1949 0.0503-2.3826 0.16094-3.5925 0.22417l0.67539 1.7963c-0.98435 0.0877-1.6411 0.47781-2.4702 0.89814-3.2807 1.6652 0.59636 1.2225 1.123 2.2453 0.10059 0.14514-2.6017 1.0592-2.6944 1.3472-0.28741 0.87162 0.91178 2.5723 0.67539 3.368-0.30177 0.93995-2.213 1.2355-2.4695 2.0208-0.25867 0.80006 0.89454 1.8078 2.0212 2.6944-0.38799 3.0948-0.10059 5.6 1.1223 7.1851a1.1407 1.1407 0 0 0 0.22274 0.22417 1.1407 1.1407 0 0 0 0.22273 0 1.1407 1.1407 0 0 0 0.22274 0.22418 1.1407 1.1407 0 0 0 0.22274 0 1.1407 1.1407 0 0 0 0.22274 0 1.1407 1.1407 0 0 0 0.22273 -0.22418 1.1407 1.1407 0 0 0 0.22274 0 1.1407 1.1407 0 0 0 0.22274 -0.22417 1.1407 1.1407 0 0 0 0.22273 -0.22417 1.1407 1.1407 0 0 0 0 -0.22418 1.1407 1.1407 0 0 0 0 -0.22417 1.1407 1.1407 0 0 0 0 -0.22417 1.1407 1.1407 0 0 0 0 -0.22418 1.1407 1.1407 0 0 0 -0.22273 -0.22417c-0.28741-0.37075-0.52451-1.1307-0.6754-2.0208 0.56762 0.19256 2.3538 0.89569 2.4702 1.1227 0.21556 0.42249 0.46703 0.7142 0.6754 1.1227 1.0346 0.0144 2.098-0.0575 3.1427 0l6.7367 3.1435 1.1223-4.9397 3.8167-2.4699-4.0409-6.0624 4.939-6.5115-5.1639-0.89814-0.44548-4.7152z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Bomb;
