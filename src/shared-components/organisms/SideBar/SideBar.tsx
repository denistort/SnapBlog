import type { FC } from "react";
import type { HTMLExtendPropsType } from "y/types/utils/index.types";

export type SideBarProps = HTMLExtendPropsType<HTMLDivElement>;

export const SideBar: FC<SideBarProps> = () => {
  return (
    <aside
      id="global-sidebar"
      className="@prelaptop:col-span-0 relative col-span-3 flex h-full w-full flex-col px-6 pt-20 @prelaptop:hidden"
    >
      <div className="flex flex-col space-y-8  @laptop:pt-12">
        <div>
          <h3 className="mb-8 text-lg font-bold text-gray-800">
            People you might be interested
          </h3>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                <div className="flex flex-col">
                  <div className="font-semibold text-gray-800">
                    Denis Korablev
                  </div>
                  <div className="text-xs text-gray-500">
                    Teacher straight white man
                  </div>
                </div>
                <button className="ml-auto rounded-xl border border-gray-200 px-4 py-2 text-gray-600">
                  follow
                </button>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                <div className="flex flex-col">
                  <div className="font-semibold text-gray-800">
                    Denis Korablev
                  </div>
                  <div className="text-xs text-gray-500">
                    Teacher straight white man
                  </div>
                </div>
                <button className="ml-auto rounded-xl border border-gray-200 px-4 py-2 text-gray-600">
                  follow
                </button>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                <div className="flex flex-col">
                  <div className="font-semibold text-gray-800">
                    Denis Korablev
                  </div>
                  <div className="text-xs text-gray-500">
                    Teacher straight white man
                  </div>
                </div>
                <button className="ml-auto rounded-xl border border-gray-200 px-4 py-2 text-gray-600">
                  follow
                </button>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                <div className="flex flex-col">
                  <div className="font-semibold text-gray-800">
                    Denis Korablev
                  </div>
                  <div className="text-xs text-gray-500">
                    Teacher straight white man
                  </div>
                </div>
                <button className="ml-auto rounded-xl border border-gray-200 px-4 py-2 text-gray-600">
                  follow
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-gray-800">
            Your reading list
          </h3>

          <div className="flex flex-col gap-4">
            <div className="flex border-b border-gray-300 pb-4 @laptop:flex-col">
              <div className="h-52 w-full rounded-lg bg-gray-200 @laptop:mb-2 @laptop:h-36"></div>
              <div className="w-full pl-4 @laptop:pl-0">
                <h3 className="mb-2 font-bold text-gray-800">
                  Post example title
                </h3>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                  <div className="text-sm font-semibold text-gray-800">
                    Denis Korablev &#x2022; 26 Apr 2023{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="">
          <div>
            Created by{" "}
            <a
              className="font-semibold text-gray-800 underline"
              href="https://github.com/denistort"
            >
              Denis Korablev
            </a>{" "}
            &#x2022; {new Date().getFullYear()}
          </div>
        </footer>
      </div>
    </aside>
  );
};
