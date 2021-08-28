class CreateAdvts < ActiveRecord::Migration[6.1]
  def change
    create_table :advts do |t|
      t.string :title
      t.string :desc
      t.string :image
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
