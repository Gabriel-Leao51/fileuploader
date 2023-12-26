const filePickerElem = document.getElementById("image");
const imgPreviewElem = document.getElementById("image-preview");

showPreview = () => {
  const files = filePickerElem.files;
  if (!files || files.length === 0) {
    imgPreviewElem.style.display = "none";
    return;
  }

  const pickedFile = files[0];

  imgPreviewElem.src = URL.createObjectURL(pickedFile);
  imgPreviewElem.style.display = "block";
};

filePickerElem.addEventListener("change", showPreview);
