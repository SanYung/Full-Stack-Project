import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import PeopleList from './17.people_list'
import { closeModal } from '../../actions/modal_actions'
import { fetchAllMemberships } from '../../actions/membership_action'
import { channelPeopleList } from '../../reducers/channel_selector'
import { fetchUsers } from '../../actions/session_action'


const msp = (state, ownProps) => {
    return ({
        users: state.entities.users,
        list: channelPeopleList(state, ownProps),
        memberships: state.entities.memberships
    })
}

const mdp = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchAllMemberships: () => dispatch(fetchAllMemberships()),
    closeModal: () => dispatch(closeModal()),

})

export default withRouter(connect(msp, mdp)(PeopleList))