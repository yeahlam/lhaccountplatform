import http from './http'
import urls from './urls'

export async function statisticsNotice() {
    return await http.get(urls.statisticsNotice)
}

export async function notices(roleId) {
    return await http.get(urls.notices, {
        params: {
            roleTypeId: roleId
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

export async function getQuestionType(pid) {
    return await http.get(urls.getQuestionType, {
        params: {
            pid:pid
        }
    })
}

export async function submitQuestion(body) {
    return await http.post(urls.submitQuestion, body)
}

export async function exchangeStatus(body) {
    return await http.post(urls.exchangeStatus, body)
}

export async function questionDeal(body) {
    return await http.post(urls.questionDeal, body)
}

export async function dealConfirm(body) {
    return await http.post(urls.dealConfirm, body)
}
//楼层检索
export async function buildings(buildName) {
    return await http.get(urls.buildings, {
        params: {
            buildName:buildName
        }
    })
}
export async function login() {
    return await http.get(urls.login)
}
//待办任务
export async function noticesDeal(status) {
    return await http.get(urls.noticesDeal, {
        params: {
            status: status
        }
    })
}
//案件查询
export async function noticesAll() {
    return await http.get(urls.noticesAll)
}
//申请审核
export async function auditStatus(body) {
    return await http.post(urls.auditStatus, body)
}//汇总统计
export async function statisticsPersion() {
    return await http.get(urls.statisticsPersion)
}