class Manifests::Manifest < ApplicationRecord
  has_many :sequences, class_name: 'Manifests::Sequence', dependent: :destroy
end
