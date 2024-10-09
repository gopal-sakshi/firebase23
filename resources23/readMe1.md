# HOW TO USE

simply run the angular application -----> ng serve --port 4343
ensure notifications are allowed in your browser
then check for console.logs ----> you'll see a token printed 
    from this line ------------------> fire-message23.service.ts:27 

copy this token... open postman... backEndQueries... misc... sendNotification
    edit the body object with this token
    just for timepass ---> copy paste Authorization headers too (bcoz, it only worked after I re-entered the same authorization token)
    you can see Authorization in this link

https://console.firebase.google.com/u/2/project/gopal61288-01/settings/cloudmessaging/web:ZjdjNTIwN2UtNTc2Yi00NzdmLWE5M2QtZDE4Y2YzNDAwZmMz


it seems only for push notifications of fcm, we need these
- firebase-messaging-sw.js
- manifest.json
- add these in angualr.json assets array

But if you want to use firebase as database (not push notification)
- then, it seems, we do not need these...
=============================================================================

https://fcm.googleapis.com/fcm/send
it is deprecated

now use
https://fcm.googleapis.com/v1/projects/gopal61288-01/messages:send



everything changed
endpoint, auth token, payload
need to set up laterrrrrrrrrrrrrrrrrrr
=============================================================================