import { ErrorBoundary } from "../../components/ErrorBoundary/ErrorBoundary";
import { Vaccine } from "../../features/vaccine/components/Vaccine";

export function VaccineScreen() {
  return (
    <>
      <ErrorBoundary>
        <Vaccine />
      </ErrorBoundary>
    </>
  );
}
