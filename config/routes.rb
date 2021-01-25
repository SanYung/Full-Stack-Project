Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    mount ActionCable.server,at:'/cable'

    resources :users, only:[:create, :show, :index] do 
      resources :channels, only:[:index]
    end
    resources :channels, only:[:show, :create, :update, :destroy] do
      resources :posts, only:[:index, :create, :show]
      resources :users, only:[:index]
    end
    resource :session, only:[:create, :destroy]
    resources :direct_messages, only: [:index, :create, :show]
    resources :memberships, only:[:index, :create, :destroy]
  end
end
