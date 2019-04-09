/* tslint:disable */
import express from 'express';
import { render } from '@jaredpalmer/after';
import routes from './routes';
import MyDocument from './Document';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST as any);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR as any))
  .get('/*', async (req, res) => {
    try {
      const html = await render({
        req,
        res,
        document: MyDocument,
        routes,
        assets,
        // Anything else you add here will be made available
        // within getInitialProps(ctx)
        // e.g a redux store...
        customThing: 'thing',
      });
      console.log(html)
      res.send(html);
    } catch (error) {
      console.log(error)
      res.json(error);
    }
  });

export default server;
