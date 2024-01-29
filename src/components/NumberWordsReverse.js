import React, { useState } from "react";

const NumberWordsReverse = () => {
  const [inputText, setInputText] = useState("");
  const [reversedByCharacter, setReversedByCharacter] = useState("");
  const [reversedByLine, setReversedByLine] = useState("");
  const [reversedByByte, setReversedByByte] = useState("");

  const reverseByCharacter = (text) => {
    const reversedText = text.split("").reverse().join("");
    return reversedText;
  };

  const reverseByLine = (text) => {
    const reversedLines = text.split("\n").reverse().join("\n");
    return reversedLines;
  };

  const reverseByByte = (text) => {
    const utf8Bytes = unescape(encodeURIComponent(text));
    const reversedBytes = utf8Bytes.split("").reverse().join("");
    const reversedText = decodeURIComponent(escape(reversedBytes));
    return reversedText;
  };

  const handleReverse = () => {
    const reversedCharacter = reverseByCharacter(inputText);
    const reversedLine = reverseByLine(inputText);
    const reversedByte = reverseByByte(inputText);

    setReversedByCharacter(reversedCharacter);
    setReversedByLine(reversedLine);
    setReversedByByte(reversedByte);
  };

  const handleReset = () => {
    setInputText("");
    setReversedByCharacter("");
    setReversedByLine("");
    setReversedByByte("");
  };

  return (
    <div className="h-1/2 flex items-center justify-center bg-[#643843]">
      <div className="w-1/2 bg-white p-8 rounded shadow-lg border-t-8 border-b-8 border-black">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Number and Words Reverse
        </h1>
        <div className="mb-4">
          <label
            htmlFor="inputText"
            className="block text-sm font-medium text-gray-600"
          >
            Enter Text:
          </label>
          <textarea
            id="inputText"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="flex mb-4">
          <button
            onClick={handleReverse}
            className="flex-1 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Reverse
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
            htmlFor="reversedByCharacter"
            className="block text-sm font-medium text-gray-600"
          >
            Reversed by Character:
          </label>
          <textarea
            id="reversedByCharacter"
            value={reversedByCharacter}
            readOnly
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="reversedByLine"
            className="block text-sm font-medium text-gray-600"
          >
            Reversed by Line:
          </label>
          <textarea
            id="reversedByLine"
            value={reversedByLine}
            readOnly
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="reversedByByte"
            className="block text-sm font-medium text-gray-600"
          >
            Reversed by Byte:
          </label>
          <textarea
            id="reversedByByte"
            value={reversedByByte}
            readOnly
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default NumberWordsReverse;
