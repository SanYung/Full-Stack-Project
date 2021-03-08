if user.photo.attached? 
    json.extract! user, :id, :email, :username
    json.photoUrl url_for(user.photo)
else
    json.extract! user, :id, :email, :username
end