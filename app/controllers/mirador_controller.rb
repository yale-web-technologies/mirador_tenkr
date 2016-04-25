class MiradorController < ApplicationController
  def index
    @is_mirador_window = true
    @manifest_url = params['manifest']
    @endpoint_url = Admin::Setting.first.endpoint_url
    @site_name = Admin::Setting.first.site_name
  end
end
