import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ChannelCreateContainer from '../channels/6.channel_create_container';
import ChannelEditDescription from '../channels/12.channel_edit_container';
import ChannelEditTitle from '../channels/15.channel_edit_title_container'

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'createChannel':
            component = <ChannelCreateContainer />;
            break;
        case 'editdescription':
            component = <ChannelEditDescription />;
            break;
        case 'edittitle':
            component = <ChannelEditTitle />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
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