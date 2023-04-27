import type { FC } from "react";
import { TopicList } from "y/shared-components/molecules/TopicsList/TopicsList";
import type { HTMLExtendPropsType } from "y/types/utils/index.types";

export type ArticleProps = HTMLExtendPropsType<HTMLDivElement>;

export const Article: FC<ArticleProps> = (props) => {
  return (
    <article
      tabIndex={0}
      className="group grid w-full grid-cols-12 border-b border-gray-200 last:border-none"
      {...props}
    >
      <div className="col-span-full flex items-center pb-4 @phonemd:order-1">
        <div className="mr-4 h-8 w-8 rounded-full bg-gray-200"></div>
        <div className="">
          <div className="font-semibold text-gray-800">
            Denis Korablev &#x2022; 26 Apr 2023{" "}
          </div>
          <div className="text-sm text-gray-600">Teacher of how we can pee</div>
        </div>
      </div>
      <div className="col-span-8 pr-4 @phonemd:order-3 @phonemd:col-span-full">
        <h3 className="pb-4 text-2xl font-bold text-gray-800 decoration-indigo-700 group-hover:underline">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,
          facilis.
        </h3>
        <p className="break-words text-sm text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          explicabo rem delectus assumenda quam nam ullam corrupti nesciunt
          magnam quaerat cum illo quidem iste ex at iusto reiciendis, quisquam,
          corporis eveniet eum voluptatibus animi! Nam fugit quia, sequi
          nesciunt quasi saepe corrupti exercitationem numquam voluptates eius
          reprehenderit voluptatibus, vitae nisi officia! Magni velit blanditiis
          repellat iusto tempore, ea optio. Fugit!
        </p>
      </div>
      <div className="col-span-4 @phonemd:order-2 @phonemd:col-span-full @phonemd:pb-4">
        <div
          role="image"
          className="h-full w-full cursor-pointer rounded-xl bg-gray-200 transition duration-300 hover:scale-105 hover:shadow-xl @phonemd:h-52"
        ></div>
      </div>
      <TopicList className="col-span-full py-8 @phonemd:order-4"></TopicList>
    </article>
  );
};
