json.id @user.id
json.username @user.username
json.email @user.email
json.photoUrl @user.photo.attached? ? url_for(@user.photo) : nil
