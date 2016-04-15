class Admin::Room < ActiveRecord::Base
  has_many :manifests
end
