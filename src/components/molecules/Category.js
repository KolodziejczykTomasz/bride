import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Title = styled.div`
  margin-right: 1rem;
  font-weight: 700;
  color: #3F2B55;
`;

const TagItem = styled.div`
  width: auto;
  padding: 1px 7px; 
  border-radius: 10px;
  margin: -0.5rem 1rem 0 0;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 4px 0 1px rgba(10, 10, 10, 0.02);
  color: #6c44a2;
`;

const Category = ({ category }) => (
  <>
    {category.length !== '' ? (
      <>       
          <Wrapper>
            <Title>Kategoria: </Title>
            <TagItem>{category}</TagItem>          
          </Wrapper>
       
      </>
    ) : null}
  </>
);

export default Category;
