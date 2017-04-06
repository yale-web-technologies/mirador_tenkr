require 'test_helper'

class Manifests::ManifestsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @manifests_manifest = manifests_manifests(:one)
  end

  test "should get index" do
    get manifests_manifests_url
    assert_response :success
  end

  test "should get new" do
    get new_manifests_manifest_url
    assert_response :success
  end

  test "should create manifests_manifest" do
    assert_difference('Manifests::Manifest.count') do
      post manifests_manifests_url, params: { manifests_manifest: {  } }
    end

    assert_redirected_to manifests_manifest_url(Manifests::Manifest.last)
  end

  test "should show manifests_manifest" do
    get manifests_manifest_url(@manifests_manifest)
    assert_response :success
  end

  test "should get edit" do
    get edit_manifests_manifest_url(@manifests_manifest)
    assert_response :success
  end

  test "should update manifests_manifest" do
    patch manifests_manifest_url(@manifests_manifest), params: { manifests_manifest: {  } }
    assert_redirected_to manifests_manifest_url(@manifests_manifest)
  end

  test "should destroy manifests_manifest" do
    assert_difference('Manifests::Manifest.count', -1) do
      delete manifests_manifest_url(@manifests_manifest)
    end

    assert_redirected_to manifests_manifests_url
  end
end
