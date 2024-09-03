module Jekyll
  module ImagePathFilter
    def image_path(input)
      "/assets/images/#{input}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::ImagePathFilter)
