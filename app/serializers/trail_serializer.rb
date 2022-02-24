class TrailSerializer < ActiveModel::Serializer
  attributes :id, :trail_name, :features, :image_url, :roundtrip, :elevation_gain, :difficulty, :popular
end
