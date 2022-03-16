class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :user_can_modify
  has_one :profile
  
  has_many :saved_trails
  has_many :reviews


  def user_can_modify
    current_user.admin?

  end
end
