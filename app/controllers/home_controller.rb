class HomeController < ApplicationController
  def index
    @site_name = Admin::Setting.first.site_name
    @rooms = Admin::Room.all
  end
  
  def viewer
    puts "params: #{params}"
    @config_id = params[:id]
    render :index
  end
end
