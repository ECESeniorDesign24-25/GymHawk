#!/bin/bash -e

# update this to the port of your ESP8266
USB_PORT=/dev/cu.usbserial-140

# update this to the baud rate of your ESP8266
BAUD_RATE=9600

# open serial monitor 
screen $USB_PORT $BAUD_RATE