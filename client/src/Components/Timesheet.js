// import React, { useState } from "react";
// import { GoChevronDown, GoChevronUp, GoArrowRight } from "react-icons/go";
// import "../Styles/MainPage.css";

// function Timesheet() {
//   const [additionalRowsBAU, setAdditionalRowsBAU] = useState(0);
//   const [additionalRowsSales, setAdditionalRowsSales] = useState(0);
//   // const addRow = (activity) => {
//   //   if (activity === "BAU") {
//   //     setAdditionalRowsBAU((prevRows) => prevRows + 1);
//   //   } else if (activity === "Sales") {
//   //     setAdditionalRowsSales((prevRows) => prevRows + 1);
//   //   }
//   // };

//   // const removeRow = (activity) => {
//   //   if (activity === "BAU") {
//   //     setAdditionalRowsBAU((prevRows) => Math.max(0, prevRows - 1));
//   //   } else if (activity === "Sales") {
//   //     setAdditionalRowsSales((prevRows) => Math.max(0, prevRows - 1));
//   //   }
  
//     const [down, setDown] = useState(false);
//     const [rows, setRows] = useState([
//       {
//         activity: "BAU",
//         values: Array(7).fill(0),
//         total: 0
//       }
//     ]);
  
//     const addRow = (activity) => {
//       const newRow = {
//         activity,
//         values: Array(7).fill(0),
//         total: 0
//       };
//       setRows([...rows, newRow]);
//     };
  
//     const removeRow = (index) => {
//       setRows(rows.filter((_, i) => i !== index));
//     };
  
//     const handleInputChange = (rowIndex, index, event) => {
//       const newRows = [...rows];
//       newRows[rowIndex].values[index] = parseInt(event.target.value) || 0;
//       const newTotal = newRows[rowIndex].values.reduce((acc, val) => acc + val, 0);
//       newRows[rowIndex].total = newTotal;
//       setRows(newRows);
//     };
  
//   return (
//     <div className="MainArea">
//       <div className="MainHead">
//         <h1>Timesheet</h1>
//         <div className="MainHeadDetails" style={{ gap: "700px" }}>
//           <h5>Total hour: 0.0</h5>
//           <p>&lt; 29 Jan 2024 - 04 Feb 2024 &gt;</p>
//         </div>
//       </div>

//       <div className="MainBands">
//         <p style={{ flexGrow: 1 }}>Allocation Extension</p>
//         {!down && <GoChevronDown onClick={() => setDown(true)} />}
//         {down && <GoChevronUp onClick={() => setDown(false)} />}
//       </div>

//       {down && (
//         <table className="MainTable">
//           <thead>
//             <tr className="TableHead">
//               <th>Project Name</th>
//               <th>Project Type</th>
//               <th>Project End Date</th>
//               <th>Allocation End Date</th>
//               <th>Allocation Extension</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td colSpan="5" style={{ textAlign: "center" }}>
//                 No Available Options
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       )}

//       <div className="MainBands">
//         <p>Timesheet</p>
//       </div>

//       <table className="MainTable">
//         <thead>
//           <tr className="TableHead">
//             <th>Project Type</th>
//             <th>Project Name</th>
//             <th>Task</th>
//             <th>Comment</th>
//             <th>Mon</th>
//             <th>Tue</th>
//             <th>Wed</th>
//             <th>Thu</th>
//             <th>Fri</th>
//             <th>Sat</th>
//             <th>Sun</th>
//             <th>Total</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {[...Array(additionalRowsBAU + 1)].map((_, index) => (
//             <tr key={`BAU_${index}`}>
//             { index===0 ? <td className="projectType">BAU Activity</td>:<td></td>}
//               <td>
//                 <select>
//                   <option value="">Project</option>
//                   <option value="">BAU_001 Training&Project Knowledege</option>
//                   <option value="" >BAU_002 People</option>
//                   <option value="">BAU_003 Delivery</option>
//                   <option value="">BAU_004 Sales</option>
//                   <option value="">BAU_005 Events</option>
//                 </select>
//               </td>
//               <td>
//                 <select>
//                   <option value="">Task</option>
//                 </select>
//               </td>
//               <td><input className="comments"/></td>
//               {row.values.map((value, index) => (
//                 <td key={`value_${index}`}>
//                   <input
//                     type="number"
//                     min="0"
//                     max="24"
//                     value={value}
//                     onChange={(event) => handleInputChange(rowIndex, index, event)}
//                   />
//                 </td>
//               ))}
               
//               {/*<td><input type="number" min="0" max="24"/></td>
//               <td><input type="number" min="0" max="24"/></td>
//               <td><input type="number" min="0" max="24"/></td>
//               <td><input type="number" min="0" max="24"/></td>
//               <td><input type="number" min="0" max="24"/></td>
//               <td><input type="number" min="0" max="24"/></td>
//               <td><input type="number" min="0" max="24"/></td> */}
//               <td>{row.total}</td>
//               <td className="plus" onClick={() => addRow("BAU")}> + </td>
//                 {index > 0 && <td className="minus" onClick={() => removeRow("BAU")}> - </td>}
//             </tr>
//           ))}
//           {[...Array(additionalRowsSales + 1)].map((_, index) => (
//             <tr key={`Sales_${index}`}>
//                           { index===0 ? <td className="projectType">Sales Activity</td>:<td></td>}

//               <td><select><option value="">Project</option></select></td>
//               <td><select><option value="">Task</option></select></td>
//               <td><input className="comments"/></td>
//               <td><input type="number" min="0" max="24"/></td>
//               <td><input type="number" min="0" max="24"/></td>
//               <td><input type="number" min="0" max="24"/></td>
//               <td><input type="number" min="0" max="24"/></td>
//               <td><input type="number" min="0" max="24"/></td>
//               <td><input type="number" min="0" max="24"/></td>
//               <td><input type="number" min="0" max="24"/></td>
//               <td><input  /></td>
//               <td className="plus" onClick={() => addRow("Sales")}> + </td>

//                 {index > 0 && <td className="minus" onClick={() => removeRow("Sales")}> - </td>}
//             </tr>
//           ))}
//           <tr>
//             <td className="projectType">Total Hours</td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td><p>0</p></td>
//             <td><p>0</p></td>
//             <td><p>0</p></td>
//             <td><p>0</p></td>
//             <td><p>0</p></td>
//             <td><p>0</p></td>
//             <td><p>0</p></td>
//             <td><p>0</p></td>
//           </tr>
//           <tr>
//             <td className="projectType">Machine Hours</td>
//           </tr>
//           <tr>
//             <td className="projectType">Break Hours</td>
//           </tr>
//         </tbody>
//       </table>

//       <div className="MainSubmission">
//         <button className="submit">Submit <GoArrowRight /></button>
//         <button className="save">Save</button>
//       </div>
//     </div>
//   );
// }

// export default Timesheet;

// import React, { useState } from "react";
// import { GoChevronDown, GoChevronUp, GoArrowRight } from "react-icons/go";
// import "../Styles/MainPage.css";

// function Timesheet() {
//   const [additionalRowsBAU, setAdditionalRowsBAU] = useState(0);
//   const [additionalRowsSales, setAdditionalRowsSales] = useState(0);
//   const [down, setDown] = useState(false);
//   const [rows, setRows] = useState([
//     {
//       activity: "BAU",
//       values: Array(7).fill(0),
//       total: 0
//     }
//   ]);

//   const addRow = (activity) => {
//     const newRow = {
//       activity,
//       values: Array(7).fill(0),
//       total: 0
//     };
//     setRows([...rows, newRow]);
//   };

//   const removeRow = (index) => {
//     setRows(rows.filter((_, i) => i !== index));
//   };

//   const handleInputChange = (rowIndex, index, event) => {
//     const newRows = [...rows];
//     newRows[rowIndex].values[index] = parseInt(event.target.value) || 0;
//     const newTotal = newRows[rowIndex].values.reduce((acc, val) => acc + val, 0);
//     newRows[rowIndex].total = newTotal;
//     setRows(newRows);
//   };

//   return (
//     <div className="MainArea">
//       <div className="MainHead">
//         <h1>Timesheet</h1>
//         <div className="MainHeadDetails" style={{ gap: "700px" }}>
//           <h5>Total hour: 0.0</h5>
//           <p>&lt; 29 Jan 2024 - 04 Feb 2024 &gt;</p>
//         </div>
//       </div>

//       <div className="MainBands">
//         <p style={{ flexGrow: 1 }}>Allocation Extension</p>
//         {!down && <GoChevronDown onClick={() => setDown(true)} />}
//         {down && <GoChevronUp onClick={() => setDown(false)} />}
//       </div>

//       {down && (
//         <table className="MainTable">
//           <thead>
//             <tr className="TableHead">
//               <th>Project Name</th>
//               <th>Project Type</th>
//               <th>Project End Date</th>
//               <th>Allocation End Date</th>
//               <th>Allocation Extension</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td colSpan="5" style={{ textAlign: "center" }}>
//                 No Available Options
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       )}

//       <div className="MainBands">
//         <p>Timesheet</p>
//       </div>

//       <table className="MainTable">
//         <thead>
//           <tr className="TableHead">
//             <th>Project Type</th>
//             <th>Project Name</th>
//             <th>Task</th>
//             <th>Comment</th>
//             <th>Mon</th>
//             <th>Tue</th>
//             <th>Wed</th>
//             <th>Thu</th>
//             <th>Fri</th>
//             <th>Sat</th>
//             <th>Sun</th>
//             <th>Total</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {[...Array(additionalRowsBAU + 1)].map((_, index) => (
//             <tr key={`BAU_${index}`}>
//             { index===0 ? <td className="projectType">BAU Activity</td>:<td></td>}
//               <td>
//                 <select>
//                   <option value="">Project</option>
//                   <option value="">BAU_001 Training&Project Knowledege</option>
//                   <option value="" >BAU_002 People</option>
//                   <option value="">BAU_003 Delivery</option>
//                   <option value="">BAU_004 Sales</option>
//                   <option value="">BAU_005 Events</option>
//                 </select>
//               </td>
//               <td>
//                 <select>
//                   <option value="">Task</option>
//                 </select>
//               </td>
//               <td><input className="comments"/></td>
//               {row.values.map((value, index) => (
//                 <td key={`value_${index}`}>
//                   <input
//                     type="number"
//                     min="0"
//                     max="24"
//                     value={value}
//                     onChange={(event) => handleInputChange(rowIndex, index, event)}
//                   />
//                 </td>
//               ))}
               
//               {/*<td><input type="number" min="0" max="24"/></td>
//               <td><input type="number" min="0" max="24"/></td>
//               <td><input type="number" min="0" max="24"/></td>
//               <td><input type="number" min="0" max="24"/></td>
//               <td><input type="number" min="0" max="24"/></td>
//               <td><input type="number" min="0" max="24"/></td>
//               <td><input type="number" min="0" max="24"/></td> */}
//               <td>{row.total}</td>
//               <td className="plus" onClick={() => addRow("BAU")}> + </td>
//                 {index > 0 && <td className="minus" onClick={() => removeRow("BAU")}> - </td>}
//             </tr>
//           ))}
//           {[...Array(additionalRowsSales + 1)].map((_, index) => (
//             <tr key={`Sales_${index}`}>
//                           { index===0 ? <td className="projectType">Sales Activity</td>:<td></td>}

//               <td><select><option value="">Project</option></select></td>
//               <td><select><option value="">Task</option></select></td>
//               <td><input className="comments"/></td>
//               <td><input type="number" min="0" max="24"/></td>
//               <td><input type="number" min="0" max="24"/></td>
//               <td><input type="number" min="0" max="24"/></td>
//               <td><input type="number" min="0" max="24"/></td>
//               <td><input type="number" min="0" max="24"/></td>
//               <td><input type="number" min="0" max="24"/></td>
//               <td><input type="number" min="0" max="24"/></td>
//               <td><input  /></td>
//               <td className="plus" onClick={() => addRow("Sales")}> + </td>

//                 {index > 0 && <td className="minus" onClick={() => removeRow("Sales")}> - </td>}
//             </tr>
//           ))}
//           <tr>
//             <td className="projectType">Total Hours</td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td><p>0</p></td>
//             <td><p>0</p></td>
//             <td><p>0</p></td>
//             <td><p>0</p></td>
//             <td><p>0</p></td>
//             <td><p>0</p></td>
//             <td><p>0</p></td>
//             <td><p>0</p></td>
//           </tr>
//           <tr>
//             <td className="projectType">Machine Hours</td>
//           </tr>
//           <tr>
//             <td className="projectType">Break Hours</td>
//           </tr>
//         </tbody>
//       </table>

//       <div className="MainSubmission">
//         <button className="submit">Submit <GoArrowRight /></button>
//         <button className="save">Save</button>
//       </div>
//     </div>
//   );
// }

// export default Timesheet;

// import React, { useState } from "react";
// import { GoChevronDown, GoChevronUp, GoArrowRight } from "react-icons/go";
// import "../Styles/MainPage.css";

// function Timesheet() {
//   const [additionalRowsBAU, setAdditionalRowsBAU] = useState(0);
//   const [additionalRowsSales, setAdditionalRowsSales] = useState(0);
//   const [down, setDown] = useState(false);
//   const [rows, setRows] = useState([
//     {
//       activity: "BAU",
//       values: Array(7).fill(0),
//       total: 0
//     }
//   ]);

//   const addRow = (activity) => {
//     const newRow = {
//       activity,
//       values: Array(7).fill(0),
//       total: 0
//     };
//     setRows([...rows, newRow]);
//   };

//   const removeRow = (index) => {
//     setRows(rows.filter((_, i) => i !== index));
//   };

//   const handleInputChange = (rowIndex, index, event) => {
//     const newRows = [...rows];
//     newRows[rowIndex].values[index] = parseInt(event.target.value) || 0;
//     const newTotal = newRows[rowIndex].values.reduce((acc, val) => acc + val, 0);
//     newRows[rowIndex].total = newTotal;
//     setRows(newRows);
//   };

//   return (
//     <div className="MainArea">
//       <div className="MainHead">
//         <h1>Timesheet</h1>
//         <div className="MainHeadDetails" style={{ gap: "700px" }}>
//           <h5>Total hour: 0.0</h5>
//           <p>&lt; 29 Jan 2024 - 04 Feb 2024 &gt;</p>
//         </div>
//       </div>

//       <div className="MainBands">
//         <p style={{ flexGrow: 1 }}>Allocation Extension</p>
//         {!down && <GoChevronDown onClick={() => setDown(true)} />}
//         {down && <GoChevronUp onClick={() => setDown(false)} />}
//       </div>

//       {down && (
//         <table className="MainTable">
//           <thead>
//             <tr className="TableHead">
//               <th>Project Name</th>
//               <th>Project Type</th>
//               <th>Project End Date</th>
//               <th>Allocation End Date</th>
//               <th>Allocation Extension</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td colSpan="5" style={{ textAlign: "center" }}>
//                 No Available Options
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       )}

//       <div className="MainBands">
//         <p>Timesheet</p>
//       </div>

//       <table className="MainTable">
//         <thead>
//           <tr className="TableHead">
//             <th>Project Type</th>
//             <th>Project Name</th>
//             <th>Task</th>
//             <th>Comment</th>
//             <th>Mon</th>
//             <th>Tue</th>
//             <th>Wed</th>
//             <th>Thu</th>
//             <th>Fri</th>
//             <th>Sat</th>
//             <th>Sun</th>
//             <th>Total</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map((row, rowIndex) => (
//             <tr key={rowIndex}>
//               {rowIndex === 0 ? (
//                 <td className="projectType">{row.activity} Activity</td>
//               ) : (
//                 <td></td>
//               )}
//               <td>
//                 <select>
//                   <option value="">Project</option>
//                   <option value="">BAU_001 Training&Project Knowledege</option>
//                   <option value="">BAU_002 People</option>
//                   <option value="">BAU_003 Delivery</option>
//                   <option value="">BAU_004 Sales</option>
//                   <option value="">BAU_005 Events</option>
//                 </select>
//               </td>
//               <td>
//                 <select>
//                   <option value="">Task</option>
//                 </select>
//               </td>
//               <td>
//                 <input className="comments" />
//               </td>
//               {row.values.map((value, index) => (
//                 <td key={`value_${index}`}>
//                   <input
//                     type="number"
//                     min="0"
//                     max="24"
//                     value={value}
//                     onChange={(event) => handleInputChange(rowIndex, index, event)}
//                   />
//                 </td>
//               ))}
//               <td>{row.total}</td>
//               <td className="plus" onClick={() => addRow(row.activity)}>
//                 {" "}
//                 +{" "}
//               </td>
//               {rowIndex > 0 && (
//                 <td className="minus" onClick={() => removeRow(rowIndex)}>
//                   {" "}
//                   -{" "}
//                 </td>
//               )}
//             </tr>
//           ))}
//           {/* Your remaining JSX */}
//         </tbody>
//       </table>

//       <div className="MainSubmission">
//         <button className="submit">
//           Submit <GoArrowRight />
//         </button>
//         <button className="save">Save</button>
//       </div>
//     </div>
//   );
// }

// export default Timesheet;
