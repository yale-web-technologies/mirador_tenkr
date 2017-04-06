class CreateManifestsResources < ActiveRecord::Migration[5.0]
  def change
    create_table :manifests_resources do |t|
      t.string :resource_id
      t.string :resource_type
      t.string :width
      t.string :height
      t.timestamps

      t.belongs_to :image, index: true
    end
  end
end
