class Channel < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :title, length: { maximum: 30 }
    validates :description, length: { maximum: 175}
    validates :is_private, inclusion: {in: [true, false]}
    validates :is_starred, inclusion: {in: [true, false]}

    has_many :members,
        through: :memberships,
        source: :member

    has_many :posts,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: :Post

    has_many :memberships, 
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: :Memberships
end



