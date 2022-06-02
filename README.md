# password-generator-api
This api is used to suggest strong passwords in the registration forms


### ABOUT

This api was created for study purposes, with it you can suggest a strong password for users with variable size
### To view a live example of how to consume the api, go to:
![image](https://user-images.githubusercontent.com/77467410/171579142-4fe7b3ba-7cd4-49df-b448-b84ceda6daf1.png)


[DEMO LIVE](https://api-password-generator.herokuapp.com/password/15)

### STARTING THE PROJECT
```
1. `npm install` or `npm -i`
2. in the project folder `node app` or `nodemon app`

```
### Route 
` GET /password` 
### required parameter 
`GET /passwordLenght`  

NOTE - following good security practices, the minimum password length is 8!
 

### Example of how to generate 15-character passwords
` GET /password/15`

### RESPONSE
``` 
   {
    "password": ";:55e#4V0?BXM#B"
   }

```
# HTTP CODE
1. 200 - OK




# the default port is like 3000, when deploying change it to 80


