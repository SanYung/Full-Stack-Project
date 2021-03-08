class RemoveUnique2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :title
    add_column :channels, :title, :string
    add_index :channels, :title
  end
end
