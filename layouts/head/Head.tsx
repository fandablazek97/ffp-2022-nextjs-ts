import NextHead from "next/head";

export default function Head() {
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta name="author" content="reveal - https://reveal.cz" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      {/* Theme color */}
      {/* <meta name="theme-color" content="#F8FAFC" /> */}
    </NextHead>
  );
}
