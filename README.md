# Node.js on raspberry pi triggering relay
---

## Library link
- rpi-gpio - [https://www.npmjs.com/package/rpi-gpio](https://www.npmjs.com/package/rpi-gpio)

- express - [https://www.npmjs.com/package/express](https://www.npmjs.com/package/express)

---
## Component Used
- Raspberry Pi 4 (4gb version) - [https://www.amazon.ca/Raspberry-Pi-Computer-Model-4GB/dp/B07W4JM192/ref=sr_1_8?crid=2HJKOO0N1AUKK&dchild=1&keywords=raspberry+pi+4&qid=1618689687&sprefix=raspberry+pi%2Caps%2C233&sr=8-8](https://www.amazon.ca/Raspberry-Pi-Computer-Model-4GB/dp/B07W4JM192/ref=sr_1_8?crid=2HJKOO0N1AUKK&dchild=1&keywords=raspberry+pi+4&qid=1618689687&sprefix=raspberry+pi%2Caps%2C233&sr=8-8)
<br>

- Sain Smart  channel relay - [https://www.amazon.ca/SainSmart-2-Channel-Arduino-Raspberry-Electronic/dp/B0057OC6D8/ref=sr_1_1?crid=2PZWP81YW1QOD&dchild=1&keywords=sainsmart+2+channel+relay&qid=1618689996&s=electronics&sprefix=sain%2Celectronics%2C197&sr=1-1-catcorr](https://www.amazon.ca/SainSmart-2-Channel-Arduino-Raspberry-Electronic/dp/B0057OC6D8/ref=sr_1_1?crid=2PZWP81YW1QOD&dchild=1&keywords=sainsmart+2+channel+relay&qid=1618689996&s=electronics&sprefix=sain%2Celectronics%2C197&sr=1-1-catcorr)
<br>

- 12v alarm - [https://www.amazon.ca/Strobe-Protect-System-Flashing-Security/dp/B07K28MW5K/ref=sr_1_7?dchild=1&keywords=12v+alarm&qid=1618691414&sr=8-7](https://www.amazon.ca/Strobe-Protect-System-Flashing-Security/dp/B07K28MW5K/ref=sr_1_7?dchild=1&keywords=12v+alarm&qid=1618691414&sr=8-7)

---
>Note: If you want to try this out, please becareful and please pay attention to voltage and polarity, It might burn your raspberry pi board. 


---
#### High overview how to trigger the relay
1.) Install express - for endpoint "/on" and "/off" (simple REST API)
2.) Install rpi-gpio - this handle the raspberry pi gpio (pins).
- When user send request on any endpoint I specify above, and when the server recieve the request, it will trigger any pin you use for communication on raspberry pi using rpi-gpio library, it will make the pin energize (applying voltage (3v)) and by doing that will trigger the relay making a circuit close or open.  


Example/Guide how to setup the reapberry pi - [https://www.geekytidbits.com/open-garage-doors-raspberry-pi/](https://www.geekytidbits.com/open-garage-doors-raspberry-pi/) 

---
## Author
Norvillie Villaruel
SAIT Web Development 2021