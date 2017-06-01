class AddProjectMiradorSettingsToAdminRooms < ActiveRecord::Migration[5.0]
  def change
    add_column :admin_rooms, :project_mirador_settings, :text
  end
end
