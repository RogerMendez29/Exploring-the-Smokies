class Api::SavedTrailsController < ApplicationController

    def index
        trails = SavedTrail.all 
        render json: trails
    end

    def show
        saved_trail= SavedTrail.find(params[:id])
        render json: saved_trail, status: :success
        
    end
    


    def create 
        saved_trail = SavedTrail.create(saved_trail_params)
        if saved_trail.valid?

        render json: saved_trail, status: :created
        else
            render json: {errors: saved_trail.errors}, status: :unprocessable_entity

        end
    end

    def destroy
        saved_trail = SavedTrail.find(params[:id])
        saved_trail.destroy
    end

    def update
        saved_trail = SavedTrail.find(params[:id])
        saved_trail.update(saved_trail_params)
        render json: saved_trail
    end

    private 

    def saved_trail_params
        params.permit(:user_id, :trail_id)
    end
end
