import { IconButton, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import styles from "./page.module.css";

const Home = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <Paper sx={muiStyles.widgetContainer}>
        <IconButton aria-label="Close" size="large" sx={muiStyles.closeButton}>
          <CloseIcon fontSize="inherit" />
        </IconButton>
        <h1>test</h1>
      </Paper>
    </main>
  );
};

const muiStyles = {
  widgetContainer: {
    p: 2,
  },
  closeButton: {
    backgroundColor: "navy",
    color: "white",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "white",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "white",
      color: "navy",
      borderColor: "navy",
    },
  },
};

export default Home;
