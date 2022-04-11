let client = require('contentful').createClient({
  space: `${process.env.NEXT_CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.NEXT_CONTENTFUL_ACCESS_TOKEN}`,
});

export default client;
