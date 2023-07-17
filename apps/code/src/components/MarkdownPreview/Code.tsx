"use client";

import { useState } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { FaCopy } from "react-icons/fa";

type Props = {
  inline: boolean;
  className: string;
  children: any;
  [key: string]: any;
};

function Code({ inline, className, children, ...props }: Props) {
  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "text";
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(children);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return !inline ? (
    <div className="relative">
      <div className="bg-gray-500 text-white pl-3 rounded-t-md font-bold">
        {language}
        <button
          className={`absolute h-[1.5rem] top-0 right-0 bg-gray-700 text-white px-2 rounded-tr-md transition-opacity duration-200`}
          onClick={handleCopyClick}
        >
          {isCopied ? (
            <span className="text-sm">&quot;Copied!&quot;</span>
          ) : (
            <>
              <FaCopy className="inline-block" />{" "}
              <span className="mt-1">Copy</span>
            </>
          )}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={dracula}
        lineProps={{ style: { whiteSpace: "pre-wrap", flexWrap: "wrap" } }}
        wrapLines={false}
        PreTag="div"
        customStyle={{
          margin: "0rem",
          paddingTop: "1rem",
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
        }}
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  ) : (
    // Inline code
    <>
      <kbd className="bg-gray-300 dark:bg-gray-800 rounded-md px-2 pt-1 font-mono break-words">
        {String(children).replace(/\n$/, "")}
      </kbd>
    </>
  );
}

export default Code;
