import * as actions from './Constants'

export function receiveMe(me) {
  return {
    type: actions.RECEIVE_ME,
    me
  }
}

export function getPeople(people) {
	return {
		type: actions.GET_PEOPLE,
		people
	}
}

export function getCount(charDict){
	return {
		type: actions.GET_COUNT,
		charDict
	}
}
