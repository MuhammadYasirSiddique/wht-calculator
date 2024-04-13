import React from "react";

interface CustomScriptProps {
  src: string;
}

const CustomScript: React.FC = () => {
  const scriptSrc =
    "//www.topcreativeformat.com/910d27652150a343764eeb820d45c593/invoke.js";

  return (
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{ __html: scriptSrc }}
    />
  );
};

export default CustomScript;
