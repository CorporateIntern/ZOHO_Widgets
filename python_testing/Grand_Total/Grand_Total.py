#requirement --> access_token or auth_token

import requests
import json
import time

start = time.time()
access_token = "1000.e940f41edc0d667f41274337e855dc31.73b3e133828a980c7ce2420bca93d6c0"
sum_ = 0


for j in range(1,1000):
    req  = requests.get("https://www.zohoapis.in/crm/v2.1/Sales_Orders?page="+str(j)+"&per_page=200", headers={"Authorization": "Zoho-oauthtoken " + access_token + ""})
    
    if(req.status_code!=200):
        print("End : Total Records reach to the limits.")
        break
    else:
        obj = json.loads(req.text)
        l = len(obj['data'])
        sum2 =0
        for i in range(l):
            sum_ += obj['data'][i]['Grand_Total']
            sum2 += obj['data'][i]['Grand_Total']
        print(sum2)
        
        if(l<200):
            print("Successful retrieval for page : "+str(j)+ " \n"+ "Total Records : " +str(l))
            break
        else:
        
            print("Successful retrieval for page : "+str(j)+ " \n"+ "Total Records : " +str(l))
            #print(req.content)
        
print("The total Grand_Total_Sum is:" + str(sum_))
end =time.time()
# total Pages = 226
print("This is the test 2\n -------------------")
print(end-start)
