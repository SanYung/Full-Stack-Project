class RemoveIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :posts, :channel_id
    remove_index :posts, :dmessage_id
  end
end
