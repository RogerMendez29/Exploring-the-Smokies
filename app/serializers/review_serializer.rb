class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :trail_id, :name, :comment, :difficulty_rating

end
