
from wifi_qrcode_generator import wifi_qrcode

qr_code = wifi_qrcode("Persona-Wifi-720", hidden=False,
                      authentication_type="WPA", password="00440109439");

qr_code_img = qr_code.make_image();

qr_code_img.save("wifi_qr_code.png");

