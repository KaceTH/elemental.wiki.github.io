const edit_mode = true;
var editable_texts;
var savedSelection;

function edit() {
    //if (edit_mode !== true) return;

    editable_texts = document.getElementsByClassName("editable-text");
    for (var i = 0; i < editable_texts.length; i++) {
        var element = editable_texts[i];
        element.contentEditable="true"
        element.addEventListener("click", saveSelection);
    }
    document.querySelector(".text-link").addEventListener("click", insertLink)
    document.querySelector(".single-text-styles").addEventListener("click", insertBold)
}

function saveSelection() {
    var selection = window.getSelection();
    if (selection.rangeCount > 0) {
        var range = selection.getRangeAt(0);
        savedSelection = range.cloneRange();
        console.log("Selection saved");
    }
}

function restoreSelection() {
    if (savedSelection) {
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(savedSelection);
        console.log("Selection restored");
    }
}

function insertLink() {
    restoreSelection()

    if (savedSelection !== "") {
        var linkURL = prompt("링크 URL을 입력하세요:");
        if (linkURL !== null && linkURL !== "") {
          var linkElement = document.createElement("a");
          linkElement.href = linkURL;
          linkElement.textContent = savedSelection;
    
          var selectionRange = window.getSelection().getRangeAt(0);
          selectionRange.deleteContents();
          selectionRange.insertNode(linkElement);
        }
    }  
}
function insertBold() {
    restoreSelection()
  
    if (savedSelection !== "") {
      var boldElement = document.createElement("b");
      boldElement.textContent = savedSelection;
  
      var selectionRange = window.getSelection().getRangeAt(0);
      selectionRange.deleteContents();
      selectionRange.insertNode(boldElement);
    }
};

function stopEdit() {
    saveBtn.addEventListener("click", function() {
        var content = textEditor.innerHTML;
        // 저장할 동작 수행 (예: 서버로 전송)
        console.log("텍스트 저장: " + content);
    });
}

function sendData() {
    var xhr = new XMLHttpRequest();
    var url = "https://localhost:5500"; // 서버 URL
  
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("데이터 전송 완료");
      }
    };
  
    var jsonData = JSON.stringify(data);
    xhr.send(jsonData);
}

window.onload = edit;