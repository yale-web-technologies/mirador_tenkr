class MiradorController < ApplicationController
  def index
    @is_mirador_window = true
    manifest_id = params[:manifest]
    manifest = Admin::Manifest.find(manifest_id)
    @manifest_url = manifest.url
    @endpoint_url = Admin::Setting.first.endpoint_url
    @title = "Mirador - #{manifest.title}"
  end
end
