import React, { useState } from "react";

const NumeralSystemConverter = () => {
  const [inputNumber, setInputNumber] = useState("");
  const [binaryResult, setBinaryResult] = useState("");
  const [romanNumeralResult, setRomanNumeralResult] = useState("");

  const decimalToBinary = (number) => {
    const binary = Number(number).toString(2);
    return binary;
  };

  const decimalToRomanNumeral = (number) => {
    const romanNumerals = [
      { value: 1000, numeral: "M" },
      { value: 900, numeral: "CM" },
      { value: 500, numeral: "D" },
      { value: 400, numeral: "CD" },
      { value: 100, numeral: "C" },
      { value: 90, numeral: "XC" },
      { value: 50, numeral: "L" },
      { value: 40, numeral: "XL" },
      { value: 10, numeral: "X" },
      { value: 9, numeral: "IX" },
      { value: 5, numeral: "V" },
      { value: 4, numeral: "IV" },
      { value: 1, numeral: "I" },
    ];

    let result = "";
    let remainingNumber = number;

    for (const { value, numeral } of romanNumerals) {
      const count = Math.floor(remainingNumber / value);
      result += numeral.repeat(count);
      remainingNumber -= count * value;
    }

    return result;
  };

  const handleConvert = () => {
    const binary = decimalToBinary(inputNumber);
    const romanNumeral = decimalToRomanNumeral(inputNumber);

    setBinaryResult(binary);
    setRomanNumeralResult(romanNumeral);
  };

  const handleReset = () => {
    setInputNumber("");
    setBinaryResult("");
    setRomanNumeralResult("");
  };

  return (
    <div className="h-1/2 flex items-center justify-center bg-[#643843]">
      <div className="w-1/2 bg-white p-8 rounded shadow-lg border-t-8 border-b-8 border-black">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Numeral System Converter
        </h1>
        <div className="mb-4">
          <label
            htmlFor="inputNumber"
            className="block text-sm font-medium text-gray-600"
          >
            Enter Number:
          </label>
          <input
            type="number"
            id="inputNumber"
            value={inputNumber}
            onChange={(e) => setInputNumber(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="flex mb-4">
          <button
            onClick={handleConvert}
            className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Convert
          </button>
          <button
            onClick={handleReset}
            className="flex-1 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
          >
            Reset
          </button>
        </div>
        <div className="mt-4">
          <label
            htmlFor="binaryResult"
            className="block text-sm font-medium text-gray-600"
          >
            Binary Result:
          </label>
          <input
            type="text"
            id="binaryResult"
            value={binaryResult}
            readOnly
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="romanNumeralResult"
            className="block text-sm font-medium text-gray-600"
          >
            Roman Numeral Result:
          </label>
          <input
            type="text"
            id="romanNumeralResult"
            value={romanNumeralResult}
            readOnly
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default NumeralSystemConverter;
