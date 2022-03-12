class TrailsController < ApplicationController
    skip_before_action :confirm_authentication

    def index 
        trail = Trail.all.order(:id)
        render json: trail
        
    end

    def show
        trail = Trail.find(params[:id])
        render json: trail, status: :ok
        
    end
    
    
end
