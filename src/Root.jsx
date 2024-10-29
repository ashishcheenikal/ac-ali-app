import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Root = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col overflow-y-auto bg-hp-primary-600 font-hp_font bg-hp-gradient">
        {/* <Header /> */}

        <div className="flex-grow flex-shrink-0">
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Root;
