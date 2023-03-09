import { useState } from 'react';
import { useRequest } from 'umi';
import { queryPlay } from '@/services/play';

export default function usePlay(params?: any) { //这个参数干吗的
    let totalWidth = 0; //表格宽度
    let tableCols = [{}]; //表头
    let tableRows = [{}]; //表格内容
    const [paramsStatus, setParamsStatus] = useState({});

    const msg = useRequest((params) => queryPlay({ ...params, ...paramsStatus }),
        {
            refreshDeps: [paramsStatus]
        }
    );

    let total = 0;
    let cols = [
        {Comment: "自自自自1", Field: "discount_price"},
        {Comment: "自自2", Field: "brand"},
        {Comment: "自自自自3", Field: "id"},
        {Comment: "自自4", Field: "log"},
        {Comment: "自自自5", Field: "market_price"},
        {Comment: "自自自自6", Field: "name"},
        {Comment: "自自自自7", Field: "sontype"},
        {Comment: "自自自自8", Field: "type"},
        // {Comment: "自自自自9", Field: "brand"},
        // {Comment: "自自自自10", Field: "discount_price"},
        // {Comment: "自自自自12", Field: "market_price"},
        // {Comment: "自自自13", Field: "name"},
        // {Comment: "自自自自14", Field: "sontype"},
        // {Comment: "自自15", Field: "type"},
    ]


    if (!msg.loading) {
        cols.forEach((val: any, idx: number) => {
            let w = val.Comment.length * 45;
            if (val.Field != "id") {

                tableCols[idx] = {
                    width: w,
                    title: val.Comment,
                    dataIndex: val.Field,
                    key: val.Field,
                    className: val.Field,
                    sorter: true,/* made string so CreateForm also accepts it (and ignores)  */
                    ellipsis: false,
                };
            }
            totalWidth = totalWidth + w;

        });
    }

    // if (!msg.loading) {


        //  msg.data.rows.forEach((val: { supply_id?: any; }, idx: number) => {

        //      tableRows[idx] = {
        //          ...val,
        //          key: val.supply_id
        //      };
        //  });

        //setTableRows(msg.data.rows);
        // tableRows = msg.data?.rows;
        // total = msg.data?.total;

    // }



    return {
        FieldTypes: {},
        oldParams: paramsStatus || [{}],
        SupplyContractColumns: tableCols || [{}],
        run: msg.run,
        totalWidth: totalWidth || 0,
        loading: msg.loading,
        setParamsStatus,
        data: msg.data,
    };
}