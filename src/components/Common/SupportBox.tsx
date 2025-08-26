"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Link,
  IconButton,
  Tooltip,
  Fade,
  Slide,
} from "@mui/material";
import { FaLifeRing, FaTimes } from "react-icons/fa"; // Support & Close icons

export default function SupportBox() {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1300,
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      {/* If box is open → show details with transition */}
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Paper
          elevation={6}
          sx={{
            p: 2,
            borderRadius: "12px",
            backgroundColor: "#0dcaf0",
            color: "white",
            width: 280,
            position: "relative",
          }}
        >
          {/* Close button */}
          <IconButton
            onClick={() => setOpen(false)}
            size="small"
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
            }}
          >
            <FaTimes />
          </IconButton>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Need Immediate Assistance?
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            For urgent AOG support, contact us directly:
          </Typography>
          <Typography variant="body2">
            📧 Email:{" "}
            <Link
              href="mailto:sales@npco.sa"
              sx={{
                color: "#ffcc00",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              sales@npco.sa
            </Link>
          </Typography>
          <Typography variant="body2">
            📞 Phone:{" "}
            <Link
              href="tel:+966XXXXXXXXX"
              sx={{
                color: "#ffcc00",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              +966 XXXXXXXXX
            </Link>
          </Typography>
        </Paper>
      </Slide>

      {/* If box is closed → show round support button + text */}
      {!open && (
        <Fade in={!open}>
          <Box display="flex" alignItems="center" gap={1}>
            <Tooltip title="Need Help?">
              <IconButton
                onClick={() => setOpen(true)}
                sx={{
                  backgroundColor: "#0dcaf0",
                  color: "white",
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  boxShadow: 4,
                  "&:hover": {
                    backgroundColor: "#0dcaf0",
                  },
                }}
              >
                <FaLifeRing size={28} />
              </IconButton>
            </Tooltip>
            <Typography
              variant="body2"
              sx={{
                color: "white",
                backgroundColor: "#0dcaf0",
                px: 2,
                py: 0.5,
                borderRadius: "20px",
                fontWeight: "bold",
                boxShadow: 2,
              }}
            >
              Need Support
            </Typography>
          </Box>
        </Fade>
      )}
    </Box>
  );
}
