class Api::ChannelsController < ApplicationController
  
  before_action :require_logged_in
  
  def index
    if params[:user_id]
      @channels = current_user.channels 
      render :index 
    else 
      @channels = Channel.all
      render :index 
    end    
  end

  def create
    # if !channel_params[:is_dm]
      @channel = Channel.new(channel_params)
      if @channel.save
        Membership.create(channel_id: @channel.id, member_id: current_user.id)
        render :show
      else
        render json: @channel.errors.full_messages, status: 401
      end 
    # else
    #   @channel = Channel.find_by(title: channel_params[:title])
    #   # debugger
    #   if @channel.save
    #     Membership.create(channel_id: @channel.id, member_id: current_user.id)
    #     render :show
    #   else
    #     render json: @channel.errors.full_messages, status: 401
    #   end
    # end
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
    render json: @channel
  end
  
  
  def destroy
    @channel = Channel.find_by(id: params[:id])
    if @channel
      @channel.destroy
    else
      render json: ['Could not find channel']
    end
  end

  
  def channel_params
    params.require(:channel).permit(:title, :description, :is_private, :is_starred, :is_dm)
  end

end