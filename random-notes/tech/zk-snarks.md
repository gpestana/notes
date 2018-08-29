## zk-snarks and metadata resistance

- 2 entities in a zk proof: prover and verifier

zero-proof properties:

- **soundness**: prover cannot convince the verifier (with high probability)
  that he knows the solution
- **zero-knowledge**: maintains confidentiality by making it possible to the
  prover to convince the verifier that she has the result without leaking any
information about it
- **interactive** vs **non-interactive**: protocols may be interactive or
  non-interactive.

**Q0:** can we create a zero-proof algorithm that does not require the verifier
to possess a verifying function? e.g. can a verifier verify whether a sudoku
solution is correct, without knowing the sudoku rules?

*Q0* is an important question for case examples when there is the need for the
verifier to verify a claim from a prover which requires confidential information
to the verifier and when the verifier does not possess enough information to
understand whether the verification is correct or not. (application can be,
e.g., decentralized restricted and confidential routing topologies.

def: **decentralised restricted and confidential routing topologies**: p2p
routing topologies in which peers maintain connections only with well known and
trusted peers and must be able to route requests through the network without 
leaking any information about their neighbors, preferably in a performant
fashion.
