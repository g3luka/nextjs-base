import type { NextApiRequest, NextApiResponse } from 'next'

interface IResponseData {
  message?: string
  revalidated?: boolean,
  data?: any
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Partial<IResponseData>>) {
  console.log(req.query);
  if (req.query.token !== process.env.API_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  const path = req.query?.path as string

  if (! path) {
    return res.status(500).json({ message: 'Não foi informada a página que deseja invalidar' })
  }

  try {
    await res.unstable_revalidate(path)
    return res.json({ revalidated: true, data: { path } })
  } catch (error) {
    return res.status(500).send({ message: 'Error revalidating' })
  }
}
