"use client";
import React, { useState } from "react";
import { Box, Paper, SelectChangeEvent, Typography } from "@mui/material";

import {
  WidgetButton,
  WidgetFileUpload,
  WidgetRadio,
  WidgetSelect,
  WidgetSwitch,
} from "@/components";
import { strings } from "@/constants";
import { ClockIcon } from "@/icons";

const DocumentUploadWidget = (): JSX.Element => {
  const [importName, setImportName] = useState<string | number>("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [toleranceWindow, setToleranceWindow] = useState(true);
  const [splitSchedule, setSplitSchedule] = useState("y");
  const [client, setClient] = useState("m");
  const [testingCenters, setTestingCenters] = useState<Array<string | number>>([
    "",
    "",
    "",
    "",
  ]);

  const selectImportNameItems = [
    { label: strings.none, value: "" },
    { label: strings.testImport1, value: 1 },
    { label: strings.testImport2, value: 2 },
    { label: strings.testImport3, value: 3 },
  ];

  const radioSplitScheduleItems = [
    { label: strings.yes, value: "y" },
    { label: strings.no, value: "n" },
  ];

  const radioClientItems = [
    { label: strings.single, value: "s" },
    { label: strings.multiple, value: "m" },
  ];

  const selectClientItems = [
    { label: strings.none, value: "" },
    { label: strings.testClient1, value: 1 },
    { label: strings.testClient2, value: 2 },
    { label: strings.testClient3, value: 3 },
    { label: strings.testClient4, value: 4 },
  ];

  const handleClickClose = () => {
    console.log("Close button clicked");
  };

  const handleSelectImportName = (e: SelectChangeEvent<string | number>) => {
    console.log("Select Import Name value changed");
    setImportName(e.target.value);
  };

  const handleUploadFile = (file: File) => {
    console.log("File uploaded");
    setUploadedFile(file);
  };

  const handleRemoveFile = () => {
    console.log("File removed");
    setUploadedFile(null);
  };

  const handleChangeToleranceWindow = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log("Switch Tolerance Window value changed");
    setToleranceWindow(e.target.checked);
  };

  const handleChangeSplitSchedule = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log("Radio Split Schedule value changed");
    setSplitSchedule(e.target.value);
  };

  const handleChangeClient = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Radio Client value changed");
    setClient(e.target.value);
  };

  const handleSelectTestingCenter = (
    e: SelectChangeEvent<string | number>,
    index: number
  ) => {
    console.log("Select Testing Center value changed");
    const tempCenters = testingCenters.slice();
    tempCenters[index] = e.target.value;
    setTestingCenters(tempCenters);
  };

  const handleClickContinue = () => {
    console.log("Continue Import button clicked");
  };

  const handleClickCancel = () => {
    console.log("Cancel button clicked");
  };

  return (
    <Paper sx={styles.widgetContainer}>
      <WidgetButton
        variant="closeIcon"
        label={strings.close}
        onClick={handleClickClose}
      />
      <Box sx={styles.widgetTitleContainer}>
        <Typography variant="h1" sx={styles.widgetTitle}>
          {strings.documentUpload}
        </Typography>
        <Box sx={{ ...styles.divider, m: "0 auto" }} />
      </Box>
      <Box sx={styles.widgetBodyContainer}>
        <Box sx={styles.widgetBodyColumn}>
          <WidgetSelect
            label={strings.selectImportName}
            items={selectImportNameItems}
            value={importName}
            onChange={handleSelectImportName}
            boldLabel
          />
          <Box sx={styles.divider} />
          <Box sx={{ ...styles.widgetBodyColumn, gap: 1 }}>
            <Typography variant="body1" sx={styles.widgetBodyTitle}>
              {strings.selectAManifest}
            </Typography>
            <WidgetFileUpload
              file={uploadedFile}
              onFileUpload={handleUploadFile}
              onRemoveFile={handleRemoveFile}
            />
          </Box>
          <Box sx={styles.divider} />
          <Box sx={{ ...styles.widgetBodyColumn, gap: 1 }}>
            <Typography variant="body1" sx={styles.widgetBodyTitle}>
              {strings.elapseDataChecking}
            </Typography>
            <Typography
              variant="body1"
              sx={{ ...styles.widgetBodyTitle, ...styles.greenText }}
            >
              {strings.noElapsedDates}
            </Typography>
          </Box>
          <Box sx={styles.divider} />
          <Box sx={{ ...styles.widgetBodyColumn, gap: 1 }}>
            <Typography variant="body1" sx={styles.widgetBodyTitle}>
              {strings.toleranceWindow}
            </Typography>
            <WidgetSwitch
              label={
                <>
                  {strings.toggle} {toleranceWindow ? strings.on : strings.off}
                  <span>{strings.pipeBar}</span>
                  <ClockIcon />
                  {strings.selectToleranceLevel}
                </>
              }
              checked={toleranceWindow}
              onChange={handleChangeToleranceWindow}
            />
          </Box>
          <Box sx={{ ...styles.divider, display: { md: "none" } }} />
        </Box>
        <Box sx={styles.widgetBodyColumn}>
          <Box sx={{ ...styles.widgetBodyColumn, gap: 1 }}>
            <Typography
              id="radio-label-one"
              variant="body1"
              sx={styles.widgetBodyTitle}
            >
              {strings.splitSchedule}
            </Typography>
            <WidgetRadio
              labelledBy="radio-label-one"
              value={splitSchedule}
              onChange={handleChangeSplitSchedule}
              items={radioSplitScheduleItems}
            />
          </Box>
          <Box sx={styles.divider} />
          <Box sx={{ ...styles.widgetBodyColumn, gap: 1 }}>
            <Typography variant="body1" sx={styles.widgetBodyTitle}>
              {strings.locationChecking}
            </Typography>
            <Typography
              variant="body1"
              sx={{ ...styles.widgetBodyTitle, ...styles.greenText }}
            >
              {strings.allAvailable}
            </Typography>
          </Box>
          <Box sx={styles.divider} />
          <Box sx={{ ...styles.widgetBodyColumn, gap: 1 }}>
            <Typography
              id="radio-label-two"
              variant="body1"
              sx={styles.widgetBodyTitle}
            >
              {strings.client}
            </Typography>
            <WidgetRadio
              labelledBy="radio-label-two"
              value={client}
              onChange={handleChangeClient}
              items={radioClientItems}
            />
            {testingCenters.map((_, index) => {
              if (client === "s") {
                if (index > 0) return null;
              }
              return (
                <Box key={index} sx={styles.clientContainer}>
                  <Typography
                    variant="body2"
                    sx={{ ...styles.widgetBodyTitle, fontWeight: "normal" }}
                  >
                    {strings.testingCenter} {index + 1}
                  </Typography>
                  <Box sx={styles.clientSubContainer}>
                    <WidgetSelect
                      label={strings.selectClient}
                      items={selectClientItems}
                      value={testingCenters[index]}
                      onChange={(e) => handleSelectTestingCenter(e, index)}
                    />
                    <ClockIcon />
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box sx={{ ...styles.divider, display: { md: "none" } }} />
        </Box>
      </Box>
      <Box sx={styles.widgetFooterContainer}>
        <Typography
          variant="h3"
          sx={{
            ...styles.widgetTitle,
            fontSize: { xs: "1.25rem", md: "1.5rem" },
          }}
        >
          {strings.dataInTheImportFile}
        </Typography>
        <Box sx={styles.widgetFooterButtonsContainer}>
          <WidgetButton
            variant="primary"
            label={strings.continueImport}
            onClick={handleClickContinue}
            fullWidth
          />
          <WidgetButton
            variant="secondary"
            label={strings.cancel}
            onClick={handleClickCancel}
            fullWidth
          />
        </Box>
      </Box>
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
    mt: 2,
    mb: 3,
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
    borderBottom: "1px solid #A3A3A3",
  },
  widgetBodyContainer: {
    display: "grid",
    gridTemplateRows: "auto",
    gridTemplateColumns: { xs: "auto", md: "1.5fr 1fr" },
    gap: { xs: 3, md: 8 },
  },
  widgetBodyColumn: {
    width: "100%",
    color: "navy",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 3,
  },
  widgetBodyTitle: {
    fontFamily: "inherit",
    fontWeight: "bold",
  },
  greenText: {
    color: "#1FD655",
  },
  clientContainer: {
    width: "100%",
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: { xs: "flex-start", sm: "center" },
    gap: { xs: 1, md: 6 },
  },
  clientSubContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
  widgetFooterContainer: {
    width: "100%",
    maxWidth: "800px",
    mx: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    mt: 3,
    mb: 2,
    textAlign: "center",
    color: "navy",
  },
  widgetFooterButtonsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: { xs: "flex-start", sm: "center" },
    justifyContent: { sm: "center" },
    gap: 2,
  },
};

export default DocumentUploadWidget;
