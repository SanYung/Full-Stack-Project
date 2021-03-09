class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @channel = Channel.find_by(title: "Welcome!")
    if @user.save
      login(@user)
      Membership.create!(member_id: @user.id, channel_id: @channel.id )
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
    # @user = User.includes(:channels).find_by(id: params[:id])
  end

  def index 
    @users = User.all
    render :index
  end



  def update
		@user = User.find(params[:id])
		if @user.update(user_params)
			render 'api/users/show'
		else
			render json: @user.errors.full_messages, status: 422
		end
  end

  
  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :photo, :online)
  end
end