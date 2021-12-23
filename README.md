# wad21exam2

## Project setup
```
npm install
```

### Compiles for development
```
nodemon server

Note: If you did not install ``nodemon'', you can use

node server 
```

# Setup:

You need to [import](https://docs.github.com/en/github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer)   this [repository](https://github.com/M-Gharib/WebAppDev21EXAM2.git)  to your GitHub account

**Note:** you have to be logged in to your GitHub account to do the following steps

- In the first field "Your old repository’s clone URL" enter URL of this repository https://github.com/M-Gharib/WebAppDev21EXAM2.git
- In the "Your new repository details", give the repo a name, and make it **Private**
- Press on "begin import", it should take a few seconds
- Add me as a collaborator to your new repository (inviting collaborators)
- My email and username on GitHub are: mohamad.gharib@ut.ee and M-Gharib respectively

**Do not forget to push your changes, when you are done.**

**Do not make any changes (e.g., commits) to your repo after the end of the exam.**




# Tasks:

1. Add a snippet to specify that you are using ejs as a view engine. **[1 point]**

2. Create a middleware that write to the console "a request has arrived" for each request arriving to the server. **[1 point]**

3. Modify the destinations.ejs view to display all destination objects in the destinations array. **[4 point]**

4. Destinations.ejs should show each distention  as a row (e.g., From Tartu | To Tallinn | Time: 02:15  | Distance: 180 | Price: 12 | tickets: 7). The price should be represented as bold. **[2 point]**

5. Modify destinations.ejs so that the background color of the ``tickets'' is green if number of tickets > 5. Otherwise, it should be red. **[3 point]**

6. Create a new view (call it fromTartu.ejs), which should only show the trips departing from Tartu. **[5 point]**

 **Note:** you need to create a route to the fromTartu.ejs view (e.g., app.get(..)), and fromTartu.ejs  should fetch the destinations it is showing from the same destinations array.

7. All your views should contain a navigation bar, which you need to create as a partial **[2 point]**

8. The title (\<head> \<title> title \</title> \</head>) of each of the pages should be passed as a variable through the route **[2 point]**
