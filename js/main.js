// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){

	
	// にょろっ
	
	$('.smoothTrigger').each(function(){ //smoothTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('smooth');// 画面内に入ったらsmoothというクラス名を追記
		}else{
		$(this).removeClass('smooth');// 画面外に出たらsmoothというクラス名を外す
		}
		});		
}

// 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function (){
		fadeAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面をスクロールをしたら動かしたい場合の記述

// ページが読み込まれたらすぐに動かしたい場合の記述
	$(window).on('load', function(){
		fadeAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまでページが読み込まれたらすぐに動かしたい場合の記述


