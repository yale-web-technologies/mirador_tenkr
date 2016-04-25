require 'test_helper'

class Admin::ManifestsControllerTest < ActionController::TestCase
  setup do
    @admin_manifest = admin_manifests(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:admin_manifests)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create admin_manifest" do
    assert_difference('Admin::Manifest.count') do
      post :create, admin_manifest: { url: @admin_manifest.url }
    end

    assert_redirected_to admin_manifest_path(assigns(:admin_manifest))
  end

  test "should show admin_manifest" do
    get :show, id: @admin_manifest
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @admin_manifest
    assert_response :success
  end

  test "should update admin_manifest" do
    patch :update, id: @admin_manifest, admin_manifest: { url: @admin_manifest.url }
    assert_redirected_to admin_manifest_path(assigns(:admin_manifest))
  end

  test "should destroy admin_manifest" do
    assert_difference('Admin::Manifest.count', -1) do
      delete :destroy, id: @admin_manifest
    end

    assert_redirected_to admin_manifests_path
  end
end
