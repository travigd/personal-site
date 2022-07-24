import "./_app.css";
import "highlight.js/styles/github-dark.css";

import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
