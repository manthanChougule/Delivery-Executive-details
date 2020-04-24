Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'users/index'
      post 'users/create'
      get '/show/:id', to: 'users#show'
      delete '/destroy/:id', to: 'users#destroy'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'react#index'
  get '/*path' => 'react#index' #, via: :all

  namespace :v1, defaults: { format: 'json' } do 
    get 'things', to: 'things#index' 
  end
end
