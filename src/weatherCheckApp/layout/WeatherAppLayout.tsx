import { FC } from "react";
import Header from "../components/Header";
import { ChildrenProps } from "../../Type";

const WeatherAppLayout: FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="bg-slate-500 w-full min-h-screen">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default WeatherAppLayout;
