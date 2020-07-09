import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccesoriesItem from './AccesoriesItem';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flexbox;
  justify-content: space-between;
`;

const WrapperItem = styled.div`
  width: 24%;
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
