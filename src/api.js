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

export async function getQuestionType() {
    return await http.get(urls.getQuestionType)
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
export async function buildings() {
    return await http.get(urls.buildings)
}
export async function login() {
    return await http.get(urls.login)
}