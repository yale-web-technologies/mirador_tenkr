# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170601030439) do

  create_table "admin_manifests", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer  "room_id"
    t.string   "title"
    t.string   "url"
    t.integer  "weight"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["room_id"], name: "index_admin_manifests_on_room_id", using: :btree
  end

  create_table "admin_rooms", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "machine_name"
    t.string   "title"
    t.string   "description"
    t.integer  "weight"
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
    t.text     "tag_hierarchy",            limit: 65535
    t.text     "splash_message",           limit: 65535
    t.text     "project_mirador_settings", limit: 65535
    t.index ["machine_name"], name: "index_admin_rooms_on_machine_name", unique: true, using: :btree
  end

  create_table "admin_settings", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "site_name"
    t.string   "landing_path"
    t.string   "endpoint_url"
    t.boolean  "maintenance_mode"
    t.string   "maintenance_message"
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
    t.boolean  "disable_authentication"
    t.boolean  "fix_anno_cell_height"
    t.text     "tooltip_styles",         limit: 65535
    t.string   "ui_annotations_overlay"
    t.text     "site_mirador_settings",  limit: 65535
  end

  create_table "admin_user_roles", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "netid"
    t.string   "email"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "role"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "manifests_canvases", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "canvas_id"
    t.string   "label"
    t.string   "width"
    t.string   "height"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "sequence_id"
    t.index ["canvas_id"], name: "index_manifests_canvases_on_canvas_id", unique: true, using: :btree
    t.index ["sequence_id"], name: "index_manifests_canvases_on_sequence_id", using: :btree
  end

  create_table "manifests_images", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "image_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "canvas_id"
    t.index ["canvas_id"], name: "index_manifests_images_on_canvas_id", using: :btree
  end

  create_table "manifests_manifests", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "manifest_id"
    t.string   "label"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["manifest_id"], name: "index_manifests_manifests_on_manifest_id", unique: true, using: :btree
  end

  create_table "manifests_resources", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "resource_id"
    t.string   "resource_type"
    t.string   "width"
    t.string   "height"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "image_id"
    t.index ["image_id"], name: "index_manifests_resources_on_image_id", using: :btree
  end

  create_table "manifests_sequences", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "sequence_id"
    t.string   "label"
    t.string   "viewing_direction"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.integer  "manifest_id"
    t.index ["manifest_id"], name: "index_manifests_sequences_on_manifest_id", using: :btree
  end

  create_table "manifests_services", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "service_id"
    t.string   "profile"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "resource_id"
    t.index ["resource_id"], name: "index_manifests_services_on_resource_id", using: :btree
  end

  create_table "sessions", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "session_id",               null: false
    t.text     "data",       limit: 65535
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["session_id"], name: "index_sessions_on_session_id", unique: true, using: :btree
    t.index ["updated_at"], name: "index_sessions_on_updated_at", using: :btree
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "provider"
    t.string   "uid"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

end
