Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only:[:create, :show, :index] do 
      resources :channels, only:[:index]
    end
    resources :channels, only:[:show, :create, :update, :destroy] do
      resources :posts, only:[:index]
    end
    resources :posts, only:[:create, :show]
    resource :session, only:[:create, :destroy]
  end
end
