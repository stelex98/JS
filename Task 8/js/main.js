let dropArea = document.getElementsByClassName('drop-area');
let progressBar = document.getElementById('progress-bar');
let divImages = document.getElementsByClassName('my-images-item');
let buttonSelectImages = document.getElementsByClassName('button')[0];
let inputFile = document.getElementById('fileElem');
let showImage = document.getElementsByClassName('show-image-onclick');

let uploadProgress = [];
let dataAboutFiles = [];
let typeOfFile = ['image/jpeg', 'image/png'];

let uniqueClassName = 0;
let checkQuantityImages = 0;
let filesToDo = 0;
let filesDone = 0;

let closeSpanEvent = "spanEvent";
let spanClose = "spanElement";
let uniqueClassNameString = 'gallery';
let img = 'img';

let maxQuantityImages = true;

let formData = new FormData();

let dataF;
let files;

let textInnerSpan = document.createTextNode("\u00D7");


['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea[0].addEventListener(eventName, preventDefaults, false);
});

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea[0].addEventListener(eventName, checkBacklight, false);
});

dropArea[0].addEventListener('click', showImagesOnClick);
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

function checkBacklight(ev){
    if ((ev.type == 'dragenter') || (ev.type == 'dragover')) {
        dropArea[0].classList.add('highlight');
    } else if ((ev.type == 'dragleave') || (ev.type == 'drop')) {
        dropArea[0].classList.remove('highlight');
    }
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
    maxQuantityImages = checkQuantityImages >= 12 ? false : true;
    return maxQuantityImages;
}

function previewFile(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(file.type);
    reader.onloadend = function() {
        maxQuantityImages = checkQuantityimagesBtnDRG(checkQuantityImages);
        fileType = checkTypeOfFile(file);
        if (maxQuantityImages && fileType) {
            loadImagesInDropZone(reader);
            progressDone();
        } else  if (!maxQuantityImages){
            removeEventLestenerFromDropArea();
        }
        checkQuantityImages++;
    }
}

function checkTypeOfFile(file){
    if (file.type == typeOfFile[0] || file.type == typeOfFile[1]){
        return true;
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
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea[0].removeEventListener(eventName, checkBacklight, false);
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