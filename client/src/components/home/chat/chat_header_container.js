import ChatHeader from './chat_header';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchChannels, fetchChannelUsers } from '../../../actions/channel_actions';
// import { deleteNotifications } from '../../../../frontend/actions/session_actions';


const mapStateToProps = (state, { match }) => {
  const channelId = match.params.channelId;
  return {
    user: state.auth.currentUser,
    channel: state.channels.channels[channelId],
    messages: state.messages.messages,
    channelId: channelId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannels: (userId) => dispatch(fetchChannels(userId)),
    fetchChannelUsers: (channelId) => dispatch(fetchChannelUsers(channelId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatHeader));
