class ReviewsController < ApplicationController

    def index
        review = Review.all
        render json: review
        
    end

    def show
        review = Review.find(params[:id])
        render json: review
        
    end

    def create 
        review = Review.create(review_params)
        render json: review, status: :ok
        
    end

    def destroy
        review.find(params[:id])
        
    end
    

    private  

    def review_params
        params.permit(:name, :comment, :difficulty_rating)
    end
    
    
    
end
