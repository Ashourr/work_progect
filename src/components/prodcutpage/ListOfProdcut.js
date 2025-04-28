"use client";
import React, { useState, useEffect } from "react";
import "./prodcutpage.css";
import {
  faCheck,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ListOfProdcut() {
  const options = [
    "Highest Rate",
    "Newest",
    "Oldest",
    "Lowest Price",
    "Highest Price",
  ];

  // حالة بدء مع أول قيمة كمختارة
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // عند تحميل المكون، جلب القيمة المحفوظة
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedOption = localStorage.getItem("selectedSortOption");
      if (savedOption && options.includes(savedOption)) {
        setSelectedOption(savedOption);
      }
    }
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);

    // حفظ القيمة في localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedSortOption", option);
    }

    console.log("تم حفظ الاختيار:", option);
    // هنا يمكنك إضافة أي منطق إضافي للفرز
  };

  return (
    <div className="sorting-dropdown">
      <button
        className="selected-option"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <span className="dropdown-arrow">
          {/* {isDropdownOpen ? '▲' : '▼'} */}
          <FontAwesomeIcon icon={faChevronUp} />
          <FontAwesomeIcon icon={faChevronDown} style={{ marginTop: "-3px" }} />
        </span>
        {selectedOption}
      </button>

      {isDropdownOpen && (
        <ul className="options-list">
          {options.map((option) => (
            <li
              key={option}
              className={`option-item ${
                selectedOption === option ? "active" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
              {selectedOption === option && (
                <span className="checkmark">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
