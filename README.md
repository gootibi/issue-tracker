This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# prisma: npm i prisma@5.3.1
#         npx prisma init
# Create schema, then go terminal:
#         npx prisma format
#         npx prisma migrate dev

# Request data validation use Zod
# npm i zod@3.22.2

# Set up radix-ui: https://www.radix-ui.com/themes/docs/overview/getting-started
# npm install @radix-ui/themes
# layout.tsx (root):
# import '@radix-ui/themes/styles.css';
# import { Theme } from '@radix-ui/themes';
# export default function () {
#  return (
#    <html>
#      <body>
#        <Theme>
#          <MyApp />
#        </Theme>
#      </body>
#    </html>
#  );
# }

# radix-ui typography: https://www.radix-ui.com/themes/docs/theme/typography

# React SimpleMDE (EasyMDE) Markdown Editor use. Google search: react-simplemde-editr
# https://www.npmjs.com/package/react-simplemde-editor#install
# Install: npm install --save react-simplemde-editor easymde
# Use: import SimpleMDE from "react-simplemde-editor";
#      import "easymde/dist/easymde.min.css";
#      <SimpleMDE />;

# https://react-hook-form.com/get-started - Easy to handle form submission
# npm install react-hook-form@7.46.1

# axios install to fetch
# npm i axios@1.5.0

# Validation: npm i @hookform/resolvers@3.3.1 // Integrate with various data validation libraries like zod

# Tailwind element loading spinners: https://tw-elements.com/docs/standard/components/spinners/
# Add spining the submit button and disable the submit button when onclick

# Delay - simulate the slow server

# Loading Skeleton: npm i react-loading-skeleton@3.3.1 - https://www.npmjs.com/package/react-loading-skeleton

# React Markdown: npm i react-markdown@8.0.4 
#    - Help with the text edition and right rendering - /app/issues/[id]/page.tsx import: import ReactMarkdown from 'react-markdown' and give it.
# And go google and search -> "tailwind typography" -> Introducing Tailwind CSS Typography https://tailwindcss.com/docs/plugins#typography - Install: npm install -D @tailwindcss/typography
# Import in tailwind.config.ts file - in plugins array: require('@tailwindcss/typography')
# And give it element className="prose".

# Radix UI: Breakpoints - Built-in breakpoints allow you to easily build adaptive layouts.  
# https://www.radix-ui.com/themes/docs/theme/breakpoints:
#       - initial - Phones (portrait) - 0px
#       - xs - Phones (landscape) - 520px ...

# Radix UI: Icons: https://www.radix-ui.com/icons
#           install: npm i @radix-ui/react-icons
#           page.tsx: import { FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons'

Caching: in google search: "nextjs route segment config" -> https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
    Page build static - import client dynamic
        Server cache refreshing:
                // manual refresh the page -> the page data refresh:
            - export const dynamic = "force-dynamic"   
                // false | 0 | number -> Example: Every 30 seconds refresh the page
            - export const revalidate = 30
                ...

        Client side ceche refreshing:
            In IssueForm.tsx:
            - router.refresh() // refresh the page automatically
