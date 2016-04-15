class CreateAdminSettings < ActiveRecord::Migration
  def change
    create_table :admin_settings do |t|
      t.string :site_name
      t.string :landing_path
      t.string :endpoint_url
      t.boolean :maintenance_mode
      t.string :maintenance_message

      t.timestamps null: false
    end
  end
end
