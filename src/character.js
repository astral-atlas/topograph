// @flow
import { createContract, createRequest, createResponse } from 'lk-contract';

export const getCharacter = createContract(
  'Get a specific character',
  createRequest('/character?id=3'),
  createResponse(JSON.stringify({ id: '3', name: 'Link' }))
);

export const characterContracts = {
  getCharacter,
};