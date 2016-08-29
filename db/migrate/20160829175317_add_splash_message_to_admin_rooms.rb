class AddSplashMessageToAdminRooms < ActiveRecord::Migration
  def change
    add_column :admin_rooms, :splash_message, :text
  end
end
