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

![add info to connect to mySQL index js file (express_mySQL_returnDataBasedOnUrl)](https://user-images.githubusercontent.com/35668707/68178093-7b68d080-ff3f-11e9-862e-5c1e91fae2df.JPG)


(15) Create a get() method to for /film to the index.js file: ![create new get() method in index js file for film (express_mySQL_returnDataBasedOnUrl)](https://user-images.githubusercontent.com/35668707/68178169-c4208980-ff3f-11e9-9443-efd0ed8e7d61.JPG)


(16) Create a new query in the index.js file for film search: ![create new query in index js file for film search (express_mySQL_returnDataBasedOnUrl)](https://user-images.githubusercontent.com/35668707/68178224-fe8a2680-ff3f-11e9-96d2-d04c602b758b.JPG)


(17) Create new get() method in index.js file for film details and query for film actor: ![create new get() method in index js file for film details and query for film actor(express_mySQL_returnDataBasedOnUrl)](https://user-images.githubusercontent.com/35668707/68178472-00a0b500-ff41-11e9-8273-e5a73fb66e49.JPG)


(18) Create views/film.hbs file with loop: ![create new film hbs file in the views folder and add handlebars (express_mySQL_returnDataBasedOnUrl)](https://user-images.githubusercontent.com/35668707/68178563-54130300-ff41-11e9-9928-349b668e91b5.JPG)


(19) Create views/filmDetails.hbs file with loop: ![create new filmDetails hbs file in the views folder and add handlebars (express_mySQL_returnDataBasedOnUrl)](https://user-images.githubusercontent.com/35668707/68178622-89b7ec00-ff41-11e9-9a89-0ab23315034d.JPG)


WEB BROWSER

(20) Navigate to localhost:3000/film to view list: ![navigate to localhost3000 to view films (express_mySQL_returnDataBasedOnUrl)](https://user-images.githubusercontent.com/35668707/68178704-dd2a3a00-ff41-11e9-8d4d-0fe8f46e6f3d.JPG)

(21) Navigate to localhost:3000/film/5 to view specific filmDetails: 
