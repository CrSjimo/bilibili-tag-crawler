import * as jsdom from 'jsdom';
import { RankedItemList } from './declarations/RankedItemNode';

export function parseRankingList(xmlStr:string){
    let dom = new jsdom.JSDOM(xmlStr).window.document;
    let _allRankItem = dom.querySelectorAll('.rank-list .rank-item a.title');
    let allRankItem:Element[] = [];
    _allRankItem.forEach((v,i)=>{allRankItem[i]=v});
	let rankedItemList:RankedItemList = allRankItem.map((item)=>{
		return {
			title: item.textContent!,
			url: item.getAttribute('href')!,
		}
	});
	return rankedItemList;
}