import React, { useState } from "react";
import styles from "./FirstPants.module.scss";

const {
  pants_1,
  img,
  line,
  arrowhead,
  letter_wrap,
  active_line,
  active_letter,
  active_arrowhead_border,
  arrow_a,
  arrow_a_letter,
  arrow_a_head,
  arrow_b_c,
  arrow_b_c_letter_b,
  arrow_b_c_letter_c,
  arrow_b_c_head,
  arrow_d,
  arrow_d_letter,
  arrow_d_head,
  arrow_e,
  arrow_e_letter,
  arrow_e_head,
  arrow_f,
  arrow_f_letter,
  arrow_f_head,
  arrow_g,
  arrow_g_letter,
  arrow_g_head,
} = styles;

export const FirstPants: React.FC = () => {
  const [selectedLine, setSelectedLine] = useState<string>("");

  const handleLineClick = (line: string) => {
    setSelectedLine(line);
  };

  return (
    <div className={pants_1}>
      <img src="/icons/pants-1.jpg" alt="pants-1" className={img}/>
      <div
        className={`${line} ${arrow_a} ${
          selectedLine === "A" ? active_line : ""
        }`}
        onClick={() => handleLineClick("A")}
      >
        <span
          className={`${letter_wrap} ${arrow_a_letter} ${
            selectedLine === "A" ? active_letter : ""
          }`}
        >
          A
        </span>
        <span
          className={`${arrowhead} ${arrow_a_head} ${selectedLine === "A" ? active_arrowhead_border : ""}`}
        ></span>
      </div>
      <div
        className={`${line} ${arrow_b_c} ${
          (selectedLine === "B" || selectedLine === "C") ? active_line : ""
        }`}
      >
        <span
          className={`${letter_wrap} ${arrow_b_c_letter_b} ${
            selectedLine === "B" ? active_letter : ""
          }`}
          onClick={() => handleLineClick("B")}
        >
          B
        </span>
        <span
          className={`${letter_wrap} ${arrow_b_c_letter_c} ${
            selectedLine === "C" ? active_letter : ""
          }`}
          onClick={() => handleLineClick("C")}
        >
          C
        </span>
        <span
          className={`${arrowhead} ${arrow_b_c_head} ${(selectedLine === "B" || selectedLine === "C") ? active_arrowhead_border : ""}`}
        ></span>
      </div>
      <div
        className={`${line} ${arrow_d} ${
          selectedLine === "D" ? active_line : ""
        }`}
        onClick={() => handleLineClick("D")}
      >
        <span
          className={`${letter_wrap} ${arrow_d_letter} ${
            selectedLine === "D" ? active_letter : ""
          }`}
        >
          D
        </span>
        <span
          className={`${arrowhead} ${arrow_d_head} ${selectedLine === "D" ? active_arrowhead_border : ""}`}
        ></span>
      </div>
      <div
        className={`${line} ${arrow_e} ${
          selectedLine === "E" ? active_line : ""
        }`}
        onClick={() => handleLineClick("E")}
      >
        <span
          className={`${letter_wrap} ${arrow_e_letter} ${
            selectedLine === "E" ? active_letter : ""
          }`}
        >
          E
        </span>
        <span
          className={`${arrowhead} ${arrow_e_head} ${selectedLine === "E" ? active_arrowhead_border : ""}`}
        ></span>
      </div>
      <div
        className={`${line} ${arrow_f} ${
          selectedLine === "F" ? active_line : ""
        }`}
        onClick={() => handleLineClick("F")}
      >
        <span
          className={`${letter_wrap} ${arrow_f_letter} ${
            selectedLine === "F" ? active_letter : ""
          }`}
        >
          F
        </span>
        <span
          className={`${arrowhead} ${arrow_f_head} ${selectedLine === "F" ? active_arrowhead_border : ""}`}
        ></span>
      </div>
      <div
        className={`${line} ${arrow_g} ${
          selectedLine === "G" ? active_line : ""
        }`}
        onClick={() => handleLineClick("G")}
      >
        <span
          className={`${letter_wrap} ${arrow_g_letter} ${
            selectedLine === "G" ? active_letter : ""
          }`}
        >
          G
        </span>
        <span
          className={`${arrowhead} ${arrow_g_head} ${selectedLine === "G" ? active_arrowhead_border : ""}`}
        ></span>
      </div>
    </div>
  );
};
