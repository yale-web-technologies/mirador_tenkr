require 'test_helper'

class Manifests::CanvasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @manifests_canva = manifests_canvas(:one)
  end

  test "should get index" do
    get manifests_canvas_url
    assert_response :success
  end

  test "should get new" do
    get new_manifests_canva_url
    assert_response :success
  end

  test "should create manifests_canva" do
    assert_difference('Manifests::Canva.count') do
      post manifests_canvas_url, params: { manifests_canva: {  } }
    end

    assert_redirected_to manifests_canva_url(Manifests::Canva.last)
  end

  test "should show manifests_canva" do
    get manifests_canva_url(@manifests_canva)
    assert_response :success
  end

  test "should get edit" do
    get edit_manifests_canva_url(@manifests_canva)
    assert_response :success
  end

  test "should update manifests_canva" do
    patch manifests_canva_url(@manifests_canva), params: { manifests_canva: {  } }
    assert_redirected_to manifests_canva_url(@manifests_canva)
  end

  test "should destroy manifests_canva" do
    assert_difference('Manifests::Canva.count', -1) do
      delete manifests_canva_url(@manifests_canva)
    end

    assert_redirected_to manifests_canvas_url
  end
end
