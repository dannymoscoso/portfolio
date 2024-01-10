import React from "react"
export const Title = () => {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 100 100"
    //   width="100vw"
    //   height="100vh"
    //   // style={svgStyle}
    // >
    //   fuck
    // </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: "100vh", width: "100vw" }}
    >
      <rect fill="#000000" width="100%" height="100%" />

      <circle fill="none" stroke="#004474" cx="50%" cy="50%" r="50%">
        <animate
          attributeName="r"
          values="0%;50%;0%"
          dur="5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle fill="none" stroke="#114474" cx="50%" cy="50%" r="50%">
        <animate
          attributeName="r"
          values="0%;10%;0%"
          dur="5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle fill="none" stroke="#224474" cx="50%" cy="50%" r="50%">
        <animate
          attributeName="r"
          values="0%;54%;0%"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
      <circle fill="none" stroke="#334474" cx="50%" cy="50%" r="50%">
        <animate
          attributeName="r"
          values="0%;56%;0%"
          dur="15s"
          repeatCount="indefinite"
        />
      </circle>
      <circle fill="none" stroke="#664474" cx="50%" cy="50%" r="50%">
        <animate
          attributeName="r"
          values="0%;58%;0%"
          dur="20s"
          repeatCount="indefinite"
        />
      </circle>

      <circle fill="none" stroke="#DD4474" cx="50%" cy="50%" r="50%">
        <animate
          attributeName="r"
          values="0%;40%;0%"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
      <circle fill="none" stroke="#FF4474" cx="50%" cy="50%" r="50%">
        <animate
          attributeName="r"
          values="0%;10%;0%"
          dur="100s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  )
}
