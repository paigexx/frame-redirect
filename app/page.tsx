import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
      {label: 'Play Beta', action: 'post_redirect'}
  ],
  image: 'https://frame-redirect.vercel.app/cosmiccowboys.png',
  post_url: 'https://frame-redirect.vercel.app/api/frame',
});

export const metadata: Metadata = {
  title: 'Redirect frame',
  description: 'LFG',
  openGraph: {
    title: 'Redirect frame',
    description: 'LFG',
    images: ['https://frame-redirect.vercel.app/cosmiccowboys.png'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <img src={'/video.png'}/>
    </>
  );
}
