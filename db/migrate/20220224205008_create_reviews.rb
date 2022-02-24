class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :trail_id
      t.string :name
      t.text :comment
      t.integer :difficulty_rating

      t.timestamps
    end
  end
end
