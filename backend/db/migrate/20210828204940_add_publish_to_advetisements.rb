class AddPublishToAdvetisements < ActiveRecord::Migration[6.1]
  def change
    add_column :advts, :show, :boolean
  end
end
