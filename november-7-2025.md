# Letter from the Editor
Issue #1, *November 7, 2025*

## “Zenon is dead.”

I don’t blame anyone for thinking that. It’s been years since we’ve had a proper protocol upgrade. Yet earlier this year, when HyperCore One discovered a critical vulnerability, we were able to rally the community and deploy a patch. Fortunately, the network survived.

From my perspective, the patch could easily have gone the other way and killed the network. It showed the fragility of our codebase but also the resilience of our community. *So why are we still here?* There must be something we believe is worth building.

Being truly decentralized has been both our biggest challenge and our biggest strength. Many networks have a backing company or a foundation—sometimes a so-called “DAO”. Yet they have employees and a chain of command. Changes may only require a handful of people to understand and review.

When there is conflict within these organizations, their networks often fail. What they gain in leadership and early speed, they lose in story and mythology.

For better or worse, the current reality is that HyperCore One is the de facto maintainer of the network.

This was never my goal. Our position has always been that we are not the official maintainers—just a group of contributors who enjoy working together. We’ve even inconvenienced ourselves procedurally to keep that distinction clear.

HyperCore One’s vision is a principled community of builders who demand technical rigor. We understand that is only a slice of the larger Zenon community. If you have a different vision, we encourage you to form your own groups and collectives.

Nonetheless, the efforts of HyperCore One have been critical to keeping the network alive.

A few examples:

- Bridge launch: HC1 led testing and ops support
- Bridge revivals: coordinated by HC1
- Most new pillar launches: assisted by HC1
- Double-spend vulnerability: discovered and patched by HC1

And basically none of this work has been rewarded through AZ. HyperCore One has no treasury or backing organization. We’re community members who—out of some mix of pride and belief—refuse to let the network die.

## Our work this year

We need your support—and first, your understanding. This year has been a painful process of bootstrapping a community software development pipeline from the ground up.

With AI and “vibe-coding,” proof-of-concepts are easier than ever. **The hard part is making software maintainable and production-ready.** For our project, that means a critical mass of people who understand a contribution, have use cases for it, and will build on top of it.

Maintainability is not glamorous. It’s testing, documentation, and working closely with other contributors to remove confusion. The costs of unmaintainable software usually show up at the worst moments, while maintainable software is often taken for granted.

The current situation is that we can develop features faster than we can verify and maintain them. For example, my PTLC implementation and Vilkris’s Dynamic Plasma implementation are shippable once the community has confidence.

The challenge remains in building the confidence to ship in a systematic way. So what do we mean by a software development pipeline?

In order to foster an ecosystem which balances innovation and reliability, new features should start on testnets, move to extension chains, and then, if they earn it, reach mainnet.

To support that, HC1 created the HyperQube framework built on NoM’s architecture. We launched hyperqube_z as our first extension network. To keep costs down and avoid fears of replacing mainnet, we used custom blocktimes and restricted certain contracts.

We had a successful launch, but it required more operational hand-holding than what is sustainable. Every update would require weeks of manual support for community members while hyperqube_z is intended to be rapidly updated as fast as the speed of development.

To address this, we shifted our focus to deployment. We improved our scripts and prototyped a Nostr-based qube-manager to pull in updates automatically.

Around this time, we had to step away to address the critical vulnerability fix.

While the qube-manager worked as a concept, the challenge remained in making it production-ready and maintainable. Developing maintainable software requires the right incentives.

Creating incentives has been a continuing challenge. Accelerator-Z exists on-chain, but at this stage we need faster off-chain coordination.

To improve this, HyperCore One began work on our off-chain Incubator for quick proposals and feedback before they go to Accelerator-Z. The Incubator is designed to foster collaboration and track rewards for multiple contributors that can be paid together and fairly.

To round it off, we are now kicking off our newsletter to ensure that the community can easily stay up to date with what’s happening in the HC1 SIGs.

Each of these projects started organically to solve the next requirement for shipping software. My hope is that the community can start to see how they will all work together. What remains is finishing the pieces and tying them together end-to-end.

**We’re roughly 75% of the way to the first iteration of this flow.**

## So how can you help?

In order to accelerate the pace of development, we need to get funds flowing through Accelerator-Z again.

But we need a new approach from what hasn’t worked in the past. We need the community to demand maintainability. As we prepare to launch the Incubator, qube-manager, and reboot hyperqube_z, we need your good-faith engagement and honest feedback.

We’ll try to post updates to this newsletter regularly. Before publishing this newsletter, we post a draft to the HC1 Community SIG so that we can answer any questions. To get bleeding edge updates, we encourage community members to directly join our SIGs.

Personally speaking, working on this project has never been easy but always worthwhile. In upcoming newsletters, I’m excited to share updates such as our updated roadmap, a vulnerability postmortem, and a wider vision for our network.

-George

## Community SIG Feedback

A community member wanted to know how they could demand maintainability. I'll address this further in the next issue, but I encourage everyone to discuss what this means to them. Ask yourself what you would need to see before confidently shipping our next release and announcing it to the world.
