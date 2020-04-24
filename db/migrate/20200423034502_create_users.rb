class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :firstname, null: false
      t.string :lastname, null: false
      t.string :contact, null: false
      t.text :address, null: false

      t.timestamps
    end
  end
end
