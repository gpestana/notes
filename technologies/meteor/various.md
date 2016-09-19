## Meteor learnings (by reading source code)

(as of Meteor 1.3)

### Loading modules:

The code in /server and /client will be the first to be loaded eagerly. A good practice is to include the code to load every time (in both client and server) and a pointer to load the code that the app needs to startup.  
The client may include the head.html (which will be loaded everywhere), the CSS and a main.js importing /imports/startup/client and /imports/startup/both. 
The server usually imports the /imports/startup/server and /imports/startup/both.
By explicitly importing the code needed, there is more fine grained control of the code loaded at the different places of the application. This also helps to maintain the application lighter.

### routes.js

The routes should be among the first modules to load. It should define the main routes and the error routes to be rendered when unknown/missing routes are visited by the user.
The routes.js must load the helpers of the templates rendered by the routes defined. Thus, all the helpers from the templates loaded by the routes must be explicitly imported in the file. 