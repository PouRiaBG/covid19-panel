import { AccountSettings } from "../../components/AccountSettings/AccountSettings";
import { Preferences } from "../../components/Preferences/Preferences";
import styles from "./settings.module.css";
export function SettingsScreen() {
  return (
    <div className={styles.container}>
      <Preferences />
      <AccountSettings />
    </div>
  );
}
