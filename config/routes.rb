Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    mount ActionCable.server,at:'/cable'
    
    resource :session, only:[:create, :destroy]

    resources :users, only:[:create, :show, :index] do
      resources :channels, only:[:index]
    end

    resources :channels, only:[:show, :create, :update, :destroy, :index] do
      resources :users, only:[:index]
      resources :posts, only:[:index, :create, :show]
    end
    resources :dmessages, only: [:index, :create, :show,:update] do 
      resources :users, only:[:index]
      resources :posts, only:[:index, :create, :show]

    end
    
    resources :memberships, only:[:index, :create, :destroy]
  end
end
