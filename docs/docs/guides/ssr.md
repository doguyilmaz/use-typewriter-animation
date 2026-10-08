---
title: SSR and Next.js
description: Server rendering, hydration and React Server Components.
---

# SSR and Next.js

## Server rendering

On the server, a typewriter renders an empty text and its cursor. Typing starts after hydration.
The first client render matches the server, so hydration never mismatches.

With React 19, the cursor's stylesheet is rendered once as a hoisted `<style>` in `<head>`. With
React 18 it is rendered inline next to each cursor.

## Next.js App Router

The package starts with `'use client'`, so a Server Component can render `<Typewriter>` directly:

```tsx title="app/page.tsx"
import { Typewriter } from 'use-typewriter-animation';

export default function Page() {
  return (
    <main>
      <Typewriter as='h1' sequence={['Rendered on the server', 1000, 'Typed on the client']} />
    </main>
  );
}
```

The hook is a hook: call it from a Client Component.

```tsx title="app/greeting.tsx"
'use client';

import { useEffect } from 'react';
import { useTypewriter } from 'use-typewriter-animation';

export function Greeting({ name }: { name: string }) {
  const { typewriter, elements, cursor } = useTypewriter();

  useEffect(() => {
    typewriter.type(`Welcome back, ${name}.`).start();
  }, [typewriter, name]);

  return (
    <p>
      {elements}
      {cursor}
    </p>
  );
}
```

Both are tested against Next.js 16 with `reactCompiler: true`, in development and production builds.

## Text for search engines

The typed text is not in the server HTML. If the words matter for search or for users without
JavaScript, render them in the markup as well, for example in a visually hidden element as shown in
[Accessibility](./accessibility.md#give-screen-readers-the-full-text).
