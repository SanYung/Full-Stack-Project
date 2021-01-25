class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @channel = Channel.find_by(title: 'Welcome to Quack')
    if @user.save
      login(@user)
      Membership.create( member_id: @user.id, channel_id: @user.id)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def index 
    @users = User.all
    render :index
  end


  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end