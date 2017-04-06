class Manifests::Image < ApplicationRecord
  belongs_to :canvas, foreign_key: 'canvas_id', class_name: 'Manifests::Canvas'
  has_one :resource, class_name: 'Manifests::Resource', dependent: :destroy
end
