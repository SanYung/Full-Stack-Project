class MakeChangesToBooleanDefaults < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :is_private
    remove_column :channels, :is_starred
    add_column :channels, :is_private, :boolean, default:false 
    add_column :channels, :is_starred, :boolean, default:false 
    remove_column :direct_messages, :is_starred
    add_column :direct_messages, :is_starred, :boolean, default:false 
    remove_column :direct_messages, :receiver_id
    add_column :direct_messages, :receiver_id, :integer




  end
end
