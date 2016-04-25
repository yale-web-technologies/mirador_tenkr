module Admin::HomeHelper
  def version_info
    mirador_head = ''
    File.open("#{Rails.root}/public/mirador/mirador.js") do |f|
      mirador_head << f.readline
      mirador_head << '; '
      mirador_head << f.readline
    end
    mirador_head.gsub!('//!', '')
    [
      "<p><b>Version:</b> #{Miradorails::VERSION}</p>",
      "<p><b>Build info:</b><br/> #{Miradorails::BUILD_INFO.split(';').join('<br/>')}</p>",
      "<p><b>Mirador:</b> #{mirador_head}</p>"
    ].join("\n")
  end
end
