import { ErrorBoundary } from "../../components/ErrorBoundary/ErrorBoundary";
import {
  AccountSettings,
  Preferences,
} from "../../features/settings/components";
import styles from "./settings.module.css";
export function SettingsScreen() {
  return (
    <ErrorBoundary>
      <div className={styles.container}>
        <AccountSettings />
        <Preferences />
      </div>
    </ErrorBoundary>
  );
}
