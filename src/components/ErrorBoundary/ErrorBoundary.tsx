import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { FallBackComponent } from "./FallBackComponent/FallBackComponent";

interface IProps {
  children: React.ReactNode;
}

export function ErrorBoundary(props: IProps) {
  const { children } = props;
  return (
    <ReactErrorBoundary FallbackComponent={FallBackComponent}>
      {children}
    </ReactErrorBoundary>
  );
}
