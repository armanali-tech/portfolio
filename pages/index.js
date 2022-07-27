import React from "react";
import { createStore } from "../utils/store";
import { getReposAsync } from "../utils/features/repoSearch/repoSearchSlice";
import dynamic from "next/dynamic";

const IndexPage = () => {
  const Home = dynamic(() => import("./home"), { ssr: false });
  return <Home />;
};

export async function getStaticProps() {
  const store = createStore();
  await store.dispatch(getReposAsync("node"));

  return {
    props: {
      state: store.getState(),
    },
  };
}

export default IndexPage;
