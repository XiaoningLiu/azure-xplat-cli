// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '53d9063d-87ae-4ea8-be90-3686c3b8669f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '6e606ece-3a5a-4674-a654-d6b02bc5a51b',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testaba22463.azuredatalakeanalytics.net\",\"creationTime\":\"2016-01-27T23:38:52.1409021Z\",\"lastModifiedTime\":\"2016-01-27T23:38:52.1409021Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba12048/providers/Microsoft.DataLakeAnalytics/accounts/testaba22463\",\"name\":\"testaba22463\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testaba15365.azuredatalakeanalytics.net\",\"creationTime\":\"2016-01-27T23:28:35.9650496Z\",\"lastModifiedTime\":\"2016-01-27T23:28:35.9650496Z\"},\"location\":\"East US 2\",\"tags\":{\"testkey\":\"testvalue\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba18569/providers/Microsoft.DataLakeAnalytics/accounts/testaba15365\",\"name\":\"testaba15365\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1804.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-02T02:10:04.186481Z\",\"lastModifiedTime\":\"2016-03-02T02:10:04.186481Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1804\",\"name\":\"xplattestadla1804\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8630.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-02T02:10:37.14435Z\",\"lastModifiedTime\":\"2016-03-02T02:11:17.7963187Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8630\",\"name\":\"xplattestadla8630\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1985',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '294948b9-ca0a-4874-9c23-1e9bd2d60703',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '982ad0f4-0524-4068-ace6-85bb156d8e7c',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T021120Z:982ad0f4-0524-4068-ace6-85bb156d8e7c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 02 Mar 2016 02:11:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testaba22463.azuredatalakeanalytics.net\",\"creationTime\":\"2016-01-27T23:38:52.1409021Z\",\"lastModifiedTime\":\"2016-01-27T23:38:52.1409021Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba12048/providers/Microsoft.DataLakeAnalytics/accounts/testaba22463\",\"name\":\"testaba22463\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testaba15365.azuredatalakeanalytics.net\",\"creationTime\":\"2016-01-27T23:28:35.9650496Z\",\"lastModifiedTime\":\"2016-01-27T23:28:35.9650496Z\"},\"location\":\"East US 2\",\"tags\":{\"testkey\":\"testvalue\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba18569/providers/Microsoft.DataLakeAnalytics/accounts/testaba15365\",\"name\":\"testaba15365\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1804.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-02T02:10:04.186481Z\",\"lastModifiedTime\":\"2016-03-02T02:10:04.186481Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1804\",\"name\":\"xplattestadla1804\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8630.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-02T02:10:37.14435Z\",\"lastModifiedTime\":\"2016-03-02T02:11:17.7963187Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8630\",\"name\":\"xplattestadla8630\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1985',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '294948b9-ca0a-4874-9c23-1e9bd2d60703',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '982ad0f4-0524-4068-ace6-85bb156d8e7c',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T021120Z:982ad0f4-0524-4068-ace6-85bb156d8e7c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 02 Mar 2016 02:11:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8630/DataLakeStoreAccounts/xplattestadls4351?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8630/dataLakeStoreAccounts/xplattestadls4351\",\"name\":\"xplattestadls4351\",\"type\":\"Microsoft.DataLakeAnalytics/accounts/dataLakeStoreAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '342',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'f8c62a89-fa82-4baf-8d23-4650e7b78ddb',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '37dcb4e4-203f-4933-96d4-67d294b7675d',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T021121Z:37dcb4e4-203f-4933-96d4-67d294b7675d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 02 Mar 2016 02:11:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8630/DataLakeStoreAccounts/xplattestadls4351?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8630/dataLakeStoreAccounts/xplattestadls4351\",\"name\":\"xplattestadls4351\",\"type\":\"Microsoft.DataLakeAnalytics/accounts/dataLakeStoreAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '342',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'f8c62a89-fa82-4baf-8d23-4650e7b78ddb',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '37dcb4e4-203f-4933-96d4-67d294b7675d',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T021121Z:37dcb4e4-203f-4933-96d4-67d294b7675d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 02 Mar 2016 02:11:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testaba22463.azuredatalakeanalytics.net\",\"creationTime\":\"2016-01-27T23:38:52.1409021Z\",\"lastModifiedTime\":\"2016-01-27T23:38:52.1409021Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba12048/providers/Microsoft.DataLakeAnalytics/accounts/testaba22463\",\"name\":\"testaba22463\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testaba15365.azuredatalakeanalytics.net\",\"creationTime\":\"2016-01-27T23:28:35.9650496Z\",\"lastModifiedTime\":\"2016-01-27T23:28:35.9650496Z\"},\"location\":\"East US 2\",\"tags\":{\"testkey\":\"testvalue\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba18569/providers/Microsoft.DataLakeAnalytics/accounts/testaba15365\",\"name\":\"testaba15365\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1804.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-02T02:10:04.186481Z\",\"lastModifiedTime\":\"2016-03-02T02:10:04.186481Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1804\",\"name\":\"xplattestadla1804\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8630.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-02T02:10:37.14435Z\",\"lastModifiedTime\":\"2016-03-02T02:11:17.7963187Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8630\",\"name\":\"xplattestadla8630\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1985',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '121e2996-0f25-427e-81db-982e22a68259',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'fd2ecbb8-bd57-4325-91da-4071a454be37',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T021122Z:fd2ecbb8-bd57-4325-91da-4071a454be37',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 02 Mar 2016 02:11:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testaba22463.azuredatalakeanalytics.net\",\"creationTime\":\"2016-01-27T23:38:52.1409021Z\",\"lastModifiedTime\":\"2016-01-27T23:38:52.1409021Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba12048/providers/Microsoft.DataLakeAnalytics/accounts/testaba22463\",\"name\":\"testaba22463\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testaba15365.azuredatalakeanalytics.net\",\"creationTime\":\"2016-01-27T23:28:35.9650496Z\",\"lastModifiedTime\":\"2016-01-27T23:28:35.9650496Z\"},\"location\":\"East US 2\",\"tags\":{\"testkey\":\"testvalue\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba18569/providers/Microsoft.DataLakeAnalytics/accounts/testaba15365\",\"name\":\"testaba15365\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1804.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-02T02:10:04.186481Z\",\"lastModifiedTime\":\"2016-03-02T02:10:04.186481Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1804\",\"name\":\"xplattestadla1804\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8630.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-02T02:10:37.14435Z\",\"lastModifiedTime\":\"2016-03-02T02:11:17.7963187Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8630\",\"name\":\"xplattestadla8630\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1985',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '121e2996-0f25-427e-81db-982e22a68259',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'fd2ecbb8-bd57-4325-91da-4071a454be37',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T021122Z:fd2ecbb8-bd57-4325-91da-4071a454be37',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 02 Mar 2016 02:11:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8630?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls2086\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2086\"},{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls4351\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8630.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-02T02:10:37.14435Z\",\"lastModifiedTime\":\"2016-03-02T02:11:17.7963187Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8630\",\"name\":\"xplattestadla8630\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '846',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'feff10db-63aa-41ab-8be3-4fd50d17a252',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '7037745e-6e9d-4704-a992-e0d21b46e3fe',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T021122Z:7037745e-6e9d-4704-a992-e0d21b46e3fe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 02 Mar 2016 02:11:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8630?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls2086\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2086\"},{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls4351\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8630.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-02T02:10:37.14435Z\",\"lastModifiedTime\":\"2016-03-02T02:11:17.7963187Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8630\",\"name\":\"xplattestadla8630\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '846',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'feff10db-63aa-41ab-8be3-4fd50d17a252',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '7037745e-6e9d-4704-a992-e0d21b46e3fe',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T021122Z:7037745e-6e9d-4704-a992-e0d21b46e3fe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 02 Mar 2016 02:11:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testaba22463.azuredatalakeanalytics.net\",\"creationTime\":\"2016-01-27T23:38:52.1409021Z\",\"lastModifiedTime\":\"2016-01-27T23:38:52.1409021Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba12048/providers/Microsoft.DataLakeAnalytics/accounts/testaba22463\",\"name\":\"testaba22463\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testaba15365.azuredatalakeanalytics.net\",\"creationTime\":\"2016-01-27T23:28:35.9650496Z\",\"lastModifiedTime\":\"2016-01-27T23:28:35.9650496Z\"},\"location\":\"East US 2\",\"tags\":{\"testkey\":\"testvalue\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba18569/providers/Microsoft.DataLakeAnalytics/accounts/testaba15365\",\"name\":\"testaba15365\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1804.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-02T02:10:04.186481Z\",\"lastModifiedTime\":\"2016-03-02T02:10:04.186481Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1804\",\"name\":\"xplattestadla1804\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8630.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-02T02:10:37.14435Z\",\"lastModifiedTime\":\"2016-03-02T02:11:17.7963187Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8630\",\"name\":\"xplattestadla8630\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1985',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '1f9009f9-3c90-42e6-9c88-39ad10103307',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '2a2d8fe1-c802-4f18-a74b-5da9dc59b29a',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T021123Z:2a2d8fe1-c802-4f18-a74b-5da9dc59b29a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 02 Mar 2016 02:11:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testaba22463.azuredatalakeanalytics.net\",\"creationTime\":\"2016-01-27T23:38:52.1409021Z\",\"lastModifiedTime\":\"2016-01-27T23:38:52.1409021Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba12048/providers/Microsoft.DataLakeAnalytics/accounts/testaba22463\",\"name\":\"testaba22463\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testaba15365.azuredatalakeanalytics.net\",\"creationTime\":\"2016-01-27T23:28:35.9650496Z\",\"lastModifiedTime\":\"2016-01-27T23:28:35.9650496Z\"},\"location\":\"East US 2\",\"tags\":{\"testkey\":\"testvalue\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba18569/providers/Microsoft.DataLakeAnalytics/accounts/testaba15365\",\"name\":\"testaba15365\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1804.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-02T02:10:04.186481Z\",\"lastModifiedTime\":\"2016-03-02T02:10:04.186481Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1804\",\"name\":\"xplattestadla1804\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8630.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-02T02:10:37.14435Z\",\"lastModifiedTime\":\"2016-03-02T02:11:17.7963187Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8630\",\"name\":\"xplattestadla8630\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1985',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '1f9009f9-3c90-42e6-9c88-39ad10103307',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '2a2d8fe1-c802-4f18-a74b-5da9dc59b29a',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T021123Z:2a2d8fe1-c802-4f18-a74b-5da9dc59b29a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 02 Mar 2016 02:11:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8630/DataLakeStoreAccounts/xplattestadls4351?api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '1a0845cd-1f54-48cf-88e4-caa7c0fcce5b',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '9272d7c3-85e8-4ae1-8b14-331b5fceb424',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T021124Z:9272d7c3-85e8-4ae1-8b14-331b5fceb424',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 02 Mar 2016 02:11:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8630/DataLakeStoreAccounts/xplattestadls4351?api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '1a0845cd-1f54-48cf-88e4-caa7c0fcce5b',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '9272d7c3-85e8-4ae1-8b14-331b5fceb424',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T021124Z:9272d7c3-85e8-4ae1-8b14-331b5fceb424',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 02 Mar 2016 02:11:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testaba22463.azuredatalakeanalytics.net\",\"creationTime\":\"2016-01-27T23:38:52.1409021Z\",\"lastModifiedTime\":\"2016-01-27T23:38:52.1409021Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba12048/providers/Microsoft.DataLakeAnalytics/accounts/testaba22463\",\"name\":\"testaba22463\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testaba15365.azuredatalakeanalytics.net\",\"creationTime\":\"2016-01-27T23:28:35.9650496Z\",\"lastModifiedTime\":\"2016-01-27T23:28:35.9650496Z\"},\"location\":\"East US 2\",\"tags\":{\"testkey\":\"testvalue\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba18569/providers/Microsoft.DataLakeAnalytics/accounts/testaba15365\",\"name\":\"testaba15365\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1804.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-02T02:10:04.186481Z\",\"lastModifiedTime\":\"2016-03-02T02:10:04.186481Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1804\",\"name\":\"xplattestadla1804\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8630.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-02T02:10:37.14435Z\",\"lastModifiedTime\":\"2016-03-02T02:11:17.7963187Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8630\",\"name\":\"xplattestadla8630\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1985',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '45506d08-b81e-4cb5-aa2d-b8766c7486eb',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '8f14faa1-8304-4bd3-9d9c-8943a52e2c86',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T021125Z:8f14faa1-8304-4bd3-9d9c-8943a52e2c86',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 02 Mar 2016 02:11:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testaba22463.azuredatalakeanalytics.net\",\"creationTime\":\"2016-01-27T23:38:52.1409021Z\",\"lastModifiedTime\":\"2016-01-27T23:38:52.1409021Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba12048/providers/Microsoft.DataLakeAnalytics/accounts/testaba22463\",\"name\":\"testaba22463\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testaba15365.azuredatalakeanalytics.net\",\"creationTime\":\"2016-01-27T23:28:35.9650496Z\",\"lastModifiedTime\":\"2016-01-27T23:28:35.9650496Z\"},\"location\":\"East US 2\",\"tags\":{\"testkey\":\"testvalue\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba18569/providers/Microsoft.DataLakeAnalytics/accounts/testaba15365\",\"name\":\"testaba15365\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1804.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-02T02:10:04.186481Z\",\"lastModifiedTime\":\"2016-03-02T02:10:04.186481Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1804\",\"name\":\"xplattestadla1804\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8630.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-02T02:10:37.14435Z\",\"lastModifiedTime\":\"2016-03-02T02:11:17.7963187Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8630\",\"name\":\"xplattestadla8630\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1985',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '45506d08-b81e-4cb5-aa2d-b8766c7486eb',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '8f14faa1-8304-4bd3-9d9c-8943a52e2c86',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T021125Z:8f14faa1-8304-4bd3-9d9c-8943a52e2c86',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 02 Mar 2016 02:11:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8630?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls2086\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2086\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8630.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-02T02:10:37.14435Z\",\"lastModifiedTime\":\"2016-03-02T02:11:17.7963187Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8630\",\"name\":\"xplattestadla8630\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '768',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '6a702f2b-9ce1-4821-9ed7-143781531037',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'b0c9ec95-779f-485f-b402-85db02c80b3f',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T021126Z:b0c9ec95-779f-485f-b402-85db02c80b3f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 02 Mar 2016 02:11:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8630?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls2086\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2086\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8630.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-02T02:10:37.14435Z\",\"lastModifiedTime\":\"2016-03-02T02:11:17.7963187Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8630\",\"name\":\"xplattestadla8630\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '768',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '6a702f2b-9ce1-4821-9ed7-143781531037',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'b0c9ec95-779f-485f-b402-85db02c80b3f',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T021126Z:b0c9ec95-779f-485f-b402-85db02c80b3f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 02 Mar 2016 02:11:25 GMT',
  connection: 'close' });
 return result; }]];