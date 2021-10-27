import Header from "./Header";

const Layout = (props) => {
  return (
    <div className="relative h-full">
      <Header currentUser={props.currentUser} />
      <main className="w-full max-w-7xl mx-auto py-40">{props.children}</main>
    </div>
  );
};

export default Layout;
