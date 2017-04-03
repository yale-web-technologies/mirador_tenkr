class AddTooltipStylesToAdminSettings < ActiveRecord::Migration[5.0]
  def change
    add_column :admin_settings, :tooltip_styles, :text
  end
end
