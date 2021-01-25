class Api::MembershipsController < ApplicationController

  def create
    @membership = Membership.new(membership_params)
    # @membership.member_id = current_user.id
    if @membership.save 
    else
      render json: @membership.errors.full_messages, status: 401
    end
  end
  

  def index
    if params[:channelId]
        @memberships = Membership.where(channel_id: params[:channelId])
        render 'api/memberships/index'
    else
        render json: ["Could not retrieve channels"], status: 401
  end
  

  def destroy
    @membership = Membership.find_by(member_id: params[:memberships][:member_id], channel_id: params[:memberships][:channel_id])
    if @membership
      @membership.destroy
    else
      render json: ["Sorry, something went wrong when you tried to leave the channel"]
    end
  end
  
  private
  
  def membership_params
    params.require(:membership).permit(:member_id, :channel_id)
  end
end