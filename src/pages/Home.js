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
    }
  }
  return (
    <PageWrapper>
      <button type="button" onClick={() => navigationFunction('react_semantic_ui')}>Go to React Semantic UI</button>
      <button type="button" onClick={() => navigationFunction('react_toolbox')}>Go to React toolbox</button>
      <button type="button" onClick={() => navigationFunction('ant_design')}>Go to Ant design</button>


    </PageWrapper>
  );
}

export default withRouter(Home);
