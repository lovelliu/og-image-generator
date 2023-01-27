import type { NextRequest } from 'next/server'
import { ImageResponse } from '@vercel/og'
import { deploymentURL } from '../../libs/env'

export const config = {
  runtime: 'edge',
}

export default function handler(req: NextRequest) {
  try {
    const defaultBackgroundImage = `${deploymentURL}/images/bg-image.png`
    const defaultLogo = `${deploymentURL}/images/avatar.png`
    const defaultAuthor = 'Lovell Liu'
    const defaultExtra = (
      <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5113 5.44965C17.5113 8.13769 15.0884 10.3993 11.9926 10.3993C8.89684 10.3993 6.47392 8.13769 6.47392 5.44965C6.47392 2.7616 8.89684 0.5 11.9926 0.5C15.0884 0.5 17.5113 2.7616 17.5113 5.44965Z" stroke="currentColor"/>
        <path d="M11.5374 14.6283C11.5374 17.3164 9.11446 19.578 6.01869 19.578C2.92292 19.578 0.5 17.3164 0.5 14.6283C0.5 11.9403 2.92292 9.67868 6.01869 9.67868C9.11446 9.67868 11.5374 11.9403 11.5374 14.6283Z" stroke="currentColor"/>
        <path d="M23.5 14.6283C23.5 17.3164 21.077 19.578 17.9813 19.578C14.8855 19.578 12.4626 17.3164 12.4626 14.6283C12.4626 11.9403 14.8855 9.67868 17.9813 9.67868C21.077 9.67868 23.5 11.9403 23.5 14.6283Z" stroke="currentColor"/>
        <path d="M8.06404 24.8171L12.0247 18.2378L15.9854 24.8171H8.06404Z" stroke="currentColor"/>
      </svg>
    )
    const defaultTitle = 'A concise and lightweight blog.'
    const { searchParams } = new URL(req.url)
    // ?title=<title>
    const title = searchParams.get('title')?.slice(0, 100)
    // ?backgroundImage=<backgroundImage>
    const backgroundImage = searchParams.get('backgroundImage')?.slice(0, 200)
    // ?logo=<logo>
    const logo = searchParams.get('logo')?.slice(0, 200)
    // ?author=<author>
    const author = searchParams.get('author')?.slice(0, 100)
    // ?extra=<extra>
    const extra = searchParams.get('extra')?.slice(0, 200)

    return new ImageResponse(
      (
        <div
          tw="
            flex
            flex-col
            items-center
            flex-nowrap
            pt-25
            w-full
            h-full
          "
        >
          <img src={backgroundImage || defaultBackgroundImage} tw="absolute w-[800px]" alt="background" />
          <div
            tw="flex items-center"
          >
            <img src={logo || defaultLogo} width="75" alt="logo" tw="rounded-full" />
            <div
              tw="ml-4 border-l-2 border-l-gray-500 pl-4 pr-1 text-2xl"
            >
                { author || defaultAuthor}
            </div>
            { extra || defaultExtra }
          </div>
          <div
            tw="mt-15 text-3xl"
          >
            {title || defaultTitle}
          </div>
        </div>
      ),
      {
        width: 800,
        height: 400,
      },
    )
  }
  catch (e: any) {
    return new Response('Failed to generate the image', {
      status: 500,
    })
  }
}
