import  axios from "axios";
const RestApi = {
    list:[
        {controller: "Todos",
        call: "init",
        path: "/api/todos",
        method: "get"
        }
    ],
    apiPrefix: "https://57b1924b46b57d1100a3c3f8.mockapi.io"
}

export default (function (restApi) {
    const apiPrefix=restApi.apiPrefix;
   return restApi.list.map(value=>Object.assign({},{[value.controller]:
         //  {[value.call]:(value, apiPrefix)=> (apiPrefix+value.path)}
           Object.assign({},{[value.call]: (value, apiPrefix)=>axios[value.method](apiPrefix+value.path)})
       }));
})(RestApi);