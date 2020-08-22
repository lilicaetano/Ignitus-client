import React from 'react';
import { Heading2, BlockedUsers } from '../../../../../ignitus-Shared';
import { Interface } from '../../../../styles';
import { flexibleColDiv } from '../../../../../ignitus-Shared/ignitus-DesignSystem/shared';

export const BlockedUser = flexibleColDiv;

export const interfaceBlockedUsers: React.FC = () => (
  <Interface>
    <Heading2>Blocked Users</Heading2>
    <hr />
    <div style={{ width: '50rem' }}>
      <BlockedUsers />
    </div>
  </Interface>
);

/*

    <BlockHeading
        primaryText="Users you've blocked"
        secondaryText="You have blocked these Users. You will not see their posts in your Dashboard. Blocked Users cannot follow you or view your profile while logged in to Ignitus."
      />


            <UserSearch secondaryText="You can select contacts you wish to not have access to your account here:" />


  */
