json.set! @post.id do 
    json.id @post.id
    json.body @post.body
    json.user_id @post.user_id
    json.channel_id @post.channel_id
    json.created_at @post.created_at
end