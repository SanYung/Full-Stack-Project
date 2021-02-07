import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ChannelCreateContainer from '../channels/3.channel_create_container';
import ChannelEditDescription from '../channels/6.channel_edit_container';
import ChannelEditTitle from '../channels/7.channel_edit_title_container';
import SearchContainer from '../searchbar/searchModal_container'
import AddChannelContainer from '../channels/8.channel_browse_container'
import DmsCreateContainer from '../dmessages/3.dms_create_container'
import ChannelPrivateAddUsers from '../channels/10.channel_private_add_users_container'

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    handleRender() {
        if (!this.props.modal) {
            return null;
        }
        let component;
        switch (this.props.modal) {
            case 'createChannel':
                component = <ChannelCreateContainer />;
                break;
            case 'editdescription':
                component = <ChannelEditDescription />;
                break;
            case 'edittitle':
                component = <ChannelEditTitle />;
                break;
            case 'addChannels':
                component = <AddChannelContainer />;
                break;
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
        } else {
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

const mapStateToProps = state => ({
        modal: state.ui.modal
});

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
