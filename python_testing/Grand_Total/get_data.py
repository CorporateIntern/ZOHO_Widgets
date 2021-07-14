import requests
import json
import time

access_token =  "1000.7c085febbe4665668fe30ddf6e0a0588.c645e1c1ac45e64f3d21ae51cb3d26be"
req  = requests.get("https://www.zohoapis.in/crm/v2.1/Sales_Orders?page=1&per_page=10", headers={"Authorization": "Zoho-oauthtoken " + access_token + ""})
print(req.status_code)
print(req.text)
