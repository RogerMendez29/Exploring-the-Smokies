class AddDescriptionToTrails < ActiveRecord::Migration[6.1]
  def change
    add_column :trails, :description, :text
  end
end
