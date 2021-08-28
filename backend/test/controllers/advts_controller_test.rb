require "test_helper"

class AdvtsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @advt = advts(:one)
  end

  test "should get index" do
    get advts_url, as: :json
    assert_response :success
  end

  test "should create advt" do
    assert_difference('Advt.count') do
      post advts_url, params: { advt: { desc: @advt.desc, image: @advt.image, title: @advt.title, user_id: @advt.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show advt" do
    get advt_url(@advt), as: :json
    assert_response :success
  end

  test "should update advt" do
    patch advt_url(@advt), params: { advt: { desc: @advt.desc, image: @advt.image, title: @advt.title, user_id: @advt.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy advt" do
    assert_difference('Advt.count', -1) do
      delete advt_url(@advt), as: :json
    end

    assert_response 204
  end
end
