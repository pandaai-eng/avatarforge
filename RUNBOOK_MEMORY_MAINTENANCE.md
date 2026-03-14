# RUNBOOK_MEMORY_MAINTENANCE.md

## Purpose

This runbook defines how memory should be maintained so the system becomes clearer over time instead of more confidently wrong.

Principles:
- preserve provenance
- prefer annotation over deletion
- promote only stable facts
- separate raw notes from curated memory
- never turn guesses into durable truth

---

## 1. Memory Layers

### A. Daily Memory
Location:
- `memory/YYYY-MM-DD.md`

Use for:
- raw events
- recent context
- short-lived observations
- reminders, notes, outcomes

Characteristics:
- messy is acceptable
- chronology matters
- not all entries are durable truths

### B. Working Memory
Location:
- runbooks, project notes, planning docs

Use for:
- active strategies
- current procedures
- in-progress decisions

Characteristics:
- operational
- changeable
- should be updated when workflows change

### C. Curated Long-Term Memory
Location:
- `MEMORY.md`

Use for:
- durable preferences
- stable identity facts
- repeated patterns worth remembering
- major decisions and lessons

Characteristics:
- concise
- higher-confidence
- curated rather than chronological

---

## 2. Allowed Maintenance Actions

Safe maintenance includes:
- deduplicating repeated facts
- clarifying ambiguous wording
- adding source references when useful
- promoting repeated validated facts from daily memory into curated memory
- moving uncertain facts into a clearly marked review section
- summarizing old repetitive daily notes into a dated report

---

## 3. Disallowed Maintenance Actions

Do not:
- delete important context without trace
- overwrite contradictory evidence with a single convenient story
- promote one-off statements into long-term memory without confidence
- remove failures because they look bad
- silently rewrite memory to fit a new assumption

---

## 4. Promotion Rules

Promote a fact from daily memory to `MEMORY.md` only if at least one is true:
- it has been repeated consistently over time
- it was explicitly stated as a preference or identity fact
- it affected decisions materially
- it is likely to matter in future conversations

Before promotion, check:
- is it stable?
- is it useful later?
- is it specific enough to be actionable?
- does it conflict with existing curated memory?

If conflict exists:
- do not force-merge
- annotate the contradiction
- preserve both versions until resolved

---

## 5. Contradiction Handling

When a contradiction is found:
1. identify both claims
2. locate their sources
3. estimate which is newer and more reliable
4. if uncertain, place in a review section rather than deleting either silently
5. update only when confidence is high

Example contradiction types:
- user name changed or previously recorded wrong
- preference changed over time
- project status outdated

Preferred action:
- annotate change over time, not just final state

---

## 6. Deduplication Rules

Merge duplicate memory entries when they are meaningfully equivalent.

Keep:
- the clearest wording
- the most recent validated detail
- a note of source/date when useful

Do not merge if duplicates hide important nuance.

---

## 7. Nightly Memory Review Procedure

During nightly review:
1. inspect recent `memory/YYYY-MM-DD.md` files
2. identify repeated facts and notable decisions
3. identify contradictions, stale entries, and noise
4. propose promotions to `MEMORY.md`
5. propose quarantine/archive notes when appropriate
6. write a short report of what changed or should change

Nightly review should be quiet when nothing important changed.

---

## 8. Quarantine / Review Section

If uncertain information matters but cannot be resolved, place it in a clearly marked section such as:
- `Needs Review`
- `Conflicting Notes`
- `Pending Confirmation`

This is better than either:
- pretending certainty
- deleting useful but unresolved context

---

## 9. Source Discipline

When useful, include provenance such as:
- file path
- date
- note origin

Example:
- "User prefers to be called Rob" — corrected from earlier workspace note on 2026-03-13.

Use source detail when it helps verify a change, especially for identity, preferences, or decisions.

---

## 10. Memory Quality Checks

A healthy memory system should be:
- useful later
- compact enough to search
- honest about uncertainty
- resistant to duplication
- clear about what is raw vs curated

Warning signs:
- many near-duplicate entries
- stale facts persisting for weeks
- contradictions silently overwritten
- vague statements that cannot guide behavior

---

## 11. Success Standard

Good memory maintenance makes future work:
- faster
- more accurate
- less repetitive
- less likely to hallucinate continuity

The job is not to look tidy. The job is to stay trustworthy.
