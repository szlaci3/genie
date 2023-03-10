import request from 'umi-request';

const SERVERIP = 'http://localhost:3000/';

export async function fakeError(params) {
  return request.get(`${SERVERIP}fake-error`, {params});
}

export async function getEvents(params) {
  return request.get(`${SERVERIP}events`, {params});
}
