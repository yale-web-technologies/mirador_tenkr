class RoomsController < ApplicationController
  
  def show
    @room = Admin::Room.find_by_machine_name(params[:name])
    @manifests = @room.manifests
    @title = @room.title
  end
  
end
