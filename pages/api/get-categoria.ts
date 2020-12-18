import { NextApiHandler } from 'next'
import { query } from '../../lib/db'

const handler: NextApiHandler = async (req, res) => {
  const { ref } = req.query
  try {
    if (!ref) {
      return res.status(400).json({ message: '`ref` required' })
    }
    const results = await query(
      `
      SELECT id, nombre, ref
      FROM categorias
      WHERE ref = ?
    `,
      ref
    )

    return res.json(results[0])
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
