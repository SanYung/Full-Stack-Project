class RemovePostDId < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :dmessage_id
    remove_column :posts, :channel_id
    add_column :posts, :channel_id, :integer, null:false
  end
end
