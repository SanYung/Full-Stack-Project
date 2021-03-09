import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai'
import { BsChevronCompactDown } from 'react-icons/bs'
import { IoIosRadioButtonOn } from 'react-icons/io'
import { AiOutlinePlusSquare } from 'react-icons/ai'

class ChannelIndexHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.users[this.props.currentUser.id] ){
            return null
        }
        return (

                <div className="workspace-header">
                 
                    <div id="parentdropdown">
                        <div className="dropdown">
                            <span id="dropdown-click" onClick={()=> this.props.openModal('logout')}> Your Workspace &nbsp; <div id="carrat-down"><BsChevronCompactDown /></div> </span>
                            <div id="user-status">
                            {this.props.users[this.props.currentUser.id].online === true ? 
                            <span id="online-button"> <IoIosRadioButtonOn /></span> : 
                            <span id="offline-button"> <IoIosRadioButtonOn /></span>  }
                            &nbsp; {this.props.currentUser.username} &nbsp; </div>
                        </div>
                    </div>
                </div>

        )
    }
}


export default ChannelIndexHeader