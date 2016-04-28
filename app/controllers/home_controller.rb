class HomeController < ApplicationController
  def index
    puts "User: #{session[:cas_user]}"
    setting = Admin::Setting.first
    @title = setting.site_name
    @rooms = Admin::Room.all
    landing_path = setting.landing_path.strip
    unless landing_path.empty?
      redirect_to landing_path
    end
  end
  
  # For loading example settings from /public/examples/config
  def viewer
    puts "params: #{params}"
    @config_id = params[:id]
    render :index
  end
end
