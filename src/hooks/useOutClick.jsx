import { useEffect } from "react";

function useOutClick(elementRef, handler, visible) {
    useEffect(
        () => {
            const listener = (event) => {
                if (!elementRef.current || elementRef.current.contains(event.target)) {
                    return;
                }
                if (!visible) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        [elementRef, handler, visible]
    );
}
export default useOutClick;