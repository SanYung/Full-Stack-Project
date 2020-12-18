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

channel1 = Channel.create!(title:'Announcements', description:"hi there i'm a description", user_id: user1.id)
channel2 = Channel.create!(title:'Thing 1', user_id: user1.id)
channel3 = Channel.create!(title:'Thing 2', user_id: user1.id)
channel4 = Channel.create!(title:'Food', user_id: user1.id)
channel5 = Channel.create!(title:'Stand up', user_id: user1.id)


post1 = Post.create!(body: "Hi!", user_id: user1.id, channel_id: channel1.id )
post2 = Post.create!(body: "I'm Sam-I-Am", user_id: user1.id, channel_id: channel1.id)
