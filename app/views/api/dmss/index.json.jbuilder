@dmss.each do |dms| 
    json.set! dms.id do 
        json.id dms.id
        json.body dms.body
        json.author_id dms.author_id
        json.receiver_id dms.receiver_id
        json.created_at dms.created_at
    end
end