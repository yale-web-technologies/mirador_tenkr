require 'test_helper'

class Manifests::CanvasesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @manifests_canvas = manifests_canvases(:one)
  end

  test "should get index" do
    get manifests_canvases_url
    assert_response :success
  end

  test "should get new" do
    get new_manifests_canvas_url
    assert_response :success
  end

  test "should create manifests_canvas" do
    assert_difference('Manifests::Canvas.count') do
      post manifests_canvases_url, params: { manifests_canvas: {  } }
    end

    assert_redirected_to manifests_canvas_url(Manifests::Canvas.last)
  end

  test "should show manifests_canvas" do
    get manifests_canvas_url(@manifests_canvas)
    assert_response :success
  end

  test "should get edit" do
    get edit_manifests_canvas_url(@manifests_canvas)
    assert_response :success
  end

  test "should update manifests_canvas" do
    patch manifests_canvas_url(@manifests_canvas), params: { manifests_canvas: {  } }
    assert_redirected_to manifests_canvas_url(@manifests_canvas)
  end

  test "should destroy manifests_canvas" do
    assert_difference('Manifests::Canvas.count', -1) do
      delete manifests_canvas_url(@manifests_canvas)
    end

    assert_redirected_to manifests_canvases_url
  end
end
