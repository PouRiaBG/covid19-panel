import {
  AccountSettings,
  Preferences,
} from "../../features/Settings/components";
import styles from "./settings.module.css";
export function SettingsScreen() {
  return (
    <div className={styles.container}>
      <AccountSettings />
      <Preferences />
    </div>
  );
}
