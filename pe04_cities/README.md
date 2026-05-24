# Input

The input of this program comes from the user entering city information in the Add City form. The user types the city name, country, and population into the form fields. The user can also click a city name from the Cities List to view more information about that city.

# Process

The application uses React, React Router, useState, useNavigate, and useParams. When the user adds a new city, the program saves the city information in localStorage and redirects the user back to the Cities List page. The Cities List reads the saved cities and displays each city as a clickable link. When a city link is clicked, useParams gets the city id from the URL and displays the correct city details.

# Output

The output is a styled Cities Application displayed in the browser. Users can view a list of cities, add new cities, and click each city to see its details, including country and population.