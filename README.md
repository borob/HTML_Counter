# HTML_Counter
Count up meter based upon time and working independently to project framerate

# Run example
http://brumenlab.com/testProjects/counter/

Technologies used: 
- HTML
- jQuery
- JavaScript
- CSS
- Bootstrap


Project Structure:
/index.html -> project main page
/css/countUp/countUp.css -> css file that defines the index.html look and feel (based upon bootstrap)
/fonts/ -> folder which contains fonts that are used on the project
/js/ -> folder with javascript source code (it includes bootstrap code and counter implementation code)
/js/countUpTest/ -> folder with counter implementation source code
/js/countUpTest/counter.js -> Counter object implementation. 
/js/countUpTest/main.js -> controller between the page and the Counter. It takes the data from the page, initialize the counter,
define the framerate, and controls the counter.
/js/countUpTest/testMain.js -> javascript that cointains my test cases for this project.