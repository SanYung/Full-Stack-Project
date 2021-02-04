// import React from 'react';
// import { connect } from 'react-redux';
// import DmsAddChat from './4.dms_add_people_chat'
// import { withRouter } from 'react-router-dom'
// import { fetchUsers } from '../../actions/session_action'
// import { closeModal } from '../../actions/modal_actions'
// import { fetchAllChannels, fetchChannels } from '../../actions/channel_action'
// import { createMembership } from '../../actions/membership_action'
// import { alreadyExistingDmessages, channelPplNameList } from '../../reducers/channel_selector'
// import { updateChannel } from '../../actions/channel_action'

// const msp = (state, ownProps) => {
//     console.log(channelPplNameList(state, ownProps))
//     return ({
//         users: state.entities.users,
//         alreadyExistingDmessages: alreadyExistingDmessages(state),
//         currentUser: state.session.currentUser,
//         channelId: ownProps.match.params.channelId,
//         channelPplNameList: channelPplNameList(state, ownProps),
//         channel: state.entities.channels[ownProps.match.params.channelId]
//     })
// }

// const mdp = (dispatch) => ({
//     createMembership: ((channelId, memberId) => dispatch(createMembership(channelId, memberId))),
//     fetchUsers: (() => dispatch(fetchUsers())),
//     closeModal: () => dispatch(closeModal()),
//     fetchAllChannels: () => dispatch(fetchAllChannels()),
//     fetchChannels: (userId) => dispatch(fetchChannels(userId)),
//     updateChannel: ((channel) => dispatch(updateChannel(channel)))

// })

// export default withRouter(connect(msp, mdp)(DmsAddChat))