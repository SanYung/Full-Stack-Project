class CreateDirectMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :direct_messages do |t|
      t.boolean :is_slacker
      t.boolean :is_starred
      t.timestamps
    end
  end
end
