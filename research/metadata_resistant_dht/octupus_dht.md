## Octopus: A Secure and Anonymous DHT Lookup
**Qiyan Wang, Nikita Borisov**

**what**: octopus is a DHT lookup technique which solves the security and
privacy vulnerabilities of DHTs by using attacker identification techniques
(less effective attacks), splitting lookups over separate anonymous paths
(better anonymity) and by using dummy queries (better anonymity).

**results**: a lookup protocol for DHTs which provides strong guarantees for
anonymity and security, where malicious nodes are quickly identifies with high
accuracy. Octopus ca also achieve near-optimal anonymity for both lookup
initiator and target (shown through probabilistic modeling and simulation). All
this with reasonable latency and communication overhead.

**importance**: many p2p applications rely on DHTs (IPFS, freenet, bittorrent,
etc..) because of their decentralized nature, a lot of information and metadata
is leaked by users of the DHT - both for users who lookup content in the DHT as
well as those who serve content. In such p2p networks, it is important to
identify attacker nodes and provide a strong layer of anonymity to its users. 

**threat model**: not consider a global adversity that is capable of controlling
the whole network and observing all communication traffic (unpractical in large
networks?). Assumes partial adversaries that can control up to 20% of the
network. Adversaries are able to intercept, log, modify and drop messages of the
network. Sybil attacks are not considered.

**security and anonimity goals**: security: the most important goal for security
 is that lookup messages are not biased (dropped/modified/...) by adversaries;
anonymity: 1) not possible to determine who sent a specific DHT lookup message;
2) given a lookup initiator, it should not be possible to determine the target
of the lookup; 3) several queries cannot be correlated to find out information
about it.

**possible attacks**
- lookup misdirection attack: adversary returns a routing table filled with only
  adversary's controlled malicious nodes. This will allow the adversary to
learn by fine tuning which is the target node.
- finger pollution attack: when responding to routing table query updates, a
  malicious node may try to poison other node's routing table.

**trust model and malicious nodes punishment**: octopus rely on a centralized
certificate authority to issue and revoke certificates from nodes. Identified
malicious nodes have their certs revoked. The certificates are independent from
lookup queries. Merkle Hash Tree certificate revocation and other solution may
be used ny the CA.

**security mechanisms**: nodes (secretly) check other nodes' routing tables,
independently of the lookup process. A trust/punishment system that issues
certificates is used to signal malicious nodes. Certificate management can be
done with e.g. Merkle Hash Tree based certificate revocation.
- secret neighbor surveillance: each node contains a list of successor and
  predecessor nodes. If nodeA successor list contains nodeB, then nodeB
predecessor list contains nodeA. nodeB can check if nodeA is performing a lookup
bias attack by anonymously asking nodeA for its routing table. If nodeB is not
there, it means the routing table as been manipulated.
- anonymous lookup routing: nodeA can connect to nodeB through a series of
  relays, while protecting the contents of the message using onion encryption.


### Questions
- threat model considers partial adversaries that control up to 20% of the
  network. Why 20%? What is the percentage that breaks the assumptions? How to
guarantee that no adversary can overcome the 20% mark? 
