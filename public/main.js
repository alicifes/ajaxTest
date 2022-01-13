let countNumber = 1

requestCss.onclick=()=>{
    let request = new XMLHttpRequest
    request.open('GET','/style.css')
    request.onreadystatechange=()=>{
        if(request.readyState==4&&request.status==200){
            let newCss = document.createElement('style')
            newCss.innerText=request.response
            let head = document.getElementsByTagName('head')
            head[0].append(newCss)
        }
    }
    request.send()
}
requestJs.onclick=()=>{
    let request = new XMLHttpRequest
    request.open('GET','/2.js')
    request.onreadystatechange=()=>{
        if(request.readyState==4&&request.status==200){
            let newJs = document.createElement('script')
            newJs.innerText=request.response
            document.body.append(newJs)
        }
    }
    request.send()
}
requestHTML.onclick=()=>{
    let request = new XMLHttpRequest
    request.open('GET','/3.html')
    request.onreadystatechange=()=>{
        if(request.readyState==4&&request.status==200){
            let newHTML = document.createElement('div')
            newHTML.innerHTML=request.response
            document.body.appendChild(newHTML)
        }
    }
    request.send()
}
requestXML.onclick=()=>{
    let request = new XMLHttpRequest
    request.open('GET','/4.xml')
    request.onreadystatechange=()=>{
        if(request.readyState==4&&request.status==200){
            let responseInner = request.responseXML
            let end = responseInner.getElementsByTagName("warning")[0].innerHTML.trim()
            alert(`XML获取成功，获取内容为${end}`)
            console.log(end);
        }
    }
    request.send()
}
requestJSON.onclick=()=>{
    let request = new XMLHttpRequest
    request.open('GET','/5.json')
    request.onreadystatechange=()=>{
        if(request.readyState==4&&request.status==200){
            let resJSON = JSON.parse(request.response)
            console.log(resJSON);
            alert(`您的用户名为${resJSON.name},密码为${resJSON.passwords}`)
        }
    }
    request.send()
}
nextPage.onclick=()=>{
    if(countNumber>=3){
        alert(`数据总共只有3页，该次请求会返回第一页的数据`)
        countNumber=0
    }
    countNumber +=1
    let request = new XMLHttpRequest
    request.open('GET',`/page${countNumber}`)
    request.onreadystatechange=()=>{
        if(request.readyState==4&&request.status==200){
            let resJSON = JSON.parse(request.response)
            console.log(resJSON);
            const result =resJSON.map(item=>`<li>${item.id}</li>`).join('')
            xxx.innerHTML=`${result}`
            // string = xxx.replace('{{page1}}', `<ul id="xxx">${result}</ul>`)
        }
    }
    request.send()
}