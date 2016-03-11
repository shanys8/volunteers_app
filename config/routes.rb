Rails.application.routes.draw do
  resources :volunteer_points

  get 'get_close_volunteer_points' => 'volunteer_points#get_close_volunteer_points'

  get 'my_volunteer_points' => 'client#index'
  get 'my_volunteer_points/:id' => 'client#show'

end
