class Api::CompletedTrailsController < ApplicationController

    def index
        trails = CompletedTrail.all 
        render json: trails
    end
    def create 
        completed_trail = CompletedTrail.create(completed_trail_params)
        if completed_trail.valid?
           render json: completed_trail, status: :created  
        else 
            render json: {error: completed_trail.errors}, status: :unprocessable_entity
        end
    end

    def destroy
        completed_trail = CompletedTrail.find(params[:id])
        completed_trail.destroy
    end

    private

   def completed_trail_params
    params.permit(:user_id, :trail_id)
   end


    



end
