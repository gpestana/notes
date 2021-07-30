---
title: NR2P - Non-repudiation for TLS data sessions and zero knowledge proofs of humanity
tags: research&projects, tls, research
---

# NR2P: Non-repudiation for TLS data sessions and ZKPs of humanity

[![hackmd-github-sync-badge](https://hackmd.io/35kzObpuQH6n4MQ_QtrQ3g/badge)](https://hackmd.io/35kzObpuQH6n4MQ_QtrQ3g)

During the TLS handshake phase, the server and the user agree on a symmetric session key. The session key is used by the TLS Record protocol to authenticate and ensure the integrity of the exchanged payload. The TLS Record protocol defines that the payload data is secured through a HMAC using the TLS session key agreed during the session handshake step. This scheme guarantees authentication (i.e. the received can verify that the payload was sent by a party who knows the session key) and integrity (i.e. the receiver can verify if the payload has been modified in-transit) of the payload data. However, the current TLS Record protocol does not guarantee non-repudiation, i.e. it does not allow a party who's participating in a TLS session to prove to third parties that a certain payload has been exchanged during a TLS session. Since the symmetric keys are agreed between the client and the server during the TLS handshake and the TLS Record protocol relies on the session key to generate HMACs over the payload, any TLS session party can forge arbitrary payloads that _could_ have been exchanged during the TLS session. 

If a client would be able to prove the reception of non-repudiable data session from a server, they could generate forging-proof claims about TLS session data from any server. This guarantee coupled with a zero knowledge proof scheme that allows clients to prove claims over the non-repudiable session data would provide a powerful mechanism for a privacy-preserving humanity proofs for the web. For example, imagine that a user could prove in zero knowledge that they've made a purchase above a certain threshold on Amazon recently. These verifiable claims could be used by third parties as a strong privacy-preserving indicator of humanity of web users.

In this document, we presnet the design of _NR2P_ (**N**on-**R**epudiable **R**ecord **P**rotocol), a [modified TLS Record Protocol for TLS 1.3](https://github.com/gpestana/go/tree/nr2p/src/crypto/tls) that allows users to generate non-repudiable and forging-proof claims about data received from webservers. We implement *NR2P* by modifying [Go's TLS library](https://github.com/golang/go/tree/master/src/crypto/tls), a TLS library widely used on the web. In addition, we explore the bandwidth and performance costs of NR2P compared to the vanilla TLS Record Protocol in TLS 1.3. Lastly, we discuss how servers can provide support for NR2P without requiring the scheme to be included as a standard and outline ideas and future directions for generating ZKPs over the non-repudiable TLS data obtained through NR2P.

## The N2RP scheme

1. **Client Hello**

During the Client Hello stage of the TLS handshake, the user requests the server to use NR2P for the session, if possible. The user signals the server through the extensions list.