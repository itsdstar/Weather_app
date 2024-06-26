// Predefined list of common locations
const commonLocations = [
    'London, UK',
    'Paris, France',
    'Tokyo, Japan',
    'Sydney, Australia',
    'Berlin, Germany',
    'Moscow, Russia',
    'Beijing, China',
    'Mumbai, India',
    'New York, USA',
    'Los Angeles, USA',
    'Chicago, USA',
    'Houston, USA',
    'Phoenix, USA',
    'Philadelphia, USA',
    'San Antonio, USA',
    'San Diego, USA',
    'Dallas, USA',
    'San Jose, USA',
    'Austin, USA',
    'Jacksonville, USA',
    'Fort Worth, USA',
    'Columbus, USA',
    'Charlotte, USA',
    'San Francisco, USA',
    'Indianapolis, USA',
    'Seattle, USA',
    'Denver, USA',
    'Washington, USA',
    'Boston, USA',
    'El Paso, USA',
    'Nashville, USA',
    'Detroit, USA',
    'Oklahoma City, USA',
    'Portland, USA',
    'Las Vegas, USA',
    'Memphis, USA',
    'Louisville, USA',
    'Baltimore, USA',
    'Milwaukee, USA',
    'Albuquerque, USA',
    'Tucson, USA',
    'Fresno, USA',
    'Sacramento, USA',
    'Mesa, USA',
    'Kansas City, USA',
    'Atlanta, USA',
    'Long Beach, USA',
    'Omaha, USA',
    'Raleigh, USA',
    'Miami, USA',
    'Virginia Beach, USA',
    'Oakland, USA',
    'Minneapolis, USA',
    'Tulsa, USA',
    'Arlington, USA',
    'Tampa, USA',
    'New Orleans, USA',
    'Wichita, USA',
    'Cleveland, USA',
    'Bakersfield, USA',
    'Aurora, USA',
    'Anaheim, USA',
    'Honolulu, USA',
    'Santa Ana, USA',
    'Riverside, USA',
    'Corpus Christi, USA',
    'Lexington, USA',
    'Henderson, USA',
    'Stockton, USA',
    'Saint Paul, USA',
    'Cincinnati, USA',
    'St. Louis, USA',
    'Pittsburgh, USA',
    'Greensboro, USA',
    'Lincoln, USA',
    'Anchorage, USA',
    'Plano, USA',
    'Orlando, USA',
    'Irvine, USA',
    'Newark, USA',
    'Toledo, USA',
    'Durham, USA',
    'Chula Vista, USA',
    'Fort Wayne, USA',
    'Jersey City, USA',
    'St. Petersburg, USA',
    'Laredo, USA',
    'Madison, USA',
    'Chandler, USA',
    'Buffalo, USA',
    'Lubbock, USA',
    'Scottsdale, USA',
    'Reno, USA',
    'Glendale, USA',
    'Gilbert, USA',
    'Winston–Salem, USA',
    'North Las Vegas, USA',
    'Norfolk, USA',
    'Chesapeake, USA',
    'Garland, USA',
    'Irving, USA',
    'Hialeah, USA',
    'Fremont, USA',
    'Boise, USA',
    'Richmond, USA',
    'Spokane, USA',
    'Baton Rouge, USA',
    'Tacoma, USA',
    'San Bernardino, USA',
    'Modesto, USA',
    'Fontana, USA',
    'Des Moines, USA',
    'Moreno Valley, USA',
    'Santa Clarita, USA',
    'Fayetteville, USA',
    'Birmingham, USA',
    'Oxnard, USA',
    'Rochester, USA',
    'Port St. Lucie, USA',
    'Grand Rapids, USA',
    'Huntsville, USA',
    'Salt Lake City, USA',
    'Frisco, USA',
    'Yonkers, USA',
    'Amarillo, USA',
    'Glendale, USA',
    'Huntington Beach, USA',
    'McKinney, USA',
    'Montgomery, USA',
    'Augusta, USA',
    'Aurora, USA',
    'Akron, USA',
    'Little Rock, USA',
    'Tempe, USA',
    'Columbus, USA',
    'Overland Park, USA',
    'Grand Prairie, USA',
    'Tallahassee, USA',
    'Cape Coral, USA',
    'Mobile, USA',
    'Knoxville, USA',
    'Shreveport, USA',
    'Worcester, USA',
    'Ontario, USA',
    'Vancouver, USA',
    'Sioux Falls, USA',
    'Chattanooga, USA',
    'Brownsville, USA',
    'Fort Lauderdale, USA',
    'Providence, USA',
    'Newport News, USA',
    'Rancho Cucamonga, USA',
    'Santa Rosa, USA',
    'Peoria, USA',
    'Oceanside, USA',
    'Elk Grove, USA',
    'Salem, USA',
    'Pembroke Pines, USA',
    'Eugene, USA',
    'Garden Grove, USA',
    'Cary, USA',
    'Fort Collins, USA',
    'Corona, USA',
    'Springfield, USA',
    'Jackson, USA',
    'Alexandria, USA',
    'Hayward, USA',
    'Clarksville, USA',
    'Lakewood, USA',
    'Lancaster, USA',
    'Salinas, USA',
    'Palmdale, USA',
    'Hollywood, USA',
    'Springfield, USA',
    'Macon, USA',
    'Kansas City, USA',
    'Sunnyvale, USA',
    'Pomona, USA',
    'Killeen, USA',
    'Escondido, USA',
    'Pasadena, USA',
    'Naperville, USA',
    'Bellevue, USA',
    'Joliet, USA',
    'Murfreesboro, USA',
    'Midland, USA',
    'Rockford, USA',
    'Paterson, USA',
    'Savannah, USA',
    'Bridgeport, USA',
    'Torrance, USA',
    'McAllen, USA',
    'Syracuse, USA',
    'Surprise, USA',
    'Denton, USA',
    'Roseville, USA',
    'Thornton, USA',
    'Miramar, USA',
    'Pasadena, USA',
    'Mesquite, USA',
    'Olathe, USA',
    'Dayton, USA',
    'Carrollton, USA',
    'Waco, USA',
    'Orange, USA',
    'Fullerton, USA',
    'Charleston, USA',
    'West Valley City, USA',
    'Visalia, USA',
    'Hampton, USA',
    'Gainesville, USA',
    'Warren, USA',
    'Coral Springs, USA',
    'Cedar Rapids, USA',
    'Round Rock, USA',
    'Sterling Heights, USA',
    'Kent, USA',
    'Columbia, USA',
    'Santa Clara, USA',
    'New Haven, USA',
    'Stamford, USA',
    'Concord, USA',
    'Elizabeth, USA',
    'Athens, USA',
    'Thousand Oaks, USA',
    'Lafayette, USA',
    'Simi Valley, USA',
    'Topeka, USA',
    'Norman, USA',
    'Fargo, USA',
    'Wilmington, USA',
    'Abilene, USA',
    'Odessa, USA',
    'Columbia, USA',
    'Pearland, USA',
    'Victorville, USA',
    'Hartford, USA',
    'Vallejo, USA',
    'Allentown, USA',
    'Berkeley, USA',
    'Richardson, USA',
    'Arvada, USA',
    'Ann Arbor, USA',
    'Rochester, USA',
    'Cambridge, USA',
    'Sugar Land, USA',
    'Lansing, USA',
    'Evansville, USA',
    'College Station, USA',
    'Fairfield, USA',
    'Clearwater, USA',
    'Beaumont, USA',
    'Independence, USA',
    'Provo, USA',
    'West Jordan, USA',
    'Murfreesboro, USA',
    'Palm Bay, USA',
    'El Monte, USA',
    'Carlsbad, USA',
    'North Charleston, USA',
    'Temecula, USA',
    'Clovis, USA',
    'Springfield, USA',
    'Meridian, USA',
    'Westminster, USA',
    'Costa Mesa, USA',
    'High Point, USA',
    'Manchester, USA',
    'Pueblo, USA',
    'Lakeland, USA',
    'Pompano Beach, USA',
    'West Palm Beach, USA',
    'Antioch, USA',
    'Everett, USA',
    'Downey, USA',
    'Lowell, USA',
    'Centennial, USA',
    'Elgin, USA',
    'Richmond, USA',
    'Peoria, USA',
    'Broken Arrow, USA',
    'Miami Gardens, USA',
    'Billings, USA',
    'Jurupa Valley, USA',
    'Sandy Springs, USA',
    'Gresham, USA',
    'Lewisville, USA',
    'Hillsboro, USA',
    'Ventura, USA',
    'Greeley, USA',
    'Inglewood, USA',
    'Waterbury, USA',
    'League City, USA',
    'Santa Maria, USA',
    'Tyler, USA',
    'Davie, USA',
    'Lakewood, USA',
    'Daly City, USA',
    'Boulder, USA',
    'Allen, USA',
    'West Covina, USA',
    'Sparks, USA',
    'Wichita Falls, USA',
    'Green Bay, USA',
    'San Mateo, USA',
    'Norwalk, USA',
    'Rialto, USA',
    'Las Cruces, USA',
    'Chico, USA',
    'El Cajon, USA',
    'Burbank, USA',
    'South Bend, USA',
    'Renton, USA',
    'Vista, USA',
    'Davenport, USA',
    'Edinburg, USA',
    'Tuscaloosa, USA',
    'Carmel, USA',
    'Spokane Valley, USA',
    'San Angelo, USA',
    'Vacaville, USA',
    'Clinton, USA',
    'Bend, USA',
    'Woodbridge, USA',
    'San Marcos, USA',
    'Plymouth, USA',
    'Dearborn, USA',
    'Livonia, USA',
    'Allen, USA',
    'Bloomington, USA',
    'Tracy, USA',
    'Edinburg, USA',
    'Plymouth, USA',
    'Layton, USA',
    'Longmont, USA',
    'Hesperia, USA',
    'Cheyenne, USA',
    'Albany, USA',
    'Brockton, USA',
    'Lorain, USA',
    'Kennewick, USA',
    'Baytown, USA',
    'Apple Valley, USA',
    'Redwood City, USA',
    'Manteca, USA',
    'Upland, USA',
    'Haverhill, USA',
    'Mount Pleasant, USA',
    'Buckeye, USA',
    'Pittsburgh, USA',
    'Suffolk, USA',
    'Palo Alto, USA',
    'Pawtucket, USA',
    'Lynchburg, USA',
    'Lawrence, USA',
    'Yuma, USA',
    'Elkhart, USA',
    'Warwick, USA',
    'Largo, USA',
    'Tustin, USA',
    'Palm Coast, USA',
    'Muncie, USA',
    'Alhambra, USA',
    'St. George, USA',
    'Reading, USA',
    'Schaumburg, USA',
    'Bristol, USA',
    'Westland, USA',
    'Rapid City, USA',
    'Conroe, USA',
    'Temecula, USA',
    'Missouri City, USA',
    'Gulfport, USA',
    'New Bedford, USA',
    'Perris, USA',
    'Rock Hill, USA',
    'Flower Mound, USA',
    'San Leandro, USA',
    'Coon Rapids, USA',
    'Kendall, USA',
    'Greenville, USA',
    'Norwalk, USA',
    'Peabody, USA',
    'Buena Park, USA',
    'Blaine, USA',
    'Lakeville, USA',
    'Greenwood, USA',
    'Valdosta, USA',
    'Newark, USA',
    'Quincy, USA',
    'Southfield, USA',
    'Colton, USA',
    'Springfield, USA',
    'Hawthorne, USA',
    'Dubuque, USA',
    'Lodi, USA',
    'Fishers, USA',
    'Hammond, USA',
    'Gary, USA',
    'Concord, USA',
    'St. Clair Shores, USA',
    'Columbia, USA',
    'Marietta, USA',
    'Santa Monica, USA',
    'Redlands, USA',
    'Eden Prairie, USA',
    'Sammamish, USA',
    'Dearborn Heights, USA',
    'Westminster, USA',
    'Bayonne, USA',
    'Pittsburg, USA',
    'Portsmouth, USA',
    'Rome, USA',
    'Rancho Cordova, USA',
    'Palm Springs, USA',
    'Lynchburg, USA',
    'Kirkland, USA',
    'Mountain View, USA',
    'Alpharetta, USA',
    'Hemet, USA',
    'Brooklyn Park, USA',
    'Bismarck, USA',
    'Pleasanton, USA',
    'Skokie, USA',
    'Johnson City, USA',
    'Avondale, USA',
    'Casa Grande, USA',
    'Gastonia, USA',
    'Rocklin, USA',
    'Novato, USA',
    'Deltona, USA',
    'Wellington, USA',
    'San Ramon, USA',
    'Rio Rancho, USA',
    'Lafayette, USA',
    'Troy, USA',
    'South Gate, USA',
    'Farmington Hills, USA',
    'Goodyear, USA',
    'Largo, USA',
    'Bloomington, USA',
    'Kenner, USA',
    'Blue Springs, USA',
    'Roswell, USA',
    'Victoria, USA',
    'Kolkata, India',
    'Delhi, India',
    'Mumbai, India',
    'Kolkata, India',
    'Chennai, India',
    'Bangalore, India',
    'Hyderabad, India',
    'Ahmedabad, India',
    'Pune, India',
    'Jaipur, India',
    'Surat, India',
    'Lucknow, India',
    'Kanpur, India',
    'Nagpur, India',
    'Visakhapatnam, India',
    'Indore, India',
    'Thane, India',
    'Bhopal, India',
    'Patna, India',
    'Vadodara, India',
    'Ghaziabad, India',
    'Ludhiana, India',
    'Agra, India',
    'Nashik, India',
    'Faridabad, India',
    'Meerut, India',
    'Rajkot, India',
    'Kalyan-Dombivli, India',
    'Vasai-Virar, India',
    'Varanasi, India',
    'Srinagar, India',
    'Aurangabad, India',
    'Dhanbad, India',
    'Amritsar, India',
    'Navi Mumbai, India',
    'Allahabad, India',
    'Ranchi, India',
    'Howrah, India',
    'Coimbatore, India',
    'Jabalpur, India',
    'Gwalior, India',
    'Vijayawada, India',
    'Jodhpur, India',
    'Madurai, India',
    'Raipur, India',
    'Kota, India',
    'Guwahati, India',
    'Chandigarh, India',
    'Solapur, India',
    'Hubli-Dharwad, India',
    'Bareilly, India',
    'Mysore, India',
    'Tiruchirappalli, India',
    'Tiruppur, India',
    'Moradabad, India',
    'Gurgaon, India',
    'Aligarh, India',
    'Jalandhar, India',
    'Bhubaneswar, India',
    'Salem, India',
    'Mira-Bhayandar, India',
    'Warangal, India',
    'Guntur, India',
    'Bhiwandi, India',
    'Saharanpur, India',
    'Gorakhpur, India',
    'Bikaner, India',
    'Amravati, India',
    'Noida, India',
    'Jamshedpur, India',
    'Bhilai Nagar, India',
    'Cuttack, India',
    'Firozabad, India',
    'Kochi, India',
    'Bhavnagar, India',
    'Dehradun, India',
    'Durgapur, India',
    'Asansol, India',
    'Nanded, India',
    'Kolhapur, India',
    'Ajmer, India',
    'Gulbarga, India',
    'Jamnagar, India',
    'Ujjain, India',
    'Loni, India',
    'Siliguri, India',
    'Jhansi, India',
    'Ulhasnagar, India',
    'Nellore, India',
    'Jammu, India',
    'Sangli-Miraj & Kupwad, India',
    'Belgaum, India',
    'Mangalore, India',
    'Bhatpara, India',
    'Gaya, India',
    'Karnal, India',
    'Tirunelveli, India',
    'Malegaon, India',
    'Udaipur, India',
    'Maheshtala, India',
    'Davanagere, India',
    'Kozhikode, India',
    'Kurnool, India',
    'Rajpur Sonarpur, India',
    'Rajahmundry, India',
    'Bokaro Steel City, India',
    'South Dumdum, India',
    'Bellary, India',
    'Patiala, India',
    'Gopalpur, India',
    'Agartala, India',
    'Bhagalpur, India',
    'Mathura, India',
    'Jaunpur, India',
    'Haora, India',
    'Panihati, India',
    'Latur, India',
    'Durg, India',
    'Rohtak, India',
    'Korba, India',
    'Bhilwara, India',
    'Berhampur, India',
    'Muzaffarpur, India',
    'Ahmednagar, India',
    'Mathura, India',
    'Kollam, India',
    'Avadi, India',
    'Kadapa, India',
    'Kamarhati, India',
    'Bilaspur, India',
    'Singrauli, India',
    'Sikar, India',
    'Sangrur, India',
    'Nizamabad, India',
    'Bihar Sharif, India',
    'Gorakhpur, India',
    'Hapur, India',
    'Munger, India',
    'Kanpur, India',
    'Sambalpur, India',
    'Bharatpur, India',
    'Raniganj, India',
    'Eluru, India',
    'Gandhinagar, India',
    'Bhiwani, India',
    'Rajnandgaon, India',
    'Tezpur, India',
    'Sivasagar, India',
    'Shillong, India',
    'Shimla, India',
    'Siwan, India',
    'Vellore, India',
    'Saharanpur, India',
    'Firozabad, India',
    'Sirsa, India',
    'Hoshiarpur, India',
    'Katihar, India',
    'Khammam, India',
    'Satna, India',
    'Bijapur, India',
    'Sikar, India',
    'Vellore, India',
    'Guna, India',
    'Port Blair, India',
    'Kumbakonam, India',
    'Chittaurgarh, India',
    'Hapur, India',
    'Hindupur, India',
    'Shillong, India',
    'Nagaon, India',
    'Chandrapur, India',
    'Budaun, India',
    'Bokaro Steel City, India',
    'Munger, India',
    'Raigarh, India',
    'Deoghar, India',
    'Tonk, India',
    'Sambalpur, India',
    'Purnia, India',
    'Surat, India',
    'Ratlam, India',
    'Sirsa, India',
    'Firozabad, India',
    'Kollam, India',
    'Bilaspur, India',
    'Shimoga, India',
    'Barasat, India',
    'Khandwa, India',
    'Puri, India',
    'Dibrugarh, India',
    'Palakkad, India',
    'Bathinda, India',
    'Suryapet, India',
    'Faridkot, India',
    'Krishnanagar, India',
    'Bhuj, India',
    'Shivamogga, India',
    'Faridkot, India',
    'Jalgaon, India',
    'Karur, India',
    'Eluru, India',
    'Rajnandgaon, India',
    'Tezpur, India',
    'Anantnag, India',
    'Nagapattinam, India',
    'Dindigul, India',
    'Tumakuru, India',
    'Raichur, India',
    'Panipat, India',
    'Burhanpur, India',
    'Navsari, India',
    'Gandhinagar, India',
    'Jalpaiguri, India',
    'Kumbakonam, India',
    'Bulandshahr, India',
    'Chittoor, India',
    'Tonk, India',
    'Sivakasi, India',
    'Tadepalligudem, India',
    'Nagaon, India',
    'Agartala, India',
    'Muzaffarnagar, India',
    'Junagadh, India',
    'Ballia, India',
    'Kakinada, India',
    'Thanjavur, India',
    'Rajapalayam, India',
    'Puducherry, India',
    'Dharmavaram, India',
    'Bardhaman, India',
    'Haldia, India',
    'Karimnagar, India',
    'Haldwani, India',
    'Karaikal, India',
    'Guntakal, India',
    'Dehri, India',
    'Bettiah, India',
    'Ballia, India',
    'Chandrapur, India',
    'Mandya, India',
    'Mandsaur, India',
    'Dhule, India',
    'Pali, India',
    'Rampur, India',
    'Thiruvarur, India',
    'Sambalpur, India',
    'Raiganj, India',
    'Kohima, India',
    'Betul, India',
    'Chhapra, India',
    'Vijayawada, India',
    'Baranagar, India',
    'Haldwani, India',
    'Saharanpur, India',
    'Vellore, India',
    'Singrauli, India',
    'Bathinda, India',
    'Guna, India',
    'Banswara, India',
    'Faizabad, India',
    'Dharmavaram, India',
    'Karaikudi, India',
    'Malappuram, India',
    'Singrauli, India',
    'Anantapur, India',
    'Bhagalpur, India',
    'Haridwar, India',
    'Betul, India',
    'Betul, India',
    'Tumkur, India',
    'Tuticorin, India',
    'Budaun, India',
    'Nashik, India',
    'Hazaribagh, India',
    'Raebareli, India',
    'Gopalganj, India',
    'Jaunpur, India',
    'Bhadrak, India',
    'Sikar, India',
    'Saharsa, India',
    'Hajipur, India',
    'Rourkela, India',
    'Nandurbar, India',
    'Gaya, India',
    'Dindigul, India',
    'Tirupati, India',
    'Bhatpara, India',
    'Gaya, India',
    'Jammu, India',
    'Anand, India',
    'Bagaha, India',
    'Chittaurgarh, India',
    'Nanded, India',
    'Bhagalpur, India',
    'Rajapalayam, India',
    'Sambhal, India',
    'Giridih, India',
    'Baran, India',
    'Chhindwara, India',
    'Guntakal, India',
];

module.exports = commonLocations;
