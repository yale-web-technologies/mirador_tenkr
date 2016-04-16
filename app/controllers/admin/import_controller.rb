require 'rest-client'

class Admin::ImportController < ApplicationController
  def index
  end
  
  def import_rooms
    url = params['url']
    response = RestClient.get url
    puts "response: #{response}"
    items = JSON.parse(response)
    
    items.each do |item| 
      room = Admin::Room.new(machine_name: item['machine_name'], 
        title: item['title'],
        description: item['description'],
        weight: item['weight'])
      room.save
    end
    
    redirect_to action: 'index'
  end
  
  def import_manifests
    url = params['url']
    response = RestClient.get url
    puts "response: #{response}"
    items = JSON.parse(response)
    
    items.each do |item|
      room_machine_name = item['room_machine_name']
      room = Admin::Room.find_by(machine_name: room_machine_name)
      
      manifest = Admin::Manifest.new(title: item['title'],
        url: item['url'],
        weight: item['weight'])
      room.manifests << manifest
      room.save
    end
    
    redirect_to action: 'index'
  end
end
