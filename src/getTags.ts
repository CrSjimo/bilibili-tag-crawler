import * as jsdom from 'jsdom';

export function getTags(xmlStr:string){
    let dom = new jsdom.JSDOM(xmlStr).window.document;
    let _allTagsItem = dom.querySelectorAll('.tag-area .tag a.tag-link');
    let allTags:string[] = [];
    _allTagsItem.forEach((v,i)=>{
        allTags[i]=v.textContent!;
    });
    return allTags;
}