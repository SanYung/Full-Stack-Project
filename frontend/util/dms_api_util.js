export const createDms = (dms) => {
    return $.ajax({
        url: `/api/dmss`,
        method: "POST",
        data: { dms }
    })
}

export const fetchDmss = (currentUserId, receiverId) => {
    return $.ajax({
        url: `/api/dmss`,
        method: "GET",
        data: {
            receiver_id: receiverId,
            current_user_id: currentUserId
        }    
    })    
}    

