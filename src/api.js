import http from './http'
import urls from './urls'
export async function statisticsNotice() {
    return await http.get(urls.statisticsNotice)
}