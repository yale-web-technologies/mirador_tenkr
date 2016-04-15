class MiradorController < ApplicationController
  def index
    @manifest_url = params['manifest']
  end
end
