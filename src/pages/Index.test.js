import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Index from './Index';
import { useRequest } from 'umi';

jest.mock('umi', () => ({ useModel: jest.fn(), useRequest: jest.fn() }));

type Response = {
    code: number,
    data: {title: string}[],
    msg: string
}

beforeEach(() => {
    // useModel.mockReturnValue({ initialState: { currentUser: { vip: '1' } } });
    const response: Response = {
        code: 1,
        data: [{title: 'OtherTitle'}],
        msg: 'success',
    };
    // contractData.mockReturnValue(response);
    useRequest.mockReturnValue(response);
});

afterEach(cleanup);

describe("Index page", () => {
    it('Renders Index', () => {
        const { getByText }: { getByText: function } = render(<Index/>);
        screen.debug();
        expect(getByText(/OtherTitle/i)).toBeInTheDocument();
    })
});
