class Post < ApplicationRecord
    validates :body, :user_id, presence: true
    # validates_presence_of :channel_id, :unless => :dms_id?
    # validates_presence_of :dms_id, :unless => :channel_id?

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :channel,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: :Channel

    belongs_to :dms,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: :Dmessage
end
