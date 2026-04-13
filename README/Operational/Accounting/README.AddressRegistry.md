# DME Address Registry

## Status

Active operational accounting note. Imported from the V1 Address Registry Model and updated to align with the current repo accounting and seam registry surfaces.

## Purpose

- define how addresses are minted for seams, operators, packets, and repo zones
- keep one compact schema that glues the seam registry, operator registry, and repo accounting surface together
- prevent helper code or packet prose from inventing ad-hoc handles that drift away from the operational ledger
- route address updates through a predictable workflow so V1-to-V2 migration stays auditable

This note governs **address formats and lifecycle** only. It does **not** by itself:

- define seam behavior
- authorize packet scope
- change repo placement law
- describe packet lineage history

---

## 1. Address classes

| Address class | Scope | Primary use |
| --- | --- | --- |
| `SeamAddress` | Validators, operators, planes, execution/renderer seams | Links seam registry entries to code paths and governing notes. |
| `OperatorAddress` | Operator implementations and their contracts | Couples operator IDs to floor contracts and packet templates. |
| `PacketTemplateAddress` | Packet templates and archived packet receipts | Keeps packet IDs routable into accounting surfaces. |
| `RepoZoneAddress` | High-level README/dir zones used by repo accounting | Allows the accounting ledger to reference a zone without duplicating placement prose. |
| `HelperAddress` (deferred) | Future SupportRegime helper roles | Declared for completeness; remains inactive until SupportRegime packets resume. |

Every address class shares the same core fields (below) but may add optional class-specific metadata.

---

## 2. Core schema

Each address entry must include at minimum:

```ts
interface AddressEntry {
  address_id: string;            // stable lowercase identifier, e.g. "seam/op-p2"
  address_class: string;         // one of the classes above
  scope: string;                 // repo zone or regime (e.g. "TemporalRegime")
  target_path: string;           // canonical path or code location
  owner_surface: string;         // README or implementation note responsible
  governing_surface: string;     // contract / matrix that constrains the object
  visibility: "internal" | "packet" | "external";
  status: "declared" | "typed" | "mechanized" | "deferred";
  notes?: string;
}
```

Rules:

- `address_id` must remain unique within its class.
- `target_path` uses repo-relative paths; if multiple files share the address, list the root directory.
- `owner_surface` is the README or spec that owns the object, not the raw file.
- `governing_surface` should point at a contract/matrix, not at the same note as `owner_surface` unless that note is both owner and governor.
- `visibility` tells packet authors whether the address may appear in public packet text.

---

## 3. Relationship to existing surfaces

- **Seam Registry** uses `SeamAddress` entries for every row. Each seam entry must list the corresponding `address_id` so packet templates can reference it verbatim.
- **Repo Accounting Surface** references `RepoZoneAddress` whenever it needs to cite a zone or subfolder; this keeps the accounting ledger compact.
- **Operator registry overlay** (imported below) relies on `OperatorAddress` to keep operator handles in sync with the formation notes.
- **Packet templates** should include `PacketTemplateAddress` handles when they describe reusable packet shapes.

---

## 4. Update workflow

1. Propose address changes through a packet (new seam, moved file, renamed operator, etc.).
2. Update the relevant registry surface (`README.SeamRegistry.md`, `README.RepoAccountingSurface.md`, or the operator overlay section) with the new `address_id` and metadata.
3. Update this note if a new address class or lifecycle rule is required.
4. Reference the address in packet templates and helper briefs instead of repeating raw paths.

Do **not** mint addresses ad-hoc inside commits or helper scripts. Anything not captured here and in the registry surfaces is considered unregistered.

---

## 5. Deferred classes

`HelperAddress` and any cross-regime addressing remain declared-only. They must not be used until SupportRegime or multi-regime work resumes.

---

## 6. One-line summary

**The Address Registry defines the shared schema for seam, operator, packet, and zone handles so operational registries can align on the same identifiers without inventing ad-hoc naming.**
