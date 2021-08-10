# Personal-Daily-Planner

As an aspiring junior developer, I was tasked with building abasic daily planner that could help organize a person work day. I've incorporated the bootstrap, moment, font awesome, and jquery libraries to assist in building out this webpage. A user should be able to view the current date and time at the top of the page. Each hour block has a textarea in which a user can input text to define their schedule. Hitting the save button at the right hand part of the row saves each schedule item into local storage. Each hour block of time will be color coded according to if that time block has passed, is the present hour, or is in the future for a given day. As an aspiring junior developer, this assignment provided good exposure to utilizing third party libraries to complete a given task.

## How it was built

-- The html and CSS files were provided. I used the given classes and ids already written into the code to create javascript file.

-- Added moment method to display current day and time at the top of the page.

-- Need the init function to initilize script.js. Timer interval executes every minute to update class/color of time blocks. Inidicating the status of each time block as either past, present, or future.

-- Built out save functionality using font awesome icon. When user clicks save button, the text in the text area is saved to localStorage.

Live link here! https://korbin-sargent.github.io/Personal-Daily-Planner/

![Screen Shot 2021-08-10 at 10 32 40 AM](https://user-images.githubusercontent.com/87394831/128897814-baf3c613-f567-4b5f-9864-40ebe15dcf52.png)




