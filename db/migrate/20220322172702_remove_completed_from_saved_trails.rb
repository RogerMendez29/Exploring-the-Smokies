class RemoveCompletedFromSavedTrails < ActiveRecord::Migration[6.1]
  def change
    remove_column :saved_trails, :completed, :boolean
  end
end
