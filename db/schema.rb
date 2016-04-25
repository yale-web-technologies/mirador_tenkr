# encoding: UTF-8
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

<<<<<<< HEAD
ActiveRecord::Schema.define(version: 20160407180955) do

  create_table "users", force: :cascade do |t|
    t.string   "email",                  limit: 255, default: "", null: false
    t.string   "encrypted_password",     limit: 255, default: "", null: false
    t.string   "reset_password_token",   limit: 255
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          limit: 4,   default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip",     limit: 255
    t.string   "last_sign_in_ip",        limit: 255
    t.datetime "created_at",                                      null: false
    t.datetime "updated_at",                                      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
=======
ActiveRecord::Schema.define(version: 20160413193707) do

  create_table "admin_manifests", force: :cascade do |t|
    t.integer  "room_id",    limit: 4
    t.string   "title",      limit: 255
    t.string   "url",        limit: 255
    t.integer  "weight",     limit: 4
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "admin_manifests", ["room_id"], name: "index_admin_manifests_on_room_id", using: :btree

  create_table "admin_rooms", force: :cascade do |t|
    t.string   "machine_name", limit: 255
    t.string   "title",        limit: 255
    t.string   "description",  limit: 255
    t.integer  "weight",       limit: 4
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  add_index "admin_rooms", ["machine_name"], name: "index_admin_rooms_on_machine_name", unique: true, using: :btree

  create_table "admin_settings", force: :cascade do |t|
    t.string   "site_name",           limit: 255
    t.string   "landing_path",        limit: 255
    t.string   "endpoint_url",        limit: 255
    t.boolean  "maintenance_mode"
    t.string   "maintenance_message", limit: 255
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
  end
>>>>>>> develop

end
