import React from "react";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Calculate = () => {
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);
  const [operator, setOperator] = useState("+");
//   const [result, setResult] = useState(0);
  const [resultArray, setResultArray] = useState([]); // Initialize with an empty array

  const handleChange = (e) => {
    if (e.target.name === "num1") setOperand1(parseFloat(e.target.value));
    else if (e.target.name === "num2") setOperand2(parseFloat(e.target.value));
    else if (e.target.name === "operand") setOperator(e.target.value);
  };

  useEffect(() => {
    const savedResults = Cookies.get("calculatorResults"); // Use Cookies.get instead of getJSON
    if (savedResults) {
      setResultArray(JSON.parse(savedResults)); // Parse the retrieved data
    }
  }, []);

  const handleSubmit = () => {
    fetch("http://localhost:4000/api/calculate/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        operand1,
        operand2,
        operator,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // setResult(data.result);
        const newResultArray = [
          ...resultArray,
          { operand1, operand2, operator, result: data.result },
        ];
        setResultArray(newResultArray);
        Cookies.set("calculatorResults", JSON.stringify(newResultArray), {
          expires: 7,
        }); // Stringify before setting
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  

  return (
    <div className="h-screen">
      <div className="flex justify-center space-x-4">
        <div>
          <div className="mb-2">
            <label className="text-gray-600">Operand 1</label>
          </div>
          <div>
            <input
              name="num1"
              className="border-2 border-gray-300 p-1 outline-4 outline-blue-300 rounded-md w-28"
              type="number"
              id="num1"
              title="Please enter a valid number (integer, float, or double)"
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div className="mb-2">
            <label className="text-gray-600 ">Operation</label>
          </div>
          <div>
            {" "}
            <select
              onChange={handleChange}
              name="operand"
              id="operandDropdown"
              className="border-2 border-gray-300 p-1 outline-4 outline-blue-300 rounded-md w-28"
            >
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>
          </div>
        </div>
        <div>
          <div className="mb-2">
            <label className="text-gray-600">Operand 2</label>
          </div>
          <div>
            <input
              className="border-2 border-gray-300 p-1 outline-4 outline-blue-300 rounded-md w-28"
              type="number"
              title="Please enter a valid number (integer, float, or double)"
              id="num2"
              name="num2"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={handleSubmit}
          className=" bg-[#16a0b7] py-1 rounded-md px-2 ml-[-285px]"
        >
          Calculate
        </button>
        
      </div>
      
        <div className="flex justify-center mt-10">
      <table className="table-fixed w-[600px] text-center mx-10">
        <thead>
          <tr className="border-b-2 border-t-2 ">
            <th className="w-1/4">Operand 1</th>
            <th className="w-1/4">Operator</th>
            <th className="w-1/4">Operand 2</th>
            <th className="w-1/4">Result</th>
          </tr>
        </thead>
        <tbody>
          {resultArray.map((item, index) => (
            <tr key={index} className="border-b-2 ">
              <td className="w-1/4">{item.operand1}</td>
              <td className="w-1/4">{item.operator}</td>
              <td className="w-1/4">{item.operand2}</td>
              <td className="w-1/4">{item.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Calculate;
