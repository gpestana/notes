## Port already allocated when spinning up a docker container

### Problem: 
When starting a docker container:

**versions**
Docker version 1.12.1, build 6f9534c
 
$ docker-compose up -d service_123

```
ERROR: for service_123   Cannot start service service_123: driver failed programming external connectivity on endpoint service_123 (4d8f1242a6f83c227dd80be14186cd1dc121391eabfb173773fe9d2458433a3f): Bind for 0.0.0.0:9200 failed: port is already allocated
```

The port which service_123 should use is already allocated and being used. When checking which processes are currently listening:

`$ lsof -nP +c 15 | grep LISTEN`

```
...
com.docker.slir  6924 pestgo   26u    IPv6 0xe4fda706f2eea507         0t0      TCP [::1]:8083 (LISTEN)
com.docker.slir  6924 pestgo   27u    IPv4 0xe4fda706ff76cabf         0t0      TCP *:3000 (LISTEN)
com.docker.slir  6924 pestgo   28u    IPv6 0xe4fda706ffed5fe7         0t0      TCP [::1]:3000 (LISTEN)
com.docker.slir  6924 pestgo   29u    IPv4 0xe4fda706fe0f53b7         0t0      TCP *:32768 (LISTEN)
com.docker.slir  6924 pestgo   30u    IPv6 0xe4fda706f2eeafc7         0t0      TCP [::1]:32768 (LISTEN)
com.docker.slir  6924 pestgo   31u    IPv4 0xe4fda706fec1bfd7         0t0      TCP *:2443 (LISTEN)
com.docker.slir  6924 pestgo   32u    IPv6 0xe4fda706f2eecaa7         0t0      TCP [::1]:2443 (LISTEN)
com.docker.slir  6924 pestgo   33u    IPv4 0xe4fda706d938fde7         0t0      TCP *:1443 (LISTEN)
com.docker.slir  6924 pestgo   34u    IPv6 0xe4fda706f2eed007         0t0      TCP [::1]:1443 (LISTEN)
com.docker.slir  6924 pestgo   35u    IPv4 0xe4fda706ff61f3b7         0t0      TCP *:9200 (LISTEN)
com.docker.slir  6924 pestgo   36u    IPv4 0xe4fda706fe7f51c7         0t0      TCP *:443 (LISTEN)
com.docker.slir  6924 pestgo   37u    IPv6 0xe4fda706f2eedac7         0t0      TCP [::1]:9200 (LISTEN)
```

Notice that the com.docker.slir process has failed to exit (with previous containers) and keep listening to the ports even when there is not container running anymore. Docker does not release ports in some cases. A fix (for mac) is to reset docker with factory settings. Or update to version 

Related: 
- https://forums.docker.com/t/port-mappings-are-not-released/10565/21
- https://forums.docker.com/t/com-docker-slirp-is-using-my-containers-ports/16663/2
- https://github.com/docker/compose/issues/3277
