class People < ApplicationRecord
	include HTTParty
	#Added validator to prevent duplicating data in the db on page reload
	#Only allows new or non existing data to be added
	validates :pid, uniqueness: true


	API_BASE_URL = "https://api.salesloft.com/v2"
	#Get max Page Size 
	PAGE_SIZE = "100"
	#Tell the API to look for people, and per page function
	SUB_PATH = "/people?per_page=#{PAGE_SIZE}"
	#Create full URL string
	URL = "#{API_BASE_URL}#{SUB_PATH}"
	#Include specified Headers, and reference API KEY
	HEADERS = {"Authorization" => "Bearer #{ENV.fetch("SALESLOFT_API_KEY")}"}

	puts "TEST"
	
	def fetch_data
		api_response = HTTParty.get(URL, headers: HEADERS)
		data = api_response["data"]
		return data
	end

	#Create new object
	people = People.new

	#test fetch_data results
	#puts JSON.pretty_generate(people.fetch_data)

	#implementation:
	people.fetch_data.each do |item|
		People.create do |p|
	#		Updated model, to include person's id number, for more robust validation
			p.pid = item["id"]
			p.display_name = item["display_name"]
			p.email_address = item["email_address"]
			p.title = item["title"]
		end
	end
end
	
