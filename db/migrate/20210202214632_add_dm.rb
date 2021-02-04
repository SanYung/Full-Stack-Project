class AddDm < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :is_dm, :boolean, default:false
    
  end
end
