class ApiController < ApplicationController
  def settings
    db_setting = Admin::Setting.first
    begin
      tooltip_styles = JSON.parse(db_setting.tooltip_styles)
    rescue
      tooltip_styles = nil
    end
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
    if tooltip_styles
      jsonObj[:ui][:tooltipStyles] = tooltip_styles
    end
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

  def _firebase_settings
    {
      :apiKey => ENV['FIREBASE_API_KEY'],
      :authDomain => ENV['FIREBASE_AUTH_DOMAIN'],
      :databaseUrl => ENV['FIREBASE_DATABASE_URL'],
      :storageBuket => ENV['FIREBASE_STORAGE_BUCKET']
    }
  end
end
