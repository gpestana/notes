## ShadowWalker: Peer-to-peer Anonymous Communication Using Redundant Structured Topologies
**Prateek Mittal, Nikita Borisov**

**what**: ShadowWalker is a low-latency P2P anonymous communication protocol
based on a random walk over a redundant structured topology

**results**: ShadowWalker was shown to provide 4.5 bits more entropy than Salsa,
while the probability of an end-to-end timing analysis attack is less than 5%
(while in Tor is less than 4%). It seems to be an interesting approach to
low-latency p2p communication protocols. The protocol achieves manageable
computation and communication overhead and is able to handle moderate node
churn

**importance**: low-latency scalable p2p communication protocols are hard to get
right but very important. ShadowWalker presents a new approach to metadata
resistance/anonymous communication in p2p over redundant structured topology
that may be extended in the future. 

**p2p anonymous communication**: two ways to achieve anonymous communication in
p2p networks through onion routing. A critical part of the protocol is the
circuit building: how to construct a 3 non-adversary node circuit (with or
without a full perspective over the network state)?":

- 1) random paths using lookup: (e.g. Salsa) using DHT lookup to find random,
  non-adversary nodes. This approach potentially leaks too much metadata while
performing the series of DHT lookup, which can be used to learn which nodes were
selected for the circuit, degrading enormously anonymity properties.
Alternatively to DHT lookup, stochastic random walks can also be used. This
approach is more secure than DHT lookup, but it is vulnerable to timing attacks
on low-latency systems (why? [1, 2])

- 2) random walks on restricted topology: uses circuit relays which are connected
  in a restricted topology. Restricted topology helps to avoid the need for
keeping the full state of the relay network on each node to pick the relays
which will create the circuits.

**threat model**: low-latency anonymous communication systems are not designed
to protect against global passive adversaries, which are able to perform timing
attacks to de-anonymize users. ShadowWalker considers adversaries that control a
fraction of nodes in the network (20%). The adversary is internal, active and
static.

**anonymity and secure lookup in DHTs**: lookup on structured networks (e.g. DHTs)
	are vulnerable to routing table attacks such as posining. Adversary nodes can
collude and route the target to wrong lookup results and de-anonymize the lookup
initiator. Secure lookup mechanisms such as redundant lookup paths are used to 
avoid those attacks, but they leak too much information about the user's
behavior, affecting anonymity. 

**ShadowWalker overview**:  1) it introduces `shadow nodes` which redundantly 
	verify routing tables of neighbor nodes and certify it as correct, through a 
certificate; 2) certificates can be used to check the steps of a random walk; 
3) using certificates instead of online checks leaks less metadata, avoiding
information leak attacks.

**redundant structured topology** 

---

- [1] AP3: Cooperative, decentralized anonymous communication
- [2] Information leaks in structured peer-to-peer anonymous communication.
