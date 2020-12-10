class Channel < ApplicationRecord
    validates :title, presence: true
    validates :title, length: { minimum: 30 }

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

end



