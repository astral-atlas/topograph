// @flow
import { createContract, createRequest, createResponse } from 'lk-contract';

export const getUsersContract = createContract(
  'GET /users',
  createRequest('/users'),
  createResponse(JSON.stringify([{ id: '123', name: 'luke kaalim' }, { id: '456', name: 'martin anthony '}]))
);

export const noAuthenticationContract = createContract(
  'Attempting to access an authorized endpoint without any authentication',
  createRequest('/users', 'GET', null, [['Authorization', 'Basic ' + Buffer.from('myUsername myPassword').toString('utf-8')]]),
  createResponse('Bad Request', 400)
);

export const unknownRouteContract = createContract(
  'Attempting to GET a path that doesnt exist',
  createRequest('/userz', 'GET'),
  createResponse('Not Found', 404)
)