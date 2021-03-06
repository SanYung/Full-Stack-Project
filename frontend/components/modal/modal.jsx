import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ChannelCreateContainer from '../channels/3.channel_create_container';
import ChannelIndexHeaderModalContainer from '../channels/2.channel_index_header_modal_container'
import ChannelEditDescription from '../channels/6.channel_edit_container';
import ChannelEditTitle from '../channels/7.channel_edit_title_container';
import SearchContainer from '../searchbar/searchModal_container'
import AddChannelContainer from '../channels/8.channel_browse_container'
import DmsCreateContainer from '../dmessages/3.dms_create_container'
import ChannelPrivateAddUsers from '../channels/10.channel_private_add_users_container'
import GearOptions from '../channels/5.gear_modal_container'
import AddPhotoContainer from '../channels/11.add_photo_container'
// import PeopleListContainer from '../channels/9.channel_members_container'

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    handleStyle() {
        if (this.props.location.pathname === `/home/channels/${this.props.channelId}/details`) {
            return "modal-child-gear2"
        }
        else if (this.props.location.pathname === `/home/channels/${this.props.channelId}`) {
            return "modal-child-gear"

        }
    }

    handleRender() {
        if (!this.props.modal) {
            return null;
        }
        let component;
        switch (this.props.modal) {
            case 'logout':
                component = <ChannelIndexHeaderModalContainer />;
                break;
            case 'createChannel':
                component = <ChannelCreateContainer />;
                break;
            case 'addphoto':
                component = <AddPhotoContainer />;
                break;
            case 'editdescription':
                component = <ChannelEditDescription />;
                break;
            case 'edittitle':
                component = <ChannelEditTitle />;
                break;
            case 'gear':
                component = <GearOptions />;
                break;
            case 'addChannels':
                component = <AddChannelContainer />;
                break;
            // case 'memberslist':
            //     component = <PeopleListContainer />;
            //     break;
            case 'search':
                component = <SearchContainer />;
                break;
            case 'createDms':
                component = <DmsCreateContainer />;
                break;
            case 'addToPrivateChannel':
                component = <ChannelPrivateAddUsers />;
                break;
            default:
                return null;
        }
        if (this.props.modal === "search") {
            return (
                <div className="modal-background-search" onClick={() => this.props.closeModal()}>
                    <div className="modal-child-search" onClick={e => e.stopPropagation()}>
                        {component}
                    </div>
                </div>
            )
        } else if (this.props.modal === "logout") {
            return (
                <div className="modal-background-logout" onClick={() => this.props.closeModal()}>
                    <div className="modal-child-logout" onClick={e => e.stopPropagation()}>
                        {component}
                    </div>
                </div>
            )
        } else if (this.props.modal === "gear"){
            return (
                <div className="modal-background-gear" onClick={() => this.props.closeModal()}>
                    <div className={this.handleStyle()} onClick={e => e.stopPropagation()}>
                        {component}
                    </div>
                </div>
            )
        }
        // else if (this.props.modal === "memberslist") {
        //     return (
        //         <div className="modal-background-memberslist" onClick={() => this.props.closeModal()}>
        //             <div className="modal-child-memberslist" onClick={e => e.stopPropagation()}>
        //                 {component}
        //             </div>
        //         </div>
        //     )
        // }
        else {
            return (
                <div className="modal-background" onClick={() => this.props.closeModal()}>
                    <div className="modal-child" onClick={e => e.stopPropagation()}>
                        {component}
                    </div>
                </div>
            )
        }
    }
    
    render() {
    return (
        <div >
            {this.handleRender()}
        </div>
    )}
}

const mapStateToProps = (state, ownProps)=> ({
        modal: state.ui.modal, 
        channelId: ownProps.match.params.channelId
});

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));
