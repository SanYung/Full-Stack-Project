# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

User.delete_all
Channel.delete_all
Membership.delete_all
Post.delete_all

demo = User.create(username:'DemoUser' ,email:'demo@aa.com', password: 'demo123' )
san = User.create(username: 'San Yung', email:'san@gmail.com', password: 'sanyung')
david = User.create(username: 'David Xi', email:'david@gmail.com', password: 'davidxi')
stephanie = User.create(username: 'Stephanie Tan', email:'stephanie@gmail.com', password: 'stephanietan')
olivia = User.create(username: 'Olivia Willaims', email:'olivia@gmail.com', password: 'olivawilliams')
francis =  User.create(username: 'Frances Walsh', email:'frances@gmail.com', password: 'franciswalsh')
ian = User.create(username: 'Ian Brown', email:'ian@gmail.com', password: 'ianbrown')
emma = User.create(username: 'Emma Chiu',  email:'emma@gmail.com', password: 'emmachiu')
jonathan = User.create(username: 'Jonathan Conner',  email:'jonathan@gmail.com', password: 'jonathanconner')
charlie = User.create(username: 'Charlie Park',  email:'charlie@gmail.com', password: 'charliepark')

channel1 = Channel.create(title: 'Welcome!', description: 'thanks for checking Quack out!', is_starred: true)
channel2 = Channel.create(title: 'General',description: 'this is for general messages' )
channel3 = Channel.create(title: 'Hip', description: '')
channel4 = Channel.create(title: 'Hooray!', description: '')



membership1 = Membership.create(channel_id: channel2.id, member_id: demo.id)
membership2 = Membership.create(channel_id: channel2.id, member_id: san.id)
membership3 = Membership.create(channel_id: channel2.id, member_id: david.id)
membership3 = Membership.create(channel_id: channel3.id, member_id: demo.id)
membership4 = Membership.create(channel_id: channel3.id, member_id: david.id)
membership5 = Membership.create(channel_id: channel3.id, member_id: stephanie.id)
membership6 = Membership.create(channel_id: channel4.id, member_id: olivia.id)
membership7 = Membership.create(channel_id: channel4.id, member_id: francis.id)
membership8 = Membership.create(channel_id: channel4.id, member_id: ian.id)
membership9 = Membership.create(channel_id: channel4.id, member_id: emma.id)
membership10 = Membership.create(channel_id: channel4.id, member_id: jonathan.id)
membership11 = Membership.create(channel_id: channel4.id, member_id: charlie.id)
membership12 = Membership.create(channel_id: channel4.id, member_id: david.id)
membership13 = Membership.create(channel_id: channel1.id, member_id: demo.id)
membership14 = Membership.create(channel_id: channel1.id, member_id: san.id)
membership15 = Membership.create(channel_id: channel1.id, member_id: david.id)
membership16 = Membership.create(channel_id: channel1.id, member_id: stephanie.id)
membership17 = Membership.create(channel_id: channel1.id, member_id: olivia.id)
membership18 = Membership.create(channel_id: channel1.id, member_id: francis.id)
membership19 = Membership.create(channel_id: channel1.id, member_id: ian.id)
membership20 = Membership.create(channel_id: channel1.id, member_id: emma.id)
membership21 = Membership.create(channel_id: channel1.id, member_id: jonathan.id)
membership22 = Membership.create(channel_id: channel1.id, member_id: charlie.id)


post1 = Post.create(body:"Hi there, welcome to Quack!", user_id: demo.id, channel_id: channel1.id)
post2 = Post.create(body:"This app was super fun to make!", user_id: san.id, channel_id: channel1.id)
post3 = Post.create(body:"Hi everyone!", user_id: david.id, channel_id: channel1.id)
post4 = Post.create(body:"Hi!", user_id: demo.id, channel_id: channel2.id)
post5 = Post.create(body:"What's up!", user_id: david.id, channel_id: channel2.id)
post6 = Post.create(body:"Awesome Clone!", user_id: stephanie.id, channel_id: channel3.id)
post7 = Post.create(body:"Hey Francis!", user_id: olivia.id, channel_id: channel4.id)
post8 = Post.create(body:"Hey Olivia!", user_id: francis.id, channel_id: channel4.id)
post9 = Post.create(body:"What's going on, guys!?", user_id: ian.id, channel_id: channel4.id)
post10 = Post.create(body:"Yay, communication!", user_id: emma.id, channel_id: channel4.id)
post11 = Post.create(body:"yoyoyo!", user_id: jonathan.id, channel_id: channel4.id)
post12 = Post.create(body:"This is dope", user_id: charlie.id, channel_id: channel4.id)



