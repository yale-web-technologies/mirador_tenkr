class AddDisableAuthenticationToAdminSettings < ActiveRecord::Migration
  def change
    add_column :admin_settings, :disable_authentication, :boolean
  end
end
