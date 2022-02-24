class CreateSavedTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :saved_trails do |t|
      t.integer :user_id
      t.integer :trail_id
      t.boolean :completed

      t.timestamps
    end
  end
end
