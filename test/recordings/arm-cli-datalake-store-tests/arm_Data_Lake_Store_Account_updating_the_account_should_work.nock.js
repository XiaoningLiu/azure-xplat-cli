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
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls6884?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls6884.azuredatalakestore.net\",\"creationTime\":\"2016-03-02T01:38:28.0047008Z\",\"lastModifiedTime\":\"2016-03-02T01:38:28.0047008Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls6884\",\"name\":\"xplattestadls6884\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '561',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '0503246f-1ce7-4e68-94bc-618006b61cf3',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '9718e1b7-51c6-4321-bddf-7ee284186141',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T013904Z:9718e1b7-51c6-4321-bddf-7ee284186141',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 02 Mar 2016 01:39:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls6884?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls6884.azuredatalakestore.net\",\"creationTime\":\"2016-03-02T01:38:28.0047008Z\",\"lastModifiedTime\":\"2016-03-02T01:38:28.0047008Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls6884\",\"name\":\"xplattestadls6884\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '561',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '0503246f-1ce7-4e68-94bc-618006b61cf3',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '9718e1b7-51c6-4321-bddf-7ee284186141',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T013904Z:9718e1b7-51c6-4321-bddf-7ee284186141',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 02 Mar 2016 01:39:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls6884?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls6884.azuredatalakestore.net\",\"creationTime\":\"2016-03-02T01:38:28.0047008Z\",\"lastModifiedTime\":\"2016-03-02T01:38:28.0047008Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls6884\",\"name\":\"xplattestadls6884\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '561',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '39bd6a83-e451-41c7-9524-dadf2136d0c6',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'cf48e6d2-1c6a-4690-a7dd-21eb96286bb1',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T013905Z:cf48e6d2-1c6a-4690-a7dd-21eb96286bb1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 02 Mar 2016 01:39:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls6884?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls6884.azuredatalakestore.net\",\"creationTime\":\"2016-03-02T01:38:28.0047008Z\",\"lastModifiedTime\":\"2016-03-02T01:38:28.0047008Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls6884\",\"name\":\"xplattestadls6884\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '561',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '39bd6a83-e451-41c7-9524-dadf2136d0c6',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'cf48e6d2-1c6a-4690-a7dd-21eb96286bb1',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T013905Z:cf48e6d2-1c6a-4690-a7dd-21eb96286bb1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 02 Mar 2016 01:39:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls6884?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls6884.azuredatalakestore.net\",\"creationTime\":\"2016-03-02T01:38:28.0047008Z\",\"lastModifiedTime\":\"2016-03-02T01:39:05.7496779Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls6884\",\"name\":\"xplattestadls6884\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '585',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '36359d4b-253f-4183-8af3-b60c6ce93bb9',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5c5842b2-3fc3-4459-9f8c-94533edbbb43',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T013906Z:5c5842b2-3fc3-4459-9f8c-94533edbbb43',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 02 Mar 2016 01:39:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls6884?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls6884.azuredatalakestore.net\",\"creationTime\":\"2016-03-02T01:38:28.0047008Z\",\"lastModifiedTime\":\"2016-03-02T01:39:05.7496779Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls6884\",\"name\":\"xplattestadls6884\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '585',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '36359d4b-253f-4183-8af3-b60c6ce93bb9',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5c5842b2-3fc3-4459-9f8c-94533edbbb43',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T013906Z:5c5842b2-3fc3-4459-9f8c-94533edbbb43',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 02 Mar 2016 01:39:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls6884?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls6884.azuredatalakestore.net\",\"creationTime\":\"2016-03-02T01:38:28.0047008Z\",\"lastModifiedTime\":\"2016-03-02T01:39:05.7496779Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls6884\",\"name\":\"xplattestadls6884\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '585',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'e96c2cea-53af-41d8-9211-0bd35db8c314',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '31b02f3a-3db2-48c0-a931-d7cbd83cb1c8',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T013907Z:31b02f3a-3db2-48c0-a931-d7cbd83cb1c8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 02 Mar 2016 01:39:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls6884?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls6884.azuredatalakestore.net\",\"creationTime\":\"2016-03-02T01:38:28.0047008Z\",\"lastModifiedTime\":\"2016-03-02T01:39:05.7496779Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls6884\",\"name\":\"xplattestadls6884\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '585',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'e96c2cea-53af-41d8-9211-0bd35db8c314',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '31b02f3a-3db2-48c0-a931-d7cbd83cb1c8',
  'x-ms-routing-request-id': 'CENTRALUS:20160302T013907Z:31b02f3a-3db2-48c0-a931-d7cbd83cb1c8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 02 Mar 2016 01:39:07 GMT',
  connection: 'close' });
 return result; }]];