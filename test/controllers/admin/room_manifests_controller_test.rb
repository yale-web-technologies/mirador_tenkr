require 'test_helper'

class Admin::RoomManifestsControllerTest < ActionController::TestCase
  setup do
    @admin_room_manifest = admin_room_manifests(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:admin_room_manifests)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create admin_room_manifest" do
    assert_difference('Admin::RoomManifest.count') do
      post :create, admin_room_manifest: { manifest_id: @admin_room_manifest.manifest_id, room_id: @admin_room_manifest.room_id }
    end

    assert_redirected_to admin_room_manifest_path(assigns(:admin_room_manifest))
  end

  test "should show admin_room_manifest" do
    get :show, id: @admin_room_manifest
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @admin_room_manifest
    assert_response :success
  end

  test "should update admin_room_manifest" do
    patch :update, id: @admin_room_manifest, admin_room_manifest: { manifest_id: @admin_room_manifest.manifest_id, room_id: @admin_room_manifest.room_id }
    assert_redirected_to admin_room_manifest_path(assigns(:admin_room_manifest))
  end

  test "should destroy admin_room_manifest" do
    assert_difference('Admin::RoomManifest.count', -1) do
      delete :destroy, id: @admin_room_manifest
    end

    assert_redirected_to admin_room_manifests_path
  end
end
