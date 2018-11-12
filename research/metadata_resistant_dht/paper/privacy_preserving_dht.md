---
title: "Privacy Preserving Distributed Hash Table [DRAFT]"
author: "Gonçalo Pestana (goncalo@hashmatter.com)"
date: Dec 2018
---

# Abstract

**Distributed Hash Tables (DHT) are overlay networks that allow peers to store and lookup data in a decentralized network. Peers are responsible for routing requests and storing data without the need for of external control. DHTs are an important building block for the decentralized web and many P2P systems. However, its decentralized nature introduces privacy vulnerabilities to the services built on top of it. We discuss privacy threat model of DHTs, define the requirements for a privacy preserving DHT and review the literature for mechanisms and protocols to achieve it. We also outline open problems and directions for future research.**

# Introduction

Distributed Hash Tables (DHT) are an important building block for the decentralized web and P2P systems. DHTs are overlay networks that allow peers to store and lookup information stored in a decentralized network, where participant nodes are responsible for routing requests and storing data. 

As a result of its P2P nature, naive design and implementation of DHTs leak user behavior information to other participants. Questions such as "who is participating in the network?"; "who is requesting a particular set of data"; and "who is storing and providing a particular set of data?" can be answered by anyone with relatively low resources. The data leaked by DHTs can be used to target and censor individuals, communities and services. 

Privacy preserving networks are designed and implemented in such ways that user privacy is protected against targeted and mass surveillance and censorship. We argue that 1) the comeback of decentralized networks is a crucial opportunity for building privacy preserving networks from the ground-up and; 2) that DHTs are an important primitive in the decentralization landscape and thus implementations of the DHTs should take user privacy in consideration. 

This work aims at building the foundations to research and implement privacy preserving DHTs. We review protocols and techniques used to design and build secure and privacy preserving DHTs and their current implementations. We also discuss future directions for design and implementation of privacy preserving DHTs, taking into considerations how it impacts properties such as decentralization, scalability and performance of the network. We conclude that ...

The remaining paper is structured as follows. First, we review literature on privacy preserving protocols and techniques on P2P networks. Secondly, we describe how a general purpose DHT works and outline the most popular protocols used nowadays and their respective applications. Thirdly, we describe the threat model of DHTs from a security and privacy perspectives. We then proceed with by reviewing protocols and techniques that aim at preserving complete or a subset of privacy properties in DHTs. Finally, we outline open questions and future research directions.

# Literature Review
 
Octopus [@octopus] is a DHT lookup mechanism that aims at providing security and anonymous lookups. The threat model assumes partial adversaries that control up to a fraction `f` of all network nodes (with `f` being 0.2) and discards the possibility of global adversaries with the ability to monitor all the traffic in the network. [@octopus] remark that anonymity in DHTs as defined by [@terminology] can only be achieved if the DHT is secure against active attacks. An adversary can use its influence in the network to a target lookup initiator with lookup bias attack, lookup misdirection attack and finger pollution attack to deanonymize. Thus, [@octopus] starts by 

# X. Distributed Hash Tables

- any peer can participate in the network
- constrained overlay vs non-constrained

# X. Threat model

We assume that an attacker can control up to a fraction `f` of the network nodes, and suggest that `f` should be 0.2. We assume the worst case in which the adversary nodes are can passively and actively attack the network and may cooperate. Adversaries that can control more than a relatively small fraction of the network and monitor the whole network activity are not considered. [@shadowwalker],[@octopus],[@nisan] claim that such adversary is unlikely to exist in large P2P networks.

Similarly to [@terminology], we consider a DHT to be fully privacy preserving if a lookup initiator is anonymous. Based on [@terminology] definition, a lookup initiator peer is anonymous if honest or adversary network peers can not tell from the set of possible lookup initiators - all nodes in the DHT - who initiated a particular lookup. Additionally, given a lookup initiator, a network peer should not determine what is the target.

We also consider message unlinkability [@terminology] as a requirement for a DHT to be considered privacy preserving. An adversary must not be able to link multiple messages as belonging to an initiator, even if anonymous.

# Approaches for privacy preserving DHTs

## Friend to friend restricted network topology

*as in Freenet "darknet"*

## In-DHT garlic routing

*as in I2P*

## In-DHT onion routing

Onion routing [[@OR1], [@OR2]] has been researched and used [@Tor]
to protect network level metadata leakage

# Conclusion

# References


