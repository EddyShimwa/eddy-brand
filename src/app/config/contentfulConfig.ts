import { createClient } from 'contentful';


const SPACE_ID = 'o084pmzyb0gw';
const ACCESS_TOKEN = 'Q61MGusjsEYhCRdSjsNfvK6h6YBn-j-1YrJY183nUT0';

export const client = createClient({
  space: SPACE_ID,    
  accessToken: ACCESS_TOKEN,
});
