import axios from 'axios'
//返回值：promise对象
export default function ajax(url,data={},type='GET'){
   return new Promise(function (resolve,reject){
     //执行异步ajax请求
        let promise
        if(type==='GET'){
          //准备url query参数数据
          let dataStr=''  //数据拼接的字符串
          Object.keys(data).forEach(key=>{
            dataStr+=key +'=' +data[key]+'&'
          })
          if(dataStr!==''){
            dataStr = dataStr.substring(0.dataStr.lastIndexOf('&'))
            url=url+'?'+dataStr
          }
          
          promise.axios.get(url)//发送get请求
        } else {
          
          promise=axios.post(url,data)//发送post请求
        }
        
        promise.then(function(response){//成功调用resolve()
           resolve(response.data)
        }).catch(function(error){//失败调用reject()
          reject(error)
        })
        
     
     
   })

}