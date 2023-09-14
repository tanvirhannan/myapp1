// contentfulClient.js
import { createClient } from 'contentful';

const contentfulClient = createClient({
  space: 'sptabgpmw74k',
  accessToken: '22UdPdIoZD4xo0Tmc9ZWI8FtbBBgxIGue3KTC2v9b9g',
  host: 'preview.contentful.com', // this specifies we are using the Preview API
});

export default contentfulClient;
