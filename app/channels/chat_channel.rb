class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'chat_channel'
  end
  def speak(data)
    post = Post.create!(body: data['post']["body"], channel_id: data['post']['channel_id'], user_id: data["post"]['user_id'])
    socket = { post: post }
    ChatChannel.broadcast_to('chat_channel', socket)
  end
  def unsubscribed; end
end

