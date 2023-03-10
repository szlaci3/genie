import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { useIntl, useRequest } from 'umi';
import { getEvents } from '@/services/services';

export default (): React.ReactNode => {
  const intl = useIntl();
  
  const response = useRequest(getEvents,
    {
      formatResult: res => res,
    }
  );
  const {data} = response;

  return (
    <PageContainer>
      <Card>
          <Alert
            message={intl.formatMessage({
              id: 'pages.welcome.alertMessage',
              defaultMessage: '更快更强的重型组件，已经发布。',
            })}
            type="success"
            showIcon
            banner
            style={{
              margin: -12,
              marginBottom: 24,
            }}
          />
        <Typography.Text strong>
          {data?.[0]?.title}
        </Typography.Text>
      </Card>
    </PageContainer>
  );
};
