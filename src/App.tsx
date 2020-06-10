import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { createStructuredSelector } from 'reselect';

import { Switch, Route } from 'react-router-dom';
import { DashboardRoutes } from './ignitus-Routes/ignitus-DashboardRoutes';
import { PublicRoutes } from './ignitus-Routes/ignitus-PublicRoutes';
import { UserInterfaceBookRoutes } from './ignitus-Routes/ignitus-UserInterfaceBookRoutes';
import { withErrorBoundary, GreyBackground } from './ignitus-Shared';
import { Overlay } from './ignitus-Shared/ignitus-DesignSystem/ignitus-Molecules/ignitus-Overlay/Components';

import './App.css';

export const Fullscreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 100;
`;

const mapStateToProps = createStructuredSelector({
  message: (state: any) => state.overlayMessage,
});

const clearOverlayMessageActionCreator = () => ({
  type: 'CLEAR_OVERLAY_MESSAGE',
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { clearMessage: clearOverlayMessageActionCreator },
    dispatch,
  );

const OverlayMessage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(({ message, clearMessage }: any) => {
  useEffect(() => {
    let timer: any;

    if (message.active) {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        clearMessage();
      }, 600);
    }

    return () => timer && clearTimeout(timer);
  }, [message.active]);

  switch (message.active) {
    case 'LOGOUT':
      return (
        <Fullscreen>
          <Overlay
            primaryText="You are now logged out."
            secondaryText="See you soon!"
          />
        </Fullscreen>
      );
    default:
      return null;
  }
});

const Root = styled.div`
  background: ${GreyBackground};
`;

export const App = withErrorBoundary(() => (
  <Root>
    <OverlayMessage />
    <Switch>
      <Route path="/dashboard" component={DashboardRoutes} />
      <Route path="/interface" component={UserInterfaceBookRoutes} />
      <Route path="/" component={PublicRoutes} />
    </Switch>
  </Root>
));
