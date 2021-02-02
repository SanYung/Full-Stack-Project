class Api::DmssController < ApplicationController

  def index
    receiver_id = params[:receiver_id]
    current_user_id = params[:current_user_id]
    receiver_id.slice!(current_user_id) 
    
    dms1 = Dms.where(author_id: current_user_id, receiver_id: receiver_id)
    dms2 = Dms.where(author_id: receiver_id, receiver_id: current_user_id)
    @dmss = dms1 + dms2
    render :index
  end 

  def create
    @dms = Dms.new(dms_params)
    
    if @dms.save!
      render :show
    else 
      render json: @dms.errors.full_messages 
    end 
  end 

  def show
    @dms = Dms.find(params[:id])
    if @dms
        render :show
    else
        render json: @dms.errors.full_messages, status: 420
    end
    end

  private 
  def dms_params
    params.require(:dms).permit(:body, :author_id, :receiver_id)
  end 
end
