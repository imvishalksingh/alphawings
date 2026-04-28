import requests

url = 'https://crm.alphabusi.com/lead-form/leadStore'
data = {
    'company_id': '1',
    'category_id': '2',
    'name': 'Test Lead From AI',
    'email': 'test@alphabusi.com',
    'mobile': '1234567890',
    'company_name': 'Test Company',
    # We send both to satisfy both the (buggy) validation and the actual storage logic
    'company-size': '1-10',
    'custom_fields_data[company-size_1]': '1-10',
    'estimated-budget': '1',
    'custom_fields_data[estimated-budget_3]': '1',
    'g-recaptcha-response': 'test'
}

headers = {
    'X-Requested-With': 'XMLHttpRequest'
}

response = requests.post(url, data=data, headers=headers)

print(f"Status Code: {response.status_code}")
print(f"Response: {response.text}")
