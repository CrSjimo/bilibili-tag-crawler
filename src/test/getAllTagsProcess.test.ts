import { getAllTagsProcess } from "../getAllTagsProcess"
import { parseDataForWordCloud } from "../parseDataForWordCloud";
import * as fs from 'fs';

(async()=>{
    fs.writeFileSync('./a.txt','');
    fs.writeFileSync('./a.txt',parseDataForWordCloud(await getAllTagsProcess()));
})();