class User < ApplicationRecord
  has_secure_password
  # validates :email, uniqueness: { message: "Already exits" }
end
