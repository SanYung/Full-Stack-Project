import { connect } from 'react-redux';
import { withRouter } from "react-router";
import Search from './searchbar';
import { fetchAllChannels } from '../../actions/channel_action'

const msp = (state, ownProps) => {
    console.log(ownProps)
    return {
        currentUser: state.session.currentUser,
        allchannels: state.entities.allchannels,
        allchannelsarr: Object.values(state.entities.allchannels),
        users: Object.values(state.entities.users)
    };
};

const mdp = dispatch => ({
    fetchAllChannels: () => dispatch(fetchAllChannels())
});

export default withRouter(connect(msp, mdp)(Search));
