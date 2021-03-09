export const fetchUsers = () => (
    $.ajax({
        url: '/api/users'
    })
)

export const fetchUser = (userId) => (
    $.ajax({
        url: `/api/users/${userId}`
    })
)



export const createUser = (user) => (
        $.ajax({
            url: '/api/users',
            method: 'POST',
            data: {user},
        })
)

export const createSession = (user) => {
    return (
        $.ajax({
            url: '/api/session',
            method: 'POST',
            data: { user }
        })
    )
}

export const deleteSession = () => {
    return (
        $.ajax({
            url: '/api/session',
            method: 'DELETE'
        })
    )
}


