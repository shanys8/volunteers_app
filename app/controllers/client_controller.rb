class ClientController < ApplicationController
  def index
    render :json => {:success => false, :error => 'Missing params'} and return if params[:longitude].blank? || params[:latitude].blank?
    radius = 0.4
    longitude = params[:longitude].to_f
    latitude = params[:latitude].to_f
    vps = VolunteerPoint.where("longitude BETWEEN ? AND ? AND latitude BETWEEN ? AND ?", longitude-radius, longitude+radius, latitude-radius, latitude+radius).to_a

    @volunteer_points = vps.map {|vp| {:object => vp, :distance => vp.get_distance_from(longitude, latitude)}}
    render 'index'
  end

  def show
    @volunteer_point = VolunteerPoint.find(params[:id])
    render 'show'
  end
end
