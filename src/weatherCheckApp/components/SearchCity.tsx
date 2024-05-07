import React, { useState } from "react";

interface SearchCityProps {
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

const SearchCity: React.FC<SearchCityProps> = ({ setCity }) => {
  const [inputValue, setInputValue] = useState("");
  // this function will handle the input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  // this function will prevent the default behavior of the form and set the city
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return; // prevent empty string
    setCity(inputValue);
    setInputValue(""); // clear input
  };

  return (
    <form className="flex justify-center items-center mt-5" onSubmit={onSubmit}>
      <input
        className="rounded-lg p-2 w-1/2"
        type="text"
        placeholder="Enter city name"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className="border-2 rounded-lg shadow-md shadow-black text-white p-2"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchCity;
