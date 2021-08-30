import React from "react";
import "./widetlarge.css";

export default function WidgetLarge() {
  const Button = ({ type }) => {
    return <button className={"widget-large-button " + type}>{type}</button>;
  };
  return (
    <div className="widget-large">
      <h3 className="widget-large-title">Latest Transactions</h3>
      <table className="widget-large-table">
        {/* Table Hadings */}
        <tr className="widget-large-table-row">
          <th className="widget-large-table-th">Custom</th>
          <th className="widget-large-table-th">Date</th>
          <th className="widget-large-table-th">Amount</th>
          <th className="widget-large-table-th">Status</th>
        </tr>
        {/* End of Table Hadings */}
        {/* User 1 Information */}
        <tr className="widget-large-table-row">
          {/* User Information data */}
          <td className="widget-large-tabledata-user">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=940"
              alt="user_profile_image"
              className="widget-large-table-user-image"
            />
            <span className="widget-large-username">Susan Carol</span>
          </td>
          {/* Transaction Date */}
          <td className="widget-large-tabledata-date">2 Jun, 2021</td>
          {/* Transaction Amount */}
          <td className="widget-large-tabledata-amount">$122.0</td>
          {/* Transaction Status */}
          <td className="widget-large-tabledata-status">
            <Button type="Approved" />
          </td>
        </tr>
        {/* End of user 1 */}

        {/* User 2 Information */}
        <tr className="widget-large-table-row">
          {/* User Information data */}
          <td className="widget-large-tabledata-user">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=940"
              alt="user_profile_image"
              className="widget-large-table-user-image"
            />
            <span className="widget-large-username">Susan Carol</span>
          </td>
          {/* Transaction Date */}
          <td className="widget-large-tabledata-date">2 Jun, 2021</td>
          {/* Transaction Amount */}
          <td className="widget-large-tabledata-amount">$122.0</td>
          {/* Transaction Status */}
          <td className="widget-large-tabledata-status">
            <Button type="Declined" />
          </td>
        </tr>
        {/* End of user 2 */}

        {/* User 3 Information */}
        <tr className="widget-large-table-row">
          {/* User Information data */}
          <td className="widget-large-tabledata-user">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=940"
              alt="user_profile_image"
              className="widget-large-table-user-image"
            />
            <span className="widget-large-username">Susan Carol</span>
          </td>
          {/* Transaction Date */}
          <td className="widget-large-tabledata-date">2 Jun, 2021</td>
          {/* Transaction Amount */}
          <td className="widget-large-tabledata-amount">$122.0</td>
          {/* Transaction Status */}
          <td className="widget-large-tabledata-status">
            <Button type="Pending" />
          </td>
        </tr>
        {/* End of user 3 */}

        {/* User 4 Information */}
        <tr className="widget-large-table-row">
          {/* User Information data */}
          <td className="widget-large-tabledata-user">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=940"
              alt="user_profile_image"
              className="widget-large-table-user-image"
            />
            <span className="widget-large-username">Susan Carol</span>
          </td>
          {/* Transaction Date */}
          <td className="widget-large-tabledata-date">2 Jun, 2021</td>
          {/* Transaction Amount */}
          <td className="widget-large-tabledata-amount">$122.0</td>
          {/* Transaction Status */}
          <td className="widget-large-tabledata-status">
            <Button type="Approved" />
          </td>
        </tr>
        {/* End of user 4 */}
      </table>
    </div>
  );
}
