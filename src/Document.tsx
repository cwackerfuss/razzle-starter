import React from 'react';
import { AfterRoot, AfterData } from '@jaredpalmer/after';

class Document extends React.Component {
  static async getInitialProps({ assets, data, renderPage }: any) {
    const page = await renderPage();
    return { assets, data, ...page };
  }

  render() {
    const { assets, data }: any = this.props;

    return (
      <html>
        <head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />
          <title>Welcome to the Afterparty</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {assets.client.css && (
            <link rel="stylesheet" href={assets.client.css} />
          )}
        </head>
        <body>
          <AfterRoot />
          <AfterData data={data} />
          <script
            type="text/javascript"
            src={assets.client.js}
            defer
            crossOrigin="anonymous"
          />
        </body>
      </html>
    );
  }
}

export default Document;