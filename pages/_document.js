import TwSizeIndicator from "@components/TwSizeIndicator";
import config from "@config/config.json";
import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  // destructuring items from config object
  const { favicon } = config.site;
  return (
    <Html lang="en">
      <Head>
        {/* favicon */}
        <link rel="shortcut icon" href={favicon} />
        {/* theme meta */}
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="p:domain_verify" content="d7c694b1758ba85d97feb7e383b5e2a0"/>
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />

      </Head>
      <body>
        <Main />
        <TwSizeIndicator />
        <NextScript />
        <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(93724133, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
                 });
              `,
            }}
          />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/93724133" style={{ position:'absolute', left:'-9999px' }} alt="" />
          </div>
        </noscript>        
      </body>
    </Html>
  );
};

export default Document;
