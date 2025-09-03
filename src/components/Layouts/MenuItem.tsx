// // // "use client";

// // // import React from "react";
// // // import Link from "next/link";
// // // import { usePathname } from "next/navigation";

// // // interface MenuItemProps {
// // //   label: string;
// // //   link: string;
// // //   submenu?: MenuItemProps[]; // allow nested submenu
// // // }

// // // const MenuItem: React.FC<MenuItemProps> = ({ label, link, submenu }) => {
// // //   const pathname = usePathname();
// // //   const isActive = pathname === link;

// // //   return (
// // //     <li className={`nav-item ${submenu ? "dropdown" : ""}`} key={label}>
// // //       {/* 👇 Parent is always clickable */}
// // //       <Link
// // //         href={link}
// // //         className={`nav-link ${isActive ? "active" : ""} ${
// // //           submenu ? "dropdown-toggle" : ""
// // //         }`}
// // //       >
// // //         {label} {submenu && <i className="bx bx-chevron-down"></i>}
// // //       </Link>

// // //       {/* 👇 Submenu (opens on hover via CSS) */}
// // //       {submenu && (
// // //         <ul className="dropdown-menu">
// // //           {submenu.map((subItem) => (
// // //             <MenuItem key={subItem.label} {...subItem} />
// // //           ))}
// // //         </ul>
// // //       )}
// // //     </li>
// // //   );
// // // };

// // // export default MenuItem;

// // "use client";

// // import React from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { usePathname } from "next/navigation";

// // interface MenuItemProps {
// //   label: string;
// //   link: string;
// //   submenu?: MenuItemProps[];
// //   image?: string; // 👈 optional image
// // }

// // const MenuItem: React.FC<MenuItemProps> = ({ label, link, submenu, image }) => {
// //   const pathname = usePathname();
// //   const isActive = pathname === link;

// //   return (
// //     <li className={`nav-item ${submenu ? "dropdown" : ""}`} key={label}>
// //       {/* Parent link */}
// //       <Link
// //         href={link}
// //         className={`nav-link ${isActive ? "active" : ""} ${
// //           submenu ? "dropdown-toggle" : ""
// //         }`}
// //       >
// //         {label} {submenu && <i className="bx bx-chevron-down"></i>}
// //       </Link>

// //       {/* Submenu */}
// //       {submenu && (
// //         <ul className="dropdown-menu">
// //           {submenu.map((subItem) => (
// //             <li key={subItem.label} className="submenu-item-with-image">
// //               <Link href={subItem.link} className="dropdown-item">
// //                 {subItem.label}
// //               </Link>

// //               {/* 👇 Show image if exists */}
// //               {subItem.image && (
// //                 <div className="submenu-image">
// //                   <Image
// //                     src={subItem.image}
// //                     alt={subItem.label}
// //                     width={200}
// //                     height={120}
// //                     style={{ borderRadius: "8px" }}
// //                   />
// //                 </div>
// //               )}

// //               {/* Handle nested submenu if needed */}
// //               {subItem.submenu && <MenuItem {...subItem} />}
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </li>
// //   );
// // };

// // export default MenuItem;

// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";

// interface MenuItemProps {
//   label: string;
//   link: string;
//   submenu?: MenuItemProps[];
//   image?: string; // 👈 Optional image
// }

// const MenuItem: React.FC<MenuItemProps> = ({ label, link, submenu, image }) => {
//   const pathname = usePathname();
//   const isActive = pathname === link;

//   return (
//     <li className={`nav-item ${submenu ? "dropdown" : ""}`} key={label}>
//       {/* Parent link */}
//       <Link
//         href={link}
//         className={`nav-link ${isActive ? "active" : ""} ${
//           submenu ? "dropdown-toggle" : ""
//         }`}
//       >
//         {label} {submenu && <i className="bx bx-chevron-down"></i>}
//       </Link>

//       {/* Submenu */}
//       {submenu && (
//         <ul className="dropdown-menu submenu-with-image">
//           {/* If this submenu item has an image, show it */}
//           {image && (
//             <li className="submenu-image">
//               <Image
//                 src={image}
//                 alt={label}
//                 width={220}
//                 height={140}
//                 style={{ borderRadius: "8px" }}
//               />
//             </li>
//           )}

//           {/* Submenu links */}
//           {submenu.map((subItem) => (
//             <MenuItem key={subItem.label} {...subItem} />
//           ))}
//         </ul>
//       )}
//     </li>
//   );
// };

// export default MenuItem;

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  label: string;
  link: string;
  submenu?: MenuItemProps[];
  image?: string; // 👈 Optional icon
}

const MenuItem: React.FC<MenuItemProps> = ({ label, link, submenu, image }) => {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <li className={`nav-item ${submenu ? "dropdown" : ""}`} key={label}>
      {/* Parent link */}
      <Link
        href={link}
        className={`nav-link ${isActive ? "active" : ""} ${
          submenu ? "dropdown-toggle" : ""
        }`}
      >
        {/* 👇 Icon inline with label */}
        {image && (
          <Image
            src={image}
            alt={label}
            width={40}
            height={40}
            style={{ marginRight: "8px", verticalAlign: "middle" }}
          />
        )}
        {label} {submenu && <i className="bx bx-chevron-down"></i>}
      </Link>

      {/* Submenu */}
      {submenu && (
        <ul className="dropdown-menu">
          {submenu.map((subItem) => (
            <MenuItem key={subItem.label} {...subItem} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
