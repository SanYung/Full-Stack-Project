@direct_messages.each do |direct_message| 
    json.set! direct_message.id do 
        json.id direct_message.id
        json.body direct_message.body
        json.author_id direct_message.author_id
        json.receiver_id direct_message.receiver_id
        json.receiver_id direct_message.receiver_id
        json.is_starred direct_message.is_starred
    end
end