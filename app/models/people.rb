class People < ApplicationRecord
	include HTTParty
	
	API_BASE_URL = "https://api.salesloft.com/v2"
	#Tell the API to look for people, and per page function
	#Test Page Size Function
	PAGE_SIZE = "2"
	#Tell the API to look for people, and per page function
	SUB_PATH = "/people?per_page=#{PAGE_SIZE}"
	#Create full URL string
	URL = "#{API_BASE_URL}#{SUB_PATH}"
	#Include specified Headers, and reference API KEY
	HEADERS = {"Authorization" => "Bearer #{ENV.fetch("SALESLOFT_API_KEY")}"}

	puts "TEST"
	
	#Fetch data using HTTParty with URL and HEADERS
	def fetch_data
		api_response = HTTParty.get(URL, headers: HEADERS)
		data = api_response["data"]
		return data
	end

	#Create new object
	people = People.new

	#test fetch_data results
	puts people.fetch_data

	#implementation:
	people.fetch_data.each do |item|
		People.create do |p|
	#		Attempting to get full name from API instead of first and last, then combining them
			p.display_name = item["display_name"]
			p.email_address = item["email_address"]
			p.title = item["title"]
		end
	end
end
