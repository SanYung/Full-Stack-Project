@channels.each do |channel| 
    json.set! channel.id do 
        json.extract! channel, :id, :title, :description, :is_starred, :is_private
    end
end
