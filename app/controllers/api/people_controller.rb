class Api::PeopleController < Api::BaseController
	respond_to :json
	
	#Set reponse to all data within people object, and render the json data
	def index
		@people = People.all
		#render json: "test"
		response = @people
		render json: response
		return response
	end

	#build email list to pass to count controller
	def getEmailList
		data = index()
		emailList = []
		data.each do |person|
			emailList.push("#{person["email_address"]}")
		end
		return emailList
	end
end
