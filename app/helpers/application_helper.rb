module ApplicationHelper
  def room_link(room)
    link_to room.title.html_safe, "/rooms/#{room.machine_name}"
  end
end
