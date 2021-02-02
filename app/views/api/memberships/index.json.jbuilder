@memberships.each do |membership|
  json.set! membership.id do
    json.memberId membership.member_id
    json.channelId membership.channel_id
  end 
end 
