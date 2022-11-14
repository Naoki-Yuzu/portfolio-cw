import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';


export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}