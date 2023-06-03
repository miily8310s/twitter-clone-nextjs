import Head from "next/head";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Twitter Clone</title>
      </Head>
      <main>
        <Header label="Home" />
      </main>
    </>
  );
}
