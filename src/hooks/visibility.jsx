import React, { useEffect, useState } from "react";

function getBrowserVisibilityProp() {
    if (typeof document.hidden !== "undefined") return "visibilitychange";
    else if (typeof document.msHidden !== "undefined") return "msvisibilitychange";
    else if (typeof document.webkitHidden !== "undefined") return "webkitvisibilitychange";
}

function getBrowserDocumentHiddenProp() {
    if (typeof document.hidden !== "undefined") return "hidden";
    else if (typeof document.msHidden !== "undefined") return "msHidden";
    else if (typeof document.webkitHidden !== "undefined") return "webkitHidden";
}

function getIsDocumentHidden() { return !document[getBrowserDocumentHiddenProp()]; }

export function getPageVisibility() {
    const [isVisible, setIsVisible] = useState(getIsDocumentHidden());
    const onVisibilityChange = () => setIsVisible(getIsDocumentHidden());

    useEffect(() => {
        document.addEventListener(getBrowserVisibilityProp(), onVisibilityChange, false);

        return () => document.removeEventListener(getBrowserVisibilityProp(), onVisibilityChange);
    },[])

    return isVisible;
}