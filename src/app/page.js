"use client";

import Title from "@/components/Title";
import Homepage from "@/components/Homepage";

import PasswordGenerator from "@/components/Password";
import PolybiusSquare from "@/components/PolybiusSquare";
import MorseCodeConverter from "@/components/MorseCodeConverter";
import NumeralSystemConverter from "@/components/NumeralSystemConverter";
import HexadecimalConverterColorPicker from "@/components/HexadecimalConverterColorPicker";
import NumberWordsReverse from "@/components/NumberWordsReverse";

export default function Home() {
  return (
    <main>
      <div>
        <Title />
        <PasswordGenerator />
        <Homepage />
        <PolybiusSquare />
        <MorseCodeConverter />
        <NumeralSystemConverter />
        <NumberWordsReverse />
        <HexadecimalConverterColorPicker />
      </div>
    </main>
  );
}
