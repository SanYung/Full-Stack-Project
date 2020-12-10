class Api::ChannelsController < ApplicationController
  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      render :show
    else
      render @channel.errors.full_messages, status: 401
    end
  end
  
  def update
    @channel = Channel.find_by(params[:id])
    if @channel && @channel.update_attributes(channel_params)
      render :show
    else
      render json: @channel.errors.full_messages, status: 401
    end
  end
  
  def show
    @channel = Channel.find_by(params[:id])
  end
  
  def index
    @channel = Channel.all
  end
  
  def destroy
    @channel = Channel.find_by(params[:id])
    if @channel
      @channel.destroy
      render :show
    else
      render ['Could not find chirp']
    end
  end
  
  private
  
  def channel_params
    params.require(:channel).permit(:title)
  end
end
