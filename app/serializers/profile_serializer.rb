class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :integer, :first_name, :last_name, :email, :bio, :saved_trails, :completed_trails
end
