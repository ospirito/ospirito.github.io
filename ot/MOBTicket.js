(function(){document.querySelectorAll("input[name='platform']").forEach(m=>{m.addEventListener("change",showHideQuestions)})}())

function showHideQuestions() {
    let radio = document.querySelector("input[name='platform']:checked")
    switch (radio.id) {
      case "sdk_ios":
        document.querySelectorAll(".ios").forEach(j => j.classList.remove("hidden"))
        document.querySelectorAll(".android").forEach(j => j.classList.add("hidden"))
        break;
      case "sdk_android":
        document.querySelectorAll(".android").forEach(j => j.classList.remove("hidden"))
        document.querySelectorAll(".ios").forEach(j => j.classList.add("hidden"))
        break;
    }
  }
  
  
  function generateMarkdown() {
    var output = ["||Question||Answer||"]
    document.querySelectorAll(".question").forEach(e => {
      try {
        var q = e.querySelector("label").innerHTML
        var a = ""
        if (e.classList.contains("radio")) {
          a = e.querySelector("input:checked+label").innerText
        } else if (e.classList.contains("text")) {
          a = e.querySelector("input").value
          if (a == "") {
            return
          }
        }
  
        output.push("|" + q + "|" + a + "|")
      } catch (j) {
  
      }
  
    })
  
    document.querySelector("#output").value = output.join("\n")
  }
  
