onload = function() {
	var canvas = document.getElementById('cvs');
	var ctx = canvas.getContext('2d');
	var left = document.getElementById("leftPenguin");
	var center = document.getElementById("centerPenguin");
	var right = document.getElementById("rightPenguin");
	var poor = document.getElementById("poorPenguin");
	var btn = document.getElementById("genImage");
	draw();

	left.addEventListener("keyup", function() {
		ctx.clearRect(24, 31, 100, 175);
		renderingVerticalOneLine(left.value, 100, 70, 7, "black");
	});

	center.addEventListener("keyup", function() {
		ctx.clearRect(319, 32, 77, 140);
		renderingVerticalOneLine(center.value, 374, 50, 7, "black");
	});

	right.addEventListener("keyup", function() {
		ctx.clearRect(456, 47, 76, 217);
		renderingVerticalOneLine(right.value, 511, 65, 10, "black");
	});

	poor.addEventListener("keyup", function() {
		ctx.clearRect(132, 266, 64, 124);
		renderingVerticalOneLine(poor.value, 175, 284, 6, "black");
	});

	btn.addEventListener("click", function() {
		var exportImage = canvas.toDataURL();
		document.getElementById("exportedImage").src = exportImage;
	});

};

function draw() {
	var canvas = document.getElementById('cvs');
	var ctx = canvas.getContext('2d');
	var img = new Image();
	img.src = "BafFnxCCAAAznfs.png";
	img.onload = function() {
		ctx.drawImage(img, 0, 0);
	}
}

function renderingVerticalOneLine(text, x, y, lineMax) {
	var canvas = document.getElementById('cvs');
	var ctx = canvas.getContext('2d');
	ctx.font = "20px 'メイリオ'";
	fontSize = 20;
	var tmpFontHight = 0;
	var tmpFontWidth = 0;

	var i = 0;
	while (text[i]) {
		switch (text[i]) {
		case "ー": //Ugh! 
			ctx.fillText("｜", x - tmpFontWidth + 6, y + tmpFontHight);
			break;
		case "！": 
			ctx.fillText("！", x - tmpFontWidth, y + tmpFontHight + 3);
			break;
		case "。":
			ctx.fillText("。", x - tmpFontWidth + 10, y + tmpFontHight);
			break;
		case "、":
			ctx.fillText("、", x - tmpFontWidth + 10, y + tmpFontHight);
			break;
		default:
			ctx.fillText(text[i], x - tmpFontWidth, y + tmpFontHight);
		}

		tmpFontHight += fontSize;
		i++;
		if (i != 0 && i % lineMax == 0) {
			tmpFontHight = 0;
			tmpFontWidth += fontSize;
		}
	}
}
