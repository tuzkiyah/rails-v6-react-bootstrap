Rails.application.routes.draw do
  # get 'todos/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root "todos#index"
  get "todos/all_todos"
  put "todos/update"
end
