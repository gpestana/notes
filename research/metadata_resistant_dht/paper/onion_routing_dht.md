# Privacy preserving lookups with In-DHT Onion Routing [RFC]

**Abstract**: In-DHT Onion Routing is a routing protocol that leverages onion routing to avoid leak of metadata of lookup initiators in distributed hash tables. 

## Distributed hash tables

DHT is a network protocol that implements a hash table over a P2P network. The DHT participants have access to an API `store(data, ID)` and `lookup(ID)`, which allows peers to store data in the network and find it. Each node in the network is assigned with an unique ID. In addition, the data stored in the network also has an ID which overlaps the node ID domain. When data is stored (i.e. `store(data, ID)` is issued by a peer), it is routed between peers until it reaches the peer with the closest ID. This design enables peers to coordinate itself to store and retrieve keyed values without central point of authority or registry and provide a decentralized.

Different flavors of DHT protocols implement the routing mechanism - how to pass request messages to the correct peers in the network, so that the content is found - and overlay network topology - what network organization the network adopts - in different ways. The network topology is shaped based on which network addresses a peers has access to.

// TODO: how different DHT protocols perform routing

## A problem: lookup initiator metadata leaks

When peers make a network request for a specific data ID, usually a chain of network requests starts in order for the lookup initiator to learn which peer in the network has the data - or if the data is not available. While the open collaborative nature of DHTs enables large networks of peers to work without a point of failure and central authority, it also leaks metadata about peer behavior. In most DHT routing protocols, potentially any peer in the network has access to which data is stored and requested by any network peer. On applications where sensitive data is stored, this poses a privacy problem to every peer in the network and renders the whole network unusable from a privacy perspective.

## Threat model 

// TODO: global adversary that can observe and correlate which controls the network with f malicious colliding nodes (f = 0.2)

// TODO: how different DHT protocols perform routing and how are they vulnerable to metadata attacks

## In-DHT onion routing to protect lookup initiator privacy

In-DHT onion routing consist of encrypting the lookup request in multiple layers and relay it through to the peers that are able to decrypt each layer of the encryption layers. The node which decrypted the last layer is then responsible for performing the lookup. The protocol is analogous to how Tor[ref] protects initiator privacy. It is important stress that the onion relaying is performed by peers in the DHT and not on an underlaying layer, such as Tor.

The first step for using in-DHT onion routing is to chose which peers will be the relays. This 

## Open questions and future work

## Literature
