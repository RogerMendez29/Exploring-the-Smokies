class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_one :profile
  
  has_many :saved_trails
  has_many :reviews
end
