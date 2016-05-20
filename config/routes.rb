Rails.application.routes.draw do

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  #root 'home#viewer', id: 1
  root 'home#index'

  get '/:id', to: 'home#viewer', constraints: { id: /\d/ }
  
  get '/rooms/:name', to: 'rooms#show'
  
  get '/mirador', to: 'mirador#index'
  
  constraints format: 'json' do
    get '/api/session_info', to: 'api#session_info'
  end
  
  get '/login', to: 'application#login'
  get '/logout', to: 'application#logout'
  
  namespace :admin do
    resources :manifests
    resources :rooms
    resources :settings
    resources :user_roles
    
    get '/', to: 'home#index'
    get '/import', to: 'import#index'
    post '/import/import_user_roles', to: 'import#import_user_roles'
    post '/import/import_rooms', to: 'import#import_rooms'
    post '/import/import_manifests', to: 'import#import_manifests'
  end
end
