import React from 'react';
import Sidebar from './sidebar/sidebar_container';
import { Route } from 'react-router';
import Chat from './chat/chat';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  // TODO fetch notifications on did mount

  componentWillReceiveProps(nextProps){
    if(!nextProps.loggedIn){
      this.props.history.push('/');
    }
  }

  render(){
    return (
      <div className="home-container">
        <Sidebar />
        <Route path="/messages/:channelId" component={ Chat } />
      </div>
    );
  }
}

export default Home;
