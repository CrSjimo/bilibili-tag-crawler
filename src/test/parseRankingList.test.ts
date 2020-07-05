import { getWebPage } from "../getWebPage";
import { parseRankingList } from "../parseRankingList";

(async ()=>{
    let list = parseRankingList(await getWebPage('https://www.bilibili.com/ranking/all/0/0/30'))
    console.log(list);
})();