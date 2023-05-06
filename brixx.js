var fetcher = (function(param, callback){
  let xml;
  let opt=param;
  let cache=[];
  if(window.XMLHttpRequest){
    xml=new XMLHttpRequest();
  }else{
    xml=new ActiveXObject("Microsoft.HTTP");
  }
  //console.log(opt)
  xml.open("GET", opt, true);
  xml.onload=function(){
    let response=this.responseText
    callback("", response)
  }
  xml.send()
});

