class CreateManifestsCanvases < ActiveRecord::Migration[5.0]
  def change
    create_table :manifests_canvases do |t|
      t.string :canvas_id
      t.string :label
      t.string :width
      t.string :height
      t.timestamps

      t.index :canvas_id, unique: true

      t.belongs_to :sequence, index: true
    end
  end
end
