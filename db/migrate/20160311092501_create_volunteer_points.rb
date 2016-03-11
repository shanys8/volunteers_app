class CreateVolunteerPoints < ActiveRecord::Migration
  def change
    create_table :volunteer_points do |t|
      t.string :name
      t.text :description
      t.string :picture
      t.integer :longitude
      t.integer :latitude
      t.string :contact_phone

      t.timestamps
    end
  end
end
