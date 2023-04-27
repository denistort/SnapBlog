import type { FC } from "react";
import type { HTMLExtendPropsType } from "y/types/utils/index.types";
import cls from "classnames";

export type TopicsListProps = HTMLExtendPropsType<HTMLDivElement>;

export const TopicList: FC<TopicsListProps> = ({ className, ...rest }) => {
  return (
    <div className={cls("flex items-center gap-2", className)} {...rest}>
      <div className="mr-2 font-semibold">Tags: </div>
      {["theme-1", "theme-2", "theme-3"].map((name) => (
        <div
          tabIndex={0}
          className="cursor-pointer rounded-3xl bg-gray-200 px-4 py-2 text-sm text-gray-800 transition hover:bg-gray-300 hover:text-gray-800"
          key={name}
        >
          {name}
        </div>
      ))}
    </div>
  );
};
