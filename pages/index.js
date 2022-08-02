import React from "react";
import { createStore } from "../utils/store";
import { getReposAsync } from "../utils/features/repoSearch/repoSearchSlice";
import Home from "./home";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <div>
      <Home />
      <Footer />
    </div>
  );
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
