import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Typography } from 'antd';
import { useRequest } from 'umi';
import { getEvents } from '@/services/services';

export default (): React.ReactNode => {
  const response = useRequest(getEvents,
    {
      formatResult: res => res,
    }
  );
  const {data} = response;

  return (
    <PageContainer>
      <Card>
        <Typography.Text strong>
          {data?.[0]?.title}
        </Typography.Text>
      </Card>
    </PageContainer>
  );
};
