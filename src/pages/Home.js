import React from "react";
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 200px;
  display: block;
  margin: auto;
  text-align: center;

  button {
    margin: 20px 0;
  }
`;

const Home = (props) => {

  const navigationFunction = (path) => {
    if (path === 'ant_design') {
      props.history.push('/ant-design');
    } else if (path === 'graph_ql') {
      props.history.push('/graph-ql');
    }
  }

  return (
    <PageWrapper>
      <button type="button" onClick={() => navigationFunction('ant_design')}>Go to Ant design</button>
      <button type="button" onClick={() => navigationFunction('graph_ql')}>Graph Ql Implementation</button>

    </PageWrapper>
  );
}

export default withRouter(Home);

