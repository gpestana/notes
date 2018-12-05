## Decentralization and Privacy

by Carmela Troncoso, Marios Isaakidis, George Danezis, and Harry Halpin

---

"To build the next generation of decentralized systems, good will, slogans, and demands are not enough. What is needed is a clear research plan." And then implement it.

**DHTs and privacy**"Although efficient and decentralized, DHTs do not by themselves provide strong security, privacy and anonymity properties". DHTs are not privacy preserving by default. Mechanisms to ensure that are hard to design and there are trade-offs between privacy and work (e.g. ensuring node security, etc).

**incentives** "Lack of relationships of authority imply that nodes must be willing to provide services to each other on a different basis. Designers of decentralized systems must carefully engineer such incentives, to ensure that natural (non adversarial) selfishness does not lead to dysfunction. Monetary incentives, reputation, and reciprocity can be the basis of such incentives – but off the shelf such mechanisms are often central points of failure"

**decentralized systems and privacy**: decentralized networks make it harder for local adversaries to enumerate the network, behavior and relation between agents. Naive decentralized networks, though, can harm privacy because of the distribution of resources and authorities in the network. Decentralized networks may expose private data to more parties that in centralized systems. For example, network traffic analysis may be easier to perform in decentralized systems, since the traffic is distributed while routing and transport is delegated to untrusted nodes.

Decentralized networks alone are not privacy preserving. Protocol design, advanced cryptography and traffic analysis resistance may help, with associated costs. 

**what's centralized in decentralized systems**: Centralized directories such as Tor directory authorities - which is becoming a bottleneck to the network; Path selection is often centralized; Trust establishment; Authentication;

**Authentication** certificate authorities are often not decentralized. Authentication is good to prevent sybil attacks. Possible solutions are threshold cryptography and zero knowledge proofs. 

"Many decentralized systems implicitly rely on centralized components to hold network information for efficient routing or for establishing trust and defending against Sybil attacks.

**Interdisciplinarity**. "Reviewing the literature reveals that to build good secure privacy-preserving decentralized systems, one needs: – Expertise in building distributed systems, as decentralized systems are by definition distributed; – Knowledge of modern cryptography, as complex cryptographic protocols are necessary to achieve simultaneously privacy, integrity and availability. – An understanding of mechanism design, game theory and sociology to motivate cooperation amongst possibly selfish actors.";

"The ultimate bet of decentralized systems is still open: is being vulnerable to a (possibly random) subset of decentralized authorities better than being vulnerable to a single centralized authority?"


## References

**Secure DHTs**

- Practical robust communication in DHTs tolerating a Byzantine adversary: by 
- Sybil-resistant dht routing
- Threshold-based identity recovery for privacy enhanced applications.

**Privacy attacks**

- Hashing it out in public: common failure modes of DHT-based anonymity schemes

**Decentralize Tor directory authorities**

- Scalable onion routing with Torsk
- PIR-Tor: Scalable anonymous communication using private information retrieval

## Questions:

- You mention that "advanced cryptography" can help

- Do you have any pointers for research and development being done on decentralized authentication using decentralized PKIs, threshold crypto or zk-proofs?

- What are the solutions being considered for decentralizing Tor's directory authorities ?
