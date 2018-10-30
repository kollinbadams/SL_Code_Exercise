class People < ApplicationRecord

	API_BASE_URL = "https://api.salesloft.com/v2"
	#Tell the API to look for people, and per page function
	SUB_PATH = "/people.json?per_page="
	#Test Page Size Function
	PAGE_SIZE = "1"
	#Create full URL string
	URL = "#{API_BASE_URL}#{SUB_PATH}#{PAGE_SIZE}"
	#Include specified Headers, and reference API KEY
	HEADERS = {"Authorization" => "Bearer #{ENV.fetch("SALESLOFT_API_KEY")}"}

	#TODO Add get method, and initialize people object
