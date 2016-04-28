class CreateAdminUserRoles < ActiveRecord::Migration
  def change
    create_table :admin_user_roles do |t|
      t.string :netid
      t.string :email
      t.string :first_name
      t.string :last_name
      t.string :role

      t.timestamps null: false
    end
  end
end
