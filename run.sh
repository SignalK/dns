#!/bin/bash

docker run -e TOKEN=$TOKEN -e USER=$USER --rm -it -v $(pwd)/dnsconfig.js:/dns/dnsconfig.js -v $(pwd)/creds.json:/dns/creds.json stackexchange/dnscontrol:4.15.1 $1
