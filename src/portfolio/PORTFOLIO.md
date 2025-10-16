# Portfolio Projects - Jeremy Eissler

#### Senior Frontend Engineer

[website](https://jeissler.com) | [linkedin](https://www.linkedin.com/in/jeissler/) | [github](https://github.com/jeissler)

---

### Project: Sendlane Email Builders

**Demo:** [Sendlane](https://auth.sendlane.com/login) Product Platform

**Stack:** Vue 2-3, Vuex, Morphdom, MJML, TipTap/ProseMirror, Monaco Editor, BulmaCSS, Webpack, Jest

**Description:** Visual email builders for rich content and plain text

- ![mjml_demo](./screens/mjml_builder.gif)
- ![text_demo](./screens/text_builder.gif)

**My Role:**
I led the [MJML](https://mjml.io/) (MailJet Markup Language) and plain text email builder projects as a main contributor and mentor for MJML and event/state modernization on the team. The legacy builder used jQuery (baked into Vue 2) with hundreds of scattered events that we ported 100% of while enabling the ability to more easily (or at all) add many new features; from more layout and block options to dynamic product data handling, it got major upgrades. I took on most of the bugs, helped others grasp the complexities of state management, and documented how we were using MJML for fast browser rendering.

In short, it was a complex build where we chose to use MJML and custom rendering for key reasons such as long-term maintainability and true-to-inbox display. We used [Morphdom](https://github.com/patrick-steele-idem/morphdom) to manage the many pre/post rendered state updates in the preview, while Vue stood as the backbone for the shell, menus, and other interactions. This was a separate merged build, so it acted as its own app in development and could be code split separately while still having access to the design system and other global resources.

For migrating saved content, I created a completely test-driven workflow, letting us reuse all utilities and custom rendering for new migrations, making it very fast and self-documenting.

**Challenges:**
Migrating content was a big need between updates, and while technically running the renderer as a Node process directly was no problem, it was not at all performant over our millions of records. This was something we knew at the outset and, coupled with the TDD approach, stood up a lightweight Express service to handle it as a sub-process during needed migration runs.

The entire design system was also being reinvented in the process, and so it was important to consider maintenance along the way as we knew we would be tasked with many design and feature updates after initial release. We also ended up needing to support plain text only and so created a separate plain text builder and depended on MJML text fallbacks for rich content.

Controls and complex select states being required inside the preview forced much of the custom rendering, use of Morphdom, and other native API workarounds. We needed the rendering to be fast in the browser without external requests and was very outside any common use case for MJML at the time.

**Outcome:**
The new email builders signaled a pivotal moment in Sendlane's history as the company refined the ideal customer profiles and really started to make waves against major competitors. All of the reasons we chose to use MJML paid off almost immediately with faster rendering, wider client support, more OTB features to explore, and maybe most importantly: drastically reduced developer overhead. The features that were added were so very needed and requested over time everyone was LFG! excited, UI/UX designers cried when it released, and I'll never forget my name on a puzzle piece-shaped company award for my hard-won efforts. For all the challenges, good days, bad days, what it was and what it wasn't: I enjoyed knowing people were hands-on building their businesses with my work every single day.

---

### Project: Sendlane AI Automation Assistant

**Demo:** Sendlane Private Beta

**Stack:** Vue 3, Pinia, Tanstack Query, TailwindCSS, Vite, Vitest

**Description:** LLM-powered assistant for reporting, email, and automation generation on the Sendlane platform

**My Role:**
I led the AI assistant frontend build as a completely greenfield project using a custom Vite setup to output a reusable custom web component. The task was to set up a frontend widget that could be launched anywhere to consume the tooling orchestration layer being done separately in Python. Although I'm not allowed to show this work, I wanted to highlight it because this was a highly performant and well-tested frontend built with modern and future-forward thinking. Because Storybook was not yet supporting the very latest Tailwind v4 at the time I created a simple custom design system manager so we could both keep the changing specs straight and also see the components in action outside of prompting for output. I also had hands-in tuning the model prompts for richer results and R&D for [Node orchestration API options](https://js.langchain.com/docs/introduction/).

**Challenges:**
The main challenge with the frontend was getting a clean and lightweight widget build that had all the power of Vue and Tailwind. It was planned to experiment with vapor mode as it became widely available, although it was already as fast as our third-party mount scripts. Since I was using Shadow DOM for style isolation, I had to consult with Tailwind authors on Discord, and thankfully, they were helpful in narrowing the issues with certain v4 features.

**Outcome:**
While it is in private beta for select customers, this work was cut short as the feature simply was not cohesive with the current infrastructure. We were a very small team, and the biggest hurdle was always the speed of orchestration calls, which I think is typical. The company did the smart thing and instead pivoted to updating the core architecture before planning a full release. For what it's worth, I had a lot of fun researching, building, and testing it.

---

### Project: Open Source Web Audio Tools

**Demo:** [Live](https://web-audio-tools.netlify.app/) | [Repo](https://github.com/jeissler/web-audio-tools)

**Stack:** Vue 3, Pinia, TailwindCSS, TypeScript, Native Audio API, Vite, Vitest

**Description:** A fun project to generate some noise

**My Role:**
I'm a serious audiophile and built this solely as something I wanted for myself and have also run across others annoyed with the disconnected online tools full of ads or worse: having to rely on YouTube. I really [enjoy form sliders](https://react-retirement-calculator.netlify.app/calculator) too as they are the most interactive native element historically so I wanted a robust range slider. I'd used [noUISlider](https://refreshless.com/nouislider/) before and saw also [Preline](https://preline.co/docs/advanced-range-slider.html) using it so I decided to replicate their implementation using Tailwind v4. Mostly I did this for fun, but also did need an accessible and maintained advanced slider for dual controls and vertical orientation. For oscillators I chose to experiment with and explore native audio APIs rather than using something like [Tone.js](https://tonejs.github.io/) which could have implemented most of my feature set in just a few lines.

**Challenges:**
The native audio APIs are not trivial and I had a lot of help putting together especially the worklet for the noise generators. Again I chose a more modern approach at the cost of more overhead, but did this for learning and so it would be capable enough to build out a full synth engine. Also the slider styles were difficult to get correct without the base styles and ended up somewhat messy trying to de-duplicate utility class strings. There is still a bug on first mount I had to do an !important css hack for.

**Outcome:**
I'm happy to have a tool that works great, is simple, accessible, ad-free and open source; there are now and will never be any trackers on it whatsoever.

---

### Project: CLI AI Playground

**Demo:** [Repo](https://github.com/jeissler/cli-playground-langchain)

**Stack:** NodeJS, Langchain, Inquirer, Chalk

**Description:** LLM powered CLI assistant using [Langchain](https://js.langchain.com/docs/introduction/) orchestration + [Langsmith](https://www.langchain.com/langsmith/observability) live tracing

- ![langchain_demo](./screens/langchain_cli.gif)

**My Role:**
I created this tool as a research project to see what Langchain was capable of and to experiment with their JS API as previously I'd only seen it in Python. I added several features mirroring real-world use cases such as message history, multiple users, RAG retrieval, on-the-fly augmentation and live tracing. The final demo runs multiple calls through the orchestration path and is quite slow, but was part of the experiment to see complex live tracing paths, their parameters and cost breakdowns. Part of the latency is also the memory store being used for testing purposes. Langsmith is an incredible service and I appreciate the ease of setup and integration with my tooling. For the CLI tool itself I utilized [Inquirer](https://www.npmjs.com/package/@inquirer/prompts) and [Chalk](https://www.npmjs.com/package/chalk) for simple prompts and styling.

**Challenges:**
While Langchain has a particular way of handling the data graph it's very powerful and becomes clear once you see it in action with live tracing. This wasn't necessarily hard to understand, it just took a bit of getting used to the Langchain way of things. Calling the model multiple times was still slower than expected and part of the need for Langsmith to gain observability into the call tree timing.

**Outcome:**
Ultimately this project stands as a playground for easily testing LLM orchestration flows, different models and expanding on. I had a lot of fun building it as I enjoy cli tools because I've depended on them throughout my career. I'm happy to have found Langchain and interested in the future of orchestration on NodeJS as APIs become more available and fully featured.
