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
      "Version: #{Miradorails::VERSION}",
      "Git tag/hash: #{Miradorails::LAST_GIT_COMMIT}",
      "Mirador: #{mirador_head}"
    ].join('<br/>')
  end
end
