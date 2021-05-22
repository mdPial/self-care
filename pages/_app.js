import "../styles/globals.scss";
import NavBar from "../component/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar signInStatus="false" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
