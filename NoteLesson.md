
# start
1/start
-npm init (name(Enter), version(Enter),...,Enter) = PackageJson
-install express : npm install expresss
-create file: index.js
	*ESM: import express from 'express';(stye same frond end : 	package.json = "type" : "module"





# index.js file 
##import express from 'express';

const app = express();

function getAllusers(req, res){
    return res.send('HelloS world')
}

function running() {
    console.log("Running on 2000")
}

app.get('/users',getAllusers)

app.listen(2000, running)

### test api call 
--- install thunder client to run api call

# Run sever Auto
-npm install -g nodemon 
(can apply other projects)
-nodemon index.js (behalf on name of your js file)

# get all element

app.get('/api/users', (req,res)=>{
    return res.json(users)
})

# get element by id

# delete data
 ## delete by using query formula


 ## delet by using paramas formula

# post
## install body-parser
 to get data from post.
 run code: npm install body-parser
 then:
 ## import bodyParser from 'body-parser' into index.
 ## app.use(bodyParser.json)
  mean get data from body and as json.
## app.post('/api/user')
## post user by validating Id. Chose one between normal post and validating post.

# create route move the user into route
## user.route.js 
 import express from 'express';
 then create constant
 const userRoute = express.router();
## app.post => uerRoute.post()
### app = userRoute
then export userRoute;
## controller to cut from route



# Middle ware
user it check data that user typing to insert 
into backend 

# validate
parseInt : checkt the number
parseFloat : check the number havinng comma
/^[A-Za-z]+$/ : check the alpha 
/^[A-Za-z\s]+$/ : check the alpha and allow space

# install mongoose
npm install mongoose 

# Express validator
to validate the value shoul be Eg. name is accepted as only letter not number.
SO you need install express validator by:
## npm install express-validator

# check schema
to collect all validators

# install asynchandler
to scope all errors without using try and catch espeacially 
to protect the database by crashing sever.
## npm install --save express-async-handler

# install morgan
to log all data which insert to database.
## npm install morgan
# fake data
use fakerjs.dev to generate fake data.
## npm install --save-dev @faker-js/faker

# install monogoose paginate 
mongoose-paginate-v2 is a pagination library having a page wrapper.
## npm install mongoose-paginate-v2
