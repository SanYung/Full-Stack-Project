//index
export const fetchPosts = (channelId) => (
    $.ajax({
        url: `/api/channels/${channelId}/posts`
    })
)

//show
export const fetchPost = (postId) => (
    $.ajax({
        url: `/api/posts/${postId}`
    })
)

//create
export const createPost = (post) => (
    $.ajax({
        url: `/api/posts`,
        method: 'POST',
        data: { post }

    })
)
