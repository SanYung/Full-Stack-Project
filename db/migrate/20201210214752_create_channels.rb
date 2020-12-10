class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.text :title, null:false
      t.string :user_id, null:false
      t.timestamps
    end
    add_index :channels, :user_id
    add_index :channels, :title, unique:true 
  end
end
