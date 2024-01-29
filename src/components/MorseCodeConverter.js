import React, { useState } from "react";

const MorseCodeConverter = () => {
  const [inputText, setInputText] = useState("");
  const [encodedText, setEncodedText] = useState("");
  const [decodedText, setDecodedText] = useState("");

  const morseCodeDictionary = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    _: "..--.-",
    '"': ".-..-.",
    $: "...-..-",
    "@": ".--.-.",
  };

  const textToMorseCode = (text) => {
    return text
      .toUpperCase()
      .split("")
      .map((char) => {
        if (char === " ") return "/";
        return morseCodeDictionary[char] || char;
      })
      .join(" ");
  };

  const morseCodeToText = (morseCode) => {
    return morseCode
      .split(" ")
      .map((code) => {
        return code === "/"
          ? " "
          : Object.keys(morseCodeDictionary).find(
              (key) => morseCodeDictionary[key] === code
            ) || code;
      })
      .join("");
  };

  const handleEncode = () => {
    const encoded = textToMorseCode(inputText);
    setEncodedText(encoded);
    setDecodedText(""); // Reset decoded text
  };

  const handleDecode = () => {
    const decoded = morseCodeToText(inputText);
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
          Morse Code Converter
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
          <button
            onClick={handleReset}
            className="flex-1 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
          >
            Reset
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
      </div>
    </div>
  );
};

export default MorseCodeConverter;
