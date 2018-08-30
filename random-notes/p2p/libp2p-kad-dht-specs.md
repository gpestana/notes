# libp2p kademlia DHT implementation specs

[go-libp2p-kad-dht](github.com/libp2p/go-libp2p-kad-dht) is an Kademlia DHT which
implements the IPFS routing interface. The implementation includes
[S/Kademlia](https://www.sciencedirect.com/science/article/pii/S1389128615004168)
modifications, which improves the DHT with a mechanism to mitigate some of the 
Sybil attack vectors.

## Network

**AlphaValue**: the concurrency factor for the asynchronous requests. The 
default is 3 and it cannot be changed through configurations (?).

**KValue**: the size of the `k-bucket`, which defines the number of peers that
the `k-bucket` stores.  It also defines the number of requests to perform before
returning a failure. The default value is 20 and it cannot be changed through 
configurations (?).

**Keyspace size**: this implementation does not require any specific key size.

## Node

Nodes cooperate to store and lookup values that are part of the network and which
are identified with an unique ID with arbitrary (?) number of bits. The values
to store have a key which is part of the same keyspace as the nodes IDs. Nodes
are responsible for storing the key-value pairs which key is closer to its ID.

### Node ID

This implementation of Kademlia does not set any requirements for the node ID
definition. However, since this package implements the IPFS routing interface, 
it is worth noting that in IPFS the node ID is a SHA256 multihash by default.

### Distance between peers

### Client and Server mode routing

The default mode for a DHT node is to serve any requests from network peers. 
However, it is possible to run in client mode in which the node will not respond
to any DHT request.

## K-Bucket

## Protocol

### RPCs

**PUT_VALUE**: request for a given peer to store a key-value.

**GET_VALUE**: request for a given key ID to the network.

**FIND_NODE**: requests a peer `p` is it knows about a peer with a specific key.

**GET_PROVIDERS**: requests a peer `p` if it knows which peers can provide a
given object in the network (CID).

If any RPC takes longer than 1 minute, the operation times out.

## Others
- **Replication**
- **Pinning/storing** (layer above?)

## Configurations and defaults

- **Quorum**: a value that defines how many peers the DHT needs to get values
  from before returning the best one. (go-libp2p-kad-dht/routing_options.go)

- **k-bucket latency tolerance**: the `k-bucket` has a latency tolerance of 1
minute (go-libp2p-kad-dht/dht.go:120). When adding or updating a peer in the
`k-bucket`, if the latency between the local peer and the peer to add to the
bucket is higher than 1 minute, the peer is dropped and not added to the
`k-bucket`.

- **MaxRecordAge**: defines the maximum amount of time a node will keep a record
  from the time it received it. Its value is 36 hours

- **NumBootstrapQueries**: defines the number of bootstrap queries to construct
  a new routing table. Its value is 5.


---

### WIP notes

- nomenclature: peers vs nodes?
- check `defaults` ()
- an IpfsDHT node has a list of `protocols`. what are those and why a list?
