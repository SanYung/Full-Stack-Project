# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Channel.delete_all
Post.delete_all

user1 = User.create!(username:'DemoUser' ,email:'demo@aa.com', password: 'demo123' )

channel1 = Channel.create!(title:'General', description:"hi there i'm a description", user_id: user1.id)
channel2 = Channel.create!(title:'Announcements', user_id: user1.id)
channel3 = Channel.create!(title:'Food', user_id: user1.id)


post1 = Post.create!(body: "it's beginning to look alot like christmas", user_id: user1.id, channel_id: channel1.id )
post2 = Post.create!(body: "jingle bells", user_id: user1.id, channel_id: channel1.id)
post3 = Post.create!(body: "heello", user_id: user1.id, channel_id: channel1.id)
post4 = Post.create!(body: "hi there", user_id: user1.id, channel_id: channel1.id)