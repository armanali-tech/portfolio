import Home from "../components/Home";
import { useRouter } from "next/router";
import { createStore } from "../utils/store";
import { getReposAsync } from "../utils/features/repoSearch/repoSearchSlice";

const IndexPage = () => {
  const router = useRouter();
  return (
    <>
      <div onClick={() => router.push("/about")}> </div>
      <Home />
    </>
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
