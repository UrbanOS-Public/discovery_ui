# discovery_ui (default branding)

Discovery UI provides default branding and navigation controls around the [react-discovery-ui](https://github.com/smartcitiesdata/react_discovery_ui) component. This allows for the base components to be brand agnostic.

A guide on how to use an instance of discovery_ui is available in the [smartcitiesdata wiki](<https://github.com/UrbanOS-Public/smartcitiesdata/wiki/Data-Discovery-(DiscoveryUI)-User-Manual>)

## How to use

### Install Dependencies

`npm install`

### Run Unit Tests

`npm run test`

### Run Unit Tests in Watch Mode

`npm run test-watch`

Unit tests will output warnings relate to accessibility. Configurations
are found in `test-start-point.js`

### Lint the Code

`npm run lint`

### Configuration

Runtime configurations are stored in config/config.js.

- DISC_API_URL
  This application is designed to be used with [discovery-api](https://github.com/smartcitiesdata/discovery_api) as the backend. Set this value to the URL of the local `discovery-api` endpoint.

- GTM_ID
  Set this value to the Google Tag Manager ID to enable analytics.

- DISC_UI_URL
  The domain that the site will be hosted on

### Start the UI Locally

- Node version `v14.17.4`
- NPM version `v9.2.0`

`npm run start`

You can view the UI in your web browser at `http://localhost:9001`

### Build Docker Image

`docker build . -t <image name>:<tag>`

### Running the Docker Image

`docker run -d --rm -p <port>:80 <image name>:<tag>`

# Pull latest react_discovery_ui
to squash bugs and update deps
