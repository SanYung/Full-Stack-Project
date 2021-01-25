class Api::Direct_messagesController < ApplicationController

  def create
    @direct_message = Direct_message.new(direct_message_params)
    # @channel_id = params[:channel_id]
    # debugger
    if @direct_message.save!
      render :show
    else 
      render json: @direct_message.errors.full_messages 
    end 
  end 

  def index
    receiver_id = params[:receiver_id]
    current_user_id = params[:current_user_id]

    direct_message1 = Direct_message.where(author_id: current_user_id, receiver_id:receiver_id)
    direct_message2 = Direct_message.where(author_id:receiver_id, receiver_id:current_user_id)
    @direct_message2 = direct_message1 + direct_message2
    render :index 
  end 

  # def update
  #   @direct_message = Direct_message.find(params[:id])
  #   if @direct_message.save!
  #     render :show
  #   else 
  #     render json: @direct_message.errors.full_messages 
  #   end 
  # end 

  private 
  def direct_message_params
    params.require(:direct_message).permit(:body, :author_id, :receiver_id,  :is_starred)
  end 
end