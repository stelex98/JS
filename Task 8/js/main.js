let dropArea = document.getElementsByClassName('drop-area');
let filesDone = 0;
let filesToDo = 0;
let progressBar = document.getElementById('progress-bar');
let uploadProgress = [];
let dataAboutFiles = [];
let uniqueClassName = 0;
let checkQuantityImages = 0;
let divImages = document.getElementsByClassName('my-images-item');
let uniqueClassNameString = 'gallery';
let img = 'img';
let formData = new FormData();
let dataF;
let files;
let maxQuantityImages = true;
let buttonSelectImages = document.getElementsByClassName('button')[0];
let inputFile = document.getElementById('fileElem');
let showImage = document.getElementsByClassName('show-image-onclick');
let closeSpanEvent = "spanEvent";
let spanClose = "spanElement";
let textInnerSpan = document.createTextNode("\u00D7");
let typeOfFile = ['image/jpeg', 'image/png'];

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea[0].addEventListener(eventName, preventDefaults, false);
});

['dragenter', 'dragover'].forEach(eventName => {
    dropArea[0].addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropArea[0].addEventListener(eventName, unhighlight, false);
});


dropArea[0].addEventListener('click', ev => {
    showImagesOnClick(ev);
});

dropArea[0].addEventListener('drop', handleDrop, false);

function showImagesOnClick(ev) {
    if (ev.srcElement.className == 'img1') {
        showImageOnClick = document.createElement('img');
        spanClose = document.createElement('SPAN');
        spanClose.appendChild(textInnerSpan);
        spanClose.className = 'closeSpan';
        showImageOnClick.src = ev.srcElement.currentSrc;
        showImage[0].appendChild(spanClose);
        showImage[0].appendChild(showImageOnClick);

        closeSpanEvent = document.getElementsByClassName('closeSpan');
        closeSpanEvent[0].addEventListener('click', function() {
            showImage[0].style.display = 'none';
            showImage[0].innerHTML = '';
        });
        showImage[0].style.display = 'block';
    }
}

function preventDefaults(ev) {
    ev.preventDefault();
    ev.stopPropagation();
}

function highlight(ev) {
    dropArea[0].classList.add('highlight');
}

function unhighlight(ev) {
    dropArea[0].classList.remove('highlight');
}

function handleDrop(e) { // получаем данные о файле
    dataF = e.dataTransfer;
    files = dataF.files;
    handleFiles(files);
}

function handleFiles(files) {
    files = [...files];
    initializeProgress(files.length);
    files.forEach(uploadFile);
    files.forEach(previewFile);
    dataAboutFiles.push(files);
}

function uploadFile(file) {
    formData.append('file', file);
}

function checkQuantityimagesBtnDRG(checkQuantityImages) {
    if (checkQuantityImages >= 12) { // максимальное кол-во изображений
        maxQuantityImages = false;
        return maxQuantityImages;
    } else {
        maxQuantityImages = true;
        return maxQuantityImages;
    }
}

function previewFile(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(file.type);
    reader.onloadend = function() {
        maxQuantityImages = checkQuantityimagesBtnDRG(checkQuantityImages);
        if (maxQuantityImages && (file.type == typeOfFile[0] || file.type == typeOfFile[1])) {
            loadImagesInDropZone(reader);
            progressDone();
        } else {
            removeEventLestenerFromDropArea();
            return 0;
        }
        checkQuantityImages++;
    }
}

function loadImagesInDropZone(reader) {
    uniqueClassNameString = String(uniqueClassName);
    img = document.createElement('img');
    divImg = document.createElement('div');
    divImg.className = "gallery" + uniqueClassNameString;
    img.className = 'img1';
    img.src = reader.result;
    uniqueClassName++;
    divImages[0].appendChild(divImg);
    document.getElementsByClassName('gallery' + uniqueClassNameString)[0].appendChild(img);
}

function removeEventLestenerFromDropArea() {
    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea[0].removeEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropArea[0].removeEventListener(eventName, unhighlight, false);
    });

    inputFile.type = '';
    buttonSelectImages.className = 'disabled';
    progressBar.value = 100;
}

function initializeProgress(numfiles) {
    progressBar.value = 0;
    filesDone = 0;
    filesToDo = numfiles;
}

function progressDone() {
    filesDone++;
    progressBar.value = filesDone / filesToDo * 100;
}