require 'test_helper'

class Manifests::ServicesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @manifests_service = manifests_services(:one)
  end

  test "should get index" do
    get manifests_services_url
    assert_response :success
  end

  test "should get new" do
    get new_manifests_service_url
    assert_response :success
  end

  test "should create manifests_service" do
    assert_difference('Manifests::Service.count') do
      post manifests_services_url, params: { manifests_service: {  } }
    end

    assert_redirected_to manifests_service_url(Manifests::Service.last)
  end

  test "should show manifests_service" do
    get manifests_service_url(@manifests_service)
    assert_response :success
  end

  test "should get edit" do
    get edit_manifests_service_url(@manifests_service)
    assert_response :success
  end

  test "should update manifests_service" do
    patch manifests_service_url(@manifests_service), params: { manifests_service: {  } }
    assert_redirected_to manifests_service_url(@manifests_service)
  end

  test "should destroy manifests_service" do
    assert_difference('Manifests::Service.count', -1) do
      delete manifests_service_url(@manifests_service)
    end

    assert_redirected_to manifests_services_url
  end
end
