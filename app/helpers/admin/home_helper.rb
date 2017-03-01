module Admin::HomeHelper
  def version_info
    mirador_version = ''
    yale_mirador_version = ''

    File.open("#{Rails.root}/vendor/assets/mirador/mirador.min.js") do |f|
      mirador_version << f.readline
      mirador_version << '; '
      mirador_version << f.readline
    end

    File.open("#{Rails.root}/vendor/assets/yale-mirador/yale-mirador.bundle.js") do |f|
      ym_version = f.readline.sub(/^\/\/.s*/, '')
      yale_mirador_version << ym_version
    end

    mirador_version.gsub!('//!', '')

    [
      "<p><b>Mirador Core:</b> #{mirador_version}</p>",
      "<p><b>Yale Mirador:</b> #{yale_mirador_version}</p>",
      "<p><b>Mirador/Rails:</b> #{Miradorails::VERSION}</p>",
    ].join("\n")
  end
end
