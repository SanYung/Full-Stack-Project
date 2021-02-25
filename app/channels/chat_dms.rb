# class ChatDms < ApplicationCable::Channel
#   def subscribed
#     stream_for 'chat_dms'
#   end
#   def speak2(data)
#     channel = Channel.create!(title: data['channel']['title'], is_dm: data['channel']['is_dm'], description: data['channel']['description'], is_private: data['channel']['is_private'], is_starred: data['channel']['is_starred'])
#     socket = { channel:channel}
#     ChatDms.broadcast_to('chat_dms', socket)
#   end
#   def unsubscribed; end
# end

