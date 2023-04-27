import type { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export type HTMLExtendPropsType<T extends HTMLElement> = DetailedHTMLProps<
  HtmlHTMLAttributes<T>,
  T
>;
