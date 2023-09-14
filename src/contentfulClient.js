// contentfulClient.js
import { createClient } from 'contentful';

// Existing client for global content
const contentfulClient = createClient({
  space: 'sptabgpmw74k',
  accessToken: '22UdPdIoZD4xo0Tmc9ZWI8FtbBBgxIGue3KTC2v9b9g',
  host: 'preview.contentful.com', // this specifies we are using the Preview API
});

// New client for website-specific content
export const specificContentfulClient = createClient({
  space: 'rl833je7xi1q',
  accessToken: 'kAzlX6xPqg5ElxlbyXvYAnh5-3ZCwgoMw6-KEMDK1_Q',
  host: 'preview.contentful.com', // this specifies we are using the Preview API
});

export default contentfulClient;
