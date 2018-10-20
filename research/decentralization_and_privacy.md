## Decentralization and Privacy

My take on the paper "Systematizing Decentralization and Privacy: Lessons from 
15 Years of Research and Deployments"

(maybe twitter thread?)

by Carmela Troncoso, Marios Isaakidis, George Danezis, and Harry Halpin


---

### main ideas:

- "decentralization was originally a response to the threat of censorship"
- "although efficient and decentralized, DHTs do not themselves provide strong
  security, privacy and anonymity properties"
- importance of reputation and trust - not all the decentralization solutions
  rely on PoW and crypto, trustless primitives. (e.g. DHTs). Without reputation
together with incentives, peers in the network can easily perform attacks
- no authority in the network makes it important for protocol designers to
  carefully consider how to incentive nodes to ensure that adversaries or
selfish nodes do not damage the network
- privacy is only possible through decentralization 
- but few projects in the ecosystem take privacy and anonymity seriously enough
- some claim to do so, but weak threat models and assumptions hinder the
  security and privacy of the protocols
- advantage of decentralized systems in terms of security and privacy:
  - usually, attacker needs more resources to perturb the service (redundancy)
	- the only way to make private systems
	- aligned incentives between peers

// basically all the "3.3 How Does Decentralization Support Privacy?" section

- we are in the beginning of an era which has lots to improve.

- future research:
	- "To build the next generation of decentralized systems, good will, slogans, 
	and demands are not enough. What is needed is a clear research plan."

	Threats:
	- increased attack surface with internal and external adversaries
	- vulnerability to traffic analysis (privacy against the many)
	- degradation in performance
	- lack or wrong incentives for cooperation. Incentives are important against
	  adversaries and selfishness of honest peers
	- scalability (no scale means failure)

	Questions:
	- techniques for providing privacy without perturbing performance and
	  scalability
	- is there any accurate and systematic system for analysing and measuring
	  decentralization?
	- how to incentivise nodes without tokenisation? 
	


### privacy and decentralization

#### quick motivation

Data is power. And access to behavioral and personal data opens doors to 
coercion, censorship and 
forged freedom. There are organizations (governments and corps) that 
have the reasons and the means to collect
massive amounts of personal and behavioral data online, and that the reasons can
be boiled down to maintaining and increasing their power positions, being it
economical, influential or political. This is true nowadays and it will be
even more important in the future. Ok, now that we are in the same page, let's 
talk about how decentralization is the only paradigm that provide us the fabric 
for a free society.

#### the decentralized promise

Decentralization promises high availability, user privacy and censorship
resistance. The first real-world decentralized systems were researched and 
developed as a way to circumvent censorship, with Bittorrent and other 
torrent-based networks using networks of thousands peers and index, store and
retrieve files. 

#### enters privacy 

I argue that without strong user privacy [1] in decentralized systems, the promises 
of a better Internet will not materialize and that will have negative 
consequences for the future of our society. The underlying reason for the 
failure is that without user privacy, it is virtually impossible to run online
services which are censorship resistant, that respect user's freedom of speech 
and privacy and that are robust against targeted and mass surveillance. This
renders the Internet into a coercion tool against freedom.

Decentralization is the only approach that enables confidentiality from third
parties and peers, that can provide anonymity, deniability and covertness (hiding
that a particular user is using a service). In sum, decentralized systems are
the only way to build services that are genuinely private and resistant to
metadata leaks. However, the design and implementation of such systems is not 
trivial and with the current state of art there may be a trade-off between 
privacy, scalability and performance.

[1]
An online private system can be defined by a system which provides 
confidentiality from service providers and other users. It also provides
covertness and deniability, which allow users to use the service without
being...


#### the paradox and challenges

Although only decentralized systems can achieve user privacy, if not properly 
designed and implemented they pose even more privacy and security risks than the
conventional centralized systems. 

#### getting to the solutions

Research and implementation of primitives which allow private communication
between peers in a decentralized network, while considering realistic
assumptions and strong threat models.



Research and implementation of primitives to ensure that participating nodes
have the right incentives to collaborate towards a secure and private network,
while limiting privacy and security damage of high percentage of adversary nodes.

Adopt an privacy-first approach when designing decentralized systems. Otherwise,
why using decentralized systems anyways?




1. intro
	- based on the paper
	- kudos to authors
	- add my perspective and TL;DR

2. the first decentralization movement

3. the cloud took over

4. how about now? 
	- open problems, privacy, censorship, scalability, incentives

5. how to solve this? 
	- advanced cryptography (e.g. zero knowledge)
	- research and development focused on privacy and anonymity
	- oversimplified threat models

6. privacy-first movement

(and that's where hashmatter comes to the picture) ??

