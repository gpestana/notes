## Variants of proof of stake and their privacy limitations

In PoS: you need to trust the validators usually (depending in the PoS design).
The peers need to know the validators, that means that they are public.
Questions: 1) how do you discover validators 2) how to interact with validators

How hard is it to correlated pseudo anonymous information with real day usually
not that hard.

Doesn't really matter if the protocol is private if the underlying
infrastructure is leaking metadata

Check breakout session at midday.


## Secure Multi Party Computation applications

Application: Sugarbits, Enigma (private smart contracts in a SMPC way)

“How to recreate the application of Sugarbits”

SMPC is not yet efficient enough for distirbuted scalable applications

Price finding/valuating in a market without disclosing the content itself.

Think about the problem: starting from “everyone is being too transparent to
reach an outcome”  but we'll need to make it so that the outcome is reached
without revealing as much.

(Moon Math Capital)

## Proof of stake and their privacy limitations workshop

Elliptic curves crypto 

Should/is there any need for even the validators be anonymous at all?

Rotating keys of validators - how would this help?

Threat model for disclosing validator locations (ip??)

Light client privacy (even if protocols are not protocol, but rather the light
clients); light client anonymity as a topic for blockchain and privacy?

On-chain anonymity schemes?

Is anonymity is not built by default or there are no incentives towards it, it
won't be used. e.g. tax the non-anonymous transactions.

“Constructing a snark is too slow”

Why using slashing? “Slashing is a very strong game theoretical component”

## Brave and ML privacy (attention token)

Privacy concerning ML protocols

Attention token (check it out basicattentiontoken.com) check potential
partnerships?

How to decentralize machine learning in a way that is privacy preserving. 

Metadata resistant decentralized ML?

Private-by-default browsing (this is a great idea)

Tim Wu book: the attention merchants (read more about the attention market)

User model on the client side - very accurate information can be collected
nowadays. Great power comes with great responsibility. How to use these models
without leaking data about personal data.

“Fairly centralized model” in which Brave collects BAT and distribute it to the
content distributors.

“Anonize” paper - running large scale anonymous sampling without knowing who
used websites (read!)

Check Brave whitepapper

Privacy preserving user modelling: how to build ML models based in client’s
data, anonymously (anonymous data is possible?)

Fully-decentralized (big data) vs fully-decentralized model (reinforcement
learning to create client-side models). The “middle space” is the most
interesting e.g.: 

Federated learning (take a look at it). Check attacks on federated learning.
Basically it sucks (he says).

Fully decentralized approaches for ML. P2P network when users have partial
models of their peers.


## Mixnets

Research and development on Mixnets.

How to apply it to blockchain transactions, messaging, PoS, etc. any application
that needs to reduce metadata leakeage.

Measuring metadata leakage

Near global adversaries (e.g. NSA, etc..). What are your adversaries should
define the whole discussion.

Sender profile can be done dynamic enough to overcome attack.

Motivation: secure messaging problem as a metadata leakage challenge on the
network.

There's room for other solutions rather than Mixnets (e.g. multi party
computation)

Check mixminion (failed because of latency, by the Tor dudes)

Read Loopix paper. Trade-off about decoy traffic, legitimate traffic and
latency. There's a trade-off here. 

“HORNET is not effective against global adversaries”

Primitives for anonymous and metadata preserving communication. Or primitives
for anonymous communications against near-global adversaries.

**Interesting:**

Game theory mechanism (e.g. blockchain) help to enforce certain conditions in
p2p and volunteering networks.

How to incentivise mix operators? 

Using blockchain to prevent Sybil attacks

Sphinx routing (non interactive, anonymous routing algorithm - old, check it
out)

Decoy traffic primitives in Mixnets

Strong location hiding properties (with decou traffic, routing, etc..)


## Scuttlebut 

Decentralised allocating processes for allocating funds

Pattern for Decentralising organizing:

https://blog.p2pfoundation.net/patterns-for-decentralised-organising-pdf-booklet/2018/07/25
From grants to research/developer bounties

