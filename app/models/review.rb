class Review < ApplicationRecord
    belongs_to :user
    belongs_to :trail 

    validates :difficulty_rating, presence: true
    validates :comment, presence: true
    
end
