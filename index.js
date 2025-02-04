// let str = "programming";
// let newstr = str.split("").sort();
// let newarr = [];
// let newArrforsingle = [];

import axios from "axios";
let baseurl = import.meta.env.VITE_BASE_URL;
// for (let i = 0; i < newstr.length; i++) {
//   if (newstr[i] == newstr[i + 1]) {
//     newarr.push(newstr[i]);
//   } else if (newarr.includes(newstr[i])) {
//     newarr.push(newstr[i]);
//   } else {
//     newArrforsingle.push(newstr[i]);
//   }
// }
// let result = [];
// let lastresult = result.concat([...newArrforsingle, ...newarr]).join("");
// console.log(lastresult);
export const myAxios = axios.create({ baseURL: baseurl });
