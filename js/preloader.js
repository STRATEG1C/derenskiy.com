var preloader = document.getElementById("preloader"),
	images = document.images,
	totalImages = images.length,
	loadImages = 0;
	LoadDisplay = {
		counter: document.getElementById("preloader__counter"),
		line: document.getElementById("preloader__line")
	};

for (var i = 0; i < totalImages; i++) {
	cloneImage = new Image();
	cloneImage.src = images[i];
	cloneImage.onload = imageLoad;
	cloneImage.onerror = imageLoad;
}

function imageLoad() {
	loadImages++;

	LoadDisplay.counter.innerHTML = (((100 / totalImages) * loadImages) << 0) + '%';
	LoadDisplay.line.style.width = (((100 / totalImages) * loadImages) << 0) + '%';
}

document.body.onload = function() {
	setTimeout(function() {
		preloader.classList.add("done");
	}, 1000);
}