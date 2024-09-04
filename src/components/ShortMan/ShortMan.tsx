import React, { useState } from "react";
import styles from "./ShortMan.module.scss";

const {
  short,
  img,
  line,
  arrowhead,
  letter_wrap,
  active_line,
  active_letter,
  active_arrowhead_border,
  active_line_border,
  active_head_right,
  active_head_left,
  arrow_a,
  arrow_a_letter,
  arrow_a_head,
  arrow_b,
  arrow_b_letter,
  arrow_b_head,
  arrow_c,
  arrow_c_letter,
  arrow_c_head,
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
  arrow_h,
  arrow_h_letter,
  arrow_h_head_right,
  arrow_h_head_left,
  arrow_i,
  arrow_i_letter,
  arrow_i_head_right,
  arrow_i_head_left,
} = styles;

export const ShortMan: React.FC = () => {
  const [selectedLine, setSelectedLine] = useState<string>("");

  const handleLineClick = (line: string) => {
    setSelectedLine(line);
  };

  return (
    <div className={short}>
      <img src="/icons/t-short-man.jpg" alt="t-short-man" className={img} />
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
          className={`${arrowhead} ${arrow_a_head} ${
            selectedLine === "A" ? active_arrowhead_border : ""
          }`}
        ></span>
      </div>
      <div
        className={`${line} ${arrow_b} ${
          selectedLine === "B" ? active_line : ""
        }`}
        onClick={() => handleLineClick("B")}
      >
        <span
          className={`${letter_wrap} ${arrow_b_letter} ${
            selectedLine === "B" ? active_letter : ""
          }`}
        >
          B
        </span>
        <span
          className={`${arrowhead} ${arrow_b_head} ${
            selectedLine === "B" ? active_arrowhead_border : ""
          }`}
        ></span>
      </div>
      <div
        className={`${line} ${arrow_c} ${
          selectedLine === "C" ? active_line : ""
        }`}
        onClick={() => handleLineClick("C")}
      >
        <span
          className={`${letter_wrap} ${arrow_c_letter} ${
            selectedLine === "C" ? active_letter : ""
          }`}
        >
          C
        </span>
        <span
          className={`${arrowhead} ${arrow_c_head} ${
            selectedLine === "C" ? active_arrowhead_border : ""
          }`}
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
          className={`${arrowhead} ${arrow_d_head} ${
            selectedLine === "D" ? active_arrowhead_border : ""
          }`}
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
          className={`${arrowhead} ${arrow_e_head} ${
            selectedLine === "E" ? active_arrowhead_border : ""
          }`}
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
          className={`${arrowhead} ${arrow_f_head} ${
            selectedLine === "F" ? active_arrowhead_border : ""
          }`}
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
          className={`${arrowhead} ${arrow_g_head} ${
            selectedLine === "G" ? active_arrowhead_border : ""
          }`}
        ></span>
      </div>
      <div
        className={`${line} ${arrow_h} ${
          selectedLine === "H" && active_line_border
        }`}
      >
        <span
          className={`${letter_wrap} ${arrow_h_letter} ${
            selectedLine === "H" && active_letter
          }`}
          onClick={() => handleLineClick("H")}
        >
          H
        </span>
        <span
          className={`${arrowhead} ${arrow_h_head_right} ${
            selectedLine === "H" && active_arrowhead_border
          }
          ${selectedLine === "H" && active_head_right}`}
        ></span>
        <span
          className={`${arrowhead} ${arrow_h_head_left} ${
            selectedLine === "H" && active_arrowhead_border
          }
          ${selectedLine === "H" && active_head_left}`}
        ></span>
      </div>
      <div
        className={`${line} ${arrow_i} ${
          selectedLine === "I" && active_line_border
        }`}
      >
        <span
          className={`${letter_wrap} ${arrow_i_letter} ${
            selectedLine === "I" && active_letter
          }`}
          onClick={() => handleLineClick("I")}
        >
          I
        </span>
        <span
          className={`${arrowhead} ${arrow_i_head_right} ${
            selectedLine === "I" && active_arrowhead_border
          }
          ${selectedLine === "I" && active_head_right}`}
        ></span>
        <span
          className={`${arrowhead} ${arrow_i_head_left} ${
            selectedLine === "I" && active_arrowhead_border
          }
          ${selectedLine === "I" && active_head_left}`}
        ></span>
      </div>
    </div>
  );
};
