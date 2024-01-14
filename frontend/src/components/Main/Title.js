import React from "react"
export const Title = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: "100vh", width: "100vw" }}
    >
      <rect fill="#000000" width="100%" height="100%" />

      <circle fill="none" stroke="#14ad47" cx="50%" cy="50%" r="50%">
        <animate
          attributeName="r"
          values="0%;50%;0%"
          dur="5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle fill="none" stroke="#002E00" cx="50%" cy="50%" r="50%">
        <animate
          attributeName="r"
          values="0%;10%;0%"
          dur="5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle fill="none" stroke="#004700" cx="50%" cy="50%" r="50%">
        <animate
          attributeName="r"
          values="0%;54%;0%"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
      <circle fill="none" stroke="#006100" cx="50%" cy="50%" r="50%">
        <animate
          attributeName="r"
          values="0%;56%;0%"
          dur="15s"
          repeatCount="indefinite"
        />
      </circle>
      <circle fill="none" stroke="#007A14" cx="50%" cy="50%" r="50%">
        <animate
          attributeName="r"
          values="0%;58%;0%"
          dur="20s"
          repeatCount="indefinite"
        />
      </circle>

      <circle fill="none" stroke="#00942E" cx="50%" cy="50%" r="50%">
        <animate
          attributeName="r"
          values="0%;40%;0%"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
      <circle fill="none" stroke="#14ad47" cx="50%" cy="50%" r="50%">
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
