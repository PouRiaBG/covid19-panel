import { ErrorBoundary } from "@components/ErrorBoundary/ErrorBoundary";
import { Countries } from "@features/countries/components/Countries";

export default function CountriesPage() {
  return (
    <>
      <ErrorBoundary>
        <Countries />
      </ErrorBoundary>
    </>
  );
}
