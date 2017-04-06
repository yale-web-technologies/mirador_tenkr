class CreateManifestsServices < ActiveRecord::Migration[5.0]
  def change
    create_table :manifests_services do |t|
      t.string :service_id
      t.string :profile
      t.timestamps

      t.belongs_to :resource, index: true
    end
  end
end
