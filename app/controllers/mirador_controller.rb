class MiradorController < ApplicationController
  def index
    @is_mirador_window = true
    manifest_id = params[:manifest]
    manifest = Admin::Manifest.find(manifest_id)
    @title = "Viewer - #{manifest.title}"
    canvas_id = params[:canvas] || ''
    annotation_id = params[:annotation] || ''

    db_settings = Admin::Setting.first
    @settings = parse_json(db_settings.site_mirador_settings)

    window = {
      type: 'imageWindow',
      manifest: manifest.url
    }
    window[:canvas] = canvas_id unless canvas_id.empty?
    window[:annotation] = annotation_id unless annotation_id.empty?

    @settings['initialLayout'] = {
      windows: [ window ]
    }
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
