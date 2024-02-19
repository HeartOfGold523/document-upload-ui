"use client";
import { useRef, useState } from "react";
import {
  Box,
  IconButton,
  LinearProgress,
  Paper,
  Typography,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import CloseIcon from "@mui/icons-material/Close";
import PhotoIcon from "@mui/icons-material/Photo";

import { WidgetButton } from "@/components";
import { strings } from "@/constants";

type WidgetFileUploadProps = {
  file: File | null;
  onFileUpload: (file: File) => void;
  onRemoveFile: () => void;
};

const WidgetFileUpload = ({
  file,
  onFileUpload,
  onRemoveFile,
}: WidgetFileUploadProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
  };

  const emulateProgress = (min: number, max: number) => {
    setUploadProgress(0);
    let progress = 0;
    const interval = setInterval(() => {
      const addedProgress = Math.floor(Math.random() * (max - min + 1) + min);
      progress += addedProgress;
      if (progress >= 100) {
        setUploadProgress(100);
        clearInterval(interval);
      } else {
        setUploadProgress(progress);
      }
    }, 100);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileUpload(e.dataTransfer.files[0]);
      emulateProgress(10, 30);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileUpload(e.target.files[0]);
      emulateProgress(10, 30);
    }
  };

  const handleClickUpload = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    inputRef.current?.click();
  };

  const handleRemoveFile = () => {
    onRemoveFile();
    setUploadProgress(0);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const formatFileSize = (bytes: number) => {
    const k = bytes > 0 ? Math.floor(Math.log2(bytes) / 10) : 0;
    const rank = (k > 0 ? strings.kgmt[k - 1] : "") + strings.b;
    const count = Math.floor(bytes / Math.pow(1024, k));
    return count + rank;
  };

  return (
    <>
      <Paper
        tabIndex={0}
        variant="outlined"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        sx={styles.paper}
      >
        <input
          id="widget-file-input"
          type="file"
          ref={inputRef}
          style={styles.input}
          onChange={handleChange}
        />
        <label
          htmlFor="widget-file-input"
          style={styles.label as React.CSSProperties}
        >
          <Box sx={styles.dashedContainer}>
            <DescriptionIcon fontSize="large" sx={styles.icon} />
            <Typography variant="body2" sx={styles.description}>
              {strings.dragAndDrop} <b>{strings.browse}</b>
            </Typography>
          </Box>
          <Box sx={styles.buttonContainer}>
            <WidgetButton
              variant="primary"
              label={strings.uploadManifest}
              onClick={handleClickUpload}
              fullWidth
            />
          </Box>
        </label>
      </Paper>
      {file !== null && (
        <Box sx={styles.fileContainer}>
          <PhotoIcon sx={styles.icon} />
          <Box sx={styles.fileSubContainer}>
            <Box sx={styles.fileDetails}>
              <Typography variant="body2" sx={styles.description}>
                {file.name}
              </Typography>
              <Typography variant="body2" sx={styles.description}>
                {formatFileSize(file.size)}
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={uploadProgress}
              sx={styles.progressBar}
            />
          </Box>
          <IconButton onClick={handleRemoveFile} sx={styles.iconButton}>
            <CloseIcon />
          </IconButton>
        </Box>
      )}
    </>
  );
};

const styles = {
  paper: {
    width: "100%",
    p: 1,
    borderColor: "rgba(0, 0, 0, 0.23)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "navy",
    "&:hover": {
      borderColor: "#000000",
    },
    "&:focus": {
      outlineColor: "navy",
      borderColor: "navy",
    },
  },
  input: {
    display: "none",
  },
  label: {
    width: "100%",
    padding: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    cursor: "pointer",
  },
  dashedContainer: {
    width: "100%",
    px: 1,
    py: 6,
    border: "1px dashed rgba(0, 0, 0, 0.23)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 1,
    textAlign: "center",
  },
  icon: {
    color: "orange",
  },
  description: {
    fontFamily: "inherit",
  },
  buttonContainer: {
    width: "100%",
    maxWidth: "250px",
    m: "0 auto",
  },
  fileContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 1,
    mt: 1.5,
    p: 1,
    borderTop: "1px solid rgba(0, 0, 0, 0.23)",
    borderBottom: "1px solid rgba(0, 0, 0, 0.23)",
    width: "100%",
  },
  fileSubContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    width: "100%",
  },
  fileDetails: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 1,
  },
  progressBar: {
    backgroundColor: "rgba(255, 165, 0, 0.23)",
    "& .MuiLinearProgress-bar": {
      backgroundColor: "orange",
    },
  },
  iconButton: {
    "&:hover": {
      color: "navy",
    },
  },
};

export default WidgetFileUpload;
