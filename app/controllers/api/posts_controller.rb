class Api::PostsController < ApplicationController

    before_action :require_logged_in

    def index
        @posts = Post.all
    end

    def create
        @post = Post.new(posts_params)
        # @post.user_id = current_user.id
        if @post.save 
            render :show
        else
            render json: @post.errors.full_messages, status: 401
        end
    end

    def show
        @post = Post.find_by(id: params[:id]) 
    end
  
    private 

  def posts_params
    params.require(:post).permit(:body, :channel_id, :user_id)
  end
end
