import React, { memo } from "react";
import { SearchIcon } from "@heroicons/react/solid";

function SearchInputComponent({ onChange }: { onChange: (e: string) => void }) {
  return (
    <div className="flex flex-1 p-2 px-4 duration-200 border-b-2 rounded-lg focus-within:text-primary focus-within:border-primary bg-neutral text-subtitle border-border">
      <SearchIcon className="w-5 " />
      <div className="w-2" />
      <input
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="flex-1 bg-transparent outline-none text-title"
      />
    </div>
  );
}
const SearchInput = memo(SearchInputComponent);
export default SearchInput;
