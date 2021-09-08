(function(){document.querySelectorAll("input[name='platform']").forEach(m=>{m.addEventListener("change",showHideQuestions)})}())

function showHideQuestions() {
    let radio = document.querySelector("input[name='platform']:checked")
    switch (radio.id) {
      case "platform_ios":
      case "platform_tvos":
        document.querySelectorAll(".ios").forEach(j => j.classList.remove("hidden"))
        document.querySelectorAll(".android").forEach(j => j.classList.add("hidden"))
        break;
      case "platform_android":
      case "platform_androidtv":
      case "platform_firetv":
        document.querySelectorAll(".android").forEach(j => j.classList.remove("hidden"))
        document.querySelectorAll(".ios").forEach(j => j.classList.add("hidden"))
        break;
      default:
        document.querySelectorAll(".ios, .android").forEach(j => j.classList.add("hidden"))
        break;
    }
  }

  function generateTables(){
    generateMarkdown()
    generateHTMLTable()
  }
  
  
  function generateMarkdown() {
    var output = ["||Question||Answer||"]
    parseQuestions().forEach(e=>{
      output.push(`|${e.q}|${e.a}|`)
    })
    document.querySelector("#output").value = output.join("\n")
  }

  function generateHTMLTable(){
    var table = document.createElement("table")
    var headers = ["Question", "Answer"]
    var header = document.createElement("tr")
    headers.forEach(headerText=>{
      var head = document.createElement("th")
      head.innerText = headerText
      header.appendChild(head)
    })
    table.appendChild(header)

    parseQuestions().forEach(e=>{
      var row = document.createElement("tr")
      var question = document.createElement("td")
      question.innerText = e.q

      var answer = document.createElement("td")
      answer.innerText = e.a

      row.append(question)
      row.append(answer)
      table.append(row)
    })
    document.querySelector("#tableOutput").replaceWith(table)
  }

  function parseQuestions(){
    var output = []
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
        output.push({q:q, a:a})
      } catch (j) {
        
      }
    })
    return output
  }