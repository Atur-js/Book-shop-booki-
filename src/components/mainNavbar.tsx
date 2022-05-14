import React from "react";
import books from "./Navbar/books.json";
import SearchBar from "./Navbar/SearchBar";

export const SubNavbar= () => {
  return (
    <>
    <div>
    <SearchBar  data={books} event={undefined}/>
    </div>
    
    </>
  )
}

// export const mainNavbar = () => {
//   return (
//     <div>mainNavbar</div>
//   )
// }
