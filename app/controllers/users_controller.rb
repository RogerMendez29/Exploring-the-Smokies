class UsersController < ApplicationController
    skip_before_action :confirm_authentication, except: [:update]


    def index
        users = User.all
        render json:users
    end




    def show
        if current_user
            render json: current_user,status: :ok
        else
            render json: { error: "Currently No Sessions is active"}, status: :unauthorized
        end

    end

#   def update
#     if current_user.update(update_user_params)
#       render json: current_user, status: :ok
#     else 
#       render json: user.errors, status: :unprocessable_entity
#     end
#   end

  


  

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: {error: user.errors}, status: :unprocessable_entity
        end

        
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)

    end

    

    
end
