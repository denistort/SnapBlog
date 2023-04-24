import { Header } from "y/shared-components/Layout";

const HomePage = () => {
  return (
    <div className="flex h-screen w-full flex-col">
      <Header></Header>
      <section className="grid h-full grid-cols-12 place-items-center">
        <main
          id="global-main-content"
          className="col-span-8 h-full w-full border-r border-gray-200"
        >
          weq
        </main>
        <aside id="global-sidebar" className="col-span-4 w-full">
          qzxcc
        </aside>
      </section>
    </div>
  );
};

export default HomePage;
