import { useEffect, useState } from "react";
import { useDebounce } from "../../common/useDebounce";
import "./SearchInput.css";

interface SearchInputProps {
  onSearchChange: (searchTerm: string) => void;
  label: string;
}

const SearchInput = ({ onSearchChange, label }: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    onSearchChange(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearchChange]);

  const searchChanges = (searchString: string): void => {
    setSearchTerm(searchString);
  };

  return (
    <label>
      <span>{label}</span>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => searchChanges(e.target.value)}
      />
    </label>
  );
};

export default SearchInput;
