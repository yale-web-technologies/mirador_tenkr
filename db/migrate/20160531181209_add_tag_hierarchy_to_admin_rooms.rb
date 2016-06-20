class AddTagHierarchyToAdminRooms < ActiveRecord::Migration
  def change
    add_column :admin_rooms, :tag_hierarchy, :text
  end
end
