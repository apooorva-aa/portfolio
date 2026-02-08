import { ReactNode } from "react";
import localFont from "next/font/local";
import { classNames } from "@/utility/classNames";
import Navbar from "./Navbar/Navbar";
import { routes } from "@/routes/navigationRoutes";
import Footer from "./Footer";

const montserrat = localFont({
  src: [
    {
      path: '../../public/fonts/Montserrat-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-montserrat',
});

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <div className={classNames("min-h-screen", montserrat.className)}>
        <Navbar routes={routes} />
        <main>{props.children}</main>
      </div>
      <Footer />
    </>
  );
}
