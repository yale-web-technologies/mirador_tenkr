# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.

#Rails.application.config.assets.precompile += %w( semantic_ui/semantic_ui.css jquery.js goldenlayout-base.css goldenlayout.min.js mirador-combined.min.css mirador.min.js yale-mirador.bundle.css yale-mirador.bundle.js)

[
  'dexie.min.js',
  'goldenlayout/goldenlayout-base.css',
  'goldenlayout/goldenlayout-dark-theme.css',
  'goldenlayout/goldenlayout.min.js',
  'semantic/semantic.min.css',
  'semantic/semantic.min.js',
  'mirador/css/mirador-combined.min.css',
  'mirador/mirador.min.js',
  'yale-mirador/yale-mirador.bundle.css',
  'yale-mirador/yale-mirador.bundle.js'
].each do |item|
  Rails.application.config.assets.precompile << item
end
