# SUPERVISOR_IMPLEMENTATION_PLAN.md - OpenClaw Implementation Plan

## Goal

Translate the autonomous colony idea into a **real OpenClaw operating model** that is:
- production-safe
- auditable
- bounded
- useful on day one

This plan avoids magical self-modification and maps responsibilities onto actual OpenClaw tools and workspace files.

---

## 1. Architecture Mapping

### Core control layer
- **Main session / Supervisor**
  - human-facing
  - final decision point
  - reviews reports and approves risky changes

### Specialist roles (spawned on demand)
Use `sessions_spawn` for isolated specialist runs.

Recommended roles:
- **Audit Agent**
  - reviews recent failures, sessions, docs, and memory drift
- **Memory Engineer**
  - reviews `memory/*.md` and `MEMORY.md` for promotion/dedup/contradictions
- **Prompt Engineer**
  - drafts improved task prompts or operating instructions
- **Debug Engineer**
  - reproduces failures and tests low-risk fixes in isolation
- **Task Orchestrator**
  - optional; mainly a planning role, not a privileged controller

### Important constraint
These are **roles**, not sovereign entities. They do not get standing authority. They are temporary, bounded workers.

---

## 2. File Layout

Recommended files in workspace root:

- `SUPERVISOR.md`
  - the bounded supervisor policy
- `SUPERVISOR_IMPLEMENTATION_PLAN.md`
  - this plan
- `RUNBOOK_INCIDENT_RESPONSE.md`
  - failure classification and recovery steps
- `RUNBOOK_MEMORY_MAINTENANCE.md`
  - how memory promotion/dedup/quarantine should work
- `reports/`
  - audit outputs and periodic summaries
- `memory/YYYY-MM-DD.md`
  - raw daily notes
- `MEMORY.md`
  - curated durable memory

Optional:
- `prompts/`
  - prompt drafts and revisions
- `reports/nightly/`
  - dated nightly audit outputs

---

## 3. Tool Mapping

### Inspection / analysis
- `read`
- `sessions_list`
- `sessions_history`
- `memory_search`
- `memory_get`
- `session_status`

### Execution / diagnostics
- `exec`
- `process`
- `browser` (when web verification matters)
- `web_search` / `web_fetch` (when external verification matters)

### Delegation
- `sessions_spawn`
- `subagents` (status/intervention only, not looped polling)

### Scheduling
- `cron`

### Configuration changes
- `gateway config.schema.lookup`
- `gateway config.patch`
- `gateway config.apply`

Use config-changing tools only with explicit user approval unless the request was already explicit.

---

## 4. Nightly Audit Design

### Schedule
Suggested default: daily at **02:00 Asia/Kuala_Lumpur**.

### Inputs
Nightly audit should review:
- recent memory files
- curated memory
- recent session history if relevant
- reports from prior audits
- known incidents or recurring failures
- stale plans/runbooks

### Outputs
Generate a dated report like:
- `reports/nightly/2026-03-14.md`

Suggested report structure:
1. overall health summary
2. notable events
3. contradictions or drift found
4. memory promotion candidates
5. prompt/process improvement candidates
6. unresolved risks
7. recommended next actions

### Safe autonomous actions during nightly audit
Allowed:
- add notes to daily memory
- create report files
- propose edits
- deduplicate obvious duplicate notes

Not allowed without approval:
- config changes
- service restarts
- mass deletion
- replacing governance files

---

## 5. Memory Repair Model

### Practical memory tiers
#### A. Short-term / daily memory
Location:
- `memory/YYYY-MM-DD.md`

Purpose:
- raw events
- recent context
- transient observations

#### B. Working memory
Location:
- project docs, runbooks, task notes

Purpose:
- active plans
- temporary procedures
- in-progress reasoning distilled into docs

#### C. Long-term memory
Location:
- `MEMORY.md`

Purpose:
- durable preferences
- stable identity facts
- important decisions
- recurring lessons

### Repair actions
Safe repair means:
- dedupe repeated entries
- merge equivalent facts with source references
- quarantine contradictions under a review section
- promote stable repeated facts from daily notes into `MEMORY.md`
- archive stale operational notes into dated reports

### Unsafe repair to avoid
- converting guesses into permanent facts
- deleting embarrassing failures to make history look cleaner
- collapsing nuance from contradictory evidence into one fake certainty

---

## 6. Prompt Optimization Workflow

### Trigger conditions
Run prompt review when:
- a workflow fails repeatedly
- the same instruction causes confusion across sessions
- outputs are too verbose, too vague, or hallucination-prone

### Workflow
1. identify the problematic prompt or instruction
2. collect examples of failure
3. classify issue: ambiguity / conflict / missing guardrail / overload
4. draft improved version
5. test in an isolated session
6. record before/after rationale
7. seek approval if the prompt is governance-critical

### Golden rule
Prompt optimization is a **change-management process**, not a secret rewrite ritual.

---

## 7. Hallucination Detection Workflow

### Signals
- answer cites tools never used
- answer conflicts with local docs
- answer conflicts with memory or known decisions
- answer uses strong certainty without evidence

### Response
1. mark the claim as needing verification
2. verify against local docs first
3. use tool output or web verification if needed
4. revise answer with explicit confidence level
5. record recurring hallucination pattern if it reveals a prompt/process issue

---

## 8. Incident Response Workflow

### Failure taxonomy
Classify incidents as:
- logic error
- tool misuse
- provider/API failure
- runtime/environment issue
- memory inconsistency
- prompt ambiguity
- unknown

### Standard response
1. capture exact failure
2. identify blast radius
3. attempt lowest-risk reversible fix
4. test in isolation
5. document outcome
6. escalate if persistent or risky

### Escalate immediately when
- security or credentials may be involved
- external messaging could be affected
- config changes are likely required
- repeated failures imply deeper corruption or drift

---

## 9. Suggested Cron Jobs

These are **recommended jobs**, not yet applied.

### A. Nightly supervisor audit
- **Time:** 02:00 daily
- **Purpose:** generate health + memory hygiene report
- **Session target:** isolated
- **Output:** announce summary or write report file

Suggested payload theme:
- inspect recent notes and system state
- generate concise report
- suggest low-risk maintenance only

### B. Morning summary scan
- **Time:** 09:00 daily
- **Purpose:** summarize anything important found overnight
- **Session target:** isolated or main-systemEvent depending on preference

### C. Weekly maintenance review
- **Time:** Sunday 14:00
- **Purpose:** review stale docs, repeated failures, and possible process improvements

Keep cron count small. Fewer high-signal jobs beat a swarm of noisy automation.

---

## 10. Example Role Prompts for Spawned Sessions

### Audit Agent
"Review recent workspace activity, reports, memory notes, and any recent failures. Produce a concise audit with evidence, risks, and low-risk next actions. Do not modify config or governance files."

### Memory Engineer
"Review recent daily memory and curated memory. Identify duplicates, contradictions, and stable facts worth promotion. Prefer quarantine/annotation over deletion. Produce proposed edits with rationale."

### Prompt Engineer
"Review a failing workflow and the instructions driving it. Identify ambiguity, conflicts, missing guardrails, or verbosity problems. Draft a safer clearer prompt and explain expected improvement."

### Debug Engineer
"Reproduce the reported failure in isolation, classify the issue, and test the least invasive fix first. Report evidence, fix attempt, and remaining uncertainty."

---

## 11. Rollout Plan

### Phase 1 - Documentation only
Create and review:
- `SUPERVISOR.md`
- runbooks
- report directories

### Phase 2 - Manual operation
Use the supervisor pattern manually for a few days:
- nightly audit on request or ad hoc
- isolated spawned specialist sessions for debugging/review
- memory promotion with explicit review

### Phase 3 - Limited automation
Add one cron job:
- nightly audit only

Watch for:
- noise
- false positives
- over-reporting
- wasted tokens

### Phase 4 - Mature automation
Only after good signal quality:
- add weekly maintenance review
- optionally add morning summary
- refine prompts and report templates

---

## 12. What Not to Automate Early

Do not automate early:
- gateway config mutation
- self-updates
- service restarts
- mass memory rewrites
- agent replacement logic
- aggressive "evolution scoring"

Those sound smart in a manifesto and behave stupidly in production.

---

## 13. Recommended Next Steps

1. Review and approve `SUPERVISOR.md`
2. Create the two runbooks:
   - `RUNBOOK_INCIDENT_RESPONSE.md`
   - `RUNBOOK_MEMORY_MAINTENANCE.md`
3. Decide whether you want the nightly audit cron job created
4. Start with a single nightly report before adding more automation

---

## 14. Short Version

The safe OpenClaw version of your idea is:
- one bounded supervisor
- temporary specialist sessions
- conservative memory maintenance
- audit-first prompt improvement
- cron for reporting, not empire-building

That gets you most of the upside without creating an unstable self-editing colony.
