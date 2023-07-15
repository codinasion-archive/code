"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import "katex/dist/katex.min.css";

import MdxComponents from "./MdxComponents";

type ReactMarkdownPropsType = {
  children: string;
};

export default function MarkdownPreview({ children }: ReactMarkdownPropsType) {
  return (
    <>
      <ReactMarkdown
        className="prose dark:prose-invert max-w-none prose-pre:p-0"
        components={MdxComponents}
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeKatex]}
        // eslint-disable-next-line react/no-children-prop
        children={children}
      />
    </>
  );
}
