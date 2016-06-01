class ApiController < ApplicationController
  def tag_hierarchy
    room_id = params[:room_id]
    room = Admin::Room.find(room_id)
    render json: JSON.parse(room.tag_hierarchy)
  end
end
