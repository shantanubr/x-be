// oauthHelper.js
const crypto = require('crypto');
const OAuth = require('oauth-1.0a');

const oauth = new OAuth({
  consumer: {
    key: process.env.OAUTH_CONSUMER_API_KEY,
    secret: process.env.OAUTH_CONSUMER_API_SECRET,
  },
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
    return crypto.createHmac('sha1', key).update(base_string).digest('base64');
  },
});

const token = {
  key: process.env.ACCESS_TOKEN,
  secret: process.env.ACCESS_TOKEN_SECRET,
};

function generateOAuthHeaders(url, method, data) {
  const requestData = {
    url,
    method,
    data,
  };

  return oauth.toHeader(oauth.authorize(requestData, token));
}

module.exports = {
  generateOAuthHeaders,
};
