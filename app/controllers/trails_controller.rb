class TrailsController < ApplicationController

    def index 
        trail = Trail.all.order(:id)
        render json: trail
        
    end

    def show
        trail = Trail.find(params[:id])
        render json: trail, status: :ok
        
    end
    
    
end
