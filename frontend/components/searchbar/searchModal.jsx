import React from "react";
import { RiLockLine } from 'react-icons/ri'
import { HiOutlineHashtag } from 'react-icons/hi'
import { BsPersonSquare } from 'react-icons/bs'
import { GrChannel } from 'react-icons/gr'
import { RiPlantLine } from 'react-icons/ri'
import { TiMessages } from 'react-icons/ti' 

class SearchbarModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            channel: false,
            // people: false,
            messages: false,
            // classModalMargin: '',
            classModal: 'search-modal'

        }
      
        this.handleInput = this.handleInput.bind(this);
        this.select = this.select.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChannels = this.handleChannels.bind(this)
        this.handleMessages = this.handleMessages.bind(this)
        // this.handlePeople = this.handlePeople.bind(this)
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

    matches() {
        let matches = [];

        const icons = (id) => {
            let priv = this.props.allchannels[id].is_private;
            let dm = this.props.allchannels[id].is_dm
            if (priv === true && dm === false) {
                return <RiLockLine />
            } else if ( dm === true ){
                return < BsPersonSquare />
            } else if (priv === false && dm === false) {
                return < HiOutlineHashtag />
            }
        }

        Object.values(this.props.allchannels).forEach(channel => {
            if ((channel.title.toLowerCase()).includes(this.state.input.toLowerCase())) {
                matches.push(<button onMouseDown={() => this.props.history.push(`/home/channels/${channel.id}`)}><span className="icon-align"><span className={channel.is_dm === true ? 'demo-icons' : ''}>{icons(channel.id)}</span>{channel.title}</span></button>);
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

    // handleSubmit(event){
    //     event.preventDefault();
    //     if (this.matches().length === 1) {
    //         let channel = this.matches()[0]
    //         this.setState({ input: channel});
    //     }
    // }

    handleChannels(event){
        event.preventDefault()
        this.setState({ channel: true, messages: false, classModal: 'search-modal-expand', input: '' });
    }

    handleMessages(event) {
        event.preventDefault()
        this.setState({ channel: false, messages: true, classModal: 'search-modal-expand', input: '' });
    }

    // handlePeople(event) {
    //     event.preventDefault()
    //     this.setState({ channel: false, people: true, messages: false });
    // }

    handleAll(event) {
        event.preventDefault()
        this.setState({ channel: false, messages: false, classModal: 'search-modal-expand' , input: ''});
    }


    render() {
            let arr = []
            let results
            if (this.state.channel === true) {
                this.matches().map((result, i) => {
                    if (this.props.allChannelTitle.includes(result.props.children.props.children[1])) {
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