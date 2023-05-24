import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { Layout } from "@/layout/Layout";
import { RegisterModal } from "@/components/modals/RegisterModal";
import { LoginModal } from "@/components/modals/LoginModal";
import { Provider } from "react-redux";
import { store } from "@/libs/store";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={roboto.className}>
        <RegisterModal />
        <LoginModal />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </Provider>
  );
}
