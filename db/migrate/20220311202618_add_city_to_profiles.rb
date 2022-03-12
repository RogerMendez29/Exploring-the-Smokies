class AddCityToProfiles < ActiveRecord::Migration[6.1]
  def change
    add_column :profiles, :city, :string
    add_column :profiles, :state, :string
    add_column :profiles, :profile_picture_url, :string
    add_column :profiles, :profile_picture_thumbnail_url, :string
    add_column :profiles, :cloudinary_public_id, :string





  end
end
