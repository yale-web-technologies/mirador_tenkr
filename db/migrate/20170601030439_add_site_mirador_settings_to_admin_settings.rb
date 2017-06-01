class AddSiteMiradorSettingsToAdminSettings < ActiveRecord::Migration[5.0]
  def change
    add_column :admin_settings, :site_mirador_settings, :text
  end
end
