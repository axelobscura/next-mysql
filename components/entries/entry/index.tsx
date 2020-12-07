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
      <div className="flex items-center">
        <Link href={`/entry/${id}`}>
          <a className="font-bold py-2">{title}</a>
        </Link>
        <div className="flex ml-4">
          <ButtonLink
            href={`/entry/edit/${id}?title=${title}&content=${content}`}
            className="pb-3 pt-3 mr-3"
          >
            Editar
          </ButtonLink>
          <Button
            disabled={deleting}
            onClick={deleteEntry}
            className="pb-3 pt-3 mr-3"
          >
            {deleting ? 'Eliminando...' : 'Eliminar'}
          </Button>
        </div>
      </div>
      <p className="pb-3">{content}</p>
      <hr/>
    </div>
  )
}

export default Entry
