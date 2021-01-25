class ChangesToDirectMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :direct_messages, :body, :text
    add_column :direct_messages, :receiver_id, :integer
    add_index :direct_messages, :receiver_id
  end
end
