class Membership < ApplicationRecord
    validates :member_id, :channel_id, presence: true
    # validates :channel_id, uniqueness: { scope: :member_id } 

    belongs_to :user,
        primary_key: :id,
        foreign_key: :member_id,
        class_name: :User

    belongs_to :channel,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: :Channel

end
