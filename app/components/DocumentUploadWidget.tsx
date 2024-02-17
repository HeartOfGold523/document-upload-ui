"use client";
import { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";

import { WidgetButton } from "@/components";

const DocumentUploadWidget = (): JSX.Element => {
  const handleClickClose = () => {
    console.log("Close button clicked");
  };

  return (
    <Paper sx={styles.widgetContainer}>
      <WidgetButton
        variant="closeIcon"
        label="Close"
        onClick={handleClickClose}
      />
      <WidgetButton
        variant="primary"
        label="primary"
        onClick={handleClickClose}
      />
      <WidgetButton
        variant="secondary"
        label="secondary"
        onClick={handleClickClose}
      />
      <Box sx={styles.widgetTitleContainer}>
        <Typography variant="h1" sx={styles.widgetTitle}>
          Document Upload
        </Typography>
        <Box sx={{ ...styles.divider, m: "0 auto" }} />
      </Box>
      <Box sx={styles.widgetBodyContainer}></Box>
    </Paper>
  );
};

const styles = {
  widgetContainer: {
    width: "100%",
    maxWidth: "1100px",
    m: "0 auto",
    p: { xs: 2, md: 4 },
    borderRadius: "25px",
  },
  widgetTitleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    my: 2,
    textAlign: "center",
    color: "navy",
  },
  widgetTitle: {
    fontFamily: "inherit",
    fontWeight: "bold",
    fontSize: { xs: "2rem", md: "3rem" },
  },
  divider: {
    width: "100%",
    maxWidth: { xs: "280px", md: "400px" },
    height: "1px",
    backgroundColor: "#A3A3A3",
  },
  widgetBodyContainer: {
    display: "grid",
    gridTemplateRows: { xs: "1fr 1fr", md: "auto" },
    gridTemplateColumns: { xs: "auto", md: "1.5fr 1fr" },
    gap: 1,
  },
};

export default DocumentUploadWidget;
