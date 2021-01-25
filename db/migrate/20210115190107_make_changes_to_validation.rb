class MakeChangesToValidation < ActiveRecord::Migration[5.2]
  def change
    remove_column :direct_messages, :is_slacker
    remove_column :memberships, :member_id
    remove_column :memberships, :channel_id
    remove_column :direct_messages, :body 
    remove_column :direct_messages, :receiver_id
  end
end
