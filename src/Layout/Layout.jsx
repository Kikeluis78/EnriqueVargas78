import Header from "../components/Header";
import Footer from "../components/Footer";
import Chat from "../components/Chat";
function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Chat />
      <Footer />
    </div>
  );
}

export default Layout;
