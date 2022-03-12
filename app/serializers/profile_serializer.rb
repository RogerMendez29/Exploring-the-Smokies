class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :first_name, :last_name, :email, :bio, :city, :state,:profile_picture_thumbnail_url, :profile_picture_url, :cloudinary_public_id

  belongs_to :user
end
