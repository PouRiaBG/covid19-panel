import { useMediaQuery } from "react-responsive";

export const useScreen = () => {
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return { isTablet, isDesktop };
};
