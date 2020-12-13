class Api::ChannelsController < ApplicationController

    before_action :require_logged_in

  def create
    @channel = Channel.new(channel_params)
    @channel.user_id = current_user.id
    if @channel.save 
      render :show
    else
      render @channel.errors.full_messages, status: 401
    end
  end
  
  def update
    @channel = Channel.find_by(id: params[:id])
    if @channel && @channel.update_attributes(channel_params)
      render :show
    elsif @channel
      render json: @channel.errors.full_messages, status: 401
    else
        render json: ['channel does not exist']
    end
  end
  
  def show
    @channel = Channel.find_by(id: params[:id])
  end
  
  def index
    @channels = Channel.all
  end
  
  def destroy
    @channel = Channel.find_by(id: params[:id])
    if @channel
      @channel.destroy
      render :show
    else
      render json: ['Could not find channel']
    end
  end
  
  private
  
  def channel_params
    params.require(:channel).permit(:title)
  end
end
