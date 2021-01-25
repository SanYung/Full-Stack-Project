class AddPrivateFeaturesToChannels < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :is_private, :boolean
    add_column :channels, :is_starred, :boolean
  end
end
