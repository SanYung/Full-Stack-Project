class ChangeChannel < ActiveRecord::Migration[5.2]
  def change
    change_column :channels, :title, :string
    change_column :channels, :user_id, :integer, using: 'user_id::integer'
  end
end
