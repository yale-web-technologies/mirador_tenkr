require 'test_helper'

class Manifests::ResourcesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @manifests_resource = manifests_resources(:one)
  end

  test "should get index" do
    get manifests_resources_url
    assert_response :success
  end

  test "should get new" do
    get new_manifests_resource_url
    assert_response :success
  end

  test "should create manifests_resource" do
    assert_difference('Manifests::Resource.count') do
      post manifests_resources_url, params: { manifests_resource: {  } }
    end

    assert_redirected_to manifests_resource_url(Manifests::Resource.last)
  end

  test "should show manifests_resource" do
    get manifests_resource_url(@manifests_resource)
    assert_response :success
  end

  test "should get edit" do
    get edit_manifests_resource_url(@manifests_resource)
    assert_response :success
  end

  test "should update manifests_resource" do
    patch manifests_resource_url(@manifests_resource), params: { manifests_resource: {  } }
    assert_redirected_to manifests_resource_url(@manifests_resource)
  end

  test "should destroy manifests_resource" do
    assert_difference('Manifests::Resource.count', -1) do
      delete manifests_resource_url(@manifests_resource)
    end

    assert_redirected_to manifests_resources_url
  end
end
