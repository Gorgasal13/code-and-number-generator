import React, { useState } from "react";

const PolybiusSquare = () => {
  const [inputText, setInputText] = useState("");
  const [encodedText, setEncodedText] = useState("");
  const [decodedText, setDecodedText] = useState("");

  const polybiusSquareEncode = (text) => {
    const square = [
      ["A", "B", "C", "D", "E"],
      ["F", "G", "H", "I", "J"],
      ["K", "L", "M", "N", "O"],
      ["P", "Q", "R", "S", "T"],
      ["U", "V", "W", "X", "Y"],
    ];

    return text
      .toUpperCase()
      .split("")
      .map((char) => {
        if (char === " ") return " ";

        for (let i = 0; i < square.length; i++) {
          for (let j = 0; j < square[i].length; j++) {
            if (square[i][j] === char) {
              return `${i + 1}${j + 1}`;
            }
          }
        }

        // Handle characters not in the Polybius Square (e.g., numbers, special characters)
        return char;
      })
      .join(" ");
  };

  const polybiusSquareDecode = (text) => {
    const square = [
      ["A", "B", "C", "D", "E"],
      ["F", "G", "H", "I", "J"],
      ["K", "L", "M", "N", "O"],
      ["P", "Q", "R", "S", "T"],
      ["U", "V", "W", "X", "Y"],
    ];

    const pairs = text.split(" ");

    return pairs
      .map((pair) => {
        if (pair === " ") return " ";

        const row = parseInt(pair[0]) - 1;
        const col = parseInt(pair[1]) - 1;

        if (square[row] && square[row][col]) {
          return square[row][col];
        }

        // Handle invalid pairs
        return pair;
      })
      .join("");
  };

  const handleEncode = () => {
    const encoded = polybiusSquareEncode(inputText);
    setEncodedText(encoded);
    setDecodedText(""); // Reset decoded text
  };

  const handleDecode = () => {
    const decoded = polybiusSquareDecode(inputText);
    setDecodedText(decoded);
    setEncodedText(""); // Reset encoded text
  };

  const handleReset = () => {
    setInputText("");
    setEncodedText("");
    setDecodedText("");
  };

  return (
    <div className="h-1/2 flex items-center justify-center bg-[#643843]">
      <div className="w-1/2 bg-white p-8 rounded shadow-lg border-t-8 border-b-8 border-black">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Polybius Square Cipher
        </h1>
        <div className="mb-4">
          <label
            htmlFor="inputText"
            className="block text-sm font-medium text-gray-600"
          >
            Enter Text:
          </label>
          <input
            type="text"
            id="inputText"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="flex mb-4">
          <button
            onClick={handleEncode}
            className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Encode
          </button>
          <button
            onClick={handleDecode}
            className="flex-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
          >
            Decode
          </button>
        </div>
        <div className="mt-4">
          <label
            htmlFor="encodedText"
            className="block text-sm font-medium text-gray-600"
          >
            Encoded Text:
          </label>
          <input
            type="text"
            id="encodedText"
            value={encodedText}
            readOnly
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="decodedText"
            className="block text-sm font-medium text-gray-600"
          >
            Decoded Text:
          </label>
          <input
            type="text"
            id="decodedText"
            value={decodedText}
            readOnly
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mt-4">
          <button
            onClick={handleReset}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolybiusSquare;
