export const fetchDms = (current_user_id, receiver_id) => (
    $.ajax({
        url: `/api/directmessages`,
        data: {
            current_user_id: current_user_id,
            receiver_id: receiver_id 
        }
    })
)

export const createDms = (direct_message) => (
    $.ajax({
        url: `.api/directmessages`,
        method: "POST",
        data: {direct_message}
    })
)