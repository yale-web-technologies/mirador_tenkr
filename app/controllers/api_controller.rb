class ApiController < ApplicationController
  def tag_hierarchy
    room_id = params[:room_id]
    room = Admin::Room.find(room_id)
    jsonStr = room.tag_hierarchy
    if !(jsonStr.nil?) && jsonStr.strip == ''
      jsonStr = nil 
    end
    render json: jsonStr
  end
end
