module Admin::HomeHelper
  def version_info
    mirador_version = ''
    yale_mirador_version = ''
    
    # File.open("#{Rails.root}/public/mirador/mirador.min.js") do |f|
    #   mirador_version << f.readline
    #   mirador_version << '; '
    #   mirador_version << f.readline
    # end
    # File.open("#{Rails.root}/public/yale-mirador/version.json") do |f|
    #   obj = JSON.parse(f.read)
    #   yale_mirador_version << obj['version']
    #   yale_mirador_version << '; '
    #   yale_mirador_version << obj['buildDate']
    # end
    
    mirador_version.gsub!('//!', '')
    
    [
      "<p><b>Mirador Core:</b> #{mirador_version}</p>",
      "<p><b>Yale Mirador:</b> #{yale_mirador_version}</p>",
      "<p><b>Mirador/Rails Version:</b> #{Miradorails::VERSION}</p>",
    ].join("\n")
  end
end
