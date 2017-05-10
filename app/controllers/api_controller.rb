class ApiController < ApplicationController
  def settings
    db_setting = Admin::Setting.first
    tooltip_styles = _parse_json(db_setting.tooltip_styles)
    overlay_settings = _parse_json(db_setting.ui_annotations_overlay)
    jsonObj = {
      :buildPath => '/mirador',
      :tagHierarchy => _get_tag_hierarchy,
      :endpointUrl => db_setting.endpoint_url,
      :firebase => _firebase_settings,
      :disableAuthz => true,
      :ui => {
        :fixAnnoCellHeight => db_setting.fix_anno_cell_height
      }
    }
    jsonObj[:ui][:tooltipStyles] = tooltip_styles if tooltip_styles
    jsonObj[:ui][:annotationsOverlay] = overlay_settings if overlay_settings
    render json: jsonObj
  end

  def _get_tag_hierarchy
    room_id = params[:room_id]
    room = Admin::Room.find(room_id)
    jsonStr = room.tag_hierarchy
    if jsonStr.nil? || jsonStr.strip == ''
      return nil # JSON.parse wouldn't take nil as argument
    else
      return JSON.parse(jsonStr)
    end
  end

  def _parse_json(json)
    begin
      return JSON.parse(json)
    rescue
      return nil
    end
  end

  def _firebase_settings
    {
      :apiKey => ENV['FIREBASE_API_KEY'],
      :authDomain => ENV['FIREBASE_AUTH_DOMAIN'],
      :databaseUrl => ENV['FIREBASE_DATABASE_URL'],
      :storageBuket => ENV['FIREBASE_STORAGE_BUCKET']
    }
  end
end
