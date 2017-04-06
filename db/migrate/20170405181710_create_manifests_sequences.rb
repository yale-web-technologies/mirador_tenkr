class CreateManifestsSequences < ActiveRecord::Migration[5.0]
  def change
    create_table :manifests_sequences do |t|
      t.string :sequence_id
      t.string :label
      t.string :viewing_direction
      t.timestamps

      t.belongs_to :manifest, index: true
    end
  end
end
