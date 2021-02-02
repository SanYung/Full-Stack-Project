class Dmessage < ApplicationRecord
    validates :name, presence:true

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




