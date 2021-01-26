class Channel < ApplicationRecord
    validates :title, presence: true
    validates :title, length: { maximum: 30 }
    validates :description, length: { maximum: 175}

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :posts,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: :Post
end

