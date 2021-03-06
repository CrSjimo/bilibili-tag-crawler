import { parseRankingList } from "./parseRankingList";
import { getWebPage } from "./getWebPage";
import { getTags } from "./getTags";
import * as nodejieba from 'nodejieba';

export async function getAllTagsProcess(){
    let rankedList = parseRankingList(await getWebPage('https://www.bilibili.com/ranking/all/0/0/30'));
    console.warn('Got ranked list.');
    let tagsMap:{[p:string]:number} = {};
    let counter = 0;
    for(let f of rankedList.map((item)=>{
        return (async()=>{
            let tags = getTags(await getWebPage(item.url));
            for(let tag of tags){
                for(let word of nodejieba.extract(tag,3)){
                    if(!tagsMap[word.word]){
                        tagsMap[word.word]=word.weight;
                    }else{
                        tagsMap[word.word]+=word.weight;
                    }
                }
            }
            console.warn(`#${++counter} Got ${tags.length} tag(s) from "${item.title}".`);
        });
    })){
        await f();
    }
    return tagsMap;
}