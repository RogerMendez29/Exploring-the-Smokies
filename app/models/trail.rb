class Trail < ApplicationRecord
    has_many :saved_trails
    has_many :reviews
end
