import './Layout.css';

import { ReactNode } from 'react';
import { Navbar } from './navbar/Navbar';
import { Footer } from './footer/Footer';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="page-container">{children}</div>
      <Footer />
    </div>
  );
};
