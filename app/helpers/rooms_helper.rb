module RoomsHelper
  def mirador_url(manifest_id, room_id)
    "/mirador?manifest=#{manifest_id}&room_id=#{room_id}"
  end
end
