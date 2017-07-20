## Kapacitor unit tests

Kapacitor is the K in the TICK stack by [InfluxData](https://www.influxdata.com).
The TICK stack is...

Kapacitor is the component responsible for processing, monitoring and alerting
based on time series data. It uses a domain specific language called TICKscript
to define tasks. Tasks will consume and process metrics data and create alerts
based on it. (..). For more documentation on what the TICK stack is all about 
and what it can do for you, check the official [documentation]().

When you rely heavily on the TICK stack to make sure your systems are up and
running all the time, the amount of TICKscripts will potentially become harder 
to manage. In addition, every time you need to change the parameters of an
alert -- which can be quite often --, a lot of time is spent on making sure that
the alert works as intended and that the TICKscript is correct.

..


## kapacitor-unit 

*Note*: This post discusses ideas for a proof of concept for a unit test framework
for Kapacitor's TICKscripts and alerts. 
If you are not familiar with Kapacitor and the TICK script I really suggest you 
to go ahead and check [InfluxData's website](https://www.influxdata.com) and 
learn more about it! In short, the TICK stack is a time series data platform
that allows you to easily store, analyse and act on time series data at scale.

In this blog post, I'll propose way to test TICKscripts in an automated way.


### Why?

1) When you rely heavily on the TICK stack to make sure your systems are up and
running all the time, the amount of TICKscripts will potentially become harder 
to manage. 
2) When creating new (and complex) TICKscripts, it is hard to test all possible
cases before getting the script into production. Record and replay features are
helpful, but still require a lot of manual work and a reliable set of recorded
data, which might not be easy to get.
3) In addition, every time you need to change the parameters of an alert -- 
which can be quite often --, a lot of time is spent on making sure that the 
alert works as intended and that the TICKscript is correct.



## The idea

The main goal of kapacitor-unit is to streamline and make it easier to run a
battery of tests against TICKscripts. Just like any other unit tests, a 
TICKscript should be tested independently and care only about the data input
and the expected Kapacitor triggered alert as a result.

The tests are defined in a test configuration file:

```
# Test case for alert_weather.tick
alert_weather:
  warn_trigger_test:
    description: "Warning when temperature is higher than 80"
    data_set:
      - weather,location=us-midwest temperature=80
      - weather,location=us-midwest temperature=82
    expects:
      - warn: temperature>80 

    crit_trigger_test:
      description: "Critical when temperature is higher than 84"
      data_set:
        - weather,location=us-midwest temperature=80
        - weather,location=us-midwest temperature=86
      expects:
        - crit: temperature>84
    
    ok_test:
      description: "No alert when when temperature is lower than 80"
      data_set:
        - weather,location=us-midwest temperature=88
        - weather,location=us-midwest temperature=80
      expects:
        - ok: temperature<80 
```

The configuration file is self descriptive. It must be a valid YAML file and
each alert's name must be unique.

To install kapacitor-unit run (no quite ready yet though):

```
go get github.com/gpestana/kapacitor-unit/kapacitor-unit
```

To run the tests, you must provide the configuration file and both influxdb and
kapacitor addresses. Optionally, you can provide a path for the directory where
the TICKscripts are. If this path is not provided, kapacitor-unit assumes that
the TICKscripts are loaded and enabled already.

To run the tests:

```
kapacitor-unit --kapacitor http://kapacitorlocalhost:9092 -iinfluxdb http://influx.localhost:8086 --scripts ../tickscripts
```

A good practice is to run a disposable Kapacitor and Influxdb for running the
tests. This can be easily done with docker.


## Wrap up

For now, these are the main ideas behind the kapacitor-unit. The main goal of
kapacitor-unit is to make it easy and automated to test TICKscripts. For keeping
up/colaborating/discussing, visit [github.com/gpestana/kapacitor-unit](https://github.com/gpestana/kapacitor-unit)

