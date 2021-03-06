// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-23a4-e65f717fd101\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":10000,\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '392',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-23a4-e65f717fd101',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'e6502936-d8bc-411b-8fa0-7fdcf9b66ed6',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'b6af6a84-79d7-4517-9dae-3e39c59b6353',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104853Z:b6af6a84-79d7-4517-9dae-3e39c59b6353',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:48:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-23a4-e65f717fd101\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":10000,\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '392',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-23a4-e65f717fd101',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'e6502936-d8bc-411b-8fa0-7fdcf9b66ed6',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'b6af6a84-79d7-4517-9dae-3e39c59b6353',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104853Z:b6af6a84-79d7-4517-9dae-3e39c59b6353',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:48:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/AAAA/set-aaaa?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/AAAA\\/set-aaaa\",\"name\":\"set-aaaa\",\"type\":\"Microsoft.Network\\/dnszones\\/AAAA\",\"etag\":\"c57d874b-d568-4eb6-a7d6-991fd99a3577\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-aaaa.example1.com.\",\"TTL\":3600,\"AAAARecords\":[]}}", { 'cache-control': 'private',
  'content-length': '417',
  'content-type': 'application/json; charset=utf-8',
  etag: 'c57d874b-d568-4eb6-a7d6-991fd99a3577',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'ec238c8a-86ba-45fe-a526-62af88747164',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'a11c5f47-2791-4b5c-a326-db90945e7e20',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104854Z:a11c5f47-2791-4b5c-a326-db90945e7e20',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:48:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/AAAA/set-aaaa?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/AAAA\\/set-aaaa\",\"name\":\"set-aaaa\",\"type\":\"Microsoft.Network\\/dnszones\\/AAAA\",\"etag\":\"c57d874b-d568-4eb6-a7d6-991fd99a3577\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-aaaa.example1.com.\",\"TTL\":3600,\"AAAARecords\":[]}}", { 'cache-control': 'private',
  'content-length': '417',
  'content-type': 'application/json; charset=utf-8',
  etag: 'c57d874b-d568-4eb6-a7d6-991fd99a3577',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'ec238c8a-86ba-45fe-a526-62af88747164',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'a11c5f47-2791-4b5c-a326-db90945e7e20',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104854Z:a11c5f47-2791-4b5c-a326-db90945e7e20',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:48:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/AAAA/set-aaaa?api-version=2015-05-04-preview', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/AAAA\\/set-aaaa\",\"name\":\"set-aaaa\",\"type\":\"Microsoft.Network\\/dnszones\\/AAAA\",\"etag\":\"4b4fd998-615e-4892-9c32-ad6c9fee2606\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-aaaa.example1.com.\",\"TTL\":3600,\"AAAARecords\":[{\"ipv6Address\":\"2001:cafe:130::100\"}]}}", { 'cache-control': 'private',
  'content-length': '453',
  'content-type': 'application/json; charset=utf-8',
  etag: '4b4fd998-615e-4892-9c32-ad6c9fee2606',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '1b6dd1f4-31e5-4bc0-8d0a-9e9fcd7da195',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '6e2d2d9c-ba1f-4054-83ca-c6344c3ab9c9',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104855Z:6e2d2d9c-ba1f-4054-83ca-c6344c3ab9c9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:48:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/AAAA/set-aaaa?api-version=2015-05-04-preview', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/AAAA\\/set-aaaa\",\"name\":\"set-aaaa\",\"type\":\"Microsoft.Network\\/dnszones\\/AAAA\",\"etag\":\"4b4fd998-615e-4892-9c32-ad6c9fee2606\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-aaaa.example1.com.\",\"TTL\":3600,\"AAAARecords\":[{\"ipv6Address\":\"2001:cafe:130::100\"}]}}", { 'cache-control': 'private',
  'content-length': '453',
  'content-type': 'application/json; charset=utf-8',
  etag: '4b4fd998-615e-4892-9c32-ad6c9fee2606',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '1b6dd1f4-31e5-4bc0-8d0a-9e9fcd7da195',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '6e2d2d9c-ba1f-4054-83ca-c6344c3ab9c9',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104855Z:6e2d2d9c-ba1f-4054-83ca-c6344c3ab9c9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:48:54 GMT',
  connection: 'close' });
 return result; }]];