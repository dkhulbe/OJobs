

var jcontent = {
    "jobs": [
        {
            "label": "Cleaning",
            "desc": "This is a sample",
            "rate": 40,
            "address": "213 Hyaat Way",
            "phone": 2342342
        },
        {
            "label": "Washing",
            "desc": "Car Wash",
            "rate": 10,
            "address": "123 Heaven Way",
            "phone": 3294238947
        },
        {
            "label": "Pulling out weeds",
            "desc": "Pull out the weeds from the yard",
            "rate": 10,
            "address": "346 Palm Blvd",
            "phone": 3294238947
        }
    ]
}
var ajaxhttp = new XMLHttpRequest();
var url = "C:\OJobs\jobs.json";
console.log(url);
ajaxhttp.open('GET', url, true);
console.log(ajaxhttp)
ajaxhttp.setRequestHeader("Content-Type", "application/html")
console.log("outside if");
ajaxhttp.onreadystatechange = function () {
    if (ajaxhttp.onreadystatechange == 4 && ajaxhttp.status == 200) {
        callback(JSON.parse(ajaxhttp.responseText));
        var showjson = JSON.parse(ajaxhttp.responseText);
        console.log(showjson);
        //output.innerHTML = jcontent.getElementById('label');
    }
}
ajaxhttp.send(null);


document.write("<div name='title'><font color='blue' size =12 align = left><b>Search Jobs</b></font><br><br>");

for (var i = 0; i <= jcontent.jobs.length; i++) {
    document.write("<table border=1>");
    document.write("<tr><td>Job Label:" + "</td><td width=480>" + jcontent.jobs[i].label + "</td></tr>");
    document.write("<tr><td>Job Description:" + "</td><td>" + jcontent.jobs[i].desc + "</td></tr>");
    document.write("<tr><td>Job Rate:" + "</td><td>" + jcontent.jobs[i].rate + "</td></tr>");
    document.write("<tr><td>Job Address:" + "</td><td>" + jcontent.jobs[i].address + "</td></tr>");
    document.write("<tr><td>Phone:" + "</td><td>" + jcontent.jobs[i].phone + "</td></tr>");
    document.write("<tr><td></td><td align=right><input type =button id=btnapply value='Apply'></input>")
    document.write("</table>");
    document.write("<br>")
}



