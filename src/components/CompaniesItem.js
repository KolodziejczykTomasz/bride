import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class CompaniesItem extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, title, subtitle, url, price, pageType } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageType}/${id}`} />;
    }
    return (
      <Card body>
        <CardTitle>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </CardTitle>
        <img src={url} alt={title} />
        <CardText>{price}</CardText>
        <Button onClick={this.handleCardClick}>Przejdź</Button>
      </Card>
    );
  }
}

export default CompaniesItem;
