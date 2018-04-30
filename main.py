from config import dev_eui, app_eui, app_key
from lora import LORA

from led import LED

from time import sleep

def setup():
    global n, gps, sleep_time, dn, py
    
    # Initial sleep time
    sleep_time = 30

    # Connect to LoRaWAN Decent
    n = LORA()
    n.connect(dev_eui, app_eui, app_key)
    
    # Connect Sensors
    print("Setup... done")


if __name__ == "__main__":
    # Setup network & sensors
    setup()

    while True:
        sleep(sleep_time)

        data = ""
        m_lat = m_lng = None
        battery = 50

        data = "%s %s %s" % (m_lat, m_lng, battery)


        print('Coords:', "{},{}".format(m_lat, m_lng))
       
        response = n.send(data)


