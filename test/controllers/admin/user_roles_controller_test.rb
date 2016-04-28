require 'test_helper'

class Admin::UserRolesControllerTest < ActionController::TestCase
  setup do
    @admin_user_role = admin_user_roles(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:admin_user_roles)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create admin_user_role" do
    assert_difference('Admin::UserRole.count') do
      post :create, admin_user_role: { email: @admin_user_role.email, netid: @admin_user_role.netid, role: @admin_user_role.role }
    end

    assert_redirected_to admin_user_role_path(assigns(:admin_user_role))
  end

  test "should show admin_user_role" do
    get :show, id: @admin_user_role
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @admin_user_role
    assert_response :success
  end

  test "should update admin_user_role" do
    patch :update, id: @admin_user_role, admin_user_role: { email: @admin_user_role.email, netid: @admin_user_role.netid, role: @admin_user_role.role }
    assert_redirected_to admin_user_role_path(assigns(:admin_user_role))
  end

  test "should destroy admin_user_role" do
    assert_difference('Admin::UserRole.count', -1) do
      delete :destroy, id: @admin_user_role
    end

    assert_redirected_to admin_user_roles_path
  end
end
