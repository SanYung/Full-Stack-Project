class ChangeChannelsAgain < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :channel_id
    add_column :posts, :channel_id, :integer
    add_column :posts, :dmessage_id, :integer
  end
end
