# nodejs-full-rest-api-crud

#hello guys this is a full rest nodejs api 
#to use this api follow thes steps
# 1_ go to https://nodejs.org/en/download/ and install node based on your operating system
# 2_ after that install mongodb so go a head and install it from hear https://docs.mongodb.com/manual/installation/
# choose your installation method based on OS

# 3_ copy project in your local machine 
# go to inside of project folder mean us ====> run cmd or somthing like that |cd nodejs-full-rest-api-crud |

# 4_ npm install 
# 5_ npm start 
# 6_ install postman to test api https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop/related?hl=en

# testing api by postmant

# 7_ GET  : localhost:4000/api/all  then send press key
# 8_ GET  : localhost:4000/api/5fef3b8ee73108058c828f23  then send press key
# 9_ POST   : localhost:4000/api/add  select body==>row==>JSON  after that make json object for example

 {
  "userName": "somthing@vvv.com",
   "password": "123456",
   "fullName": "some body",
   "mobile":"0000000000"
 }

 then press send key
 
# 10_ PUT  : localhost:4000/api/update  
{
        "_id": "5fef530faafa1c2bf841abd6",
        "userName": "somthing you like",
        "password": "somthing you like",
        "fullName": "somthing you like" ,
        "mobile":"0000000000"
 }
 
# 7_ DELETE  : localhost:4000/api/delete/5fef530faafa1c2bf841abd6 



