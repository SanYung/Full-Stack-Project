  json.set! @direct_message.id do 
        json.id @direct_message.id
        json.body @direct_message.body
        json.author_id @direct_message.author_id
        json.is_starred @direct_message.is_starred
        json.created_at @direct_message.created_at
    end