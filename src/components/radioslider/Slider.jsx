"use client";
import { useState } from "react";

const Slider = ({}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="flex self-start">
      <div className="mx-1">
        <input
          type="radio"
          name="radioGroup"
          className="accent-orange-600"
          value="option1"
          checked= 'option1'
          // onChange={handleRadioChange}
        />
      </div>
      <div className="mx-1">
        <input
          type="radio"
          name="radioGroup"
          className="accent-orange-600"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleRadioChange}
        />
      </div>
      <div className="mx-1">
        <input
          type="radio"
          name="radioGroup"
          className="accent-orange-600"
          value="option3"
          checked={selectedOption === "option3"}
          onChange={handleRadioChange}
        />
      </div>
      <div className="mx-1">
        <input
          type="radio"
          name="radioGroup"
          className="accent-orange-600"
          value="option4"
          checked={selectedOption === "option4"}
          onChange={handleRadioChange}
        />
      </div>
      <div className="mx-1">
        <input
          type="radio"
          name="radioGroup"
          className="accent-orange-600"
          value="option5"
          checked={selectedOption === "option5"}
          onChange={handleRadioChange}
        />
      </div>
      <div className="mx-1">
        <input
          type="radio"
          name="radioGroup"
          className="accent-orange-600"
          value="option6"
          checked={selectedOption === "option6"}
          onChange={handleRadioChange}
        />
      </div>
      <div className="mx-1">
        <input
          type="radio"
          name="radioGroup"
          className="accent-orange-600"
          value="option7"
          checked={selectedOption === "option7"}
          onChange={handleRadioChange}
        />
      </div>
    </div>
  );
};

export default Slider;
