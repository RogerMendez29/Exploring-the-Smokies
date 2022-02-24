class SavedTrailSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :trail_id, :completed
end
