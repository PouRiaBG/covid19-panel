import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
interface IProps {
  children: ReactNode;
  pathname: string;
  className?: string;
  activeClass?: string;
}
export function NavLink(props: IProps) {
  const { pathname, children, activeClass, className, ...otherProps } = props;
  const router = useRouter();
  const { asPath } = router;

  return (
    <Link href={pathname} {...otherProps}>
      <a className={pathname === asPath ? activeClass : className}>
        {children}
      </a>
    </Link>
  );
}
NavLink.defaultProps = {
  className: "",
  activeClass: "",
};
