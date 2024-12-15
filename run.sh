#!/bin/bash

docker run --rm -it -v $(pwd)/dnsconfig.js:/dns/dnsconfig.js -v $(pwd)/creds.json:/dns/creds.json --entrypoint /bin/sh stackexchange/dnscontrol:4.15.1
