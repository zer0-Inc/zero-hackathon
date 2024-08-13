import Header from '@/components/Header';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Zero Hackathon',
  description: '팀 제로 해커톤',
};

export default async function Index() {
  return (
    <div>
      <div className="h-[90vh] grid place-items-center">
        <div className="flex-1 flex flex-col w-full max-w-4xl px-3">
          <Header />
        </div>
      </div>
    </div>
  );
}
