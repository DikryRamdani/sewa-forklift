import React from 'react';
import { useEffect } from "react";

function TawkChat() {
  useEffect(() => {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");

    script.async = true;
    script.src = "https://embed.tawk.to/6a91348fae1cfe3447e93e18/default";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}

export default TawkChat;