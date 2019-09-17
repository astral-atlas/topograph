// @flow
import { createContract, createRequest, createResponse } from 'lk-contract';

export const getChapersContract = createContract(
  'Get all chapters',
  createRequest('/chapters'),
  createResponse(JSON.stringify([{ id: '123', name: 'the lost mine', type: 'sablethorn' }]))
);

export const getChapersIdNamesContract = createContract(
  'Get all chapter names and ids',
  createRequest('/chapters/short'),
  createResponse(JSON.stringify([{ id: '123', name: 'the lost mine' }]))
);

export const getSingleChaperContract = createContract(
  'Get a chapter in particular',
  createRequest('/chapters?id=123'),
  createResponse(JSON.stringify({ id: '123', name: 'the lost mine' }))
);

export const getChapterEvents = createContract(
  'Get events from a chapter in particular',
  createRequest('/chapters/events?chapterId=123'),
  createResponse(JSON.stringify([{ id: '0', chapterId: '123' }, { id: '1', chapterId: '123' }]))
);

export const chapterContracts = {
  getChapersContract,
  getChapersIdNamesContract,
  getSingleChaperContract,
  getChapterEvents
};