// "use client";

// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   TextField,
//   Card,
//   CardContent,
//   CardActions,
//   IconButton,
//   Tooltip,
//   Pagination,
// } from "@mui/material";

// import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// interface Part {
//   partNumber: string;
//   description: string;
//   quantity: number;
// }

// // Dummy Data (replace with API later)
// const generateData = (): Part[] => {
//   const data: Part[] = [];
//   for (let i = 1; i <= 6000; i++) {
//     data.push({
//       partNumber: `PN-${i}`,
//       description: `Spare Part Description ${i}`,
//       quantity: Math.floor(Math.random() * 100),
//     });
//   }
//   return data;
// };

// const SparePartsItem: React.FC = () => {
//   const allParts: Part[] = generateData();

//   const [search, setSearch] = useState<string>("");
//   const [page, setPage] = useState<number>(1);
//   const rowsPerPage = 20; // ✅ 5x5 grid per page

//   // Filtered data
//   const filteredParts = allParts.filter(
//     (item) =>
//       item.partNumber.toLowerCase().includes(search.toLowerCase()) ||
//       item.description.toLowerCase().includes(search.toLowerCase())
//   );

//   // Pagination logic
//   const paginatedParts = filteredParts.slice(
//     (page - 1) * rowsPerPage,
//     page * rowsPerPage
//   );

//   return (
//     <Box
//       sx={{
//         p: 3,
//         backgroundColor: "#060542",
//         borderRadius: 5,
//         borderBottomLeftRadius: "0px",
//         borderBottomRightRadius: "0px",
//         color: "white",
//       }}
//     >
//       <Typography
//         variant="h5"
//         gutterBottom
//         sx={{ fontWeight: "bold", mb: 2, color: "white" }}
//       >
//         Spare Parts Inventory
//       </Typography>

//       {/* Search Bar */}
//       <TextField
//         label="Search Parts"
//         variant="outlined"
//         fullWidth
//         sx={{
//           mb: 3,
//           "& .MuiInputBase-input": {
//             color: "white",
//           },
//           "& .MuiInputLabel-root": {
//             color: "white",
//           },
//           "& .MuiOutlinedInput-root": {
//             "& fieldset": {
//               borderColor: "white",
//             },
//             "&:hover fieldset": {
//               borderColor: "white",
//             },
//             "&.Mui-focused fieldset": {
//               borderColor: "#0dcaf0",
//             },
//           },
//         }}
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* Cards Grid - ✅ 5x5 */}
//       <Box
//         sx={{
//           display: "grid",
//           gap: 3,
//           gridTemplateColumns: {
//             xs: "repeat(1, 1fr)", // 📱 mobile: 1 per row
//             sm: "repeat(2, 1fr)", // 📱 small tablets: 2 per row
//             md: "repeat(3, 1fr)", // 💻 medium screens: 3 per row
//             lg: "repeat(4, 1fr)", // 🖥️ large screens: 4 per row
//             xl: "repeat(5, 1fr)", // 🖥️ big desktop: 5 per row
//           },
//         }}
//       >
//         {paginatedParts.map((part, index) => (
//           <Card
//             key={index}
//             sx={{
//               background: "linear-gradient(145deg, #0d1b4c, #122868)",
//               color: "white",
//               borderRadius: 3,
//               boxShadow: "0 6px 12px rgba(0,0,0,0.4)",
//               height: "100%",
//               display: "flex",
//               flexDirection: "column",
//               transition: "transform 0.2s ease, box-shadow 0.2s ease",
//               "&:hover": {
//                 transform: "translateY(-5px)",
//                 boxShadow: "0 8px 16px rgba(0,0,0,0.6)",
//               },
//             }}
//           >
//             <CardContent sx={{ flexGrow: 1 }}>
//               <Typography variant="h6" fontWeight="bold" sx={{ color: "#0dcaf0" }}>
//                 {part.partNumber}
//               </Typography>
//               <Typography variant="body2" sx={{ mb: 1, color: "#e0e0e0" }}>
//                 {part.description}
//               </Typography>
//               <Typography variant="body2">
//                 <strong style={{ color: "#0dcaf0" }}>Qty:</strong> {part.quantity}
//               </Typography>
//             </CardContent>
//             <CardActions sx={{ justifyContent: "center", pb: 2 }}>
//               <Tooltip title="WhatsApp">
//                 <IconButton sx={{ color: "#25D366" }}>
//                   <FaWhatsapp />
//                 </IconButton>
//               </Tooltip>
//               <Tooltip title="Call">
//                 <IconButton sx={{ color: "#0dcaf0" }}>
//                   <FaPhoneAlt />
//                 </IconButton>
//               </Tooltip>
//               <Tooltip title="Email">
//                 <IconButton sx={{ color: "#e83e8c" }}>
//                   <FaEnvelope />
//                 </IconButton>
//               </Tooltip>
//             </CardActions>
//           </Card>
//         ))}
//       </Box>

//       {/* Pagination */}
//       <Box display="flex" justifyContent="center" mt={4}>
//         <Pagination
//           count={Math.ceil(filteredParts.length / rowsPerPage)}
//           page={page}
//           onChange={(_, value) => setPage(value)}
//           sx={{
//             "& .MuiPaginationItem-root": {
//               color: "white",
//               border: "1px solid #0dcaf0",
//             },
//             "& .MuiPaginationItem-root:hover": {
//               backgroundColor: "#0dcaf0",
//               color: "#fff",
//             },
//             "& .Mui-selected": {
//               backgroundColor: "#0dcaf0 !important",
//               color: "#fff",
//               fontWeight: "bold",
//             },
//           }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default SparePartsItem;

"use client";

import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import {
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Tooltip,
  Pagination,
} from "@mui/material";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

interface Part {
  partNumber: string;
  description: string;
  quantity: number;
}

const SparePartsItem: React.FC = () => {
  const [allParts, setAllParts] = useState<Part[]>([]);
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const rowsPerPage = 20; // ✅ 5x5 grid per page

  // 🔹 Load Excel data
  useEffect(() => {
    const fetchExcel = async () => {
      try {
        const response = await fetch("/spareparts.xlsx"); // put your Excel file in public/
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const jsonData: any[] = XLSX.utils.sheet_to_json(sheet);

      const mappedData: Part[] = jsonData.map((row) => ({
  partNumber: row["PN"] ? String(row["PN"]) : "",
  description: row["DESCRIPTION"] ? String(row["DESCRIPTION"]) : "",
  quantity: row["QTY"] ? Number(row["QTY"]) : 0,
}));

        setAllParts(mappedData);
      } catch (error) {
        console.error("Error loading Excel file:", error);
      }
    };

    fetchExcel();
  }, []);

// 🔍 Filtered data (safe against undefined)
const filteredParts = allParts.filter((item) => {
  const partNum = (item.partNumber || "").toLowerCase();
  const desc = (item.description || "").toLowerCase();
  return (
    partNum.includes(search.toLowerCase()) ||
    desc.includes(search.toLowerCase())
  );
});


  // 📄 Pagination logic
  const paginatedParts = filteredParts.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: "#060542",
        borderRadius: 5,
        borderBottomLeftRadius: "0px",
        borderBottomRightRadius: "0px",
        color: "white",
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 2, color: "white" }}
      >
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
            color: "white",
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#0dcaf0",
            },
          },
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Cards Grid */}
      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)", // 📱 mobile: 1 per row
            sm: "repeat(2, 1fr)", // 📱 small tablets: 2 per row
            md: "repeat(3, 1fr)", // 💻 medium screens: 3 per row
            lg: "repeat(4, 1fr)", // 🖥️ large screens: 4 per row
            xl: "repeat(5, 1fr)", // 🖥️ big desktop: 5 per row
          },
        }}
      >
        {paginatedParts.map((part, index) => (
          <Card
            key={index}
            sx={{
              background: "linear-gradient(145deg, #0d1b4c, #122868)",
              color: "white",
              borderRadius: 3,
              boxShadow: "0 6px 12px rgba(0,0,0,0.4)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 16px rgba(0,0,0,0.6)",
              },
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ color: "#0dcaf0" }}>
                {part.partNumber}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1, color: "#e0e0e0" }}>
                {part.description}
              </Typography>
              <Typography variant="body2">
                <strong style={{ color: "#0dcaf0" }}>Qty:</strong> {part.quantity}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", pb: 2 }}>
              <Tooltip title="WhatsApp">
                <IconButton sx={{ color: "#25D366" }}>
                  <FaWhatsapp />
                </IconButton>
              </Tooltip>
              <Tooltip title="Call">
                <IconButton sx={{ color: "#0dcaf0" }}>
                  <FaPhoneAlt />
                </IconButton>
              </Tooltip>
              <Tooltip title="Email">
                <IconButton sx={{ color: "#e83e8c" }}>
                  <FaEnvelope />
                </IconButton>
              </Tooltip>
            </CardActions>
          </Card>
        ))}
      </Box>

      {/* Pagination */}
      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination
          count={Math.ceil(filteredParts.length / rowsPerPage)}
          page={page}
          onChange={(_, value) => setPage(value)}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "white",
              border: "1px solid #0dcaf0",
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "#0dcaf0",
              color: "#fff",
            },
            "& .Mui-selected": {
              backgroundColor: "#0dcaf0 !important",
              color: "#fff",
              fontWeight: "bold",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default SparePartsItem;
