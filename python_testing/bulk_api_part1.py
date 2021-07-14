# requirement--> Zoho-oauthtoken
# scope requirement - Bulk

def create_bulk_read_job():
    import requests
    import json

    url = 'https://www.zohoapis.in/crm/bulk/v2/read'

    headers = {
        'Authorization': 'Zoho-oauthtoken 1000.7047f44965121222661e780c5357101a.7c3831bf3cf473e4cc3156861d7d8f67',
        'Content-Type': 'application/json'
    }

    request_body = dict()

    call_back = {
        'url': 'https://www.example.com/callback',
        'method': 'post'
    }

    query = {
        'module': 'Contacts'
    }

    fields = [
        'Last_Name',
        'Owner',
        'Account_Name.Account_Name',
        'Account_Name.Phone',
        'Lead_Source'
    ]

    criteria = {
        'group_operator': 'or'
    }

    criteria_1 = {
        'api_name': 'Lead_Source',
        'comparator': 'equal',
        'value': 'Advertisement'
    }

    criteria_2 = {
        'api_name': 'Owner.last_name',
        'comparator': 'equal',
        'value': 'Boyle'
    }

    group = [
        criteria_1,
        criteria_2
    ]

    criteria['group'] = group
    query['criteria'] = criteria
    query['page'] = 1
    query['fields'] = fields

    request_body['query'] = query
    request_body['callback'] = call_back

    response = requests.post(url=url, headers=headers, data=json.dumps(request_body).encode('utf-8'))

    if response is not None:
        print("HTTP Status Code : " + str(response.status_code))

        print(response.json())

create_bulk_read_job()
