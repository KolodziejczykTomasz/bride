import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainTemplates from 'templates/MainTemplates';
import styled from 'styled-components';
import BreakeHeader from 'components/BreakeHeader';
import BreakeFooter from 'components/BreakeFooter';

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

const Wrapper = styled.div`
  width: 80vw;
  margin: 2rem auto;
  padding: 2rem 5rem;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
`;

const Header = styled.div``;
const Title = styled.h2``;
const Subtitle = styled.h3``;

const PhotoBox = styled.div``;
const Photo = styled.img`
  display: block;
  width: 40rem;
  margin: 5rem auto;
`;

const Section = styled.div`
  margin: 4rem 0;
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
  cursor: pointer;
  transition: 0.7s; 
   :hover {
    scale: 1.4;
  }
`;
const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(8, 25vw);
  grid-gap: 15px; 

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
          <Section>
            <GalleryWrapper>
              {gallery.length !== '' ? (
                <>
                  {gallery.map(({ url, title }) => (
                    <GalleryPhotoItem src={url} alt={title} />
                  ))}
                </>
              ) : null}
            </GalleryWrapper>
          </Section>
          <Button as={Link} to={`/`}>
            Close
          </Button>
          <BreakeFooter>TAGI:</BreakeFooter>
        </Wrapper>
      </MainTemplates>
    );
  }
}

export default MainPost;
