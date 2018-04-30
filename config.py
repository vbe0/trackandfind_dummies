# Replace with your own OTAA keys,
# obtainable through the "files" widget in Managed IoT Cloud.
dev_eui = "ffffffff00001412"
app_eui = "8000000000000006"
app_key = "712394bcf7bc162cec540c074e511d88"

# Wi-Fi configuration
WIFI_SSID = ''
WIFI_PASS = ''

# AWS general configuration
AWS_PORT = 8883
AWS_HOST = 'a3k7odshaiipe8.iot.eu-west-1.amazonaws.com'
AWS_ROOT_CA = '/flash/cert/root.pem'
AWS_CLIENT_CERT = '/flash/cert/cert.pem'
AWS_PRIVATE_KEY = '/flash/cert/privkey.pem'

# Thing configuration
TOPIC = "$aws/things/00001301/shadow/update"
CLIENT_ID = "00001412"