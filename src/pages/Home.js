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
    } else if (path === 'react_semantic_ui') {
      props.history.push('/semantic-ui');
    } else if (path === 'react_toolbox') {
      props.history.push('/react-toolbox');
    }
  }

  return (
    <PageWrapper>
      <button type="button" onClick={() => navigationFunction('ant_design')}>Go to Ant design</button>
    </PageWrapper>
  );
}

export default withRouter(Home);


// Dropdown
// button
// tiles 
// loader 
// table 
// search 
// modal 
// popover 
// tooltip 
// tabs 
// checkbox 
// radio button 