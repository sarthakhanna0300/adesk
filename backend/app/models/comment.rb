class Comment < ApplicationRecord
  belongs_to :advt
  belongs_to :user
end
