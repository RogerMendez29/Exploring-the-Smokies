class ApplicationController < ActionController::API
  include ActionController::Cookies
rescue_from ActiveRecord::RecordNotFound, with: :cant_find


before_action :confirm_authentication

  private 
      def current_user
        User.find_by(id: session[:user_id])

        
      end

      def logged_in?
        !!current_user
      end
    
      def confirm_authentication
        render json: { error: "You must be logged in to do that." }, status: :unauthorized unless logged_in?
      end

      def cant_find(error)
        render json: {error: error.message }, status: :not_found

        
      end
      
      

end
