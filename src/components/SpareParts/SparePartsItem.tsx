"use client";

import React, { useState, ChangeEvent, MouseEvent } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  TablePagination,
  Typography,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";

import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // ✅ WhatsApp, Call, Email

// Define a type for your parts
interface Part {
  partNumber: string;
  description: string;
  quantity: number;
}

// Dummy Data (replace with API later)
const generateData = (): Part[] => {
  const data: Part[] = [];
  for (let i = 1; i <= 6000; i++) {
    data.push({
      partNumber: `PN-${i}`,
      description: `Spare Part Description ${i}`,
      quantity: Math.floor(Math.random() * 100),
    });
  }
  return data;
};

const SparePartsItem: React.FC = () => {
  const allParts: Part[] = generateData();

  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  // Filter based on search
  const filteredParts = allParts.filter(
    (item) =>
      item.partNumber.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{
    p: 3,
    backgroundColor: "#060542",
    borderRadius: 5,
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
    color: "white", // makes text inside white
  }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", mb: 2 ,color: "white",}}>
        Spare Parts Inventory
      </Typography>

      {/* Search Bar */}
    <TextField
  label="Search Parts"
  variant="outlined"
  fullWidth
  sx={{
    mb: 3,
    "& .MuiInputBase-input": {
      color: "white", // Text color
    },
    "& .MuiInputLabel-root": {
      color: "white", // Label color
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white", // Default border color
      },
      "&:hover fieldset": {
        borderColor: "white", // Hover border color
      },
      "&.Mui-focused fieldset": {
        borderColor: "white", // Focused border color
      },
    },
  }}
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>


      {/* Table */}
      <TableContainer component={Paper} sx={{ borderRadius: 1, boxShadow: 3 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#0dcaf0" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Part Number
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Description
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Quantity
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Enquiry
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredParts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((part, index) => (
                <TableRow key={index} hover>
                  <TableCell>{part.partNumber}</TableCell>
                  <TableCell>{part.description}</TableCell>
                  <TableCell>{part.quantity}</TableCell>
                  <TableCell>
                    <Box display="flex" gap={1}>
                      <Tooltip title="WhatsApp">
                        <IconButton color="success">
                          <FaWhatsapp />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Call">
                        <IconButton color="primary">
                          <FaPhoneAlt />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Email">
                        <IconButton color="secondary">
                          <FaEnvelope />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

   <TablePagination
  component="div"
  count={filteredParts.length}
  page={page}
  onPageChange={handleChangePage}
  rowsPerPage={rowsPerPage}
  onRowsPerPageChange={handleChangeRowsPerPage}
  rowsPerPageOptions={[10, 25, 50, 100]}
  sx={{
    color: "white",
    "& .MuiTablePagination-toolbar": {
      display: "flex",
      justifyContent: "space-between", // space elements evenly
      alignItems: "center",            // vertically align items
    },
    "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows": {
      color: "white",
    },
    "& .MuiSelect-icon": {
      color: "white",
    },
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  }}
/>


    </Box>
  );
};

export default SparePartsItem;
