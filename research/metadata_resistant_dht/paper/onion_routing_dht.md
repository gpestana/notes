# Privacy preserving lookups with In-DHT Onion Routing [RFC]

**Abstract**: In-DHT Onion Routing is a routing protocol that leverages onion routing to avoid leak of metadata of lookup initiators in distributed hash tables. 

## Distributed hash tables

DHT is a network protocol that implements a hash table over a P2P network. The DHT participants have access to an API `store(data, ID)` and `lookup(ID)`, which allows peers to store data in the network and find it. Each node in the network is assigned with an unique ID. In addition, the data stored in the network also has an ID which overlaps the node ID domain. When data is stored (i.e. `store(data, ID)` is issued by a peer), it is routed between peers until it reaches the peer with the closest ID. This design enables peers to coordinate itself to store and retrieve keyed values without central point of authority or registry and provide a decentralized.

Different flavors of DHT protocols implement the routing mechanism - how to pass request messages to the correct peers in the network, so that the content is found - and overlay network topology - what network organization the network adopts - in different ways. The network topology is shaped based on which network addresses a peers has access to.

// TODO: how different DHT protocols perform routing

## A problem: lookup initiator metadata leaks

When peers make a network request for a specific data ID, usually a chain of network requests starts in order for the lookup initiator to learn which peer in the network has the data - or if the data is not available. While the open collaborative nature of DHTs enables large networks of peers to work without a point of failure and central authority, it also leaks metadata about peer behavior. In most DHT routing protocols, potentially any peer in the network has access to which data is stored and requested by any network peer. On applications where sensitive data is stored, this poses a privacy problem to every peer in the network and renders the whole network unusable from a privacy perspective.

The first step for a peer to use in-dht onion routing is to construct an onion circuit, An onion circuit is the set of peers that will be as relays and will be decrypting and forwarding the onion packet in the network. Tor uses a central authority directory with information necessary to construct the onion circuit and 

## Threat model 

// TODO: global adversary that can observe and correlate which controls the network with f malicious colliding nodes (f = 0.2)

// TODO: how different DHT protocols perform routing and how are they vulnerable to metadata attacks

## In-DHT onion routing to protect lookup initiator privacy

In-DHT onion routing consist of encrypting the lookup request in multiple layers, where each layer can be decrypted by only one network peer - called relay. After decrypting one layer of the packet, the relay gains access to the information necessary to route the remaining encrypted packet to the next relay or to perform the lookup if all the layers have been decrypted already. The exit relay - the last peer in the onion circuit responsible for making the request - also has access to a response packet which consists of the encrypted onion packet that must be used for the response to be sent back to the original lookup initiator.

The protocol is analogous to how Tor[ref] protects initiator privacy. It is important stress that the onion relaying is performed by peers in the DHT and not on an underlaying layer, such as Tor.

## Provably secure onion circuit building

A node must be able to hide from internal and external peers which nodes were
selected when constructing the onion circuit. Formally that is translated by
saying that the probability for an adversary node to successfully guess the IDs
of the set of nodes which form a circuit to be uniformly distributed in the
network, that is:

- given a set `N = {n, n_1, ..., n_i-1}` of `i` nodes that exist in the network
  in a given time;
- a set of nodes `R = {n, n_1, ..., n_l-1}` which form an onion circuit with a
  set of nodes of length `l`,
- the length of the circuit `l`;
- and `Pr(n)`, which represents the probability that an adversary can
  successfully guess that a node `r` is a relay chosen to be part of a circuit,
must be:

```
	Pr(n) = l/sum(N)
```

The probability must hold even though:

1) the node `n` does cannot have a full picture of the netowork at a given time and;
2) the adversary node knows the overlay fingertable of `n` at any time and;
3) relay nodes enter and leave the network in unpredictable ways (churn).


**Two approaches to agains route capturing and bias attacks** when getting
information to construct the onion circuit are:

1) Identify and isolate nodes performing attacks; This is not trivial to achieve
in a completely decentralized way (i.e. without relying on central certificate
authorities);

2) Use mechanisms to find node IDs that do not rely on direct finger table 
sharing from other nodes. One naive example could be to passively listen to network
activity for a while and select the node IDs that are more likely to be honest.
This approach has the problem of publicly narrowing down too much the subset of
nodes that are eligible to be part of the circuit, since possible malicious
nodes can learn which nodes are more likely to be picked by the circuit
constructor when using this passive mechanism.

### Onion circuit construction vulnerabilities

## Open questions and future work

**minimum required entropy against global adversary**:

**secure and decentralized circuit construction**:

**misbehaving peers and incentives**:

**public key distribution**:

## Literature
