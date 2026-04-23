import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../pages/Home';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#FCFCF9]">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
