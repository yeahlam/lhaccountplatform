import http from './http'
import urls from './urls'

export async function statisticsNotice() {
    return await http.get(urls.statisticsNotice)
}

export async function notices(roleId) {
    return await http.get(urls.notices, {
        params: {
            roleTypeId:roleId
        }
    })
}
export async function houseNoticeDetail(problemNumber) {
    return await http.get(urls.houseNoticeDetail, {
        params: {
            problemNumber
        }
    })
}