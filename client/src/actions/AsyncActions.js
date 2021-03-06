import * as actions from './Actions'

export const creds = { credentials: 'same-origin' };

export function fetchMe() {
  return dispatch => {
    return fetch('/api/me.json', creds).
      then(response => response.json()).
      then(me => dispatch(actions.receiveMe(me)));
  }
}

export function getPeople() {
	return dispatch => {
		return fetch('/api/people').
			then(response => response.json()).
			then(people => dispatch(actions.getPeople(people)));
	}
}

export function getCount() {
	return dispatch => {
		return fetch('api/count').
			then(response => response.json()).
			then(count => dispatch(actions.getCount(charDict)));
	}
}
