class CreatePeople < ActiveRecord::Migration[5.1]
  def change
    create_table :people do |t|
      t.string :display_name
      t.string :email_address
      t.string :title
      t.timestamps
    end
  end
end
