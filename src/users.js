// @flow
import { createContract, createRequest, createResponse } from 'lk-contract';

export const getUsersContract = createContract(
  'Get all users',
  createRequest('/users'),
  createResponse(JSON.stringify([{ id: '123', name: 'luke kaalim' }, { id: '456', name: 'martin anthony '}]))
);

export const addUsersContract = createContract(
  'Add a user',
  createRequest('/users', 'POST', JSON.stringify({ name: 'luke kaalim' })),
  createResponse(JSON.stringify({ id: '123', name: 'luke kaalim' }))
);

export const getSelfContract = createContract(
  'Get the requesters information',
  createRequest('/users/self'),
  createResponse(JSON.stringify({ id: '123', name: 'luke kaalim' }))
);

export const userContracts = {
  getUsersContract,
  addUsersContract,
  getSelfContract,
};
