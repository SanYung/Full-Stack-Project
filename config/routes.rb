Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only:[:create, :show, :index] do
        resources :channels, only:[:show, :create, :edit, :destroy, :index]
    end

    resource :session, only:[:create, :destroy]
  end
end
