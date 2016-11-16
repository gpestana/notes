**Telegraf plugins**

If there is no native Telegraf plugin for a specific service, there are basically two common plugins that can gather and send the metrics. The input plugin `exec` runs a shell command periodically, reads the output and sends it upstream if valid. The data format may be a json object of following the Line Protocol (influx data representation protocol). Another solution is to use the common `httpjson` input plugin. It makes REST calls periodically to a specific endpoint which must return a JSON response. The plugin then flattens the JSON response and keeps only the numerical values of the response.
 
Example using the `exec` input plugin to gather and send Kibana backend stats upstream:
[as of Telegraf v1.0]
 
*in /etc/telegraf/telegraf.d/kibana_input.conf*

```
[[outputs.influxdb]]
  urls        = ["http://$influxdb_host:$influxdb_port"]
  database    = "kibana"
  precision   = "s"
  timeout     = "10s"
  user_agent  = "ADVTP/1.0 Telegraf/ServiceMonitor"
  udp_payload = 512
  pass        = [ "kibana" ]
 
[[inputs.exec]]
  commands = ['python3 /exec_scripts/kibana_status.py kibana_host']
  data_format = "influx"
```
 
In this case, the `/exec_scripts/kibana_status.py` would make a HTTP GET request to
kibana_host:5601/api/status enpoint, parse the data and print the relevant information
to stdout in the Line Protocol format. The relevant information may contain the Kibana
backend status (green, yellow, red) for example.