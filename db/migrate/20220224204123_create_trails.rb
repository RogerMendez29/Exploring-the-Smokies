class CreateTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :trails do |t|
      t.string :trail_name
      t.string :features
      t.text :image_url
      t.float :roundtrip
      t.integer :elevation_gain
      t.integer :difficulty
      t.boolean :popular, default: false

      t.timestamps
    end
  end
end
