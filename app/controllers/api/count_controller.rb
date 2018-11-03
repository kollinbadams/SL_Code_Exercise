class Api::CountController < Api::PeopleController

	def getCount
		character_data = getEmailList()
		
		email_list = character_data

		puts "Email address list : #{email_list}"
	end

end
