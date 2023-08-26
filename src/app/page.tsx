import Image from 'next/image'
import { createClient } from 'microcms-js-sdk';

// Initialize Client SDK.
const client = createClient({
  serviceDomain: "nextjs-fetch-url",
  apiKey: process.env.MICROCMS_API_KEY ?? '',
  // apiKey: 'ImOf6Ku6k3T9mQM99pgAwUrb3iOkIjnF9KYk', // default
  // apiKey: 'b0eTsI88vVlKtS86W8XjPf1h0qaH5DNeL2yD', // draft
});

export default async function Home() {
  const { text } = await client.getObject({
    endpoint: 'text',
    customRequestInit: {
      next: {
        tags: ['text'],
      },
    },
  });

  return (
    <h1>{text}</h1>
  )
}
