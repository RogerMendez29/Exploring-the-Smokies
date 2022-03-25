class TrailsController < ApplicationController

    before_action :authorize_user, only: [:create, :update, :destroy]


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
        if trail.valid?
       render json: trail, status: :ok
       else 
        render json: {error: trail.errors}, status: :unprocessable_entity
        end
        

    end

    def update
        trail = Trail.find(params[:id])
        if trail.update(trail_params)
         render json: trail, status: :ok
        else render json: {error: trail.errors}, status: :unprocessable_entity
        end
    end
    
    def destroy
        trail= Trail.find(params[:id])
        trail.destroy
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
