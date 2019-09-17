// @flow
import { createContract, createRequest, createResponse } from 'lk-contract';
import { chapterContracts } from './chapters.js';
import { userContracts } from './users.js';

export const noAuthenticationContract = createContract(
  'Attempting to access an authorized endpoint without any authentication',
  createRequest('/users', 'GET', null, [['Authorization', 'Basic ' + Buffer.from('myUsername myPassword').toString('utf-8')]]),
  createResponse('Bad Request', 400)
);

export const unknownRouteContract = createContract(
  'Attempting to GET a path that doesnt exist',
  createRequest('/userz', 'GET'),
  createResponse('Not Found', 404)
);

export const contracts = {
  ...chapterContracts,
  ...userContracts,
  unknownRouteContract,
  noAuthenticationContract,
};