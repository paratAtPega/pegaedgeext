# Pega Connector for Customer Decision Hub developed as an extension in Adobe Experience Platform (server-side)

This server-side connector captures and forwards streaming Adobe Launch data to Pega Customer Decision Hub.

This repository contains the extension/plug-in that marketers can install on their property, configure the mapping of captured digital behavior events to the expected behavioral data entities needed by Pega CDH.

## Get started

To get started:

1. Install [node.js](https://nodejs.org/).
2. Clone the repository.
3. After navigating into the project directory, install project dependencies by running `npm install`.

### Scripts

To run tests a single time, run the following command:

`npm run test`

To run tests continually while developing, run the following command:

`npm run test:watch`

To ensure your code meets our linting standards, run the following command:

`npm run lint`

To run the extension inside reactor-sandbox:

`npm run sandbox`

To create a build, run the following command:

`npm run build`

To create the extension package, run the following command:

`npm run package`
