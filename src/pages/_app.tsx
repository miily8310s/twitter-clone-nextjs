import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Roboto } from "next/font/google";
import { Layout } from "@/layout/Layout";
import { RegisterModal } from "@/components/modals/RegisterModal";
import { LoginModal } from "@/components/modals/LoginModal";
import { Provider } from "react-redux";
import { store } from "@/libs/store";
import { EditModal } from "@/components/modals/EditModal";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <main className={roboto.className}>
          <RegisterModal />
          <LoginModal />
          <EditModal />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </Provider>
    </>
  );
}
