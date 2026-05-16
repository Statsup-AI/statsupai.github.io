# Issue Hierarchy Templates (Audience Separation)

**Audience:** Maintainers and issue authors  
**Owner:** @yulinl2  
**Last verified:** 2026-05-16

Use this structure so each audience gets only the details they need.
Public overview: [`all-you-need-to-know.md`](all-you-need-to-know.md)  
Maintainer details: [`maintainer-agent-ops.md`](maintainer-agent-ops.md)

## 1) Parent issue template (high-level roadmap)

Use for project-level coordination and links.

- Objective and expected outcome
- Scope boundaries (in/out)
- Links:
  - Public toolkit page
  - Maintainer/agent ops doc
  - Sub-issues
- Progress checklist (sub-issue rollup)

## 2) Sub-issue template (execution tracks)

Create one sub-issue per track:

- Content/documentation updates
- Infrastructure/CI updates
- Automation/agent workflow updates
- Ongoing docs upkeep/governance

Each sub-issue should include:
- Concrete deliverable
- Files/areas touched
- Validation requirements
- Completion criteria

## 3) Optional wiki usage

Use GitHub Wiki when details are:
- Long-lived operational runbooks
- Too verbose for issue comments
- Frequently referenced by maintainers/agents

Keep issue body concise; link to wiki for depth.

