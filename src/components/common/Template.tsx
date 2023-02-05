import React, { FunctionComponent, ReactNode } from 'react';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import { Helmet } from 'react-helmet';

type TemplateProps = {
  title: string;
  description: string;
  siteUrl: string;
  imageUrl: string;
  children: ReactNode;
};

const Template: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  siteUrl,
  imageUrl,
  children,
}) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel="icon"
          type="image/svg"
          sizes="32x32"
          href="https://res.cloudinary.com/dhfkiaac8/image/upload/v1675571239/blog%20thumbnail/favicon32_cdwhwv.svg"
        />
        <link
          rel="icon"
          type="image/svg"
          sizes="16x16"
          href="https://res.cloudinary.com/dhfkiaac8/image/upload/v1675571282/blog%20thumbnail/favicon16_uexpdi.svg"
        ></link>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:site" content="ubububububub" />
        <meta name="twitter:creator" content="ubububububub" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <html lang="ko" />

        <body className="w-screen h-screen bg-light__background text-light__text dark:text-text dark:bg-background overflow-x-hidden" />
      </Helmet>

      <Header />
      <section className="max-w-5xl mx-auto">{children}</section>
      <Footer />
    </>
  );
};

export default Template;
