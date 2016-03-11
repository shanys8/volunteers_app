class VolunteerPoint < ActiveRecord::Base

  def get_distance_from(longitude, latitude)
    location_longitude = longitude * Math::PI / 180
    location_latitude  = latitude * Math::PI / 180
    hotel_longitude    = self.longitude * Math::PI / 180
    hotel_latitude     = self.latitude * Math::PI / 180
    earth_radius       = 6371 # earth's mean radius in km
    (Math.acos(Math.sin(location_latitude) * Math.sin(hotel_latitude) +
                   Math.cos(location_latitude) * Math.cos(hotel_latitude) * Math.cos((hotel_longitude - location_longitude)))) * earth_radius
  end

end
