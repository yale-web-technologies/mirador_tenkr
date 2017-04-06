class Manifests::Sequence < ApplicationRecord
  belongs_to :manifest, foreign_key: 'manifest_id', class_name: 'Manifests::Manifest'
  has_many :canvases, class_name: 'Manifests::Canvas', dependent: :destroy
end
