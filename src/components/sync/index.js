// import lodash from "lodash-es";
import {
    isArray
} from "lodash-es";
import item from "./sync.css";
import help from "../common/help.js";
console.log("async引用", help.version);
const sync = function () {
    console.log("sync");
    fetch("/api/test")
        .then(response => response.json())
        .then(data => {
            console.log("fetch结果", data.message);
        })
    setTimeout(function () {
        document.getElementById("app").innerHTML = `<h1 class="${item.test}">Hello Yideng Webpack</h1></h1>`;
    }, 2000);

}
const isArrayFun = function (args) {
    // console.log(lodash.isArray(args));
    console.log(isArray(args));
}
export {
    sync,
    isArrayFun
}