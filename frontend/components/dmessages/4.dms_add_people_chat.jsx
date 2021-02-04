// import React from 'react';
// import { BsPersonSquare } from 'react-icons/bs'
// import DmsChatItem from './4.dms_add_people_chat_item'
// import { Link } from 'react-router-dom'

// class DmsCreate extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     componentDidMount() {
//         this.props.fetchUsers()
//         // this.props.fetchAllChannels()
//         // this.props.fetchChannels(this.props.currentUser.id)
//     }

//     componentDidUpdate(prevProps) {
//         // if (prevProps.channel !== this.props.channel) {
//         //     this.props.fetchChannels(this.props.currentUser.id)
//         // }
//         if (prevProps.channel.title !== this.props.channel.title) {
//             this.props.fetchChannels(this.props.currentUser.id)
//         }
//     }

//     render() {

//         return (
//             <div >
//                 {Object.values(this.props.users).map((user) => (
//                     <li key={user.id} >
//                         <div >
//                             < DmsChatItem user={user} fetchAllChannels={this.props.fetchAllChannels}fetchChannels={this.props.fetchChannels} currentUser={this.props.currentUser} createMembership={this.props.createMembership} closeModal={this.props.closeModal} channelId={this.props.channelId} channel={this.props.channel} updateChannel={this.props.updateChannel} channelPplNameList={this.props.channelPplNameList}/>
//                         </div>
//                     </li>
//                 ))}

//             </div>
//         )
//     }
// }

// export default DmsCreate