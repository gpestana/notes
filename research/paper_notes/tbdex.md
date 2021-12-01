---
title: paper - tbDEX A Liquidity Protocol v0.1
description: paper summary
tags: papers, crypto
---

# tbDEX: A Liquidity Protocol v0.1

https://tbdex.io/whitepaper.pdf

```
Abstract. tbDEX is a protocol for discovering liquidity and exchanging assets (such as
bitcoin, fiat money, or real world goods) when the existence of social trust is an
intractable element of managing transaction risk. The tbDEX protocol facilitates
decentralized networks of exchange between assets by providing a framework for
establishing social trust, utilizing decentralized identity (DID) and verifiable credentials
(VCs) to establish the provenance of identity in the real world. The protocol has no
opinion on anonymity as a feature or consequence of transactions. Instead, it allows
willing counterparties to negotiate and establish the minimum information acceptable
for the exchange. Moreover, it provides the infrastructure necessary to create a
ubiquity of on-ramps and off-ramps directly between the fiat and crypto financial
systems without the need for centralized intermediaries and trust brokers. This makes
crypto assets and decentralized financial services more accessible to everyone.
```

---

**TL;DR**: tbDEX is a protocol that defines how participants interact in a permissionless network to perform on-ramp/off-ramp between crypto and fiat (or other crypto assets). The protocol defines an extensible messaging protocol that wallets (i.e user) use to discover financial institutions and other wallets to transact crypto for fiat and vice versa. It relies on DIDs and verifiable credentials to "communicate" identity and reputation. The protocol is agnostic as to what "reputation" and "trust" means and off loads that to the user. The financial institutions that interact with wallet define their requirements to transact with users. In summary, the tdDEX protocol defines the messaging protocol for participants that want to exchange crypto/fiat pairs.

### Notes

**what?** *tbDEX* is a decentralized protocol based on trust networks discover liquidity and exchanging assets. It uses decentralized identity (DIDs) and verifiable credentials to establish peer identity. It also provides infrastructure to facilitate on-ramp and off-tamp between fiat and cryptocurrencies (i.e. exchange fiat for cryptocurrencies and back) without third parties or centralized exchanges.

- *Trust*: tbDEX expects some degree of trust between peers. It does not rely on atomic swaps as other DEXs. Exchange of value is fundamentally based on governing trust; DIDs encode and display reputation that may be trusted by peers in the exchange.
- Core/fundamental idea: "extensible messaging protocol with the ability to form distributed trust relationship", applied to crypto/fiat exchanges;
- Protocol is agnostic with regards to what trust means; levels of trust required to perform a transaction are defined by the peers.

- Participants:
    - Issuers of verifiable credentials
    - Wallets (user agent)
    - Participating Financial Institution (PFI)

- Competition between PFIs will result in asset liquidity, lower fees and faster transaction times
- Wallet (user) can select the PFI and identity hubs depending on user defined parameters (speed, costs, reputation, etc);
