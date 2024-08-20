#pip install speedtest-cli
import speedtest

# Crear un objeto Speedtest
st = speedtest.Speedtest()

# Seleccionar el mejor servidor según latencia
st.get_best_server()

# Medir la velocidad de descarga
download_speed = st.download()

# Medir la velocidad de carga
upload_speed = st.upload()

# Medir el ping
ping = st.results.ping

# Convertir las velocidades de bits por segundo a megabits por segundo
download_speed_mbps = download_speed / 10**6
upload_speed_mbps = upload_speed / 10**6

# Mostrar resultados
print(f"Velocidad de descarga: {download_speed_mbps:.2f} Mbps")
print(f"Velocidad de carga: {upload_speed_mbps:.2f} Mbps")
print(f"Ping: {ping} ms")
