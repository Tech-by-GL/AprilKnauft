import * as React from "react";

const SVGComponent = (props: any) => (
  <svg
    className="logo"
    width={160}
    height={164}
    viewBox="0 0 160 164"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={160} height={164} fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#image0_6_1599"
          transform="translate(-0.050463) scale(0.0126543 0.0123457)"
        />
      </pattern>
      <image
        id="image0_6_1599"
        width={87}
        height={81}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default SVGComponent;
