import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainTemplates from 'templates/MainTemplates';
import BreakeHeader from 'components/atoms/BreakeHeader';
import Tags from 'components/atoms/Tags';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80vw;
  margin: 2rem auto;
  padding: 2rem 5rem;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
`;

const Header = styled.div``;
const Title = styled.h2``;
const Subtitle = styled.h3``;

const PhotoBox = styled.div`
  width: 100%;
`;
const Photo = styled.img`
  display: block;
  width: 50%;
  margin: 5rem auto;
  border: 1px solid #d2d0d0;
  box-shadow: -2px 2px 10px 0px rgba(#444, 0.4);
`;

const Section = styled.div`
  margin: 2rem 0;
`;

const TextHeader = styled.div``;
const Text = styled.p`
  font-size: 1.4rem;
`;
const TextPhoto = styled.div``;

const GalleryPhotoItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: 0.7s;
     :hover {
    scale: 1.4;
  }
`;
const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-template-rows: repeat(8, 25vw);
  grid-gap: 15px;
  align-items: stretch;
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  }
`;

const Button = styled.a`
  display: grid;
  position: fixed;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-content: center;
  color: black;
  background-color: lightgray;
  border-radius: 50px;
  bottom: 220px;
  right: 40px;
  :hover {
    text-decoration-line: none;
    color: white;
  }
`;

class MainPost extends Component {
  render() {
    const {
      title,
      subtitle,
      picHeader,
      pageType,
      header,
      header1,
      header2,
      header3,
      header4,
      header5,
      header6,
      header7,
      header8,
      header9,
      header10,
      header11,
      p1,
      p2,
      p3,
      p4,
      p5,
      p6,
      p7,
      p8,
      p9,
      p10,
      p11,
      pic1,
      pic2,
      pic3,
      pic4,
      pic5,
      pic6,
      pic7,
      pic8,
      pic9,
      pic10,
      pic11,
      gallery,
      tags
    } = this.props;

    return (
      <MainTemplates pageType={pageType}>
        <Wrapper>
          <Header>
            <BreakeHeader>{title}</BreakeHeader>
            <Title>{subtitle}</Title>
            <Subtitle>{header}</Subtitle>
            <PhotoBox>
              {picHeader !== '' ? (
                <>
                  <Photo src={picHeader} alt={title} />
                </>
              ) : null}
            </PhotoBox>
          </Header>
          <Section>
            <TextHeader>{header1}</TextHeader>
            <Text>{p1}</Text>
            <TextPhoto>
              {pic1 !== '' ? (
                <>
                  <Photo src={pic1} alt={title} />
                </>
              ) : null}
            </TextPhoto>
          </Section>
          <Section>
            <TextHeader>{header2}</TextHeader>
            <Text>{p2}</Text>
            <TextPhoto>
              {pic2 !== '' ? (
                <>
                  <Photo src={pic2} alt={title} />
                </>
              ) : null}
            </TextPhoto>
          </Section>
          <Section>
            <TextHeader>{header3}</TextHeader>
            <Text>{p3}</Text>
            <TextPhoto>
              {pic3 !== '' ? (
                <>
                  <Photo src={pic3} alt={title} />
                </>
              ) : null}
            </TextPhoto>
          </Section>
          <Section>
            <TextHeader>{header4}</TextHeader>
            <Text>{p4}</Text>
            <TextPhoto>
              {pic4 !== '' ? (
                <>
                  <Photo src={pic4} alt={title} />
                </>
              ) : null}
            </TextPhoto>
          </Section>
          <Section>
            <TextHeader>{header5}</TextHeader>
            <Text>{p5}</Text>
            <TextPhoto>
              {pic5 !== '' ? (
                <>
                  <Photo src={pic5} alt={title} />
                </>
              ) : null}
            </TextPhoto>
          </Section>
          <Section>
            <TextHeader>{header6}</TextHeader>
            <Text>{p6}</Text>
            <TextPhoto>
              {pic6 !== '' ? (
                <>
                  <Photo src={pic6} alt={title} />
                </>
              ) : null}
            </TextPhoto>
          </Section>
          <Section>
            <TextHeader>{header7}</TextHeader>
            <Text>{p7}</Text>
            <TextPhoto>
              {pic7 !== '' ? (
                <>
                  <Photo src={pic7} alt={title} />
                </>
              ) : null}
            </TextPhoto>
          </Section>
          <Section>
            <TextHeader>{header8}</TextHeader>
            <Text>{p8}</Text>
            <TextPhoto>
              {pic8 !== '' ? (
                <>
                  <Photo src={pic8} alt={title} />
                </>
              ) : null}
            </TextPhoto>
          </Section>
          <Section>
            <TextHeader>{header9}</TextHeader>
            <Text>{p9}</Text>
            <TextPhoto>
              {pic9 !== '' ? (
                <>
                  <Photo src={pic9} alt={title} />
                </>
              ) : null}
            </TextPhoto>
          </Section>
          <Section>
            <TextHeader>{header10}</TextHeader>
            <Text>{p10}</Text>
            <TextPhoto>
              {pic10 !== '' ? (
                <>
                  <Photo src={pic10} alt={title} />
                </>
              ) : null}
            </TextPhoto>
          </Section>
          <Section>
            <TextHeader>{header11}</TextHeader>
            <Text>{p11}</Text>
            <TextPhoto>
              {pic11 !== '' ? (
                <>
                  <Photo src={pic11} alt={title} />
                </>
              ) : null}
            </TextPhoto>
          </Section>
          {gallery.length ? (
            <>
              <GalleryWrapper>
                {gallery.map(({ url, title }) => (
                  <>
                    <GalleryPhotoItem src={url} alt={title} />
                  </>
                ))}
              </GalleryWrapper>
            </>
          ) : null}

          <Button as={Link} to={`/`}>
            Close
          </Button>
          <Tags tags={tags} />
        </Wrapper>
      </MainTemplates>
    );
  }
}

export default MainPost;
