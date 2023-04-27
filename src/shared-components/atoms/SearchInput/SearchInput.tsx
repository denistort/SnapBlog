import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import classNames from "classnames";

// Types
import type { FC } from "react";
import type { HTMLExtendPropsType } from "y/types/utils/index.types";

export type SearchInputProps = HTMLExtendPropsType<HTMLInputElement>;

export const SearchInput: FC<SearchInputProps> = (props) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <label
      htmlFor="search-input"
      className={classNames(
        "relative flex w-full overflow-hidden rounded-lg border border-gray-300 transition-shadow",
        { "shadow-md": isFocus }
      )}
    >
      <div className="left absolute flex h-full items-center pl-2">
        <CiSearch className="text-2xl text-gray-300" />
      </div>
      <input
        type="text"
        id="search-input"
        onBlur={() => setIsFocus(false)}
        onFocus={() => setIsFocus(true)}
        className="placeholder:text-gray-40 w-full rounded px-4 py-2 pl-10 outline-none"
        placeholder="Search..."
        {...props}
      />
    </label>
  );
};
