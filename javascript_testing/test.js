//Install the xmlhttprequest in that file before running that code

console.clear();

console.log("this console process is working.");

//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

access_token = "1000.7c085febbe4665668fe30ddf6e0a0588.c645e1c1ac45e64f3d21ae51cb3d26be";

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
            sum_ += obj.data[j].Grand_Total;
            console.log(obj.data[j].Grand_Total);
        }
        console.log(sum_);
        
        
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


function httpGet(theUrl,access_token)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.setRequestHeader("Authorization", "Zoho-oauthtoken " + access_token + "");
    xmlHttp.send( null );

    return [xmlHttp.status,xmlHttp.responseText];
}

