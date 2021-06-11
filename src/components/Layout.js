import { Hero } from "../components/Hero";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import Head from "next/head";

export const Layout = ({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  headTitle,
  ...rest
}) => {
  return (
    <>
      <Head>
        <title>{headTitle}</title>
        {/* <link rel="shortcut icon" href="/public/favicon.ico" /> */}
      </Head>
      <DarkModeSwitch />
      <Hero
        title={title}
        subtitle={subtitle}
        image={image}
        ctaLink={ctaLink}
        ctaText={ctaText}
      />
    </>
  );
};
