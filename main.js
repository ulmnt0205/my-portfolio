const myFunc = function(){

  //Classを追加する要素を取得
  const target = document.getElementsByClassName('fade');
  //Classを追加する位置を指定（ビューポート内）
  const position = Math.floor(window.innerHeight * .75); //左記はビューポート内の上から75%の位置を指定

  //要素の数だけループする
  for (let i = 0; i < target.length; i++) {
      
      //要素の上部座標を取得する（小数点切り捨て）
      let offsetTop = Math.floor(target[i].getBoundingClientRect().top);

      //要素の上部座標がpositionの位置を通過したら
      if (offsetTop < position) {
          //要素にClassを追加する
          target[i].classList.add('fadein');
      }
  }
}
//スクロールイベントリスナーに登録
window.addEventListener('scroll', myFunc, false);

// トップに戻るボタン表示制御
window.addEventListener("scroll", function() {
    const toTop = document.querySelector(".to-top");
    if (window.scrollY > 300) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});