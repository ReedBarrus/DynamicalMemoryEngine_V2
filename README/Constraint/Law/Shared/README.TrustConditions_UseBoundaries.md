Trust Conditions and Use Boundaries
Status

This note defines the minimum trust-condition grammar for DME-facing tools and surfaces.

Its purpose is to ensure that a tool is not treated as trustworthy merely because it is useful, impressive, or often correct.

A DME surface becomes practically usable only when its conditions of use are explicit.

This note governs:

purpose clarity
input conditions
output claim boundaries
downgrade and failure posture
audit evidence requirements

It does not govern:

implementation details
repo placement
operator-local mechanics by themselves
canon or truth admission
business packaging by itself
1. Core thesis

People can rely on a tool only to the extent that they can define how to use it.

Trust is therefore not a single property.

Trust is a bounded operational posture established under declared conditions.

A tool is not trustworthy in general.

A tool is trustworthy:

for a specific purpose
under specific input conditions
with specific output claims
within specific failure boundaries
with specific audit evidence available
2. Trust is conditional, not absolute

DME does not ask for blind trust.

DME should expose the conditions under which reliance is:

warranted
limited
downgraded
or withdrawn

This means capability alone is insufficient.

Boundary legibility is required.

A highly capable tool with vague use conditions is unsafe to rely on.

A narrower tool with explicit conditions may be much more trustworthy in practice.

3. Minimum condition grammar

Every contractable DME surface should declare five fields.

3.1 Purpose

What is this surface for?

This must state the narrow intended use.

It must not rely on aspiration, implication, or adjacent capability.

Example questions:

what job does this perform?
what bounded need does it serve?
what is it explicitly not trying to do?
3.2 Input conditions

What inputs are allowed, expected, or stable?

This must state:

admitted input class
expected structure
required provenance
known unstable or unsupported inputs
conditions that block or downgrade use

Example questions:

what may enter?
what may not enter?
what source posture is required?
what makes the input invalid or weak?
3.3 Output claim

What exactly is being claimed?

This must state the strongest lawful claim of the surface and no more.

Example claim classes may include:

structural transformation receipt
bounded comparison result
memory routing decision
replayable invocation record
derived support object

It must also state what is not being claimed.

Example non-claims:

not truth
not canon
not semantic certainty
not unrestricted identity proof
not autonomous decision authority
3.4 Failure and downgrade conditions

Under what conditions should reliance weaken, stop, or be withdrawn?

This must state:

known failure classes
ambiguity triggers
variance thresholds
provenance breaks
unsupported state conditions
when the surface should be treated as advisory only
when it should block entirely

A trustworthy tool is not one that never fails.

A trustworthy tool is one that exposes when reliance should decrease.

3.5 Audit evidence

What evidence is left behind to justify use and review?

This must state the receipts or traces required to inspect the surface honestly.

Examples include:

source references
transform receipts
invariant checks
replay metadata
retained state decisions
reconstruction path
explicit non-claims

If a surface leaves no usable evidence, trust cannot be governed well.

4. Four trust layers

Trust should be understood in layers rather than as one global property.

4.1 Operational trust

Can I tell what happened?

This includes:

provenance
receipts
replayability
declared state transitions
4.2 Use trust

Do I know when this tool is appropriate?

This includes:

scope boundaries
allowed tasks
disallowed tasks
stable input classes
unstable input classes
4.3 Outcome trust

Did the result stay within expected bounds?

This includes:

invariant checks
bounded variance
drift detection
thresholded acceptance posture
4.4 Governance trust

Can misuse, ambiguity, or overreach be detected?

This includes:

memory routing clarity
downgrade conditions
audit trails
declared non-claims
reconstruction paths
5. Surface admission rule

No DME-facing surface should be treated as contractable until it can answer all five condition fields:

purpose
input conditions
output claim
failure / downgrade conditions
audit evidence

If a surface cannot answer these, it may still be exploratory, but it is not yet trustworthy for practical reliance.

6. Design implication

The main design problem is not only to increase capability.

The main design problem is to define the conditions under which capability can be used safely and intelligibly.

This means DME should prefer:

narrower surfaces with explicit conditions
bounded claims over expansive claims
visible downgrade over hidden brittleness
inspectable evidence over convenience
declared non-claims over implied authority
7. One-line rule

No surface without conditions of use.

8. One-line summary

A DME surface becomes practically trustworthy only when its purpose, input conditions, output claims, failure and downgrade conditions, and audit evidence are explicit enough for a user to know when reliance is warranted, limited, or withdrawn.