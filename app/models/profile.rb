class Profile < ApplicationRecord
    belongs_to :user

    def integer 
        puts "hey"
    end

    def saved_trails
        puts self
        
      end
      def completed_trails
        self
          
      end
      
end
