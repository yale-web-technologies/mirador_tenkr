class CreateManifestsManifests < ActiveRecord::Migration[5.0]
  def change
    create_table :manifests_manifests do |t|
      t.string :manifest_id
      t.string :label
      t.timestamps

      t.index :manifest_id, unique: true
    end
  end
end
