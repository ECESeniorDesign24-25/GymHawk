#!/bin/bash -e

# update this to the path of the esptool.py file on your computer
ESPTOOL=/Users/josephkrueger/.arduino-create/esp8266/esptool/2.5.0-3-20ed2b9/esptool

# update this to the port of your ESP8266
USB_PORT=/dev/cu.usbserial-130

# find the most recent binary file with the given pattern
BIN_FILE=$(find /var/folders/kk/ -path "*/arduino-create-agent*/gymhawkDeviceB_feb14a.bin" -type f -print0 | xargs -0 ls -t | head -n 1)

# you can update this if you want to change the baud rate of the ESP8266
BAUD_RATE=115200

# check if a binary file was found
if [[ -z "$BIN_FILE" ]]; then
    echo "Error: No matching binary file found."
    exit 1
fi

echo "Flashing the ESP8266 with the latest binary: $BIN_FILE"

# flash the ESP8266 with the bin file
$ESPTOOL -vv -cd nodemcu -cb $BAUD_RATE -cp $USB_PORT -ca 0x00000 -cf "$BIN_FILE"
