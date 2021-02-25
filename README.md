# Quack

<img src="https://github.com/SanYung/Quack---A-Slack-Clone/blob/main/app/assets/images/ducklogo.png" width="300">

[Quack Live Link](https://san-quack.herokuapp.com/#/)

# Overview
Quack, a slack clone, is a communication application intended to enhance teamwork/colloborationto.  Quack allows you to create/join channels(cohorts/subjects), send live messages to one another, and direct message other users. Quack was built in approximately 10 days using Ruby on Rails (backend) and React/Redux (fronted).  
<img src="https://github.com/SanYung/Quack---A-Slack-Clone/blob/main/app/assets/images/7.png" width="700">

# Technologies 
Quack was created with Ruby on Rails, React, Redux, Node.js, SQL, Action Cable, AJAX, JSX, Jbuilder, CSS3 and JSX.

## Features
### User Authentication
- Utilizes BCrypt encription to secure passwords and user data
- Users can sign up/ login/ logout
- If password/username is incorrect, session form will notify the user of the reason for failed log in 
- After users log in, refresheshing the page will not log the user out
- Implemented a demo user for quick access into Quack
<img src="https://github.com/SanYung/Quack---A-Slack-Clone/blob/main/app/assets/images/4.png" width="500">

### Channels
- Users can create, update, and view channels 
- Users can create private or public channels
- Users cannot join private channels but can only be invited for other users already in the private channel
- Users can starr favorite channels
<img src="https://github.com/SanYung/Quack---A-Slack-Clone/blob/main/app/assets/images/3.png" width="500">


### Channel Memberships
- Only channels that a user has joined will appear on their user page
- Users can browse public channels to join
- Users can leave both public and private channels they are apart of
- Users can view other members who are joined to a specific channel
- Users can only be invited to join a private channel, and cannot join private channels themselves
- Users are unable to post in channels they are not joined to
<img src="https://github.com/SanYung/Quack---A-Slack-Clone/blob/main/app/assets/images/2.png" width="500">


### Direct Messages
- Users can send direct messages to other users

### Real Time Messaging
- Real time messaging is implementing through the use of action cables in the rails framework
- Real time messaging is available both in post to channels and as well as direct messages

### Search
- Users can search all channels and messages
- Search field will automatically pull all matching criteria
- Users can search by category 
- Users can click on any search result and be redirected to the corresponding page 
<img src="https://github.com/SanYung/Quack---A-Slack-Clone/blob/main/app/assets/images/1.png" width="500">

