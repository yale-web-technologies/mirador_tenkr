class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  #before_action :authenticate_user!
  before_action :setup
  
  def login
    authenticate_user!
    redirect_to root_path
  end
  
#  def after_sign_in_path_for(resource)
#    #request.env['omniauth.origin'] || stored_location_for(resource) || root_path
#    root_path
#  end

  def setup
    #puts "ApplicationController#set_netid_cookie cas_user: #{session[:cas_user]}"
    setting = Admin::Setting.first
    if setting.nil?
      @title = 'Undefined settings'
    else
      @title = setting.site_name # default title
    end
    #no_auth = Admin::Setting.first.disable_authentication
    #netid = session[:cas_user]
    
    @use_firebase = (ENV['ENDPOINT'] == 'firebase')

    if user_signed_in?
      cookies[:loggedIn] = { value: true }
      user_role = Admin::UserRole.find_by_email(current_user.email)
      if (user_role && user_role.role == 'editor')
        cookies[:isEditor] = { value: true }
      else
        cookies[:isEditor] = { value: false }
      end
      @userLabel = userLabel(user_role)
    else
      cookies[:loggedIn] = { value: false }
      cookies[:isEditor] = { value: false }
      @userLabel = ''
    end
    
  end

  def userLabel(user_role)
    if user_role
      fname = user_role.first_name
      lname = user_role.last_name
      label = fname.strip
      if lname
        label = "#{fname} #{lname[0]}."
      end
    elsif current_user.provider == 'cas'
      label = current_user.uid
    else
      label = current_user.email
    end
    label
  end
  
  # Devise: run after successful sign-in.
  def after_sign_in_path_for(resource)
    request.env['omniauth.origin'] || stored_location_for(resource) || root_path
  end

end
