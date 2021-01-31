class DeleteColumnFromChannels < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :channel_dms
  end
end
