#!/usr/bin/env ruby

require 'date'

def replace_version_info
  target_file = "config/initializers/version.rb"
  content = nil

  info = ''
  info << "Commit time: #{DateTime.now};"
  info << "Git previous commit: #{`git describe --always`.strip};"
  info << "Git user name: #{`git config user.name`.strip};"
  info << "Git user email: #{`git config user.email`.strip}"
  puts info

  File.open(target_file) do |f|
    content = f.read
  end

  content = content.sub(/(BUILD_INFO\s*=\s*)('.*')/, "\\1'#{info}'")
  puts content

  File.open(target_file, 'w') do |f|
    f.write(content)
  end
end

puts "Running pre-commit"
replace_version_info
