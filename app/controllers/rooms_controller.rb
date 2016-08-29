class RoomsController < ApplicationController
  def show
    @room = Admin::Room.find_by_machine_name(params[:name])
    @manifests = @room.manifests.order(:weight).all
    @title = @room.title
    
    @splash_message =(@room.splash_message || '').strip
  end
end
