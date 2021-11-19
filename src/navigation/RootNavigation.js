import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function dispatch(action) {
  navigationRef.current?.dispatch(action);
}

export function reset(params) {
  navigationRef.current?.reset(params);
}
