import React from "react";
import { CoffeeMenu } from "../components/CoffeeMenu";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coffee Menu Interactive</title>
        <meta
          name="description"
          content="Menu interativo de cafeteria com animações suaves"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CoffeeMenu />
      </main>
    </>
  );
}
