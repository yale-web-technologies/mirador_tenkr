module RoomsHelper
  def mirador_url(manifest_url)
    "/mirador?manifest=#{CGI.escape(manifest_url)}"
  end
end
