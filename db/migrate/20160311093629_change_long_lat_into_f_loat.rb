class ChangeLongLatIntoFLoat < ActiveRecord::Migration
  def change
    change_column :volunteer_points ,:longitude, :float
    change_column :volunteer_points ,:latitude, :float
  end
end
