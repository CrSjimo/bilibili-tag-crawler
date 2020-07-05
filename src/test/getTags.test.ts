import { getWebPage } from "../getWebPage";
import { getTags } from "../getTags";

(async ()=>{
    let list = getTags(await getWebPage('https://www.bilibili.com/video/BV1PK4y1b7dt'));
    console.log(list);
})();