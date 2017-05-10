class AddUiAnnotationsOverlayToAdminSettings < ActiveRecord::Migration[5.0]
  def change
    add_column :admin_settings, :ui_annotations_overlay, :string
  end
end
