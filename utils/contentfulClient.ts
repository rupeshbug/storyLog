let client = require('contentful').createClient({
  space: `${process.env.NEXT_CONTENTFUL_SPACE_ID || 'fzvx2wvui6oj'}`,
  accessToken: `${
    process.env.NEXT_CONTENTFUL_ACCESS_TOKEN ||
    'pbAALt0pQPaYcHfzKLDqRIQg3jFsnVKoru6T4teA4fM'
  }`,
});

export default client;
