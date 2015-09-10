function writeHeader(){

	$.ajax({
		url: "header.html", //パスはcommon.jsが読み込まれたHTMLファイルが基準
        
		cache: false, //キャッシュを利用するか
		async: false, //非同期で読み込むか
		success: function(html){
			document.write(html);	
		}
	});

}

function writeSlider(){

	$.ajax({
		url: "slider.html", //パスはcommon.jsが読み込まれたHTMLファイルが基準
        
		cache: false, //キャッシュを利用するか
		async: false, //非同期で読み込むか
		success: function(html){
			document.write(html);	
		}
	});

}