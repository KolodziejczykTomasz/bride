import React, { Component } from 'react';
import { connect } from 'react-redux';
import CompanyPostListItem from 'components/molecules/CompanyPostListItem';
import BreakeHeader from 'components/atoms/BreakeHeader'

class CompanyListItem extends Component {
  render() {
    const { company } = this.props;

    return (
      <>
      <BreakeHeader>Katalog firm</BreakeHeader>
       
        {company
          .filter((item) => item.pageName === 'dekoracje')
          .map(({ id, url, title, subtitle, price, city, description, pageType, pageName }) => (
            <CompanyPostListItem
              id={id}
              url={url}
              key={id}
              price={price}
              title={title}
              subtitle={subtitle}
              description={description}
              city={city}
              pageType={pageType}
              pageName={pageName}
            />
          ))}

        {company
          .filter((item) => item.pageName === 'atrakcje')
          .map(({ id, url, title, subtitle, price, city, description, pageType, pageName }) => (
            <CompanyPostListItem
              id={id}
              url={url}
              key={id}
              price={price}
              title={title}
              subtitle={subtitle}
              city={city}
              description={description}
              pageName={pageName}
            />
          ))}

        {company
          .filter((item) => item.pageName === 'lokale')
          .map(({ id, url, title, subtitle, price, city, description, pageType, pageName }) => (
            <CompanyPostListItem
              id={id}
              url={url}
              key={id}
              price={price}
              title={title}
              subtitle={subtitle}
              city={city}
              description={description}
              pageName={pageName}
            />
          ))}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { company } = state;
  return { company };
};

export default connect(mapStateToProps)(CompanyListItem);
