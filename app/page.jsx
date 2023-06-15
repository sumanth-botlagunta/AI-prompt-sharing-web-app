import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Discover, share, and inspire with a community-driven platform for
        creative prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
export const revalidate = 60; // revalidate this segment every 60 seconds
