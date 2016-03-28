class HomeController < ApplicationController
  def viewer
    puts "params: #{params}"
    @config_id = params[:id]
    render :index
  end
end
