class AddingBackValidations < ActiveRecord::Migration[5.2]
  def change
    add_column :direct_messages, :body, :text, null:false
    add_column :memberships, :channel_id, :integer, null:false 
    add_column :direct_messages, :receiver_id, :integer, null:false 
    add_column :memberships, :member_id, :integer, null:false
    add_column :direct_messages, :author_id, :integer, null:false
  end
end
