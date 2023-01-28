import type { SubmitHandler } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import queryString from 'query-string'
import Input from '../components/forms/Input'
import Button from '../components/buttons/Button'
import ButtonLink from '../components/links/ButtonLink'
import { deploymentURL } from '../libs/env'
import Select from '../components/forms/Select'

export interface QueryParams<T = string> {
  ogType: T
  theme: T
  border: T
  background: T
  logo: T
  author: T
  extra: T
  title: T
}

export default function Page() {
  const url = `${deploymentURL}/api/og`
  const [link, setLink] = useState(url)
  const [imageLink, setImageLink] = useState(url)
  const methods = useForm<QueryParams>()
  const { handleSubmit, watch } = methods
  const onSubmit: SubmitHandler<QueryParams> = () => {
    setImageLink(link)
  }
  const formData = watch()
  useEffect(() => {
    const queryURL = queryString.stringifyUrl(
      { url, query: { ...formData } },
      { skipEmptyString: true },
    )
    setLink(queryURL)
  }, [formData])
  return (
    <>
      <main>
        <section className="min-h-screen p-10 bg-gray-100">
          <div className="max-w-[68.75rem] mx-auto w-11/12">
            <h1 className="mb-4 text-4xl font-bold">🌟 OG Image Generator</h1>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-10 grid md:grid-cols-[2fr,3fr] gap-8 items-center">
                  <div className="flex flex-col gap-3 md:max-w-sm">
                    <div className="grid grid-cols-[1fr,1fr,1fr] gap-2">
                      <Select id="ogType" label="ogType" helperText="api route" className="w-full">
                        <option value="og">og</option>
                      </Select>
                      <Select id="theme" label="theme" helperText="change the text color" className="w-full" >
                        <option value="light">light</option>
                        <option value="dark">dark</option>
                      </Select>
                      <Select id="border" label="border" className="w-full" >
                        <option value="solid">solid</option>
                        <option value="none">none</option>
                      </Select>
                    </div>
                    <Input label="Background Image" id="backgroundImage" placeholder="Image URL" helperText="default: https://og.lovelliu.me/images/bg-image.png" />
                    <Input label="Logo" id="logo" placeholder="Logo URL" helperText="default: https://og.lovelliu.me/images/avatar.png" />
                    <Input label="Author" id="author" />
                    <Input label="Extra" id="extra" />
                    <Input label="title" id="title" />
                  </div>
                  <div>
                    <img src={imageLink} className="w-full bg-gray-500" width="800" height="400" />
                    <div className="mt-10 flex gap-2">
                      <Button className="w-2/3">Generate</Button>
                      <ButtonLink href={link} className="w-1/3">New Tab</ButtonLink>
                    </div>
                    <p className="mt-2 text-sm font-medium text-gray-600 break-all">{link}</p>
                  </div>
                </div>
              </form>
            </FormProvider>
          </div>
        </section>
      </main>
      <footer className="fixed bottom-2 w-full text-center">
        © 2023 - {new Date().getFullYear() > 2023 ? new Date().getFullYear() : ''} <a
          href="https://lovelliu.me"
          className="font-bold text-gray-800 underline underline-offset-4 decoration-dashed hover:text-purple-500"
        >
          Lovell Liu
        </a>
      </footer>
    </>
  )
}
