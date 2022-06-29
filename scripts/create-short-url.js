function CopyShortURL() {
    var shortenedLink = document.getElementById("shortened-link");
    shortenedLink.select();
    shortenedLink.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("URL copied!");
}

function CreateShortURL() {
    var originalUrl = document.getElementById("original-url").value;
var customPath = document.getElementById("custom-path").value;
    if (document.getElementById("original-url").value.length == 0) {
        document.getElementById("error-text").innerHTML = "Please enter a URL to shorten.";
    }
    else if (document.getElementById("original-url").value.includes(" ") || document.getElementById("custom-path").value.includes(" ")) {
        document.getElementById("error-text").innerHTML = "URLs can not have spaces in them.";
    }
    else {
        var data = "{\"allowDuplicates\":false,\"domain\":\"l.lekr.site\",\"originalURL\":\"" + originalUrl + "\",\"path\":\"" +  customPath + "\"}";

        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
            
            var generatedLink = this.responseText.split('"');
            
            document.getElementById("shortened-link").value = generatedLink[57];

            if(this.responseText.includes("Link already exists")) {
                document.getElementById("error-text").innerHTML = "This shortened link already exists! Please use something else or leave empty to randomize.";
                return;
            }
            if(generatedLink[33] == "public") {
                document.getElementById("error-text").innerHTML = "This combination of URL and custom short URL already exists!"
            }
        }
        });

        xhr.open("POST", "https://api.short.cm/links/public");
        xhr.setRequestHeader("accept", "application/json");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("authorization", "0hszljKvdK9p9ifXFbZEuAplkNO72K4E");

        xhr.send(data);
        document.getElementById("original-url").value = "";
        document.getElementById("custom-path").value = "";
    }
}