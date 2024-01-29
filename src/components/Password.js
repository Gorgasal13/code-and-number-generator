import { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const generateRandomPassword = () => {
    let charset = "";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSpecialChars) charset += "!@#$%^&*()_-+=<>?";

    let newPassword = "";

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }

    setPassword(newPassword);
  };

  const handleLengthChange = (event) => {
    const length = parseInt(event.target.value, 10);
    setPasswordLength(length);
  };

  const handleCheckboxChange = (option) => {
    switch (option) {
      case "uppercase":
        setIncludeUppercase(!includeUppercase);
        break;
      case "lowercase":
        setIncludeLowercase(!includeLowercase);
        break;
      case "numbers":
        setIncludeNumbers(!includeNumbers);
        break;
      case "specialChars":
        setIncludeSpecialChars(!includeSpecialChars);
        break;
      default:
        break;
    }
  };

  const handleReset = () => {
    setIncludeUppercase(true);
    setIncludeLowercase(true);
    setIncludeNumbers(true);
    setIncludeSpecialChars(true);
    setPasswordLength(12);
    setPassword("");
  };

  return (
    <div className="h-1/2 flex items-center justify-center bg-[#643843]">
      <div className="w-1/2 bg-white p-8 rounded shadow-lg border-t-8 border-b-8 border-black">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Random Password Generator
        </h1>
        <div className="mb-4">
          <label
            htmlFor="passwordLength"
            className="block text-sm font-medium text-gray-600"
          >
            Password Length:
          </label>
          <input
            type="number"
            id="passwordLength"
            value={passwordLength}
            onChange={handleLengthChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Include:
          </label>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="uppercase"
              checked={includeUppercase}
              onChange={() => handleCheckboxChange("uppercase")}
              className="mr-1"
            />
            <label htmlFor="uppercase" className="mr-4">
              Uppercase Letters
            </label>

            <input
              type="checkbox"
              id="lowercase"
              checked={includeLowercase}
              onChange={() => handleCheckboxChange("lowercase")}
              className="mr-1"
            />
            <label htmlFor="lowercase" className="mr-4">
              Lowercase Letters
            </label>

            <input
              type="checkbox"
              id="numbers"
              checked={includeNumbers}
              onChange={() => handleCheckboxChange("numbers")}
              className="mr-1"
            />
            <label htmlFor="numbers" className="mr-4">
              Numbers
            </label>

            <input
              type="checkbox"
              id="specialChars"
              checked={includeSpecialChars}
              onChange={() => handleCheckboxChange("specialChars")}
              className="mr-1"
            />
            <label htmlFor="specialChars">Special Characters</label>
          </div>
        </div>
        <div className="flex mb-4">
          <button
            onClick={generateRandomPassword}
            className="flex-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Generate Password
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
            htmlFor="generatedPassword"
            className="block text-sm font-medium text-gray-600"
          >
            Generated Password:
          </label>
          <input
            type="text"
            id="generatedPassword"
            value={password}
            readOnly
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
