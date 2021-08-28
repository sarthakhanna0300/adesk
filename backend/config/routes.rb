Rails.application.routes.draw do
  resources :advts do
    resources :comments
  end
  get "/myadvts", to: "advts#myadvts"
  resource :users, only: [:create]
  post "/login", to: "users#login"
  get "/auto_login", to: "users#auto_login"
end
