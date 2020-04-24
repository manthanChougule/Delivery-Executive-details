class User < ApplicationRecord
    validates :firstname, presence: true
    validates :lastname, presence: true
    validates :contact, presence: true
    validates :address, presence: true
end
