import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Typography } from 'antd';
import { useRequest } from 'umi';
import { getEvents, getView } from '@/services/services';
import UTable from '@/components/Utable';

export default (): React.ReactNode => {
  const [refreshCount, setRefreshCount] = useState(0);

  // const response = useRequest(getEvents,
  //   {
  //     formatResult: res => res,
  //   }
  // );
  // const {data} = response;
  const viewResponse = useRequest(getView,
    {
      formatResult: res => res,
    }
  );
  const {data: view} = viewResponse;

  return (
    <PageContainer>
      <Card>
        <Typography.Text strong>
          {/* {data?.[0]?.title} */}
          {JSON.stringify(view)}
        </Typography.Text>
      </Card>
      <UTable
        pageSize={50}
        rowKey="id"
        hiddenCols={["id"]}
        sorterCols={["title", "type", "description"]}
        searchCols={["title", "description"]}
        searchPlaceholder="Search for title or description"
        headerTitle={<div className="t2">Schedule</div>}
        className="event-table"
        api={getEvents}
        refreshCount={refreshCount}
      />
    </PageContainer>
  );
};
