class CreateAdminRooms < ActiveRecord::Migration
  def change
    create_table :admin_rooms do |t|
      t.string :machine_name
      t.string :title
      t.string :description
      t.integer :weight

      t.timestamps null: false
    end
    
    add_index :admin_rooms, :machine_name, unique: true
  end
end
