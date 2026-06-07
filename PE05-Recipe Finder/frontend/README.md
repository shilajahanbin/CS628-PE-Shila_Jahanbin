# Input

The Recipe Finder application allows users to enter recipe information through a simple web form,  Users can add a recipe name, ingredients and cooking instructions also They can also select an existing recipe to edit or delete. The information entered by the user is sent to the server and stored in a MongoDB Atlas database.

# Process

When a user submits a recipe the React frontend sends the data to a Node.js and Express backend through API requests then The backend processes the request and performs the required database operation such as creating, retrieving, updatin  or deleting a recipe. React Router is used to navigate between different pages of the application and  MongoDB Atlas stores all recipe data and returns it when requested by the application.

# Output

The application displays recipes in an organized table where users can view, update and delete records, When a new recipe is added or an existing one is modified the changes are immediately reflected in the recipe list. This provides users with an easy way to manage and organize their recipes through a full-stack web application.
