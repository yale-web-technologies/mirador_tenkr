class Manifests::Resource < ApplicationRecord
  has_one :service, class_name: 'Manifests::Service', dependent: :destroy
end
