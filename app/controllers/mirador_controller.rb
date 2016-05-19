class MiradorController < ApplicationController
  def index
    @is_mirador_window = true
    @manifest_url = params['manifest']
    @endpoint_url = Admin::Setting.first.endpoint_url
    @title = "Mirador - #{params['title']}"
  end
end
