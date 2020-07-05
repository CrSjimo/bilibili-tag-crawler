import axios from 'axios';

export async function getWebPage(url:string):Promise<string>{
    let res = await axios.get(url,{
        headers:{
            "Host": "www.bilibili.com",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:77.0) Gecko/20100101 Firefox/77.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Language": "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Cookie": "_uuid=9FDDF039-7631-162B-FAFA-28F582CA01A893344infoc; buvid3=D4421EC1-8C70-4730-910B-54953F134EFF40946infoc; PVID=1",
            "Upgrade-Insecure-Requests": "1",
            "TE": "Trailers",
        }
    });
    if(res.status>=300){
        throw new Error(res.statusText);
    }
    return res.data;
}