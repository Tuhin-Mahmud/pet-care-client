// /* eslint-disable react/prop-types */
// import { useState } from "react";

// const SearchField = ({ setSearch }) => {



//     const handleSubmit = e => {
//         e.preventDefault()
//         const searchText = e.target.search.value;
//         console.log(searchText);
//         setSearch(searchText)
        
//     }
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div className="join">
//                     <div>
//                         <div>
//                             <input name="search" className="input input-bordered join-item" placeholder="Search" />
//                         </div>
//                     </div>
//                     <select defaultValue="value" className="select select-bordered join-item">
//                         <option disabled value='defaultValue'>Filter</option>
//                         <option>Cat</option>
//                         <option>Rabbit</option>
//                         <option>Dog</option>
//                         <option>Pigeon</option>
//                     </select>
//                     <div className="indicator">

//                         {/* <input className="btn join-item">Search</input> */}
//                         <input className="btn join-item" type="submit" value="Search" />
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default SearchField;