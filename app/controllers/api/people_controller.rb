class Api::PeopleController < Api::BaseController
	respond_to :json
	
	#Set response to all data within people object, and render the json data
	def index
		@people = People.all
		response = @people
		render json: response
	end
end
