import React, { useState } from "react";
import styles from "./Sleeveless.module.scss";

const {
  sleeveless,
  img,
  line,
  dart,
  letter_wrap,
  arrow_a,
  letter_a,
  dart_a,
  arrow_b,
  letter_b,
  dart_b,
  // arrow_c,
  // arrow_d,
  // arrow_e,
  // arrow_f,
  // arrow_g,
  active_line,
  active_letter,
  active_border,
} = styles;

export const Sleeveless: React.FC = () => {
  const [selectedLine, setSelectedLine] = useState<string>("");

  const handleLineClick = (line: string) => {
    setSelectedLine(line);
  };

  return (
    <div className={sleeveless}>
      <img src="/icons/sleeveless.jpg" alt="sleeveless" className={img} />
      <div
        className={`${line} ${arrow_a} ${
          selectedLine === "A" ? active_line : ""
        }`}
        onClick={() => handleLineClick("A")}
      >
        <span
          className={`${letter_wrap} ${letter_a} ${
            selectedLine === "A" ? active_letter : ""
          }`}
        >
          A
        </span>
        <span
          className={`${dart} ${dart_a} ${selectedLine === "A" ? active_border : ""}`}
        ></span>
      </div>
      <div
        className={`${line} ${arrow_b} ${
          selectedLine === "B" ? active_line : ""
        }`}
        onClick={() => handleLineClick("B")}
      >
        <span
          className={`${letter_wrap} ${letter_b} ${
            selectedLine === "B" ? active_letter : ""
          }`}
        >
          B
        </span>
        <span
          className={`${dart} ${dart_b} ${selectedLine === "B" ? active_border : ""}`}
        ></span>
      </div>
      {/* <div
        className={`${line} ${arrow_c} ${
          selectedLine === "C" ? active_line : ""
        }`}
        onClick={() => handleLineClick("C")}
      ></div>
      <div
        className={`${line} ${arrow_d} ${
          selectedLine === "D" ? active_line : ""
        }`}
        onClick={() => handleLineClick("D")}
      ></div>
      <div
        className={`${line} ${arrow_e} ${
          selectedLine === "E" ? active_line : ""
        }`}
        onClick={() => handleLineClick("E")}
      ></div>
      <div
        className={`${line} ${arrow_f} ${
          selectedLine === "F" ? active_line : ""
        }`}
        onClick={() => handleLineClick("F")}
      ></div>
      <div
        className={`${line} ${arrow_g} ${
          selectedLine === "G" ? active_line : ""
        }`}
        onClick={() => handleLineClick("G")}
      ></div>
      <div
        className={`${line} ${arrow_g} ${
          selectedLine === "H" ? active_line : ""
        }`}
        onClick={() => handleLineClick("H")}
      ></div>
      <div
        className={`${line} ${arrow_g} ${
          selectedLine === "I" ? active_line : ""
        }`}
        onClick={() => handleLineClick("I")}
      ></div> */}
    </div>
  );
};
