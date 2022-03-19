class CompletedTrailsController < ApplicationController

    def index
        trails = CompletedTrail.all 
        render json: trails
    end
    def create 
        completed_trail = CompletedTrail.create(completed_trail_params)
        render json: completed_trail, status: :created
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
