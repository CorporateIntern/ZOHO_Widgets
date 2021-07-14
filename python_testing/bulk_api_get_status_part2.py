def get_status_of_bulk_read_job():
    import requests

    url = 'https://www.zohoapis.in/crm/bulk/v2/read/143890000017902151'

    headers = {
        'Authorization': 'Zoho-oauthtoken 1000.7047f44965121222661e780c5357101a.7c3831bf3cf473e4cc3156861d7d8f67',
    }

    response = requests.get(url=url, headers=headers)

    if response is not None:
        print("HTTP Status Code : " + str(response.status_code))

        print(response.json())

get_status_of_bulk_read_job()
