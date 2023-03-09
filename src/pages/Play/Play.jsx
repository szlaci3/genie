import React, { useState, useRef } from 'react';
import { useModel } from 'umi';
import styles from './index.less';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';
import ProTable, {  ActionType } from '@ant-design/pro-table';

import { TablePaginationConfig, TableCurrentDataSource, SorterResult } from 'antd/es/table/interface';

const { Title } = Typography;

const Play = (props) => {
    const actionRef = useRef();
    const { SupplyContractColumns, data, oldParams, setParamsStatus, createContract, editContract, totalWidth, FieldTypes, loading} = useModel('usePlay');


    console.log("props.match.params.id:")
    console.log(props.match.params.id)

    return (
        <>
            <div className={styles.container}>
                <ProTable
                    actionRef={actionRef}
                    scroll={{
                        x: totalWidth,
                        /* 64 header + 24 table margin + 57 pagination + 38 table header + 8 */
                        y: "calc(100vh - 233px)", // 263
                    }}
                    loading={loading}
                    rowKey="contract_id"
                    columns={SupplyContractColumns}
                    dataSource={data}
                    headerTitle={<Title level={5}>What is it</Title>}
                    search={false}
                    pagination={{
                        total: data.length,
                        defaultPageSize: 20,
                        showSizeChanger: false,
                        position: ['bottomLeft'],
                        showTotal: () => (
                            <div>
                                共<span className="pagination-total">{data.length}</span>条
                            </div>
                        ),
                    }} />
            </div>
        </>
    );
}

export default Play;


