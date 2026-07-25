import React from 'react';
import { Link } from 'react-router-dom';
import './PageHeader.css';

const PageHeader = ({ title, breadcrumbs }) => {
  return (
    <section className="page-header-banner">
      <div className="container">
        <h1 className="page-title">{title}</h1>
        <ul className="breadcrumbs">
          <li><Link to="/">Home</Link></li>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <li className="separator">/</li>
              {crumb.path ? (
                <li><Link to={crumb.path}>{crumb.label}</Link></li>
              ) : (
                <li className="active">{crumb.label}</li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PageHeader;
