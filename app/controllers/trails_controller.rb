class TrailsController < ApplicationController



    def index 
        trail = Trail.all.order(:id)
        render json: trail
        
    end

    def show
        trail = Trail.find(params[:id])
        render json: trail, status: :ok
        
    end

    def create
        trail= Trail.create(trail_params)
       render json: trail, status: :ok

    end

    private


    def trail_params
        params.permit(:trail_name, :features, :image_url, :roundtrip, :elevation_gain, :difficulty, :popular, :description)
        
    end
    
    def authorize_user
        user_can_modify = current_user.admin? 
        render json: { error: "You don't have permission" }, status: :forbidden unless user_can_modify
      end
    
    
end
