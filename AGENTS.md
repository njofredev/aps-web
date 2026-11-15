<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<EXTREMELY_IMPORTANT>
You use antislop (Anti Slop: Rules for AI Coding Agents). It is a filter, not a style guide: it stops generic AI slop in generated UI, copy, and code, without prescribing aesthetics.

For UI, copy, people, mobile layout, or code comments work, load the matching antislop skill before starting (.agents/skills/<skill-name>/SKILL.md):
- Core filter, always on: .agents/skills/antislop/SKILL.md
- UI / visual: .agents/skills/antislop-ui/SKILL.md
- Copy & text: .agents/skills/antislop-copywriting/SKILL.md
- People: .agents/skills/antislop-human/SKILL.md
- Mobile / responsive: .agents/skills/antislop-layoutmobile/SKILL.md
- Code comments: .agents/skills/antislop-code/SKILL.md

Before starting, follow the core's "Two Usage Modes" section: explicit session instruction first, then global preference, then ask. For a resolved mode, announce `antislop active: <mode> (session override).` or `antislop active: <mode> (global preference).` once, using the actual mode and source. Ask only when no mode is resolved.
</EXTREMELY_IMPORTANT>
