import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccesoriesItem from './AccesoriesItem';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1rem;
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const WrapperItem = styled.div`
  width: 100%;
`;

class AccesoriesBar extends Component {
  
  render() {
    const { accesories} = this.props;
    
    return (
      <Wrapper>
        {accesories.map(({ id, url, name }) => (
          <WrapperItem>
            <AccesoriesItem
              id={id}
              url={url}
              name={name}
              pageType="accesories"            
            />
          </WrapperItem>
        ))}
      </Wrapper>
    );
  }
};




const mapStateToProps = (state) => {
  const { accesories } = state;
  return { accesories };
}

export default connect(mapStateToProps)(AccesoriesBar);
