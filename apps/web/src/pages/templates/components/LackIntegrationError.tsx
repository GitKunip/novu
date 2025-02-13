import React from 'react';
import styled from '@emotion/styled';
import { Text } from '../../../design-system';
import { DoubleArrowRight } from '../../../design-system/icons/arrows/CircleArrowRight';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes.enum';

export function LackIntegrationError({ channelType, text }: { channelType: string; text?: string }) {
  const navigate = useNavigate();

  return (
    <>
      <WarningMessage>
        <Text>
          {text
            ? text
            : `Looks like you haven’t configured your ${channelType} provider yet, this channel will be disabled until you configure it.`}
        </Text>
        <DoubleArrowRight onClick={() => navigate(ROUTES.INTEGRATIONS)} />
      </WarningMessage>
    </>
  );
}

const WarningMessage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 40px;
  color: #e54545;

  background: rgba(230, 69, 69, 0.15);
  border-radius: 7px;
`;
