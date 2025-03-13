#!/bin/bash -e

# update this to the port of your ESP8266   
USB_PORT=/dev/cu.usbserial-140

# test the connection to the ESP8266
esptool.py --port $USB_PORT flash_id