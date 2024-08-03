import React from "react";

const renderSvg = (svgCode, sizeClass) => (
  <span
    className={`svg-icon ${sizeClass}`}
    dangerouslySetInnerHTML={{ __html: svgCode }}
  />
);

export default renderSvg;
