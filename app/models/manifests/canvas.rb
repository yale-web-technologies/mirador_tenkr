class Manifests::Canvas < ApplicationRecord
  belongs_to :sequence, foreign_key: 'sequence_id', class_name: 'Manifests::Sequence'
  has_many :images, class_name: 'Manifests::Image', dependent: :destroy
end
