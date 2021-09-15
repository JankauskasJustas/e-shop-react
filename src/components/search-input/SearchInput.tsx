import { useEffect, useState } from "react";
import { useDebounce } from "../../common/useDebounce";
import "./SearchInput.css";

interface SearchInputProps {
  onSearchChange: (searchTerm: string) => void;
  label: string;
}

const SearchInput = (props: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    props.onSearchChange(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const searchChanges = (searchString: string): void => {
    setSearchTerm(searchString);
  };

  return (
    <label>
      <span>{props.label}</span>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => searchChanges(e.target.value)}
      />
    </label>
  );
};

export default SearchInput;
