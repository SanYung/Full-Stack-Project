class CreateDms < ActiveRecord::Migration[5.2]
  def change
    create_table :dms do |t|
      t.integer :author_id, null:false
      t.integer :receiver_id, null:false
      t.text :body, null:false
      t.timestamps
    end
    add_index :dms, :author_id
    add_index :dms, :receiver_id
    add_index :dms, :body
  end
end
