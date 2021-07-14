console.clear();
//document.write("The process has started.");

console.log("this console process is working.");

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

access_token = "1000.b5af589254e7f9bc75384218b7846b37.233144cd1aa34a4f481b16bdb099806f";

//function myFunction(){
    //document.write("My function is working fine.");

//access_token = document.getElementById("access_token");
sum_ = 0;

for(i=1;i<5;i++){
    url = "https://www.zohoapis.in/crm/v2.1/Sales_Orders?page="+i+"&per_page=200";
    req = httpGet(url,access_token);

    status_code = req[0];
    req_text = req[1];

    if(status_code!= 200){
        console.log("End : Total Records reach to the limits.");
        break;
    }

    else{
        const obj = JSON.parse(req_text);
        l = obj.data.length;

        for(j=0; j<l;j++){
            sum_ += obj.data[j].Grand_Total
            //var x = document.getElementById("fname").value;
            console.log(obj.data[j].Grand_Total);
        }
        console.log(sum_);
        //document.getElementById("para1").innerHTML = sum_;
        //document.getElementById("para1").innerHTML = j;
        
        if(l<200){
            string_text0 = "Successful retrieval for page : "+i+ " \n"+ "Total Records : " +l;
            console.log(string_text0);
            break;
        }
        else{
            string_text1 = "Successful retrieval for page : "+i+ " \n"+ "Total Records : " +l;
            console.log(string_text1);
        }


    }
    

}

string_text3 = "The total Grand_Total_Sum is:" + sum_;
console.log(string_text3)
//document.getElementById("header1").innerHTML = sum_;
//}

        
//document.getElementById("demo").innerHTML = "yup! Inner HTML Works";
//document.write("yup! Inner HTML Works");


// url = "https://www.google.com/"
// a = httpGet(url);
// console.log(a)


function httpGet(theUrl,access_token)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.setRequestHeader("Authorization", "Zoho-oauthtoken " + access_token + "");
    xmlHttp.send( null );

    return [xmlHttp.status,xmlHttp.responseText];
}
