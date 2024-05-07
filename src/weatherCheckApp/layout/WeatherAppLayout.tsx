import { ReactNode, FC } from "react";
import Header from "../components/Header";

interface WeatherLayoutProps {
  children: ReactNode;
}

const WeatherAppLayout: FC<WeatherLayoutProps> = ({ children }) => {
  return (
    <div className="bg-slate-500 w-full min-h-screen">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default WeatherAppLayout;
