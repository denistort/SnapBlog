import type { FC } from "react";

export const RecUsersSection: FC = () => {
  return (
    <div>
      <h2 className="py-8 text-xl font-bold text-gray-800">
        People you might be interested
      </h2>
      <div className="grid w-full grid-cols-12 gap-8 rounded-lg border border-gray-200 p-5">
        <div className="col-span-3 h-52 rounded-lg">
          <div className="flex w-full items-center justify-center">
            <div className="h-28 w-28 rounded-full bg-gray-200"></div>
          </div>
          <div>
            <h3 className="text mb-1 text-center font-semibold text-gray-800">
              Denis Korablev
            </h3>
            <p className="mb-1 text-center text-sm text-gray-600">
              Gay, Tourist{" "}
            </p>
          </div>
          <div>
            <button className="w-full rounded-lg border border-gray-400 p-1 transition hover:shadow-md">
              Follow
            </button>
          </div>
        </div>

        <div className="col-span-3 h-52 rounded-lg">
          <div className="flex w-full items-center justify-center">
            <div className="h-28 w-28 rounded-full bg-gray-200"></div>
          </div>
          <div>
            <h3 className="text mb-1 text-center font-semibold text-gray-800">
              Denis Korablev
            </h3>
            <p className="mb-1 text-center text-sm text-gray-600">
              Gay, Tourist{" "}
            </p>
          </div>
          <div>
            <button className="w-full rounded-lg border border-gray-400 p-1 transition hover:shadow-md">
              Follow
            </button>
          </div>
        </div>

        <div className="col-span-3 h-52 rounded-lg">
          <div className="flex w-full items-center justify-center">
            <div className="h-28 w-28 rounded-full bg-gray-200"></div>
          </div>
          <div>
            <h3 className="text mb-1 text-center font-semibold text-gray-800">
              Denis Korablev
            </h3>
            <p className="mb-1 text-center text-sm text-gray-600">
              Gay, Tourist{" "}
            </p>
          </div>
          <div>
            <button className="w-full rounded-lg border border-gray-400 p-1 transition hover:shadow-md">
              Follow
            </button>
          </div>
        </div>

        <div className="col-span-3 h-52 rounded-lg">
          <div className="flex w-full items-center justify-center">
            <div className="h-28 w-28 rounded-full bg-gray-200"></div>
          </div>
          <div>
            <h3 className="text mb-1 text-center font-semibold text-gray-800">
              Denis Korablev
            </h3>
            <p className="mb-1 text-center text-sm text-gray-600">
              Gay, Tourist{" "}
            </p>
          </div>
          <div>
            <button className="w-full rounded-lg border border-gray-400 p-1 transition hover:shadow-md">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
