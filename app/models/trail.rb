class Trail < ApplicationRecord
    has_many :saved_trails
    has_many :completed_trails

    has_many :reviews

    validates :trail_name, presence: true,  uniqueness: true
    validates :features, presence: true
    validates :image_url, presence: true
    validates :roundtrip, presence: true
    validates :elevation_gain, presence: true
    validates :difficulty, presence: true
    validates :description, presence: true







    
end
