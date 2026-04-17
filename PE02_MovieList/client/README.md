# Input
The input of this program comes from the user’s interaction with the interface. The user can select a movie genre from the dropdown menu and can also click on any movie card displayed on the screen. The selected genre is used as the filtering input, while the movie click is treated as an event input. These user actions control how the application responds and what information is shown.

# Process
The program stores a predefined list of movies in React state. Each movie has a title, genre, and release year. The application creates a list of unique genres and displays them in a dropdown menu. When the user selects a genre, the program filters the movie list and shows only movies that match that genre. If All Genres is selected, the full list is shown. When a movie card is clicked, an event handler runs and displays an alert message with the movie title.

# Output
The output is a styled movie list displayed on the page. Each movie appears as a separate card showing its title, genre, and release year. The displayed list updates dynamically based on the user’s selected genre. When a movie is clicked, the application outputs an alert box that shows the selected movie title.