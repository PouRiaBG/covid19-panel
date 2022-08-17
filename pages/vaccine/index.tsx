import { ErrorBoundary } from "@components/ErrorBoundary/ErrorBoundary";
import { Vaccine } from "@features/vaccine/components/Vaccine";

export default function VaccinePage() {
  return (
    <>
      <ErrorBoundary>
        <Vaccine />
      </ErrorBoundary>
    </>
  );
}
