class CreateAdminManifests < ActiveRecord::Migration
  def change
    create_table :admin_manifests do |t|
      t.belongs_to :room, index: true
      t.string :title
      t.string :url
      t.integer :weight

      t.timestamps null: false
    end
  end
end
