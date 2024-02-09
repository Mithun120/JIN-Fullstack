import React, { useState } from "react";
import { GoChevronDown, GoChevronUp, GoArrowRight } from "react-icons/go";
import "../Styles/MainPage.css";

function Total() {
  const [rows1, setrows1] = useState([
    {
      activity: "Sales",
      values: Array(7).fill(0),
      total: 0
    }
  ]);

  const addRow1 = (activity) => {
    const newRow1 = {
      activity,
      values: Array(7).fill(0),
      total: 0
    };
    setrows1([...rows1, newRow1]);
  };

  const removeRow1 = (index) => {
    setrows1(rows1.filter((_, i) => i !== index));
  };

  const handleInputChange1 = (rowIndex, index, event) => {
    const newrows1 = [...rows1];
    newrows1[rowIndex].values[index] = parseInt(event.target.value) || 0;
    const newTotal = newrows1[rowIndex].values.reduce((acc, val) => acc + val, 0);
    newrows1[rowIndex].total = newTotal;
    setrows1(newrows1);
    // console.log("NEW rows1"+newrows1)
  };

  return (
    <div className="MainArea">
      

     

     

      <table className="MainTable">
        
        <tbody>
          {rows1.map((row1, rowIndex1) => (
            <tr key={`row_${rowIndex1}`}>
              {rowIndex1 === 0 ? <td className="projectType">{row1.activity} Activity</td> : <td></td>}
              <td>
                <select>
                  <option value="">Project</option>
                  <option value="">BAU_001 Training&Project Knowledege</option>
                  <option value="">BAU_002 People</option>
                  <option value="">BAU_003 Delivery</option>
                  <option value="">BAU_004 Sales</option>
                  <option value="">BAU_005 Events</option>
                </select>
              </td>
              <td>
                <select>
                  <option value="">Task</option>
                </select>
              </td>
              <td><input className="comments"/></td>
              {row1.values.map((value1, index1) => (
                <td key={`value_${index1}`}>
                  <input
                    type="number"
                    min="0"
                    max="24"
                    value={value1}
                    onChange={(event) => handleInputChange1(rowIndex1, index1, event)}
                  />
                </td>
              ))}
              <td>{row1.total}</td>
              <td className="plus" onClick={() => addRow1(row.activity)}> + </td>
              {rowIndex1 > 0 && <td className="minus" onClick={() => removeRow1(rowIndex1)}> - </td>}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="MainSubmission">
        <button className="submit">Submit <GoArrowRight /></button>
        <button className="save">Save</button>
      </div>
    </div>
  );
}

export default Total;
