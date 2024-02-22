destinations = ['Paris, France','Shanghai, China','Los Angeles, USA','São Paulo, Brazil','Cairo, Egypt']
test_traveler=['Erin Wilkes', 'Shanghai, China', ['historical site', 'art']]

def get_destination_index(destination):
  destination_index=destinations.index(destination)
  # print(destination_index)
  return destination_index

# get_destination_index('Los Angeles, USA')
# get_destination_index('Paris, France')
# get_destination_index('Hydrabad, India')

def get_traveler_location(traveler):
  traveler_destination=traveler[1]
  traveler_destination_index=get_destination_index(traveler_destination)
  return traveler_destination_index
 
test_destination_index = get_traveler_location(test_traveler)

# print(test_destination_index)
