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
    @layer_ids = params[:layers] || ''
    @annotation_id = params[:annotation] || ''

    db_setting = Admin::Setting.first
    @settings = parse_json(db_setting.site_mirador_settings)
  end

private

  def parse_json(json)
    begin
      return JSON.parse(json)
    rescue
      logger.error("Failed to parse JSON: #{json}")
      return nil
    end
  end
end
