import {Dispatcher} from 'flux';

let flux =  new Dispatcher();

export function register(callback){
	flux.register(callback);
}

export function dispatch(action){
	flux.dispatch(action);
}
