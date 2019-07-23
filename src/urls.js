export function isDev() {
    return process.env.NODE_ENV === "development"
}

function wxchoose() {
    if (isDev()) {
        return `wx2`
    }else {
        return `wx`
    }
}
let wx= wxchoose()

export default {
    user: `/${wx}/basic-info/user`,
    roles: `/${wx}/basic-info/roles`,
    statisticsNotice: `/${wx}/basic-info/statistics-notice`,
    notices: `/${wx}/basic-info/notices`,
    houseNoticeDetail: `/${wx}/basic-info/house-notice-detail`,
    getQuestionType: `/${wx}/basic-info/get-question-type`,
    submitQuestion: `/${wx}/operate/submit-question`,
    upLoadpicture: `/${wx}/upload/picture`,
    exchangeStatus: `/${wx}/operate/exchange-status`,
    questionDeal: `/${wx}/operate/question-deal`,
    dealConfirm: `/${wx}/operate/question-deal-confirm`,
    buildings: `/${wx}/basic-info/buildings`,
}