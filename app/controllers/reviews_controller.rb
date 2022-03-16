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
       review= Review.find(params[:id])
       review.destroy
        
    end
    
    def update
        review = Review.find(params[:id])
        review.update(review_params)
        render json: review

        
    end
    

    private  

    def review_params
        params.permit(:name, :comment, :difficulty_rating, :user_id, :trail_id)
    end

   
    
    
    
end
