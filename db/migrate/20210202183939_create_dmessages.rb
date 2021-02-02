class CreateDmessages < ActiveRecord::Migration[5.2]
  def change
    create_table :dmessages do |t|
      t.string :name, null:false
      t.timestamps 
    end
    add_index :dmessages, :name
  end
end
