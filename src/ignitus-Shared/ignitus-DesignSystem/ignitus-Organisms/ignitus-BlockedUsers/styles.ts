import styled from '@emotion/styled';
import * as C from '../../ignitus-Atoms/colors';
import { flexibleRowDiv } from '../../shared';

export const Container = styled(flexibleRowDiv)`
  border-radius: 1rem;
  box-shadow: 0 2px 4px 0 ${C.boxShadowColor};
  background-color: ${C.White};
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
  margin-bottom: 1rem;
`;
