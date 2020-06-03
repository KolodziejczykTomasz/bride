import React from 'react';

const Breadcrumb = () => (
  <nav className="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li>
        <a href="#">Home</a>
      </li>

      <li className="is-active">
        <a href="#" aria-current="page">
          Breadcrumb
        </a>
      </li>
    </ul>
  </nav>
);

export default Breadcrumb;
