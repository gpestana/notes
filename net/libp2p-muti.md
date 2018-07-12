## multistream and multistream-select

The multistream protocol makes data streams - e.g. files, tcp streams, etc, .. -
self described by prefixing the stream with the encoding type. The protocol is
very well [described here](https://github.com/multiformats/multistream).

Based on the multistream representation and protocol, the `multistream-select`
makes it easy for two entities to agree which codec to use during the
communication. An example use case is when two hosts start a TCP and want to
agree in which format to encode the data stream. The protocol allows the hosts
to exchange the information about which codecs they support and agree upon one
to proceed with the data communication.

This flexible interface allows software to evolve without breaking changes and
gives developers the interfaces to change and agree upon data stream encoding
according to the cases and peers.

The `multistream-select` protocol is very simple and consist of 4 different 
stages: *greeting*, in which one node claims using the `multistream` protocol
and its version; *list*, when a node requires the list of codecs supported by
the other entity; *select and communication*: the peers exchange data using a
codec which both know. The codec type is prepended to the data stream so that
the destination knows how to decode the data stream.


[Specs](https://github.com/multiformats/multistream-select)

[Go implementation](https://github.com/multiformats/go-multistream)

[JS implementation](https://github.com/multiformats/js-multistream)

[CLI for interacting with multistream](https://github.com/whyrusleeping/mss-nc)


