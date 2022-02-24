class User < ApplicationRecord
has_one: :profile
has_many: :saved_trails
has_many: :reviews

has_secure_password
validates :username, presence: true,  uniqueness: true
end
