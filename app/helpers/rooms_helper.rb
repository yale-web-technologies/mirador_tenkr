module RoomsHelper
  def mirador_url(manifest_url, manifest_title)
    "/mirador?manifest=#{CGI.escape(manifest_url)}&title=#{CGI.escape(manifest_title)}"
  end
end
