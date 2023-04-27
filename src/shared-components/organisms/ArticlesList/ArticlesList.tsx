import type { FC } from "react";
import type { HTMLExtendPropsType } from "y/types/utils/index.types";
import { Article } from "../Article/Article";

export type ArticlesListProps = HTMLExtendPropsType<HTMLDivElement>;

const mockArticles: { id: number }[] = [0, 1, 2, 4, 5, 6, 7, 8].map((_, i) => ({
  id: i + 1,
}));

export const ArticlesList: FC<ArticlesListProps> = (props) => {
  return (
    <div
      className="flex w-full flex-col justify-center space-y-8 pt-10"
      {...props}
    >
      {mockArticles.map((article) => (
        <Article key={article.id}></Article>
      ))}
    </div>
  );
};
