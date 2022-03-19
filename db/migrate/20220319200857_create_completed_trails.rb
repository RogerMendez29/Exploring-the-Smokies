class CreateCompletedTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :completed_trails do |t|
      t.integer :user_id
      t.integer :trail_id

      t.timestamps
    end
  end
end
