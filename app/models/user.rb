class User < ActiveRecord::Base

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable,
    :registerable, :recoverable, :rememberable, :trackable,
    :validatable, :omniauthable,
    :omniauth_providers => [:cas, :google_oauth2, :facebook]

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      if auth.provider == :cas
        user.email = "#{auth.uid}@yale.edu"
      else
        user.email = auth.info.email
        user.name = auth.info.name   # assuming the user model has a name
      end
      user.password = Devise.friendly_token[0,20]
    end
  end
end
