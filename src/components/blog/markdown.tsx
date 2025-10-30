import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
interface MarkdownProps {
  content: string;
}
export default function Markdown({ content }: MarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="text-heading-md md:text-heading-xl mb-4">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h1 className="text-heading-sm md:text-heading-md mt-8 mb-4">
            {children}
          </h1>
        ),
        p: ({ children }) => (
          <p className="mb-6 leading-relaxed text-gray-200">{children}</p>
        ),
        strong: ({ children }) => (
          <strong className="font-extrabold text-gray-100">{children}</strong>
        ),
        a: ({ children, href }) => (
          <a href={href} className="text-blue-200 hover:underline">
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
