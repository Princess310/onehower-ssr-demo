import request from './request';

export default {
  async getUserList(name = '') {
    const res = await request.get(`/user/getList?name=${name}`);
    const { data: { result } } = res;

    return result.list;
  },
};
