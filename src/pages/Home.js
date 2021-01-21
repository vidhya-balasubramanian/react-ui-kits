import React from "react";
import { withRouter } from 'react-router-dom';

const Home = (props) => {

  const navigationFunction = (path) => {
    if (path === 'ant_design') {
      props.history.push('/ant-design');
    }
  }
  return (
    <div>
      <button type="button" onClick={() => navigationFunction('ant_design')}>Go to Ant design</button>
    </div>
  );
}

export default withRouter(Home);
