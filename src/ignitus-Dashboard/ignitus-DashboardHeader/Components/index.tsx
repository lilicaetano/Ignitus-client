/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { withRouter } from 'react-router-dom';
import { withErrorBoundary, AppIcon, useToggle } from '../../../ignitus-Shared';
import * as N from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-Navigation/styles';

export const DashBoardNavigation: React.FC = withErrorBoundary(
  withRouter(({ logUserOut, history }: any) => {
    const [isExpanded, toogleIsExpanded] = useToggle(false);

    const logout = () => {
      logUserOut();
      localStorage.clear();
      history.push('/');
    };

    const userInformation: string | null = localStorage.getItem('data');
    let userEmail: string = '';
    let userType: string = '';

    if (localStorage.getItem('data') && typeof userInformation === 'string') {
      userEmail = JSON.parse(userInformation).email;
      userType = JSON.parse(userInformation).userType;
    }

    return (
      <N.Navigation>
        <N.NavigationBarBrand to="/#">
          <N.Logo name={AppIcon.IgnitusLogo} />
        </N.NavigationBarBrand>

        <N.NavigationLinks isExpanded={isExpanded}>
          <N.NavigationLinkItem>
            <N.NavigationLink to="/#">Home</N.NavigationLink>
          </N.NavigationLinkItem>

          <N.NavigationLinkItem>
            {userType === 'student' && (
              <N.StyledIcon name={AppIcon.StudentIcon} />
            )}
            {userType === 'professor' && (
              <N.StyledIcon name={AppIcon.ProfessorIcon} />
            )}
          </N.NavigationLinkItem>

          <N.NavigationLinkItem>
            <N.NavigationLink to="#">{userEmail}</N.NavigationLink>
          </N.NavigationLinkItem>

          <N.NavigationLinkItem onClick={logout}>
            <N.NavigationLink to="#">Logout</N.NavigationLink>
          </N.NavigationLinkItem>
        </N.NavigationLinks>

        <N.Burger
          onClick={toogleIsExpanded}
          name={AppIcon.KeyBoardArrowRight}
          isExpanded={isExpanded}
        />
      </N.Navigation>
    );
  }),
);
