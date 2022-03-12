class ProfilesController < ApplicationController
    skip_before_action :confirm_authentication, except: [:update]


    def index
        profile = Profile.all
        render json:profile
    end
    def update
        if current_user.profile.update(update_user_params)
          render json: current_user, status: :ok
        else 
          render json: user.errors, status: :unprocessable_entity
        end
      end
      private

      def update_user_params
        params.permit(:profile_picture_url, :profile_picture_thumbnail_url)
      end

    
end
