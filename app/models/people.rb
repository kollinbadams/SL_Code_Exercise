class People < ApplicationRecord
	include HTTParty
	validates :pid, uniqueness: true


	API_BASE_URL = "https://api.salesloft.com/v2"
	#Test Page Size Function
	PAGE_SIZE = "100"
	#Tell the API to look for people, and per page function
	SUB_PATH = "/people?per_page=#{PAGE_SIZE}"
	#SUB_PATH = "/people"
	#Create full URL string
	URL = "#{API_BASE_URL}#{SUB_PATH}"
	#Include specified Headers, and reference API KEY
	HEADERS = {"Authorization" => "Bearer #{ENV.fetch("SALESLOFT_API_KEY")}"}

	#TODO Add get method, and initialize people object

	puts "TEST"
	
	def fetch_data
		api_response = HTTParty.get(URL, headers: HEADERS)
		data = api_response["data"]
		return data
	end

	#Create new object
	people = People.new

	#test fetch_data results
	puts JSON.pretty_generate(people.fetch_data)

	#implementation:
	people.fetch_data.each do |item|
	#	puts JSON.pretty_generate(item)
		People.create do |p|
	#		Attempting to get full name from API instead of first and last, then combining them
			p.pid = item["id"]
			p.display_name = item["display_name"]
			p.email_address = item["email_address"]
			p.title = item["title"]
		end
	end
end
	
