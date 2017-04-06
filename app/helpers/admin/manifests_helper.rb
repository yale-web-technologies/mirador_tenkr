module Admin::ManifestsHelper
  # manifestId must be a URL
  def manifest_ingest_path(manifestId)
    "/manifests/api/ingest/?id=#{u(manifestId)}"
  end
end
