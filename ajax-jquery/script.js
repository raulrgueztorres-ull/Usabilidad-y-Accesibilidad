function send_form()
{
    var value = $("#value-form").val();
    var object = new XMLHttpRequest();
    
    var arr_names = [];
    var arr_emails = [];
    

    object.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200)
        {
            var content = JSON.parse(this.responseText);
            for(let i = 0; i < content.length; ++i)
            {
                var names = content[i].name; 
                var emails = content[i].email;
                arr_names.push(names);
                arr_emails.push(emails);
            }
            show_information(arr_names, arr_emails);
        }
        else
            show_information(arr_names, arr_emails);
    }
    var url = "https://jsonplaceholder.typicode.com/comments?postId=" + value; 
    object.open("GET", url, true);
    object.send();
}

function show_information(name, email)
{
    var container = document.getElementById("content");
    document.getElementById("container").innerHTML = "";
    document.getElementById("button-2").innerHTML = "<br/><br/>" + '<input type="submit" id="refresh" value="Other Value" onclick="location.reload(true)">'; 
    
    container.innerHTML = "Name: " + name[0] + "<br/>" + "Email: " + email[0];
    for(let i = 1; i < name.length; i++)
    {
       container.innerHTML += "<br/><br/>" + "Name: " + name[i] + "<br/>" + "Email: " + email[i] + "<br/"; 
    }
}