require 'test_helper'

class Manifests::ImagesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @manifests_image = manifests_images(:one)
  end

  test "should get index" do
    get manifests_images_url
    assert_response :success
  end

  test "should get new" do
    get new_manifests_image_url
    assert_response :success
  end

  test "should create manifests_image" do
    assert_difference('Manifests::Image.count') do
      post manifests_images_url, params: { manifests_image: {  } }
    end

    assert_redirected_to manifests_image_url(Manifests::Image.last)
  end

  test "should show manifests_image" do
    get manifests_image_url(@manifests_image)
    assert_response :success
  end

  test "should get edit" do
    get edit_manifests_image_url(@manifests_image)
    assert_response :success
  end

  test "should update manifests_image" do
    patch manifests_image_url(@manifests_image), params: { manifests_image: {  } }
    assert_redirected_to manifests_image_url(@manifests_image)
  end

  test "should destroy manifests_image" do
    assert_difference('Manifests::Image.count', -1) do
      delete manifests_image_url(@manifests_image)
    end

    assert_redirected_to manifests_images_url
  end
end
