import { useMediaQuery } from "react-responsive";

export const useScreen = () => {
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 780 });

  return { isTablet, isDesktop, isMobile };
};
