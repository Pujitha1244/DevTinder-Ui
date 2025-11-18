# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# DevTinder

# Video 1

- Created Vite + React Application
- Remove unnecessary code and Create Hello world
- Install tailwind Css
- Install Daisy UI
- Add Navbar Componenet to App.js
- Create a Navbar.jsx seperate file
- Install react-router-dom
  Body
  Navbar  
   Route = / => feed
  Route = /login => Login
  Route = /connections => Connections
  Route = /profile => profile
- Create BrowserRourer > Routes > Route = / body
- Outlet in body
- Footer Component creation

# 2nd Video

- Create Login Page
- install axios
- CORS - install cors in backend => add middleware with configuration:origin,Credentials:true
- when ever doing API call pass : { withCredentials: true } in UI after axios
- install reduxtoolkit and react/redux : https://redux-toolkit.js.org/tutorials/quick-start
- create a configureStore
- add Provider to App.jsx
- create a slice and export the things
- add reducer to store
- login and see if your data is coming properly in the store
- Navbar should update as soon as user log in
- refactor the code by adding Constans file
- create Components folder and add necessary components

# 3rd Video

- You should not be access other routes without login
- if token is not opresent redirect user to login page
- Logout feature
- Get the feed and add feed in the store
- build the User card on feed
- Edit profile featire
- Show toast message on save of profile
- New Page - See all my connections
- new page - to see all my connection Requests
- Feature to accept / Reject connection Request

- send/ignore the request
-

# Deployment

- Sign up on aws
- launch instance
- chmod 400 <secret>.pem
- ssh i
- install Node
- Git clone UI and API

# frontend

-
- ssh -i "devTinder-secret.pem" ubuntu@ec2-54-206-96-91.ap-southeast-2.compute.amazonaws.com

- went to project folder and did npm install
- npm run build 1
- to deploy frontend project we need nginx
- sudo apt update
- sudo apt install nginx
- sudo systemctl start nginx
- sudo systemctl enable nginx
- copy code from dist(build Files) to /var/www/html so do cd /var/www/html   
- sudo scp -r dist/* /var/www/html  2
- Enable port : 80 on your instance

# Backend

- Go to folder cd app name
- npm install
- allowed ec2 instance public Ip on mongo db server
- npm install pm2 -g
- pm2 start npm -- start
- pm2 logs
- pm2 flush npm() // to clear logs
- pm2 list : process that are running
- pm2 stop npm (npm : name of the process)
- pm2 delete npm
- pm2 start npm --name "devTinder-Backend" -- start : custome name

modify base URL in frontend to '/api

-     frontend: http://54.206.96.91/
       Backend: http://54.206.96.91:3001

       Domain name = devtinder.com => 54.206.96.91

       frontend : devtinder.com
       backend : devtinder.com:3001(No)  =>  devtinder.com/api (we need)
       for this we need nginx: nginx proxy pass

- sudo nano /etc/nginx/sites-available/default


server_name 54.206.96.91;

- location /api/ {
  proxy_pass http://localhost:3001/;
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection 'upgrade';
  proxy_set_header Host $host;
  proxy_cache_bypass $http_upgrade;
  }

  ssh -i "devTinder-secret.pem" ubuntu@ec2-54-206-96-91.ap-southeast-2.compute.amazonaws.com




devtinderlab.info
-
-
-
-
-
-
-
-
-
-
-
-

# Adding CustopmeDomain Name   : devtinderlab.info
- Purchased Domain name from Go Daddy
- sign up on CloudFlare and add a new Domain Name
- Change the Name servers on GoDaddy and point it to cloudFlare
- Wait for some time till nameservers are updated
- Go to DNs from side bar
-
-
-
-
-
-
