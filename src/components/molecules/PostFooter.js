import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
margin: 2rem 0 1.3rem .5rem;
`;

const PostFooter = ({children}) => <Wrapper>{children}</Wrapper>;

export default PostFooter;
