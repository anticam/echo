HTTP Echo

To deploy the HTTP Echo service to CF using the manifest file, follow these steps:
1. Ensure you have the Cloud Foundry CLI installed and configured.
2. Login to CF dev space using:
`cf login -a <API_ENDPOINT> -u <USERNAME> -p <PASSWORD>`
or for SSO:
`cf login -v -a https://api.cf.us10-001.hana.ondemand.com --sso`
3. Navigate to the directory containing the `manifest.yml` file.  
4. Deploy the service using the command:
`cf push`
This will read the `manifest.yml` file and deploy the HTTP Echo service as specified.

