class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  before_filter CASClient::Frameworks::Rails::GatewayFilter
  #before_filter CASClient::Frameworks::Rails::Filter
  #before_action :authenticate_user!
  
  before_action :setup
  
  def logout
    CASClient::Frameworks::Rails::Filter.logout(self)
  end
  
  def setup
    #puts "ApplicationController#set_netid_cookie cas_user: #{session[:cas_user]}"
    netid = session[:cas_user]
    cookies[:loggedIn] = { value: (netid ? true : false) }
    
    user_role = Admin::UserRole.find_by_netid(netid)
    if user_role && user_role.role == 'editor'
      cookies[:isEditor] = { value: true }
    else
      cookies[:isEditor] = { value: false }
    end

    @userLabel = userLabel(user_role)
  end
  
  
  def userLabel(user_role)
    if user_role
      fname = user_role.first_name
      lname = user_role.last_name
      label = fname.strip
      if lname
        label = "#{fname} #{lname[0]}."
      end
    else
      label = ''
    end
    label
  end
    
end
