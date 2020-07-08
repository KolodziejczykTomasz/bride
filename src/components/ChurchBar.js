import React from 'react';
import { connect } from 'react-redux';
import HeaderBreake from 'components/HeaderBreake';
import MainTemplates from 'templates/MainTemplates';
import ChurchItem from 'components/ChurchItem';
import styled from 'styled-components';

const MainWarpper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 3rem;
  margin-bottom: 5rem;
`;

const ChurchBar = ({ postchurch }) => (
  <MainTemplates pageType="churchs">
    <HeaderBreake>Pierwsze czytanie</HeaderBreake>
    <MainWarpper>
      {postchurch
        .slice(0, 9)
        .map(
          ({
            id,
            title,
            subtitle,
            header1,
            f1,
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
            p12,
            p13,
            p14,
            p15,
            p16,
            p17,
            p18,
            p19,
            p20,
            p21,
            p22,
            p23,
            p24,
            p25,
            p26,
            p27,
            p28,
            p29,
            p30,
            p31,
            p32,
            p33,
          }) => (
            <ChurchItem
              id={id}
              key={id}
              title={title}
              subtitle={subtitle}
              header1={header1}
              f1={f1}
              p1={p1}
              p2={p2}
              p3={p3}
              p4={p4}
              p5={p5}
              p6={p6}
              p7={p7}
              p8={p8}
              p9={p9}
              p10={p10}
              p11={p11}
              p12={p12}
              p13={p13}
              p14={p14}
              p15={p15}
              p16={p16}
              p17={p17}
              p18={p18}
              p19={p19}
              p20={p20}
              p21={p21}
              p22={p22}
              p23={p23}
              p24={p24}
              p25={p25}
              p26={p26}
              p27={p27}
              p28={p28}
              p29={p29}
              p30={p30}
              p31={p31}
              p32={p32}
              p33={p33}
              pageType="churchs"
            />
          ),
        )}
    </MainWarpper>
    <HeaderBreake>Drugie czytanie</HeaderBreake>
    <MainWarpper>
      {postchurch
        .slice(10, 19)
        .map(
          ({
            id,
            title,
            subtitle,
            header1,
            f1,
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
            p12,
            p13,
            p14,
            p15,
            p16,
            p17,
            p18,
            p19,
            p20,
            p21,
            p22,
            p23,
            p24,
            p25,
            p26,
            p27,
            p28,
            p29,
            p30,
            p31,
            p32,
            p33,
          }) => (
            <ChurchItem
              id={id}
              key={id}
              title={title}
              subtitle={subtitle}
              header1={header1}
              pageType="churchs"
              f1={f1}
              p1={p1}
              p2={p2}
              p3={p3}
              p4={p4}
              p5={p5}
              p6={p6}
              p7={p7}
              p8={p8}
              p9={p9}
              p10={p10}
              p11={p11}
              p12={p12}
              p13={p13}
              p14={p14}
              p15={p15}
              p16={p16}
              p17={p17}
              p18={p18}
              p19={p19}
              p20={p20}
              p21={p21}
              p22={p22}
              p23={p23}
              p24={p24}
              p25={p25}
              p26={p26}
              p27={p27}
              p28={p28}
              p29={p29}
              p30={p30}
              p31={p31}
              p32={p32}
              p33={p33}
            />
          ),
        )}
    </MainWarpper>
    <HeaderBreake>Ewangelie</HeaderBreake>
    <MainWarpper>
      {postchurch
        .slice(20, 28)
        .map(
          ({
            id,
            title,
            subtitle,
            header1,
            f1,
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
            p12,
            p13,
            p14,
            p15,
            p16,
            p17,
            p18,
            p19,
            p20,
            p21,
            p22,
            p23,
            p24,
            p25,
            p26,
            p27,
            p28,
            p29,
            p30,
            p31,
            p32,
            p33,
          }) => (
            <ChurchItem
              id={id}
              key={id}
              title={title}
              subtitle={subtitle}
              header1={header1}
              pageType="churchs"
              f1={f1}
              p1={p1}
              p2={p2}
              p3={p3}
              p4={p4}
              p5={p5}
              p6={p6}
              p7={p7}
              p8={p8}
              p9={p9}
              p10={p10}
              p11={p11}
              p12={p12}
              p13={p13}
              p14={p14}
              p15={p15}
              p16={p16}
              p17={p17}
              p18={p18}
              p19={p19}
              p20={p20}
              p21={p21}
              p22={p22}
              p23={p23}
              p24={p24}
              p25={p25}
              p26={p26}
              p27={p27}
              p28={p28}
              p29={p29}
              p30={p30}
              p31={p31}
              p32={p32}
              p33={p33}
            />
          ),
        )}
    </MainWarpper>
  </MainTemplates>
);

const mapStateToProps = (state) => {
  const { postchurch } = state;
  return { postchurch };
};

export default connect(mapStateToProps)(ChurchBar);
