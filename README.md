# express_returnDataBasedOnUrl
an Express web application that returns data from the database based on the route provided in the URL.

Install mySQL: https://dev.mysql.com/downloads/installer/ 

COMMAND PROMPT

(1) Run the following to navigate to your Desktop: 

    cd Desktop

(2) Create a new folder on desktop: 

    mkdir Express

(3) Navigate to the Express directory: 

    cd Express

(4) Run the following command to install the Express generator globally onto your computer: 

    npm install express-generator -g

(5) Enter the following command to generate the Express starter app. This will set the view to use Handlebars and will name the app express_mySQL_returnDataBasedOnUrl: 

    express --view=hbs express_returnDataBasedOnUrl

(6) Once the process is complete, navigate into the express_mySQL_returnDataBasedOnUrl directory: 

    cd express_mySQL_returnDataBasedOnUrl

(7) Now in the express_mySQL_returnDataBasedOnUrl directory, run the following: 

    npm install

(8) Install Nodemon globally: 

    npm install -g nodemon
    
(9) Install Nodemon as a devDependency in the package.json file within the express_mySQL_returnDataBasedOnUrl directory:

    npm install -save-dev nodemon
    
(10) Install mySQL:

    npm install --save mysql

(11) Start the server with Nodemon with the following command: 

    nodemon

(12) Open in VS code:

    code . 

MYSQL

(13) run a select query in mySQL to view all the films: ![run a select query in mySQL to view all films (mySQL_returnDataBasedOnUrl)](https://user-images.githubusercontent.com/35668707/68178039-43fa2400-ff3f-11e9-8089-c8e3093c4f86.JPG)



VS CODE

(14) Navigate to the routes/index.js file and update. Need to require the mySQL, add the connection information to connect to mySQL: ![open index js file (express_mySQL_returnDataBasedOnUrl)](https://user-images.githubusercontent.com/35668707/68095732-c5c75000-fe60-11e9-9945-7067c8f68a6e.JPG)


(15) Add get() method to route /film to the index.js file: 

(16) Create views/film.hbs file with loop: 


WEB BROWSER

(19) Navigate to localhost:3000/film to view form and list: 
