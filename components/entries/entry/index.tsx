import { useState } from 'react'
import Link from 'next/link'
import { mutate } from 'swr'

import ButtonLink from '@/components/button-link'
import Button from '@/components/button'

function Entry({ id, title, content }) {
  const [deleting, setDeleting] = useState(false)

  async function deleteEntry() {
    setDeleting(true)
    let res = await fetch(`/api/delete-entry?id=${id}`, { method: 'DELETE' })
    let json = await res.json()
    if (!res.ok) throw Error(json.message)
    mutate('/api/get-entries')
    setDeleting(false)
  }
  
  return (
    <div className="container pb-3">
      <div className="py-2 px-5 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Woman's Face" />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              <Link href={`/entry/${id}`}>
                <a className="font-bold py-2">{title}</a>
              </Link>
            </p>
            <p className="text-gray-500 font-medium">
            {content}
            </p>
          </div>
          <ButtonLink
            href={`/entry/edit/${id}?title=${title}&content=${content}`}
            className="px-5 py-0 text-sm text-purple-600 font-semibold hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            Editar
          </ButtonLink>
          <Button
            disabled={deleting}
            onClick={deleteEntry}
            className="px-5 py-0 text-sm text-purple-600 font-semibold bg-gray-100 text-dark hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            {deleting ? 'Eliminando...' : 'Eliminar'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Entry
