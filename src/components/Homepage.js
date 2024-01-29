import { useState } from "react";

const Homepage = () => {
  const [inputText, setInputText] = useState("");
  const [shift, setShift] = useState(0);
  const [decryptedText, setDecryptedText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");

  const caesarCipher = (text, shift) => {
    return text
      .split("")
      .map((char) => {
        if (char.match(/[a-zA-Z]/)) {
          const isUpperCase = char === char.toUpperCase();
          const offset = isUpperCase ? 65 : 97;
          return String.fromCharCode(
            ((char.charCodeAt(0) - offset + shift) % 26) + offset
          );
        }
        return char;
      })
      .join("");
  };

  const handleEncrypt = () => {
    const encrypted = caesarCipher(inputText, shift);
    setEncryptedText(encrypted);
  };

  const handleDecrypt = () => {
    const decrypted = caesarCipher(inputText, shift * -1);
    setDecryptedText(decrypted);
  };

  const handleReset = () => {
    setInputText("");
    setShift(0);
    setDecryptedText("");
    setEncryptedText("");
  };

  return (
    <div className="h-1/2 flex items-center justify-center bg-[#643843]">
      <div className="w-1/2 bg-white p-8 rounded shadow-lg border-b-8 border-t-8 border-black">
        <h1 className="text-4xl font-bold mb-4 text-center">Caesar Code</h1>
        <div className="mb-4">
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-600"
          >
            Write Your Text
          </label>
          <input
            name="text"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="shift"
            className="block text-sm font-medium text-gray-600"
          >
            Choose Shift
          </label>
          <input
            type="number"
            value={shift}
            onChange={(e) => setShift(parseInt(e.target.value))}
            id="numberLength"
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="flex mb-4">
          <button
            onClick={handleEncrypt}
            className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Encrypt
          </button>
          <button
            onClick={handleDecrypt}
            className="flex-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
          >
            Decrypt
          </button>
        </div>
        <div className="mb-4">
          <button
            onClick={handleReset}
            className="w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Reset
          </button>
        </div>
        <div className="mt-4">
          <label
            htmlFor="encryptedText"
            className="block text-sm font-medium text-gray-600"
          >
            Encrypted Code
          </label>
          <input
            name="encryptedText"
            type="text"
            value={encryptedText}
            readOnly
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="decryptedText"
            className="block text-sm font-medium text-gray-600"
          >
            Decrypted Code
          </label>
          <input
            name="decryptedText"
            type="text"
            value={decryptedText}
            readOnly
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;

//bg-gradient-to-r from-blue-500 to-purple-500
