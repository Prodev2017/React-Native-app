
import React from 'react';
import ColorViewContainer from './main/MainView';
import SignUpView from './signUp/SignUpView';

/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */
export default function AppRouter(props) {
  const key = props.scene.route.key;

  if (key === 'Counter') {
      return <ColorView />;
  }

  if (key.indexOf('Color') === 0) {
    const index = props.scenes.indexOf(props.scene);
    return (
      <ColorViewContainer
        index={index}
      />
    );
  }

    if (key === 'SignUp') {
        return <SignUpView />;
    }

  throw new Error('Unknown navigation key: ' + key);
}
