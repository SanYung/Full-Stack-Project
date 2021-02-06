import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai'
import { BsChevronCompactDown } from 'react-icons/bs'
import { IoIosRadioButtonOn } from 'react-icons/io'
import { AiOutlinePlusSquare } from 'react-icons/ai'

class ChannelIndexHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = { dropdown: false }
        this.changeDropDown = this.changeDropDown.bind(this)
    }

    changeDropDown() {
        this.setState({ dropdown: !this.state.dropdown })
    }

    render() {
        let dropdown;
        if (this.state.dropdown) {
            dropdown = <div className="dropdown-items" onClick={this.props.deleteSession}>Log Out</div>
        }

        return (
            <div>
                <div className="workspace-header">
                    <div id="parentdropdown">
                        <div className="dropdown">
                            <span id="dropdown-click" onClick={this.changeDropDown}> Your Workspace &nbsp; <div id="carrat-down"><BsChevronCompactDown /></div> </span>
                            <div className="dropdown-content">
                                {dropdown}
                            </div>
                            <div id="user-status"><span id="status-button"> <IoIosRadioButtonOn /></span>&nbsp; {this.props.user.username} &nbsp; </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ChannelIndexHeader