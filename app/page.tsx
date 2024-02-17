import { DocumentUploadWidget } from "@/components";
import styles from "./page.module.css";

const Home = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <DocumentUploadWidget />
    </main>
  );
};

export default Home;
