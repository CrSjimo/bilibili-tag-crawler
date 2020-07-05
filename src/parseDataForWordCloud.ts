export function parseDataForWordCloud(tagsMap:{[p:string]:number}){
    let str = '';
    for(let p in tagsMap){
        str+=`${tagsMap[p]} ${p}\n`;
    }
    return str;
}