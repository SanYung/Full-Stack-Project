@channels.each do |channel|
    json.set! channel.id do
        json.id channel.id
        json.title channel.title
        json.description channel.description
        json.is_private channel.is_private
        json.is_starred channel.is_starred
    end
end