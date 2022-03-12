Rails.application.routes.draw do
  
  
    post 'uploads/prepare'
    patch "/me", to: "profiles#upload"

  

 
  
  resources :reviews
  resources :saved_trails, except: [:update]
  resources :trails, only: [:index,:show]
  resources :profiles, except: [:destroy]
  resources :users, except: [:update,:destroy]

  get "/me", to: "users#show"
  post "/signup", to: "users#create"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"




  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
