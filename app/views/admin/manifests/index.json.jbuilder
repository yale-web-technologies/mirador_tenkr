json.array!(@admin_manifests) do |admin_manifest|
  json.extract! admin_manifest, :id, :url
  json.url admin_manifest_url(admin_manifest, format: :json)
end
