The document is split into 3 sections: First, it summarizes how 
[Kademlia DHT](https://link.springer.com/chapter/10.1007/3-540-45748-8_5) works
 based on the original paper. Secondly, it describes the 
[S/Kademlia](https://ieeexplore.ieee.org/document/4447808/) 
modifications which enhance the original protocol security and finally it 
describes the libp2p Kademlia implementation specs, which was defined based on
work Kademlia andA/Kademlia.

## Kademlia DHT

Kademlia is a P2P distributed hash table which uses a XOR-based metric to
calculate the distance between nodes and to define the network topology.

### k-buckets and routing table 

### Protocol


## S/Kademlia DHT

## libp2p kademlia DHT implementation specs

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

## K-Bucket

A Kademlia DHT maintains a routing table which defines the overlay network of
each peer. A routing table contains a set of buckets called `k-buckets`. Each
bucket stores contact information of network peers and holds at maximum `k` 
number of contacts. In the current implementation, `k` is 20.

A bucket organizes its peer contacts in descendant order of "activeness".
When DHT node receives a message from another node, it updates the appropriate
`k-bucket`. 

- If the node exists in the routing table, move it to the front of the
bucket. This heuristic will organize the contacts in the buckets so that the
"more active" are first in the bucket.

- If a new connection does not meet the defined latency requirements, skip it
  and do not add it to the bucket.

- If a new peer connection meet the latency requirements, add it to the bucket.
  If the bucket is already full, it either splits it into two buckets or removes
the peer in the tail of the bucket. 

Note that the implementation of k-bucket used in this DHT organizes the contacts
in descendant order in terms of their "activeness", as opposed to the
original paper ([[kad]](https://link.springer.com/chapter/10.1007/3-540-45748-8_5),
where the most active peers are stored in the tail of the bucket instead.

[go-libp2p-kbucket](https://godoc.org/github.com/libp2p/go-libp2p-kbucket) 
implements a Kademlia routing table which respects the `go-libp2p-kad-dht` 
interface.

### Distance between peers

The metric used for calculating the distance between peers is based on the
[[kad]](https://link.springer.com/chapter/10.1007/3-540-45748-8_5) original
protocol, which defines distance between two peers `x` and `y` as the bitwise
exclusive OR (XOR) of their IDs (`distance(x, y) = x ^ y`). 
The result of the operation is interpreted as
an integer which defines the relative distance between peers.

### Client and Server mode routing

The default mode for a DHT node is to serve any requests from network peers. 
However, it is possible to run in client mode in which the node will not respond
to any DHT request.


## Protocol

### Actions

**PUT_VALUE**: RPC for a given peer to store a key-value.

**GET_VALUE**: RPC to query the network for a given key ID.

**FIND_NODE**: RPC for asking peer `p` if it knows about a peer with a specific
key ID.

**GET_PROVIDERS**: RPC for asking a peer `p` if it knows which peers can provide
a given object in the network (CID).

**ADD_PROVIDER**: RPC handler that adds peer `p` locally as a provider for a
given content ID (CID).

**PING**: RPC for requesting a `PONG` reply from a given peer. Deprecated.

If any RPC takes longer than 1 minute, the operation times out.

## Bootstrapping the DHT

Bootrstapping the DHT consists of populating a fresh routing table and its 
`k-buckets`with peer contacts. The bootstrapping method used is to query a 
number of randomly generated IDs. The number of bootstrap queries is defined by
the constant `NumBootstrapQueries`. 

> Q: what is/are the initial peer/s to bootstrap from?

After the bootstrapping is complete, the peer executes a DHT query with its own
ID, so that it will distribute its personal info to neighbors.



> Q: how does the kbucket and peerstore play together? is there any overlap?

The random generation of IDs to query ensures that the peer IDs in the local
store are probabilistically spread across the keyspace.

## Finding the nearest peer

The protocol used for peer `peer_local` to find the nearest peer `peer` is the 
following:

1) calculate the number of common leading zeros between `peer_local` ID and
`peer` ID. This number indicates the k-bucket where the first nearest peer to 
`peer` is located. If the number of common leading zeros exceeds the number of
buckets in the routing table, select last bucket;

2) get the first `count` (`AlphaValue` = 3) [why?] peers from the bucket
selected in step 1) (Note: k-buckets organize the peers in descendent order of
latency, as opposed to the kademlia paper [?]).

3) If no peers were selected or there were no enough peers in the bucket to
select `count` number of them, get peers from neighbor buckets. This may 
happen in the case of bucket split or when bucket is short of peers.

4) Sort the peers from step 2) , 3) based on the relative distance to
target peer `peer` using the distance metric described above;

5) Returns `count` number of peers closest to the target peer `peer`.

## S/Kademlia modifications

The libp2p-dht-kad implements å


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

- **maxQueryConcurrency**: the maximum number of concurrent queries. Same value
  as `AlphaValue`.

---

### WIP notes

- [ ] nomenclature: peers vs nodes?
- [ ] check `defaults` ()
- [ ] an IpfsDHT node has a list of `protocols`. what are those and why a list?
- [ ] why IpfsSHT naming?
- [ ] [routing.go:584] dht.routingTable.NearestPeers is called with
  `AlphaValue` as the number of closest peers to return (`count`). `AlphaValue`
is supposed to define the parallelism of the DHT. Why using AlphaValue in this
context? 
