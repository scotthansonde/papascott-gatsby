import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const NavLink = props => {
  if (!props.test) {
    return (
      <Link to={props.url} className="pagination-item">
        {props.text}
      </Link>
    );
  } else {
    return <span className="pagination-item">{props.text}</span>;
  }
};

export default ({ data, pathContext }) => {
  const { group, index, first, last } = pathContext;
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return (
    <Layout>
      {group && group.map(({ node }, idx) => (
        <div className="post" key={idx}>
        <h1 className="post-title">
          <Link to={node.fields.slug} >
            {node.fields.title}
          </Link></h1>
          <span className="post-date">{node.fields.date}</span>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      ))}
      {/* <div className="pagination">
        <NavLink test={last} url={nextUrl} text="Older" />
        <NavLink test={first} url={previousUrl} text="Newer" />
      </div> */}
    </Layout>
  );
};
