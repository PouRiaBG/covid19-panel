import { ErrorBoundary } from "../../components/ErrorBoundary/ErrorBoundary";
import { Countries } from "../../features/countries/components/Countries";

export function CountriesScreen() {
  return (
    <>
      <ErrorBoundary>
        <Countries />
      </ErrorBoundary>
    </>
  );
}
