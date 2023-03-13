import { GA_ID } from "../consts";
import type { FC } from "react";

export const isGaIdExists = GA_ID !== "";
export const GoogleAnalytics: FC = () => {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');`,
        }}
      />
    </>
  );
};
