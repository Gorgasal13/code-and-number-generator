import React, { useState } from "react";

const HexadecimalConverterColorPicker = () => {
  const [decimalNumber, setDecimalNumber] = useState("");
  const [hexadecimalResult, setHexadecimalResult] = useState("");
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [colorPickerCodeVisible, setColorPickerCodeVisible] = useState(false);

  const decimalToHexadecimal = (number) => {
    const hexadecimal = Number(number).toString(16).toUpperCase();
    return hexadecimal;
  };

  const handleConvert = () => {
    const hexadecimal = decimalToHexadecimal(decimalNumber);
    setHexadecimalResult(hexadecimal);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
    // You can also extract the decimal value from the color and update the decimal input if needed
  };

  const handleShowColorPickerCode = () => {
    setColorPickerCodeVisible(true);
  };

  const handleReset = () => {
    setDecimalNumber("");
    setHexadecimalResult("");
    setSelectedColor("#ffffff");
    setColorPickerCodeVisible(false);
  };

  return (
    <div className="h-1/2 flex items-center justify-center bg-[#643843]">
      <div className="w-1/2 bg-white p-8 rounded shadow-lg border-t-8 border-b-8 border-black">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Hexadecimal Converter and Color Picker
        </h1>
        <div className="mb-4">
          <label
            htmlFor="decimalNumber"
            className="block text-sm font-medium text-gray-600"
          >
            Enter Decimal Number:
          </label>
          <input
            type="number"
            id="decimalNumber"
            value={decimalNumber}
            onChange={(e) => setDecimalNumber(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="flex mb-4">
          <button
            onClick={handleConvert}
            className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Convert to Hexadecimal
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
            htmlFor="hexadecimalResult"
            className="block text-sm font-medium text-gray-600"
          >
            Hexadecimal Result:
          </label>
          <input
            type="text"
            id="hexadecimalResult"
            value={hexadecimalResult}
            readOnly
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="colorPicker"
            className="block text-sm font-medium text-gray-600"
          >
            Color Picker:
          </label>
          <input
            type="color"
            id="colorPicker"
            value={selectedColor}
            onChange={handleColorChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="selectedColor"
            className="block text-sm font-medium text-gray-600"
          >
            Selected Color:
          </label>
          <div
            id="selectedColor"
            className="mt-1 p-2 border rounded w-full"
            style={{ backgroundColor: selectedColor }}
          ></div>
        </div>
        <div className="mt-4">
          <button
            onClick={handleShowColorPickerCode}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Show Color Picker Code
          </button>
          {colorPickerCodeVisible && (
            <div className="mt-2">
              <p className="text-sm font-medium text-gray-600">
                Color Picker Code: <code>{selectedColor}</code>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HexadecimalConverterColorPicker;
