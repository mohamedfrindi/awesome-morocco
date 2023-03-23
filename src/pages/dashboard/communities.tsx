import { type NextPage } from "next";
import Head from "next/head";
import { DashboardLayout, NavBar } from "~/components";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Communities</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <DashboardLayout activePage="Communities">
        <div className="pt-4">
          <h1 className="py-2 text-2xl font-semibold">New Community</h1>
        </div>
        <hr className="mt-4 mb-8" />
      </DashboardLayout>
    </>
  );
};

export default Index;
