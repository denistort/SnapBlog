import { Header, SearchBlock } from "y/shared-components/organisms";
import { ArticlesList } from "y/shared-components/organisms/ArticlesList/ArticlesList";
import { RecUsersSection } from "y/shared-components/organisms/RecUsersSection/RecUsersSection";
import { SideBar } from "y/shared-components/organisms/SideBar/SideBar";

const HomePage = () => {
  return (
    <div className="flex h-screen w-full flex-col pt-16">
      <Header></Header>
      <section className="grid h-full grid-cols-12 place-items-center">
        <main
          id="global-main-content"
          className="col-span-9 h-full w-full border-r border-gray-200 px-20 pt-20 @laptop:px-12 @laptop:pt-12 @prelaptop:col-span-12 @phonemd:px-8 @phonemd:pt-10 @extra-small:px-5"
        >
          <SearchBlock></SearchBlock>
          <RecUsersSection></RecUsersSection>
          <ArticlesList></ArticlesList>
        </main>
        <SideBar></SideBar>
      </section>
    </div>
  );
};

export default HomePage;
