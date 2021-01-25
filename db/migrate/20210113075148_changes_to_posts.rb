class ChangesToPosts < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :postable_type
    remove_column :posts, :postable_id
  end
end
