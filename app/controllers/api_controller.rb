class ApiController < ApplicationController
  def session_info
    netId = session[:cas_user]
    loggedIn = !netId.nil?
    render json: {
      'loggedIn' => loggedIn,
      'netId' => netId
    }
  end
end
