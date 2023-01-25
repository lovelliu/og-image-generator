import type { NextRequest } from 'next/server'
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    // ?title=<title>
    const title = searchParams.get('title')?.slice(0, 100)

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'nowrap',
            backgroundImage: 'url(https://my-picture-bed-1304169582.cos.ap-nanjing.myqcloud.com/uPic/bg.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '-5% 93%',
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
              color: 'white',
            }}
          >
            <svg width="120" height="140" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5113 5.44965C17.5113 8.13769 15.0884 10.3993 11.9926 10.3993C8.89684 10.3993 6.47392 8.13769 6.47392 5.44965C6.47392 2.7616 8.89684 0.5 11.9926 0.5C15.0884 0.5 17.5113 2.7616 17.5113 5.44965Z" stroke="currentColor"/>
              <path d="M11.5374 14.6283C11.5374 17.3164 9.11446 19.578 6.01869 19.578C2.92292 19.578 0.5 17.3164 0.5 14.6283C0.5 11.9403 2.92292 9.67868 6.01869 9.67868C9.11446 9.67868 11.5374 11.9403 11.5374 14.6283Z" stroke="currentColor"/>
              <path d="M23.5 14.6283C23.5 17.3164 21.077 19.578 17.9813 19.578C14.8855 19.578 12.4626 17.3164 12.4626 14.6283C12.4626 11.9403 14.8855 9.67868 17.9813 9.67868C21.077 9.67868 23.5 11.9403 23.5 14.6283Z" stroke="currentColor"/>
              <path d="M8.06404 24.8171L12.0247 18.2378L15.9854 24.8171H8.06404Z" stroke="currentColor"/>
            </svg>
          </div>
          <div
            style={{
              marginTop: 30,
              fontSize: 30,
              color: 'white',
            }}
          >
            Lovell Liu
          </div>
          <div
            style={{
              marginTop: 30,
              padding: '0 120px',
              fontSize: 60,
              lineHeight: 1.4,
              letterSpacing: '-0.025em',
              fontStyle: 'normal',
              color: 'white',
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  }
  catch (e: any) {
    return new Response('Failed to generate the image', {
      status: 500,
    })
  }
}
