import { request } from 'umi';


export async function queryPlay(params: any) {
    return request('http://121.41.73.20/staffing-market/shop/goods_info/getGoodsInfo', {
        method: 'put',
        data: {...params}
    });
}

