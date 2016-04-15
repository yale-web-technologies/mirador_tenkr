class CreateAdminManifests < ActiveRecord::Migration
  def change
    create_table :admin_manifests do |t|
      t.integer :room_id
      t.string :title
      t.string :url
      t.integer :weight

      t.timestamps null: false
    end
  end
end
