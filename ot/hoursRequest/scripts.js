function process() {
  const email = document.getElementById("lead").value;
  const url = "mailto:" + email + "?cc=ospirito@onetrust.com&" + getParams();
  window.open(url, "_blank");
}

function getParams() {
  var body = "";
  var subject =
    "Non-Bill Hours Request: " + document.getElementById("customerName").value;
  //Loop through fields and create string with LABEL: VALUE string
  const fields = document.querySelectorAll("[id^='field_']");
  fields.forEach((e) => {
    var value = e.querySelector("input, select, textarea").value;
    const label = e.querySelector("label").innerText;
    body += label + ": " + value + "\n";
  });

  subject = encodeURIComponent(subject);
  body = encodeURIComponent(body);

  return "subject=" + subject + "&body=" + body;
}
