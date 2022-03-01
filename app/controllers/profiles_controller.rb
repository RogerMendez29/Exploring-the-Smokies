class ProfilesController < ApplicationController

    def index
        profile = Profile.all
        render json:profile
    end

    
end
