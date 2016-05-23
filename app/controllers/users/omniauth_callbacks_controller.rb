class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def cas
    logger.debug("XXX CAS")
    @user = User.from_omniauth(request.env['omniauth.auth'])
    logger.debug("XXX @user: #{@user}")

    if @user.persisted?
      logger.debug("XXX persisted")
      flash[:notice] = I18n.t 'devise.omniauth_callbacks.success', :kind => "CAS"
      sign_in_and_redirect @user, :event => :authentication
    else
      logger.debug("XXX not persisted")
      session['devise.cas_data'] = request.env['omniauth.auth']
      redirect_to new_user_registration_url
    end
  end

  def google_oauth2
    logger.debug("XXX Google")
    @user = User.from_omniauth(request.env['omniauth.auth'])

    if @user.persisted?
      flash[:notice] = I18n.t 'devise.omniauth_callbacks.success', :kind => "Google"
      sign_in_and_redirect @user, :event => :authentication
    else
      session['devise.google_data'] = request.env['omniauth.auth']
      redirect_to new_user_registration_url
    end
  end

  def facebook
    logger.debug("XXX FB")
    @user = User.from_omniauth(request.env['omniauth.auth'])

    if @user.persisted?
      flash[:notice] = I18n.t 'devise.omniauth_callbacks.success', :kind => "Facebook"
      sign_in_and_redirect @user, :event => :authentication
    else
      session['devise.facebook_data'] = request.env['omniauth.auth']
      redirect_to new_user_registration_url
    end
  end

  def failure
    logger.debug("XXX FAILURE")

    #render :text => params.inspect
    redirect_to root_path
  end
end
