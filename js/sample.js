function alertMessage() {
  alert('30を超えています')
}
// 任意のhtml要素を探すことができるquerySelector()
const countupButton = document.querySelector('.countup');
// イベントの設定にはaddEventListener(イベント名,関数名)
countupButton.addEventListener("click", function(){
  const counter = document.querySelector('.counter');
// 要素のテキストの変更textContent
// 文字列から数値型に変更parseInt()
  counter.textContent =parseInt(counter.textContent) + 1;
  const str = "10をこえています";
  const str2 = "20をこえています"; 
  if ( counter.textContent ==10){
    counter.textContent = str;
  }

  if(counter.textContent ==20){
    counter.textContent = str2;
    // counter.textContent = alertMessage();
  }
  if(counter.textContent ==30){
    // counter.textContent = str2;
    counter.textContent = alertMessage();
  }
});
