import React from "react";
import { RiLockLine } from 'react-icons/ri'
import { HiOutlineHashtag } from 'react-icons/hi'
import { BsPersonSquare } from 'react-icons/bs'
import { GrChannel } from 'react-icons/gr'
import { RiPlantLine } from 'react-icons/ri'
import { TiFlowChildren, TiMessages } from 'react-icons/ti' 

class SearchbarModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            channel: false,
            messages: false,
            classModal: 'search-modal'

        }
      
        this.handleInput = this.handleInput.bind(this);
        this.select = this.select.bind(this);
        this.handleChannels = this.handleChannels.bind(this)
        this.handleMessages = this.handleMessages.bind(this)
        this.handleAll = this.handleAll.bind(this)

    }

    componentDidMount() {
        this.props.fetchAllChannels();
    }

    handleInput(event) {
        if (event.currentTarget.value.length !== 0){
            this.setState({ classModal: 'search-modal-expand'});
        } else {
            this.setState({ classModal: 'search-modal' });
        }
        this.setState({ input: event.currentTarget.value, channel: false, messages: false });
    }

    photoIcon(id) {
        let memberships = this.props.memberships
        let channelmemberships = []
        memberships.forEach((obj) => {
            if (this.props.allchannels[obj.channelId].is_dm && obj.channelId === parseInt(id)) {
                channelmemberships.push(obj)
            }
        })

        let mydm = []
        let channels = Object.values(this.props.channels)
        channels.forEach((obj => {
            if (obj.is_dm) {
                mydm.push(obj.id)
            }
        }))


        let num = 0
        channelmemberships.forEach(obj => {
            if (mydm.includes(obj.channelId) && obj.memberId !== this.props.currentUser.id && channelmemberships.length !== 1) {
                num = obj.memberId
            } else if (channelmemberships.length === 1) {
                num = obj.memberId
            }
        })

        if (this.props.userss[num] !== undefined ) {
            return this.props.userss[num].photoUrl  ? <img id="demoprofile" src={this.props.userss[num].photoUrl} /> : <img id="demoprofile" src={this.props.photo1} />
        } 
    }

   title (id) {
        let memberships = this.props.memberships
        let channelmemberships = []
       memberships.forEach((obj) => {
            if (this.props.allchannels[obj.channelId].is_dm && obj.channelId === parseInt(id)) {
                channelmemberships.push(obj)
            }
        })

        let mydm = []
        let channels = Object.values(this.props.channels)
        channels.forEach((obj => {
            if (obj.is_dm) {
                mydm.push(obj.id)
            }
        }))


        let num = 0
        channelmemberships.forEach(obj => {
            if (mydm.includes(obj.channelId) && obj.memberId !== this.props.currentUser.id && channelmemberships.length !== 1) {
                num = obj.memberId
            } else if (channelmemberships.length === 1) {
                num = obj.memberId
            }
        })

        if (this.props.userss[num] !== undefined) {
            return this.props.userss[num].username
        }

    }

    icons(id) {
        let priv = this.props.allchannels[id].is_private;
        let dm = this.props.allchannels[id].is_dm
        if (priv === true && dm === false) {
            return <RiLockLine />
        } else if (dm === true) {
            return this.photoIcon(id)
        } else if (priv === false && dm === false) {
            return < HiOutlineHashtag />
        }
    }

    matches() {
        let matches = [];
        Object.values(this.props.currentUserSearch).forEach(channel => {
            let title = this.title(channel.id) ? this.title(channel.id) : "channels"
            if ((title.toLowerCase()).includes(this.state.input.toLowerCase())) {
                matches.push(<button onMouseDown={() => this.props.history.push(`/home/channels/${channel.id}`)}><span className="icon-align"><span className={channel.is_dm === true ? 'demo-icons' : ''}>
                    {this.icons(channel.id)}</span>
                    {this.title(channel.id) ? this.title(channel.id) : channel.title}</span></button>);
            }
        });

        if (matches.length === 0) {
            matches.push('No matches');
        }
        return matches;
    }

    select(event) {
        let searchinput = event.currentTarget.innerText;
        this.setState({ input: searchinput });
        this.props.closeModal()
    }

    handleChannels(event){
        event.preventDefault()
        this.setState({ channel: true, messages: false, classModal: 'search-modal-expand', input: '' });
    }

    handleMessages(event) {
        event.preventDefault()
        this.setState({ channel: false, messages: true, classModal: 'search-modal-expand', input: '' });
    }

    handleAll(event) {
        event.preventDefault()
        this.setState({ channel: false, messages: false, classModal: 'search-modal-expand' , input: ''});
    }

    allChannelTitle() {
        let allchannels = Object.values(this.props.allchannels)
        let channelNames = []
        allchannels.forEach(obj => {
            if (obj.is_dm !== true) {
                channelNames.push(obj.title)
            }
        })
        return channelNames
    }



    render() {
        let arr = []
            let results
            if (this.state.channel === true) {
                this.matches().map((result, i) => {
                    if (this.allChannelTitle().includes(result.props.children.props.children[1])) {
                        arr.push(result)
                         results = arr.map((result, i) => {
                            return (
                                <li className="search-list" key={i} onClick={this.select}>{result}</li>
                            )
                        })
                    }
                })
            } else if (this.state.messages === true ) {
                this.matches().map((result, i) => {
                    if (this.props.allDmsTitle.includes(result.props.children.props.children[1])) {
                        arr.push(result)
                         results = arr.map((result, i) => {
                            return (
                                <li className="search-list" key={i} onClick={this.select}>{result}</li>
                            )
                        })
                    }
                })
            } else if (this.state.messages === false && this.state.channel === false) {
                 results = this.matches().map((result, i) => {
                    return (
                    <li className="search-list" key={i} onClick={this.select}>{result}</li>)
                });
            }

        return (
            <div className={this.state.classModal} >
                <input
                    className='search-input'
                    onChange={this.handleInput}
                    value={this.state.input}
                    placeholder="Search far and wide.." 
                />
                <div className="search-options">
                    <span className="search-option-title"> I'm looking for... </span>
                <div className="search-filters">
                        <button className="search-button" onClick={this.handleAll}> < RiPlantLine /> &nbsp;All</button>
                        <button className="search-button" onClick={this.handleChannels} >< GrChannel /> &nbsp; Channels</button>
                    {/* <button onClick={this.handlePeople} >People</button> */}
                        <button className="search-button" onClick={this.handleMessages}>< TiMessages /> &nbsp;Direct Messages</button>
                </div>

                </div>
                <ul>{results}</ul>
            </div>

        );
    }
}


export default SearchbarModal;