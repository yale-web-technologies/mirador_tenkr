class MiradorController < ApplicationController
  def index
    @is_mirador_window = true
    manifest_id = params[:manifest]
    manifest = Admin::Manifest.find(manifest_id)
    @manifest_url = manifest.url
    @title = "Mirador - #{manifest.title}"
    @room_id = params[:room_id]
    @canvas_id = params[:canvas] || ''
    @toc_tags = params[:tocTags] || ''
  end
end
