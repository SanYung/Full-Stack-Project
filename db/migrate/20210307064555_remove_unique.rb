class RemoveUnique < ActiveRecord::Migration[5.2]
  def change
     change_column :channels, :title, :string, unique: false
  end
end
