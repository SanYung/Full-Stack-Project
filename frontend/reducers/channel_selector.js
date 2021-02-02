export const channelSelector = (state) => {
    if (state.session.currentUser === undefined) {
        return null
    }
    let joinedChannels = Object.values(state.entities.channels)
    let res = []
    joinedChannels.forEach((obj) => {
        res.push(obj.title)
    })
    
    let arr = Object.values(state.entities.allchannels)
    let result = []
    arr.forEach((obj) => {
        if (!res.includes(obj.title)) {
            result.push(obj)
        }
    })

    return result
}


export const channelShowSelector = (state, ownProps) => {
    let joinedChnnels = Object.values(state.entities.channels)
    let arr = []
    joinedChnnels.forEach((obj) => {
        arr.push(obj.id)
    })

    let arr2 = []
    arr.forEach((num) => {
        if (num === parseInt(ownProps.match.params.channelId)){
            arr2.push(num)
        }
    })
    if ( arr2.length !== 0 ){
        return true
    } else {
        return false
    }
}

export const channelMembersCount = (state, ownProps) => {
    let memberships = Object.values(state.entities.memberships)
    let arr = []
    memberships.forEach((obj) => {
        if (obj.channelId === parseInt(ownProps.match.params.channelId)) {
            arr.push(obj.channelId)
        }
    })

    return arr.length
}

export const channelPeopleList = (state, ownProps) => {
    let memberships = Object.values(state.entities.memberships)
    let array = []
    memberships.forEach((obj) => {
        if (obj.channelId === parseInt(ownProps.match.params.channelId)) {
            array.push(obj.memberId)
        }
    })

    return array
}