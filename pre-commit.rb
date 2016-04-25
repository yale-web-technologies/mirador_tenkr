#!/usr/bin/env ruby

require 'date'

def replace_version_info
  target_file = "#{File.dirname(__FILE__)}/config/initializers/version.rb"
  content = nil

  info = ''
  info << "Commit time: #{DateTime.now}\n"
  info << "Git previous commit: #{`git describe --always`}"
  info << "Git user name: #{`git config user.name`}"
  info << "Git user email: #{`git config user.email`}"
  puts info

  File.open(target_file) do |f|
    content = f.read
  end

  content = content.sub(/(BUILD_INFO\s*=\s*)(\S+)/, "\\1'#{info}'")
  puts content

  File.open(target_file, 'w') do |f|
    f.write(content)
  end
end

replace_version_info
