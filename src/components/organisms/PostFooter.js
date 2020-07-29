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