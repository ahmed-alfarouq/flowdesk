import { useEffect } from "react";

const useActiveLinkIndicator = (
  path: string,
  underElRef: React.RefObject<HTMLLIElement | null>,
  navLinksRef: React.RefObject<(HTMLAnchorElement | null)[]>
) => {
  useEffect(() => {
    const updateIndicatorPosition = () => {
      const links = navLinksRef.current;
      const activeLink = links.find(
        (link) => link?.getAttribute("href") === path
      );

      if (activeLink && underElRef.current) {
        const { x } = activeLink.getBoundingClientRect();
        underElRef.current.style.setProperty("--underline-x", `${x}px`);
      }
    };

    updateIndicatorPosition();
    window.addEventListener("resize", updateIndicatorPosition);

    return () => window.removeEventListener("resize", updateIndicatorPosition);
  }, [path, navLinksRef, underElRef]);
};

export default useActiveLinkIndicator;
