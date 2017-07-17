class AddTocSpecToAdminRooms < ActiveRecord::Migration[5.0]
  def change
    add_column :admin_rooms, :toc_spec, :text
  end
end
