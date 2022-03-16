class ProfilesController < ApplicationController


    def index
        profile = Profile.all
        render json:profile
    end

    def upload
         current_user.profile.update(update_profile_urls)
          render json: current_user, status: :ok
        
      end

      def update
        profile= Profile.find(params[:id])
        profile.update(profile_params)
        render json: profile 

        
      end
      

      private

      def profile_params
        params.permit(:first_name, :last_name, :email, :bio, :city, :state)
    end

      def update_profile_urls
        params.permit(:profile_picture_url, :profile_picture_thumbnail_url)
      end

    
end
