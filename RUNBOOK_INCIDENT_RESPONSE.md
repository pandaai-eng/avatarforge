# RUNBOOK_INCIDENT_RESPONSE.md

## Purpose

This runbook defines how the workspace handles failures without panic, fantasy, or silent self-modification.

Goal:
- capture what failed
- classify it correctly
- try the safest reversible fix first
- document what happened
- escalate when risk is non-trivial

---

## 1. Incident Severity

### SEV-1 Critical
Use when:
- core workflow is down
- repeated failures block important work
- corruption/security risk is suspected
- gateway/config/runtime instability may impact normal operation

Response:
- pause nonessential work
- gather evidence first
- do not make speculative high-impact changes
- escalate to user quickly

### SEV-2 Major
Use when:
- a workflow fails repeatedly
- a tool/provider is unreliable
- a prompt/process issue causes meaningful degradation

Response:
- isolate and diagnose
- test minimal fix
- document before/after
- escalate if recurrence continues

### SEV-3 Minor
Use when:
- one-off tool misuse
- small prompt ambiguity
- recoverable transient issue

Response:
- correct locally
- note pattern if recurring

---

## 2. Failure Taxonomy

Classify incidents as one primary category:

### A. Logic Error
Symptoms:
- wrong steps
- bad assumptions
- incorrect branching

Typical fixes:
- improve task breakdown
- tighten instructions
- add validation checkpoints

### B. Tool Misuse
Symptoms:
- wrong tool selected
- malformed parameters
- misuse of channel/tool semantics

Typical fixes:
- correct tool selection
- add tool usage note to runbook/prompt

### C. Provider / API Failure
Symptoms:
- rate limits
- upstream errors
- timeouts
- temporary remote failures

Typical fixes:
- retry with backoff
- reduce request volume
- switch to lower-risk path if available

### D. Runtime / Environment Issue
Symptoms:
- missing files
- missing permissions
- local command failures
- broken assumptions about environment

Typical fixes:
- verify paths and state
- restore known-good assumptions
- escalate if config or permissions must change

### E. Memory Inconsistency
Symptoms:
- contradiction between notes and curated memory
- duplicated or stale facts
- wrong person/project preference in memory

Typical fixes:
- annotate contradiction
- quarantine uncertain fact
- promote validated source-backed fact

### F. Prompt / Instruction Ambiguity
Symptoms:
- repeated confusion
- overlong prompts causing drift
- conflicting instructions

Typical fixes:
- simplify wording
- separate policy from workflow
- add explicit decision rules

### G. Unknown
Use when evidence is insufficient.

Typical response:
- gather more evidence
- do not guess loudly

---

## 3. Standard Incident Workflow

### Step 1 - Capture the exact failure
Record:
- task being attempted
- observable symptom
- exact error text if available
- time/context
- tools involved

### Step 2 - Estimate blast radius
Ask:
- is this isolated or systemic?
- does it affect only one task, one tool, or many workflows?
- could this involve memory, config, or security?

### Step 3 - Choose the lowest-risk reversible action
Prefer:
- retry with corrected input
- run isolated diagnosis
- verify docs/state
- update internal note/runbook

Avoid early:
- config edits
- restarts
- deletion
- broad rewrites

### Step 4 - Test in isolation when feasible
Use isolated sessions for:
- reproducing the issue
- testing revised prompts
- checking whether the bug is deterministic

### Step 5 - Document result
Record:
- root cause (or best current hypothesis)
- action taken
- outcome
- confidence level
- whether follow-up is needed

### Step 6 - Escalate if required
Escalate when:
- the fix is risky
- evidence conflicts
- security/config changes may be required
- failures continue after minimal interventions

---

## 4. Safe Fix Ordering

Try in this order when applicable:
1. verify assumptions
2. correct obvious misuse
3. simplify the prompt/instructions
4. retry with bounded scope
5. test in isolation
6. document recurring pattern
7. ask for approval before any high-impact change

---

## 5. Recovery Mode

Enter recovery mode conceptually when:
- 3 or more consecutive failures occur in one workflow
- instability affects multiple related tasks
- memory contradictions block reliable operation
- tool/provider failures create cascading uncertainty

Recovery mode procedure:
1. pause nonessential actions
2. gather evidence
3. identify last known-good state
4. test minimal fix in isolation
5. restore normal operation gradually
6. produce short summary for user if important

Recovery mode is not permission to improvise wildly.

---

## 6. Reporting Template

Use this structure for significant incidents:

### Incident
- **Severity:**
- **Category:**
- **Symptom:**
- **Observed at:**

### Evidence
- tool outputs / error traces / conflicting files

### Likely Cause
- concise hypothesis with confidence

### Action Taken
- what was tried

### Outcome
- fixed / partially fixed / unresolved

### Next Safest Step
- what should happen next

---

## 7. Anti-Patterns

Do not:
- declare root cause without evidence
- erase history to make the system look healthy
- call speculative changes “self-healing”
- escalate every minor glitch into drama
- keep retrying the same failing approach in a loop

---

## 8. Success Standard

A good incident response is:
- calm
- evidence-based
- minimally invasive
- well documented
- honest about uncertainty
