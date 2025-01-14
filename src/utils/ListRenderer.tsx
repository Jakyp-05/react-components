import { Link } from "react-router-dom";
import { routerList } from "../interface";
import React from "react";

type IProps = {
  items: routerList[];
  render: (item: routerList) => React.ReactNode;
};

const ListRenderer = ({ items, render }: IProps) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Link to={item.link}>{item.text}</Link>
          {render(item)}
        </li>
      ))}
    </ul>
  );
};

export default ListRenderer;
