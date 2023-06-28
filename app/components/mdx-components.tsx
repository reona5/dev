import { getMDXComponent, useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

type MdxProps = { code: string };

const components = { Image };

export const Mdx = (({ code }) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}) satisfies React.FC<MdxProps>;

export const renderedMdx = async (code: string) => {
  const ReactDOMServer = (await import("react-dom/server")).default;
  const Component = getMDXComponent(code);
  return ReactDOMServer.renderToStaticMarkup(<Component code={code} />);
};
