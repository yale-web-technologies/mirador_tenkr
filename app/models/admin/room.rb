class Admin::Room < ActiveRecord::Base
  has_many :manifests, class_name: 'Admin::Manifest', dependent: :destroy
end
