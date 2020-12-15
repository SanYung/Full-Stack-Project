class Channel < ApplicationRecord
    validates :title, presence: true
    validates :title, length: { maximum: 30 }
    validates :description, length: { maximum: 300}

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

end



