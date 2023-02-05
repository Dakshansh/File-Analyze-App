                                                        FILE UPLOAD

This is an example of uploading a text file using the nodejs express server, processing it for extracting different parts of speech and returning it to react js frontend.
This is a very basic example of the above mentioned use case. No styling for asthetics has been concentrated on. Main purpose of this demo is to show the functionality and
focus on the logic side of it.

* File Structure has 2 folders -

* Client - Contains front end code. src of the client contains the main code. Dockerfile is to docekerize the client side of code. Package.json tell which dependencies have been used to develop client side. Components folder contains the file-upload component which is rendered when the app boots-up. When file is uploaded and submit button is clicked response modal is rendered which contains the response from the server.

* Server - Conatins backend code where all the logic is implemented. To get the parts-of-speech 'wordpos' node library have been used. Parts-of-speech is noun,verb,adjective,adverb. Basic flow of execution here is when an api is called from client - it comes to first our main file (server.js). There it finds the appropriate route handler and moves to that(routes folder) then from there it moves to controllers and then from there to services which will be used. Note main file uses config file to start the backend server.

* Docker Compose file contains the instructions and paths to docker file of our containers. With single command of docker compose we can spin up the containers of our app.
