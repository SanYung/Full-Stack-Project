class Channel < ApplicationRecord
    validates :title, presence: true

    # validates :title, presence: true, uniqueness: true
    validates :title, length: { maximum: 30 }
    validates :description, length: { maximum: 175}
    validates :is_private, inclusion: { in: [ true, false ] }
    validates :is_starred, inclusion: { in: [ true, false ] }

    has_many :memberships,
        foreign_key: :channel_id,
        class_name: :Membership

    has_many :members,
        through: :memberships,
        source: :user

    has_many :posts,
        foreign_key: :channel_id,
        class_name: :Post


end

