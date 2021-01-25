class ChangesToMemberships < ActiveRecord::Migration[5.2]
  def change
    remove_column :memberships, :membershipable_type
    remove_column :memberships, :membershipable_id
    add_column :memberships, :channel_id, :integer
    add_index :memberships, :channel_id
  end
end
