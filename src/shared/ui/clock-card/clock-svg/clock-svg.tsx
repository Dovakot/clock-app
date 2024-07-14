import React from "react";

export const ClockSvg = () => (
  <div
    className="card-clock__clock"
    aria-label="Время"
  >
    <svg
      className="clock-svg"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
    >
      <ellipse
        className="clock-svg__back"
        id="SvgjsEllipse1006"
        rx={50}
        ry={50}
        cx={50}
        cy={50}
        fill="#f6f5f3"
        fillOpacity={1}
      />
      <rect
        id="SvgjsRect1007"
        width="2.5"
        height={5}
        x="48.75"
        y={9}
        transform="rotate(330 50 50)"
        fill="#c5c5c4"
      />
      <rect
        id="SvgjsRect1008"
        width="2.5"
        height={5}
        x="48.75"
        y={9}
        transform="rotate(300 50 50)"
        fill="#c5c5c4"
      />
      <rect
        id="SvgjsRect1009"
        width="2.5"
        height={5}
        x="48.75"
        y={9}
        transform="rotate(270 50 50)"
        fill="#c5c5c4"
      />
      <rect
        id="SvgjsRect1010"
        width="2.5"
        height={5}
        x="48.75"
        y={9}
        transform="rotate(240 50 50)"
        fill="#c5c5c4"
      />
      <rect
        id="SvgjsRect1011"
        width="2.5"
        height={5}
        x="48.75"
        y={9}
        transform="rotate(210 50 50)"
        fill="#c5c5c4"
      />
      <rect
        id="SvgjsRect1012"
        width="2.5"
        height={5}
        x="48.75"
        y={9}
        transform="rotate(180 50 50)"
        fill="#c5c5c4"
      />
      <rect
        id="SvgjsRect1013"
        width="2.5"
        height={5}
        x="48.75"
        y={9}
        transform="rotate(150 50 50)"
        fill="#c5c5c4"
      />
      <rect
        id="SvgjsRect1014"
        width="2.5"
        height={5}
        x="48.75"
        y={9}
        transform="rotate(120 50 50)"
        fill="#c5c5c4"
      />
      <rect
        id="SvgjsRect1015"
        width="2.5"
        height={5}
        x="48.75"
        y={9}
        transform="rotate(90 50 50)"
        fill="#c5c5c4"
      />
      <rect
        id="SvgjsRect1016"
        width="2.5"
        height={5}
        x="48.75"
        y={9}
        transform="rotate(60 50 50)"
        fill="#c5c5c4"
      />
      <rect
        id="SvgjsRect1017"
        width="2.5"
        height={5}
        x="48.75"
        y={9}
        transform="rotate(30 50 50)"
        fill="#c5c5c4"
      />
      <rect
        id="SvgjsRect1018"
        width="2.5"
        height={5}
        x="48.75"
        y={9}
        fill="#c5c5c4"
      />
      <rect
        className="clock-svg__arrow clock-svg__arrow--hour"
        id="SvgjsRect1019"
        width="3.25"
        height={17}
        x="48.375"
        y={33}
        fill="#212121"
        style={{ transform: "rotate(127.5deg)" }}
      />
      <rect
        className="clock-svg__arrow clock-svg__arrow--minute"
        id="SvgjsRect1020"
        width="3.25"
        height={29}
        x="48.375"
        y={20}
        fill="#212121"
        style={{ transform: "rotate(810deg)" }}
      />
      <ellipse
        className="clock-svg__point"
        id="SvgjsEllipse1021"
        rx="3.75"
        ry="3.75"
        cx={50}
        cy={50}
        fill="#212121"
      />
      <rect
        className="clock-svg__arrow clock-svg__arrow--second"
        id="SvgjsRect1022"
        width="1.5"
        height={31}
        x="49.25"
        y={19}
        fill="#ed0600"
        style={{ transform: "rotate(48318deg)" }}
      />
      <ellipse
        className="clock-svg__point"
        id="SvgjsEllipse1023"
        rx="1.75"
        ry="1.75"
        cx={50}
        cy={50}
        fill="#ed0600"
      />
      <defs id="SvgjsDefs1001" />
    </svg>

    {/* <svg
      className="clock-svg"
      width={400}
      height={401}
      viewBox="0 0 400 401"
      fill="none"
    >
      <g clipPath="url(#clip0_1_312)">
        <path
          className="clock-svg__back"
          d="M200 400.099C310.457 400.099 400 310.556 400 200.099C400 89.6416 310.457 0.0985718 200 0.0985718C89.5431 0.0985718 0 89.6416 0 200.099C0 310.556 89.5431 400.099 200 400.099Z"
          fill="black"
          fillOpacity="0.06"
        />
        <path
          className="clock-svg__hand"
          d="M268.356 170.847L261.839 159.599L203 193.686L209.517 204.934L268.356 170.847Z"
          fill="white"
        />
        <path
          className="clock-svg__hand"
          d="M138.921 304.918L150.447 310.932L204.105 208.088L192.58 202.075L138.921 304.918Z"
          fill="white"
        />
        <path
          d="M200 215.099C208.284 215.099 215 208.383 215 200.099C215 191.814 208.284 185.099 200 185.099C191.716 185.099 185 191.814 185 200.099C185 208.383 191.716 215.099 200 215.099Z"
          fill="white"
        />
        <path
          className="clock-svg__second-hand"
          d="M121.401 113.599L117 117.676L201.276 208.636L205.677 204.558L121.401 113.599Z"
          fill="white"
        />
        <path
          d="M200 207.099C203.866 207.099 207 203.965 207 200.099C207 196.233 203.866 193.099 200 193.099C196.134 193.099 193 196.233 193 200.099C193 203.965 196.134 207.099 200 207.099Z"
          fill="white"
        />
        <path
          d="M122.33 55.5704L113.67 60.5704L123.67 77.8909L132.33 72.8909L122.33 55.5704Z"
          fill="white"
        />
        <path
          d="M60.4719 113.768L55.4719 122.429L72.7924 132.429L77.7924 123.768L60.4719 113.768Z"
          fill="white"
        />
        <path d="M36 195.099V205.099H56V195.099H36Z" fill="white" />
        <path
          d="M55.4719 277.768L60.4719 286.429L77.7924 276.429L72.7924 267.768L55.4719 277.768Z"
          fill="white"
        />
        <path
          d="M113.67 339.627L122.33 344.627L132.33 327.306L123.67 322.306L113.67 339.627Z"
          fill="white"
        />
        <path d="M195 364.099H205V344.099H195V364.099Z" fill="white" />
        <path
          d="M277.67 344.627L286.33 339.627L276.33 322.306L267.67 327.306L277.67 344.627Z"
          fill="white"
        />
        <path
          d="M339.528 286.429L344.528 277.768L327.208 267.768L322.208 276.429L339.528 286.429Z"
          fill="white"
        />
        <path d="M364 205.099V195.099H344V205.099H364Z" fill="white" />
        <path
          d="M344.528 122.429L339.528 113.768L322.208 123.768L327.208 132.429L344.528 122.429Z"
          fill="white"
        />
        <path
          d="M286.33 60.5704L277.67 55.5704L267.67 72.8909L276.33 77.8909L286.33 60.5704Z"
          fill="white"
        />
        <path d="M205 36.0986H195V56.0986H205V36.0986Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_1_312">
          <rect
            width={400}
            height={400}
            fill="white"
            transform="translate(0 0.0985718)"
          />
        </clipPath>
      </defs>
    </svg> */}
  </div>
);
