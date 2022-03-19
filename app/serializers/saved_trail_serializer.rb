class SavedTrailSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :trail_id, :completed, :trail_name

  def trail_name
    Trail.find(object.trail_id).trail_name
    
  end
  



end
