var xhr = new XMLHttpRequest();

//readyState
//0 - 你已經產生一個XMLHttpRequest，但是還沒有連結你要撈的資料


//2 偵測到你有用send
//3 loading

//4 - 你撈到資料了，數據已經完全接收到了


//格式、要得去的網址、同步與非同步
xhr.open('get','https://hexschool.github.io/ajaxHomework/data.json',true);
//格式: get (讀取資料)、post (傳送資料到伺服器)

//第三個參數'true'，true 非同步，不會等資料傳回來，就讓程式繼續往下跑，等到回傳才會自動回傳
//第三個參數'false'，它會等資料傳回來，才會讓程式碼繼續往下跑
    //空的資料
xhr.send(null);

//console.log(xhr.responseText);


xhr.onload = function(){
    console.log(xhr.responseText);
    var str = JSON.parse(xhr.responseText);
    document.querySelector('.message').textContent = str[0].name;

};