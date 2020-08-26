import React from 'react';
import BreakeFooter from 'components/atoms/BreakeFooter';

import Tags from 'components/molecules/Tags';
import Category from 'components/molecules/Category';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  margin-bottom: 5rem;
  padding-left: 1.2rem;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;    
  }
  @media (min-width: 600px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 768px) {
   grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1224px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CategoryBox = styled.div`
  margin-bottom: 5rem;
`;
const TagsBox = styled.div`
  margin-bottom: 5rem;
`;


const PostFotter = ({ tags, category }) => (
  <>
    <BreakeFooter />
    <Wrapper>
      <CategoryBox>
        <Category category={category} />
      </CategoryBox>
      <TagsBox>
        <Tags tags={tags} />
      </TagsBox>
    </Wrapper>
  </>
);

export default PostFotter;