@memberships.each do |membership|
  json.set! membership.id do
  json.member_id membership.member_id
  end 
end 