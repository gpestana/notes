## Everyone is naked: privacy on P2P systems

In this talk, we'll discuss about one of the hardest challenges of decentralized
web and P2P systems: privacy. We focus on current systems and applications built
- or relying - on P2P networks, specially on the rather interesting constant
  conflict between scalability, performance, discoverability (or collaboration,
for short) and the privacy of the network users. We will demonstrate how current
systems are a threat for user privacy and discuss how recent research has been
trying to solve current open problems while taking into considerations the
tradeoffs between privacy and usability. Technology is a political tool [1], so
we finish by outlining a proto-manifest about the importance for building
technology that protects our privacy by design.

Main takeaway: The ethos of the P2P community and the decentralized web is based
on a new paradigm where people and communities can interoperate and collaborate
without the need for external stewardship. This new paradigm opens doors for
user self-sovereignty, personal data ownership and freedom from central
authorities which incentives tend to lock-in their users and to hold and
monetize private data in order to maximize their profits. However, P2P and
decentralized protocols are complex and collaboration between multiple parties
often leaks metadata that can be used to target individuals and communities.
While centralized systems disclose user's behaviour and social graph to one
centralized entity, naive decentralized systems potentially disclose that
information to everyone in the network. While it is clear that current systems
are not focusing on user privacy, failing to deliver it will render
decentralized systems unusable and unattractive for mass adoption or as a viable
alternative to centralized systems.

P2P, blockchains, distributed systems, encryption, metadata, privacy: Throughout
the talk we will mention many buzzwords and concepts that often overlap and
which differences are lie on details and are often misunderstood. Let's find a
common ground regarding the basic building blocks and concepts important for
this talk.  

Threat model (or what we are trying to avoid): From a bird's eye view, we are
aiming at building systems that do not leak data or metadata about user
behaviour. The potential adversary is local, controls a fraction of the network
(usually around 20% of the nodes) and may actively change and delay packets
traversing the network. In the context of this talk, we are not considering
global adversaries with resources to track all activity in a network (e.g.
governmental agencies). That's a different ball game and I believe we better
start by focusing on the "low hanging fruit”: on how to make the systems locally
secure and private. 

In a nutshell, interactions between peers in the network should not disclose any
information over time about peer's interests and behaviour. Adversaries or
curious honest peers should not be able to infer users' behaviour based on their
network activity. Let's consider the following cases:

Case 1: User (the initiator) wants to access a webpage (a resource) which is
stored in a distributed network. The resources stored in the network are content
addressed and replicated by multiple peers (the providers). The initiator sends
the request to a subset of the network peers to learn where to get the resource
from. The request is routed across the network peers, which use their partial
view of the network to resolve the which peers are providers for the requested
resource. Once a provider is discovered, the initiator requests the website from
it. 

The example above is a high level protocol for routing and discovery in
decentralized networks. Since peers in the network collaborate to resolve the
initiator request, they need to know which resource is being resolved. The peers
. In addition, the initiator also learns that the provider has most likely
accessed (or is the original creator) of the resource she requested. 

Thus, adversaries or curious honest peers are able to infer the initiator and
provider behaviour and interests based on what content they request and store,
respectively. 

Case 2: This is a particular instance of the Case 1. This example assumes that
users will likely cache personal resources on their devices. A personal resource
(e.g. personal webpage portfolio) is cached and replicated by a set of peers in
the network, which map to physical devices such as laptops, mobile devices and
servers with an IP address. An adversary may be able to learn which devices and
IPs correspond to the owner of the resource by correlating information about
which peers are providing a specific resource. In the limit, an adversary will
be able to infer over time what are the IPs (which discloses location and other
critical personal information [ref]) a network peer uses.  

In real life, how can this be used to target individuals and communities? We
will indulge in this question later on the proto-manifesto section, but let's
take a sneak-peak on how these metadata leaks may affect people in a very
tangible way. Imagine a world in which a set of decentralized storages are used
to cache and distribute videos. A distributed Youtube service of some sorts:
instead of Youtube storing and distributing the videos, we would rely on a
network of independent users that collaboratively provide the service. The
routing and resource lookup protocol works as described in the Case 1 above. Now
imagine a country where its government does not shy away from tracking down and
prosecuting its own citizens who have contrarian ideas to that of the current
power (spoiler alert for those who haven't realized it yet: they do exist!). In
this context, the decentralized network could be used by governmental agencies
to identify and prosecute people who created, stored and distributed content
which is deemed as against the government. If we add location aware routing and
content distribution (main idea of peer-assisted CDN[ref]), it would be
straightforward to learn who is e.g. homossexual in the neighborhood. These
scenarios are short from being taken from a dystopian future in which freedom is
part of the book.

Notice how the adversary strategy changes when attacking decentralized systems,
as compared to centralized systems. In centralized systems, the attacker will
backdoor or enforce a corporation to disclose user behaviour and private
information through litigations and subpoenas. In (naive) decentralized systems,
the adversary strategy is to be part of the network and to passively record and
correlate network activity. Different paradigms, different strategies, same
problem. Technology shifts power, and thus it needs to be seen as a political
tool [1].

Next, we are going to see practical examples of how current P2P systems used
everyday by thousands of people are leaking not vulnerable to privacy attacks
based on our threat model.

1. Everyone is naked

Attack the pCDN: Peer-assisted CDNs..

Bonus: P2P CDN

Attack the DHT: Distributed hash tables (DHTs) .. In this section, we will
demonstrate how three P2P systems leaks metadata about user's behaviour and the
practical cases in which is can harm us, the users. The three systems are
Bittorrrent, IPFS and Dat.

2. Peer collaboration, performance and privacy

3. Privacy enhancing technology for P2P

Mixnets, onion routing, friend to friend routing:

Onion routing on P2P networks and entropy


References

[1] The Moral Character of Cryptographic Work

