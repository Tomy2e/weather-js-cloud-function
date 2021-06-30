# Weather JS Cloud Function

Cloud function to retrieve the temperature for a given city.

Based on [Functions Framework](https://github.com/GoogleCloudPlatform/functions-framework-nodejs).

## Running locally

```console
npm install
npm run
```

## Building image

```console
docker build -t weather-js .
```

## Deploying in Knative

```console
kn service create weather --image tomy2e/weather-js-cloud-function
```
