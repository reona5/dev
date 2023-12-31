import { getMDXComponent, useMDXComponent } from "next-contentlayer/hooks";

type MdxProps = { code: string };

export const Mdx = (({ code }) => {
  const MDXComponent = useMDXComponent(code);
  return <MDXComponent />;
}) satisfies React.FC<MdxProps>;

export const renderedMdx = async (code: string) => {
  const ReactDOMServer = (await import("react-dom/server")).default;
  const Component = getMDXComponent(code);
  return ReactDOMServer.renderToStaticMarkup(<Component code={code} />);
};
