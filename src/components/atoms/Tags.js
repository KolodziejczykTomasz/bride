import React from 'react';
import BreakeFooter from 'components/atoms/BreakeFooter';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex; 
`;

const Title = styled.div`
  margin-right: 1rem;
  font-weight: 700;
`;

const TagItem = styled.div`
  width: auto;
  padding: 5px 15px;
  background-color: orange;
  color: white;
  border-radius: 10px;
  margin: -0.5rem 1rem 0 0;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 4px 0 1px rgba(10, 10, 10, 0.02);
`;

const Tags = ({ tags }) => (
  <>
    {tags.length !== '' ? (
      <>
        <BreakeFooter>
          <Wrapper>
            <Title>TAGI:</Title>
            {tags.map(({ tag }) => (
              <TagItem>{tag}</TagItem>
            ))}
          </Wrapper>
        </BreakeFooter>
      </>
    ) : null}
  </>
);

export default Tags;
