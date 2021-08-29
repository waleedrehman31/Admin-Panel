import React from "react";
import Chart from "../../components/chart/Chart";
import FreaturedInfo from "../../components/featuredInfo/FreaturedInfo";
import WidgetLarge from "../../components/widgets/widgetLarge/WidgetLarge";
import WidgetSmall from "../../components/widgets/widgetsmall/WidgetSmall";
import { userData } from "../../DummyData";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <FreaturedInfo />
      <Chart data={userData} title="User Analytics" dataKey="Active User" />
      <div className="home-widgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}
