import React from "react";
import "./featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FreaturedInfo() {
  return (
    <div className="featured-info">
      {/* Featured Item RAVANUE */}
      <div className="featured-item">
        <span className="featured-title">Revanue</span>
        <div className="featured-money-container">
          <span className="featured-money">$24,415</span>
          <span className="featured-money-rate">
            -11.4
            <ArrowDownward className="featured-icon negative" />
          </span>
        </div>
        <span className="featured-sub">Compare to last month </span>
      </div>
      {/* End Featured Item RAVANUE */}
      {/* Featured Item Sales */}
      <div className="featured-item">
        <span className="featured-title">Sales</span>
        <div className="featured-money-container">
          <span className="featured-money">$2,415</span>
          <span className="featured-money-rate">
            -1.4
            <ArrowDownward className="featured-icon negative" />
          </span>
        </div>
        <span className="featured-sub">Compare to last month </span>
      </div>
      {/* Featured Item Sales */}
      {/* Featured Item Cost */}
      <div className="featured-item">
        <span className="featured-title">Cost</span>
        <div className="featured-money-container">
          <span className="featured-money">$2,225</span>
          <span className="featured-money-rate">
            +2.4
            <ArrowUpward className="featured-icon" />
          </span>
        </div>
        <span className="featured-sub">Compare to last month </span>
      </div>
      {/* Featured Item Cost */}
    </div>
  );
}
