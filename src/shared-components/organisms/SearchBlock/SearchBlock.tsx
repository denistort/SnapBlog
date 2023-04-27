import type { FC } from "react";
import { SearchInput } from "y/shared-components/atoms";
import { HiChevronDown } from "react-icons/hi2";
import { TopicList } from "y/shared-components/molecules/TopicsList/TopicsList";

export const SearchBlock: FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex w-full items-center space-x-4 pb-5 @phonemd:flex-col @phonemd:gap-4">
        <SearchInput />
        <TopicList className="w-full justify-end"></TopicList>
      </div>
      <div className="flex w-full items-center justify-between border-b border-gray-200 pb-10">
        <div className="text-gray-500">Articles</div>
        <div>
          <button className="flex items-center space-x-2 rounded-3xl border border-gray-800 px-6 py-2 transition hover:border-gray-500 hover:text-gray-500">
            <div className="font-semibold">Following</div>
            <div className="flex h-full items-end">
              <HiChevronDown />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
