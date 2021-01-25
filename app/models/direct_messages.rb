class Direct_messages < ApplicationRecord
    validates :body, :receiver_id, :author_id, presence:true
    validates :is_starred, inclusion: {in: [true, false]}

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :reciever,
        primary_key: :id,
        foreign_key: :receiver_id,
        class_name: :User
        
end


