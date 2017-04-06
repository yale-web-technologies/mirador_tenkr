class CreateManifestsImages < ActiveRecord::Migration[5.0]
  def change
    create_table :manifests_images do |t|
      t.string :image_id
      t.timestamps

      t.belongs_to :canvas, index: true
    end
  end
end
