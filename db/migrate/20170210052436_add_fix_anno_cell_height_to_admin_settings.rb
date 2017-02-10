class AddFixAnnoCellHeightToAdminSettings < ActiveRecord::Migration
  def change
    add_column :admin_settings, :fix_anno_cell_height, :boolean
  end
end
