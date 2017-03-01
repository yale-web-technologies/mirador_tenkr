require 'Find'

namespace :mirador do
  desc 'Install Yale-Mirador plugin'
  task :install, [:src_dir] => [:environment, :delete, :copy_mirador] { |t, args| }

  desc 'Copy Yale-Mirador'
  task :copy_mirador, [:src_dir] => [:environment] do |t, args|
    src_root = File.expand_path(args[:src_dir])
    src_mirador = File.join(src_root, 'mirador')
    vendor_assets = File.join(Rails.root, 'vendor', 'assets')
    public_assets = File.join(Rails.root, 'public', 'assets')
    public_mirador = File.join(Rails.root, 'public', 'mirador')
    vendor_assets_semantic = File.join(vendor_assets, 'semantic')

    # Copy to vendor/assets
    mkdir_p(vendor_assets)
    cp_r(src_mirador, vendor_assets)
    cp_r(File.join(src_root, 'yale-mirador'), vendor_assets)
    cp_r(Dir.glob(File.join(src_root, 'lib', '*')), vendor_assets)

    # Copy to public/assets
    mkdir_p(public_mirador)
    ['images', 'locales', 'plugins', 'skins', 'themes'].each do |d|
      cp_r(File.join(src_mirador, d), public_mirador)
    end
    mkdir_p(File.join(public_assets, 'fonts'))
    cp_r(File.join(src_mirador, 'fonts'), public_assets)
    cp_r(File.join(vendor_assets_semantic, 'themes'), public_assets)
  end

  desc 'Delete Yale-Mirador'
  task :delete => [:environment] do |t|
    [ File.join(Rails.root, 'public', 'mirador'),
      File.join(Rails.root, 'public', 'assets'),
      Dir.glob(File.join(Rails.root, 'vendor', 'assets', 'dexie.*')),
      File.join(Rails.root, 'vendor', 'assets', 'goldenlayout'),
      File.join(Rails.root, 'vendor', 'assets', 'js.cookie.js'),
      File.join(Rails.root, 'vendor', 'assets', 'mirador'),
      File.join(Rails.root, 'vendor', 'assets', 'semantic'),
      File.join(Rails.root, 'vendor', 'assets', 'yale-mirador')
    ].each { |f| rm_rf(f) }
  end
end
