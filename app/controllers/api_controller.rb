class ApiController < ApplicationController
  def settings
    jsonObj = {
      :tagHierarchy => _get_tag_hierarchy,
      :firebase => _firebase_settings
    }
    render json: jsonObj
  end
  
  def _get_tag_hierarchy
    room_id = params[:room_id]
    room = Admin::Room.find(room_id)
    jsonStr = room.tag_hierarchy
    if !(jsonStr.nil?) && jsonStr.strip == ''
      jsonStr = nil 
    end
    JSON.parse(jsonStr)
  end
  
  def _firebase_settings
    {
      :endpoint => ENV['ENDPOINT'],
      :apiKey => ENV['FIREBASE_API_KEY'],
      :authDomain => ENV['FIREBASE_AUTH_DOMAIN'],
      :databaseUrl => ENV['FIREBASE_DATABASE_URL'],
      :storageBuket => ENV['FIREBASE_STORAGE_BUCKET']
    }
  end
end
