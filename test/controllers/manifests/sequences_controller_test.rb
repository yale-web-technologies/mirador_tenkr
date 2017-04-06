require 'test_helper'

class Manifests::SequencesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @manifests_sequence = manifests_sequences(:one)
  end

  test "should get index" do
    get manifests_sequences_url
    assert_response :success
  end

  test "should get new" do
    get new_manifests_sequence_url
    assert_response :success
  end

  test "should create manifests_sequence" do
    assert_difference('Manifests::Sequence.count') do
      post manifests_sequences_url, params: { manifests_sequence: {  } }
    end

    assert_redirected_to manifests_sequence_url(Manifests::Sequence.last)
  end

  test "should show manifests_sequence" do
    get manifests_sequence_url(@manifests_sequence)
    assert_response :success
  end

  test "should get edit" do
    get edit_manifests_sequence_url(@manifests_sequence)
    assert_response :success
  end

  test "should update manifests_sequence" do
    patch manifests_sequence_url(@manifests_sequence), params: { manifests_sequence: {  } }
    assert_redirected_to manifests_sequence_url(@manifests_sequence)
  end

  test "should destroy manifests_sequence" do
    assert_difference('Manifests::Sequence.count', -1) do
      delete manifests_sequence_url(@manifests_sequence)
    end

    assert_redirected_to manifests_sequences_url
  end
end
