import Feed from '@components/Feed';
import Hero from '@components/Hero';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <Hero />
      <Feed />
    </section>
  );
};

export default Home;
