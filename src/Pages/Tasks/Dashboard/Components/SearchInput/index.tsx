import React, { memo } from "react";
import { SearchIcon, XIcon } from "@heroicons/react/solid";

function SearchInputComponent({
  onChange,
  onClear
}: {
  onChange: (e: string) => void;
  onClear: () => void;
}) {
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
      <button
        onClick={() => {
          onClear();
        }}
        type="button"
        className="w-7 h-7 hover:bg-border p-1 rounded-full  text-subtitle hover:text-primary focus-visible:bg-border focus-visible:text-primary duration-200 outline-none active:brightness-90 "
      >
        <XIcon className="min-w-5 w-5  " />
      </button>
    </div>
  );
}
const SearchInput = memo(SearchInputComponent);
export default SearchInput;
