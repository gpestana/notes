## Meteor learnings (by reading source code)

(as of Meteor 1.3)

### Loading modules:

The code in /server and /client will be the first to be loaded eagerly. A good practice is to include the code to load every time (in both client and server) and a pointer to load the code that the app needs to startup.  w
The client may include the head.html (which will be loaded everywhere), the CSS and a main.js importing /imports/startup/client and /imports/startup/both. 
The server usually imports the /imports/startup/server and /imports/startup/both.
By explicitly importing the code needed, there is more fine grained control of the code loaded at the different places of the application. This also helps to maintain the application lighter.

### routes.js

The routes should be among the first modules to load. It should define the main routes and the error routes to be rendered when unknown/missing routes are visited by the user.
The routes.js must load the helpers of the templates rendered by the routes. All the helpers from the templates loaded by the routes must be explicitly imported in the file. 

### Templates JS and HTML

Each and every template is defined by its structure (html) and respective logic (js). The javascript module must import the html modules (even though this might sound slightly misleading, html snippets mnust be imported as javascript code).
Each template exposes a Template object which exposes multiple methods that may encapsulate different flavors of logic:

- Template.template_name.**onCreated()**: Will run when the template is created. Usually used to subscribe to different collections and to create a reactive template state;
- **Template.template_name.**helpers()**: Methods that can be called from within the html template;
- **Template.template_name.**events()**: Methods that are triggered after a certain user actions took place, e.g. a particular button was pushed.

### UI structure

The UI components should be organized in reusable components and smart components. The general idea is that smart components subscribe to data, fetch data form subscriptions and fetch global states from components. The smart UI component passes the resulting data to child components - the reusable components. The reusable components only renders data passed to it and are easy to test and call in different places in the app.