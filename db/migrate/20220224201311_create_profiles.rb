class CreateProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :profiles do |t|
      t.string :user_id
      t.string :integer
      t.string :first_name
      t.string :last_name
      t.text :email
      t.text :bio

      t.timestamps
    end
  end
end
