## Twitter Client Node Backend

This backend application is built on NodeJS. The node version used for this project is `v21.4.0`. The need for this minimal backend is because you can't simply call twitter's OpenAPIs directly without getting the [CORS Error](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors). 

This NodeJS project effectively takes in the **tweet content** from the Twitter Client Frontend, and hits twitter's OpenAPIs. 

I've built my Twitter Client Frontend in React. The code for that can be found [here](https://github.com/shantanubr/x-fe). You are free to use any client that suits your needs. 

Here are a few **environmental variables** that you need to put it in your `.env` file and also on the platform you're hosting on (such as [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)). 

In order to get all these credentials, you must have a **developer account at Twitter**. 

    OAUTH_CONSUMER_API_KEY=<your-api-key>
    OAUTH_CONSUMER_API_SECRET=<your-api-secret>
    ACCESS_TOKEN=<your-access-token>
    ACCESS_TOKEN_SECRET=<your-access-token-secret>
    SECRET_CODE_HIGHEST_SECURITY=<your-unique-password>


- The secret code acts as a password to this frontend application of yours to make sure that it's just you who is able to get in. 


### Run Locally
Install the node_modules
```
npm install
```

Run the project
```
node server.js
```

### Test using Postman
Here's the cURL request you can test via postman:
```
curl --location 'http://localhost:3001/twitter-api/tweets' \
--header 'Content-Type: application/json' \
--data '{
    "text": "",
    "secretCode": ""
}'
```

#

MIT License


Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
