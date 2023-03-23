import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";
import { NavBar, OSProjectCard, PageBanner, TabsList } from "~/components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Open Source | Awesome Morocco</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <PageBanner
        title="Open Source"
        description="Explore latest innovations in the Tech world New here? Check our Tutorial on Open Source"
      />
      <main className="mx-auto flex  max-w-screen-lg flex-1 flex-col items-center justify-center  text-center">
        <TabsList
          routes={[
            { name: "Open Source", link: "/open-source" },
            { name: "ranking", link: "/open-source/ranking" },
            {
              name: "First Contribution",
              link: "/open-source/first-contribution",
            },
          ]}
          activeIndex={0}
        />
        <Repos />
      </main>
    </>
  );
};

export default Home;

const Repos: React.FC = () => {
  const { data, isLoading } = api.github.repos.useQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
      {data?.map((repo) => (
        <OSProjectCard key={repo.id} project={repo} />
      ))}
    </div>
  );
};
