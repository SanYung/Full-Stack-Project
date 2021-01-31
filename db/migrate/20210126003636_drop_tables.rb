class DropTables < ActiveRecord::Migration[5.2]
  def change
    drop_table :direct_messages
    add_column :channels, :channel_dms, :string
  end
end
