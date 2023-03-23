import { type NextPage } from "next";
import Head from "next/head";
import { DashboardLayout, NavBar, OSProjectCard } from "~/components";
import { api } from "~/utils/api";

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <DashboardLayout activePage="Home">
        <div className="pt-4">
          <h1 className="py-2 text-2xl font-semibold">Your Submissions </h1>
        </div>
        <hr className="mt-4 mb-8" />
        <Repos />
      </DashboardLayout>
    </>
  );
};

export default Dashboard;

const Repos: React.FC = () => {
  const { data, isLoading } = api.github.my_repos.useQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
      {data?.map((repo) => (
        <OSProjectCard key={repo.id} project={repo} />
      ))}
    </div>
  );
};
