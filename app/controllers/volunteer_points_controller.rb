class VolunteerPointsController < ApplicationController

  def index
    @volunteer_points = VolunteerPoint.all
    render 'index'
  end

  def show
    @volunteer_point = VolunteerPoint.find(params[:id])
    render 'show'
  end

  def new
    @volunteer_point = VolunteerPoint.new
    render 'new'
  end

  def edit
    @volunteer_point = VolunteerPoint.find(params[:id])
    render 'edit'
  end

  def create
    @volunteer_point = VolunteerPoint.new(volunteer_point_params)

    if @volunteer_point.save
      redirect_to @volunteer_point, notice: 'Volunteer point was successfully created.'
    else
      render action: 'new'
    end
  end

  def update
    @volunteer_point = VolunteerPoint.find(params[:id])
    if @volunteer_point.update(volunteer_point_params)
      redirect_to @volunteer_point, notice: 'Volunteer point was successfully updated.'
    else
      render action: 'edit'
    end
  end

  def destroy
    @volunteer_point = VolunteerPoint.find(params[:id])
    @volunteer_point.destroy
    redirect_to volunteer_points_url, notice: 'Volunteer point was successfully destroyed.'
  end

  private
  # Only allow a trusted parameter "white list" through.
  def volunteer_point_params
    params.require(:volunteer_point).permit(:name, :description, :picture, :longitude, :latitude, :contact_phone)
  end

end
