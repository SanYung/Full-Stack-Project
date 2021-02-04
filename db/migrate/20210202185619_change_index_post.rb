class ChangeIndexPost < ActiveRecord::Migration[5.2]
  def change
    add_index :posts, :channel_id
    add_index :posts, :dmessage_id
    add_index :memberships, :channel_id
    add_index :memberships, :member_id

  end
end
