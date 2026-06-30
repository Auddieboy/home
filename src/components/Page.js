import { Header } from "./common/Header";

export const Page = ({ children, title }) => {
  return (
    <div className="grow py-6 px-12 bg-bg-primary">
      <div className="flex flex-col items-center mt-8 mb-6">
        <Header>{title}</Header>
      </div>
      {children}
    </div>
  );
};
